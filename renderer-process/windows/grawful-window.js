const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const showWindowBtn = document.getElementById('btn-show-grawfull-window')

showWindowBtn.addEventListener('click', () => {
	let win = new BrowserWindow({ width: 500, height: 500, backgroundColor: '#f00' })
	win.loadURL('https://github.com')
})

