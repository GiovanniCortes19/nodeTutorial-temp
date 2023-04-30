const http = require('http')

// Setting up a Server http with EventEmitter API
const server = http.createServer()

server.on('request', (req, res) => { 
    res.end('Welcome')
 })

server.listen(4000, () => { 
    console.log('Server listening on port : 4000...');
 })