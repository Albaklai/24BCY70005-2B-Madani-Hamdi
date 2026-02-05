const { exec, spawn } = require('child_process');
const open = require('open');
const path = require('path');

console.log('🚀 Starting development server...');

// Start the Next.js dev server
const devServer = spawn('pnpm', ['dev'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true
});

// Wait 3 seconds for server to start, then open Firefox
setTimeout(() => {
  console.log('🌐 Opening Firefox...');
  open('http://localhost:3000', { app: 'firefox' }).catch(err => {
    console.log('Could not open Firefox automatically. Open http://localhost:3000 manually in your browser.');
  });
}, 3000);

// Handle server shutdown
devServer.on('close', (code) => {
  console.log(`Dev server exited with code ${code}`);
  process.exit(code);
});

process.on('SIGINT', () => {
  devServer.kill();
  process.exit(0);
});
