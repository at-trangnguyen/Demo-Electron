const electron = require('electron')
const ipcRenderer = electron.ipcRenderer

const asyncBtn = document.getElementById('btn-async-message')

asyncBtn.addEventListener('click', () => {
	ipcRenderer.send('async-message', 'ping')
})
ipcRenderer.on('async-reply', (event, arg) => {
	console.log(arg)
})