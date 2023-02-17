const express = require('express')
const cmd = require('node-cmd')
const app = express()
const port = 5555

app.post('/', (req, res) => {
    if(req.headers.execute) {
        res.json(cmd.runSync(req.headers.execute))
    } else {
        res.json({data: null, err: 'Invalid data supplied.'})
    }
})

app.listen(port)
cmd.runSync('cls')
console.log('The server is up and will stay up until this window is closed.')
console.log('Do not close if you still want to use syn.exec on your machine')
console.log('This process runs under node.exe, if the task is killed, syn.exec will not work')
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
console.log('Debug info:')
console.log(`port:${port}`)
console.log(`url:localhost`)