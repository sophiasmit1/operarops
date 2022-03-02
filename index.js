const express = require('express')
const mongoose = require('mongoose')
const { async } = require('rxjs')

const app = express()
const PORT = process.env.PORT || 5000


app.use(express.json({extended:true}))
app.use('/api/operator', require('./router/operator.router'))



async function start() {
    try {
        await mongoose.connect('mongodb+srv://Kirill:741258963@cluster0.2qsxk.mongodb.net/posts?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => {
            console.log('listen on port: ' + PORT)
        })
    } catch (error) {
        console.log("Проверка 1: "+ error)
    }
}

start()