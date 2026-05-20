const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  setSystemVolume: (vol) => ipcRenderer.send('control-system-volume', vol),
  switchWindow: () => ipcRenderer.send('switch-active-window')
});
