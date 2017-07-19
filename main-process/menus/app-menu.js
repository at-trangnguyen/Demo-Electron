const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu
const app = electron.app

const template = [
  {
    label: 'Edit',
    submenu: [{
      label: 'Undo',
      accelerator: 'CmdOrCtrl+Z',
      role: 'undo'
    }, {
      type: 'separator'
    }, {
      label: 'Cut',
      accelerator: 'Ctrl+X',
      role: 'cut'
    }]
  }, {
    label: 'App Menu Demo 1',
    submenu: [{
      label: 'Sub Menu 1',
      type: 'checkbox',
      checked: true
    }, {
      label: 'Sub Menu 2'
    }]
  }, { 
    label: 'View',
    submenu: [{
      label: 'Reload',
      accelerator: 'CmdOrCtrl+R',
      click: function (item, focusedWindow) {
        if (focusedWindow) {
          if (focusedWindow.id === 1) {
            BrowserWindow.getAllWindows().forEach(function (win) {
              if (win.id > 1) {
                win.close()
              }   
            })
          }
          focusedWindow.reload()
        }
      }
    }, {
      label: 'Toggle Full Screen',
      accelerator: (function () {
        if (process.platform === 'darwin') {
          return 'Ctrl+Command+F'
        } else {
          return 'F11'
        }
      })(),
      click: function (item, focusedWindow) {
        if (focusedWindow) {
          focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
        }
      }
    }, {
      label: 'Toggle Developer Tools',
        accelerator: (function () {
          if (process.platform === 'darwin') {
            return 'Alt+Command+I'
          } else {
            return 'Ctrl+Shift+I'
          }
        })(),
        click: function (item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.toggleDevTools()
          }
        }
      }
    ]
  }
]
app.on('ready', function() {
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})