const electron = require('electron')
const ipcMain = electron.ipcMain

ipcMain.on('sync-message', (event, arg) => {
	event.returnValue = 'pong'
})