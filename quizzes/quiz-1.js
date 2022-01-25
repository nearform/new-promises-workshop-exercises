const http = require('http')
const server = http.createServer(handle)

async function handle (req, res) {
  res.end(await doStuff())
}

async function doStuff () {
  if (Math.random() < 0.5) {
    throw new Error('kaboom')
  }
  return 'hello world'
}

server.listen(3000)