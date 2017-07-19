const electron = require('electron')
const ipc = electron.ipcRenderer

const openFileBtn = document.getElementById('btn-open-image')

openFileBtn.addEventListener('click', function(event) {
	ipc.send('open-file')
})
ipc.on('selected-file', function(event, path) {
	document.getElementById('selected-file').innerHTML = `${path}`
})