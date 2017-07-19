const electron = require('electron')
const ipc = electron.ipcMain
const dialog = electron.dialog

ipc.on('open-file', function(event) {
  dialog.showOpenDialog({
    filters: [
      { name: 'Images', extensions: ['jpg', 'png', 'gif'] }
    ],
    properties: ['openFile']

  }, (filePath) => {
    if (filePath) {
      event.sender.send('selected-file', filePath)
    }
  })
})