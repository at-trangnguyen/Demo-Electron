const electron = require('electron')
const app = electron.app
const globalShortcut = electron.globalShortcut
const path = electron.path
const BrowserWindow = electron.BrowserWindow

app.on('ready', function() {
	globalShortcut.register('CmdOrCtrl+T', function() {
		console.log('aaa')
		const modalPath = path.join('file://', __dirname, '../../templates/modal.html')
		var win = new BrowserWindow({ width: 400, height: 400})
		win.loadURL(modalPath)
		win.show()
		win.on('close', function() {
			win = null
		})
	})
})
