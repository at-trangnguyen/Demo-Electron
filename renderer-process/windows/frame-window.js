const electron = require('electron')
const BrowserWindow = electron.remote.BrowserWindow
const path = require('path')
const url = require('url')

const createFrameBtn = document.getElementById('btn-create-window')

let win

createFrameBtn.addEventListener('click', function() {
	const modalPath = path.join('file://', __dirname, '../../templates/modal.html')
	const windowOption = {
		width: 400,
		height: 400,
		resizable: false,
		frame: false,
		skipTaskbar: true
	}
	win = new BrowserWindow(windowOption)
	win.loadURL(modalPath)
	win.show()
	win.on('close', function() {
		win = null
	})
})