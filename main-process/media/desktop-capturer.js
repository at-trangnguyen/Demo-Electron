const electron = require('electron')
const ipcMain = electron.ipcMain
const dialog = electron.dialog

ipcMain.on('save-dialog', (event) => {
	const options = {
		title: 'Save ScreenShot',
		filters: [
      { name: 'Images', extensions: ['png'] }
    ]
	}
	dialog.showSaveDialog(options, (filename) => {
		event.sender.send('save-file', filename)
	})
})