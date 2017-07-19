const electron = require('electron')
const glob = require('glob')
const path = require('path')
const url = require('url')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow

loadDemos()
function createWindow() {
  var windowOptions = {
    width: 800,
    height:600,
    title: app.getName()
  }
  mainWindow = new BrowserWindow(windowOptions)
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file:",
    slashes: true
  }))
  mainWindow.on('close', function() {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('window-all-close', function() {
  mainWindow.quit()
})
app.on('active', function() {
  if (mainWindow === null) {
    createWindow()
  }
})

function loadDemos() {
  var files = glob.sync(path.join(__dirname, 'main-process/**/*.js'))
  files.forEach(function(file) {
    require(file)
  })
}