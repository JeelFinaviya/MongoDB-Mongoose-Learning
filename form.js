// const express = require('express')
// const app = express()
// const mg = require('mongoose')

// mg.connect('mongodb://127.0.0.1:27017/practT4')
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));
// mg.pluralize(null)

// const schema = new mg.Schema({
//     name:String,
//     password:String
// })

// const person = new mg.model('person',schema)

// app.use(express.static(__dirname,{index:'home.html'}))

// app.get('/insert',async(req,res)=>{
//     const data = new person({
//         name:req.query.username,
//         password:req.query.password
//     })
//     await data.save()
//     res.send('inserted')
// })

// app.listen(5000,()=>{
//     console.log('http://localhost:5000')
// })

const express = require('express')
const app = express()
const mg = require('mongoose')
const cors = require('cors')

app.use(express.json())
app.use(cors())

mg.connect('mongodb://127.0.0.1:27017/test')
mg.pluralize(null)

const schema = new mg.Schema({
    username:String
}) 
const person = new mg.model('person',schema)

app.post('/insert',async(req,res)=>{
    const data = new person({
        username:req.body.userName
    })
    await data.save()
    res.send('data send.')
})

app.listen(5000,()=>{
    console.log('http://localhost:5000')
})