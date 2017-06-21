const app = require('http').createServer(handler)
const fs = require('fs')
const io = require('socket.io')(app, {transports: ['websocket']})

const port = 3001

app.listen(port)

function handler(req, res) {
  const filePath = '../public/index.html'

  fs.readFile(__dirname + filePath, (err, data) => {
    if (err) {
      res.writeHead(500)
      return res.end('Error loading' + filePath + ': ' + err)
    }

    res.writeHead(200)
    res.end(data)
  })
}

const store = require('./modules/store')
const {userId, userConnected} = require('./modules/Users/actions')
const {fireAlarm} = require('./modules/Alarms/actions')

io.on('connection', socket => {
  const newId = userId(store.getState().Users.count)

  store.dispatch(userConnected(newId))

  socket.on('alarm:fire', id => {
    store.dispatch(fireAlarm(id))
    socket.broadcast.emit('alarm:list_response', store.getState().Alarms)
  })

  socket.on('alarm:list', () =>
    socket.emit('alarm:list_response', store.getState().Alarms)
  )
})

console.log(`server started at ${port}`)
