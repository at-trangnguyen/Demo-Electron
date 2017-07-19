const electron = require('electron')
const ipcRenderer = electron.ipcRenderer

const syncBtn = document.getElementById('btn-sync-message')

syncBtn.addEventListener('click', () => {
	const reply = ipcRenderer.sendSync('sync-message', 'ping')
	console.log(reply)
})
