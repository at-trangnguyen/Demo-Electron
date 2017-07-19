const path = require('path')
var notification = {
  title: 'My first notification',
  body: 'Hello World',
  icon: path.join(__dirname, '../../assets/app-icons/53260.png')
}

const notificationBtn = document.getElementById('btn-notification')

notificationBtn.addEventListener('click', function() {
  const myNotification = new window.Notification(notification.title, notification)
})
