const electron = require('electron')
const BrowserWindow = electron.remote.BrowserWindow

const modalWindowBtn = document.getElementById('btn-create-modal-window')

modalWindowBtn.addEventListener('click', () => {
	let child = new BrowserWindow({ parent: 'top', modal: true, show: false })
	child.loadURL('https://github.com')
	child.on('ready-to-show', () => {
		child.show()
	})
})