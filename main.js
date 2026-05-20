const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { exec } = require('child_process');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    frame: true,
    titleBarStyle: 'default',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Serve locally or index file
  mainWindow.loadFile('index.html');
}

// ── Preload IPC System Command Listeners ──
ipcMain.on('control-system-volume', (event, volume) => {
  const pct = Math.round(volume * 100);
  
  if (process.platform === 'win32') {
    // Windows command volume control
    exec(`powershell -Command "[Audio]::SetVolume(${pct})"`, (err) => {
      if (err) console.log("Windows Volume Shift Error:", err);
    });
  } else if (process.platform === 'darwin') {
    // macOS AppleScript volume control
    exec(`osascript -e "set volume output volume ${pct}"`);
  } else {
    // Linux ALSA sound control
    exec(`amixer -D pulse sset Master ${pct}%`);
  }
});

ipcMain.on('switch-active-window', () => {
  console.log("System Switch Event Received via Hand Gesture");
  if (process.platform === 'win32') {
    // Dispatches Alt+Tab key events via PowerShell to cycle host active windows
    const powershellCommand = `
      $wshell = New-Object -ComObject Wscript.Shell;
      $wshell.SendKeys('%{TAB}')
    `;
    exec(`powershell -Command "${powershellCommand.replace(/\n/g, '')}"`);
  } else if (process.platform === 'darwin') {
    // Mac window cycling appleScript
    exec(`osascript -e "tell application \\"System Events\\" to key code 48 using {command down}"`);
  }
});

app.whenReady().then(() => {
  createWindow();
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
