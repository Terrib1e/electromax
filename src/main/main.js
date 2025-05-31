// main.js
const { app, BrowserWindow, session } = require('electron');
const path = require('path');

let mainWindow = null;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 1024,
    minHeight: 600,
    title: 'HBO Max',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
  });

  // Remove default menu (optional)
  mainWindow.removeMenu();

  // Load HBO Max website
// mainWindow.loadURL('https://play.hbomax.com/');
  mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));

  // Open DevTools for debugging (comment out in production)
  // mainWindow.webContents.openDevTools();

  // Handle window closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// When Electron has finished initialization
app.whenReady().then(async () => {
  // **Important**: HBO Max uses DRM (Widevine). Electron ships with Widevine support off by default.
  // You may need to enable it explicitly if playback fails.
  const wvSession = session.fromPartition('persist:wv');
  // Enable Widevine CDM (built-in in recent Electron versions)
  // Note: Depending on Electron version, this step may not be necessary.
  await wvSession.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' + '(KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');

  createWindow();

  app.on('activate', () => {
    // On macOS, recreate a window when dock icon is clicked and no windows are open
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
