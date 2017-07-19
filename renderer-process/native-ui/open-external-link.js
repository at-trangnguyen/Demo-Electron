const electron = require('electron')
const shell = electron.shell

const openLinkBtn = document.getElementById('btn-open-link')

openLinkBtn.addEventListener('click', function() {
  console.log('aaa')
  shell.openExternal('https://electron.atom.io')
})