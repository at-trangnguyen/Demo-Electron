const electron = require('electron')
const path = require('path')
const ipc = electron.ipcMain
const app = electron.app
const Menu = electron.Menu
const Tray = electron.Tray

let tray = null

ipc.on('put-in-tray', function(event) {
	const iconPath = path.join(__dirname, '../../assets/app-icons/demo.png')
	tray = new Tray(iconPath)
	const contextMenu = Menu.buildFromTemplate([{
		label: 'Remove',
		click: () => {
			event.sender.send('tray-removes')
		}
	}])
	tray.setToolTip('Demo app')
	tray.setContextMenu(contextMenu)
})