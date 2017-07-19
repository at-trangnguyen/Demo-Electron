const electron = require('electron')
const ipc = electron.ipcRenderer

const trayBtn = document.getElementById('btn-put-in-tray')

trayBtn.addEventListener('click', function() {
	ipc.send('put-in-tray')
})