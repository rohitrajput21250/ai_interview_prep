import { spawn } from 'child_process';
import path from 'path';

const rootDir = path.resolve();
const serverDir = path.join(rootDir, 'server');

async function isBackendRunning() {
  try {
    const response = await fetch('http://localhost:5000/health', { signal: AbortSignal.timeout(1000) });
    return response.ok;
  } catch {
    return false;
  }
}

const backendAlreadyRunning = await isBackendRunning();

const serverProcess = backendAlreadyRunning
  ? null
  : spawn('npm run dev:server', {
    cwd: rootDir,
    stdio: 'inherit',
    shell: true,
  });

const clientProcess = spawn('npm run dev:client', {
  cwd: rootDir,
  stdio: 'inherit',
  shell: true,
});

const shutdown = (signal) => {
  if (serverProcess && !serverProcess.killed) {
    serverProcess.kill(signal);
  }
  if (!clientProcess.killed) {
    clientProcess.kill(signal);
  }
};

if (serverProcess) {
  serverProcess.on('exit', (code, signal) => {
    if (code !== 0 && signal !== 'SIGTERM') {
      clientProcess.kill();
      process.exit(code ?? 1);
    }
  });
}

clientProcess.on('exit', (code, signal) => {
  if (code !== 0 && signal !== 'SIGTERM') {
    if (serverProcess) {
      serverProcess.kill();
    }
    process.exit(code ?? 1);
  }
});

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
