const express = require('express')
require('dotenv').config();
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://ahn:${process.env.MONGODB_PASSWORD}@cluster0.as847.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindandModify: false
}).then(() => console.log('mongoose connected'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello_world'))
app.listen(port, () => console.log(`Example app port ${port}`))