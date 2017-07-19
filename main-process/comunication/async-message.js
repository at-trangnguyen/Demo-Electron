const electron = require('electron')
const ipcMain = electron.ipcMain

ipcMain.on('async-message', (event, arg) => {
  event.sender.send('async-reply', 'pong')
})