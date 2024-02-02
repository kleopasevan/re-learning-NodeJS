const express = require('express');
const morgan = require('morgan');
const app = express();
// req=>middleware=>res
const authorize = require('./authorize')
const logger = require('./logger');
//ways of middleware

//for all route
//app.use(logger);
// only for api route
// app.use('/api',logger)
//example for single api
//app.get('api/items',logger,(req,res)=>)

// app.use(logger, authorize)
app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/about', (req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>{
    res.send('products')
})
app.get('/api/items',(req,res)=>{
    console.log(req.user);
    res.send('items')
})


app.listen(5000,()=>{
    console.log('Server Listening at Port 5000');
})