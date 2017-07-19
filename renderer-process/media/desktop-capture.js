const electron = require('electron');
const fs = require('fs');
const path = require('path');
const desktopCapturer = electron.desktopCapturer;
const electronScreen = electron.screen;
const ipcRenderer = electron.ipcRenderer;
const shell = electron.shell;
const captureBtn = document.getElementById('btn-capture-desktop');

captureBtn.addEventListener('click', function() {
  const thumbSize = determineScreenShotSize();
  let options = { types: ['screen'], thumbnailSize: thumbSize };

  desktopCapturer.getSources(options, (error, sources) => {
    if (error) {
      throw error;
    }
    sources.forEach((source) => {
      if (source.name === 'Entire screen' || source.name === 'Screen 1') {
        ipcRenderer.send('save-dialog');
        ipcRenderer.on('save-file', (event, filepath) => {
          const screenShotPath = filepath;
          fs.writeFile(screenShotPath, source.thumbnail.toPng(), (error) => {
            if (error) {
              throw error;
            }
            shell.openExternal('file://' + screenShotPath);
          })
        })
      }
    })
  })
});
function determineScreenShotSize() {
  const screenSize = electronScreen.getPrimaryDisplay().workAreaSize;
  const maxDimension = Math.max(screenSize.width, screenSize.height);
  return {
    width: maxDimension * window.devicePixelRatio,
    height: maxDimension * window.devicePixelRatio
  }
}