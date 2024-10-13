const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let serverProcess;

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load index.html into the window.
  win.loadFile('index.html');

  // Open the DevTools (optional).
  // win.webContents.openDevTools();

  // Open the DevTools (optional).
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  // Start the backend server
  serverProcess = spawn('node', [path.join(__dirname, 'server.js')], {
    stdio: 'inherit',
  });

  createWindow();
});

app.on('window-all-closed', () => {
  // Quit the backend server
  if (serverProcess) {
    serverProcess.kill();
  }

  // On macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it is common to re-create a window when the dock icon is clicked
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
