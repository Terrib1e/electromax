// preload.js
// All preload code runs in an isolated context before the web page loads.
// You can expose safe APIs via contextBridge if needed.
const { contextBridge, ipcRenderer } = require('electron');

// Example: expose a “ping” function to the renderer
contextBridge.exposeInMainWorld('electronAPI', {
  ping: () => ipcRenderer.invoke('ping'),
});

// If you want to handle custom IPC events, you can do so here.
