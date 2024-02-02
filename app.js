const express = require('express');
const app = express()
const peoplerouter= require('./routes/people')
const loginrouter = require('./routes/auth')
//static assets
//parse form data
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./methods-public'))
app.use(express.json())

app.use('/api/people', peoplerouter)
app.use('/login', loginrouter)





app.listen(5000, () => {
    console.log('Server Listening at Port 5000');
})