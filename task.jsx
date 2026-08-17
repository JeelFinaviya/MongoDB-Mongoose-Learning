const express = require('express');
const mongoose = require('mongoose');

const app = express();
console.log(__dirname)

app.use(express.static(__dirname , {index:'form.html'}))
// app.use(express.urlencoded({ extended:true }))

mongoose.connect('mongodb://127.0.0.1:27017/Login')
.then(()=>console.log('Success✅'))
.catch((err)=>console.log(err))

mongoose.pluralize(null)

const schema = new mongoose.Schema({
    username : {
        type : String ,
        required : true
    },
    password : {
        type : String ,
        required : true
    }
})
const person = new mongoose.model('data1',schema)


app.get('/process_get' , async(request,response)=>{
    const persondata = new person({
        username:request.query.username,
        password:request.query.password
    })
    await persondata.save()
    response.send('Record inserted⭐')
})
app.listen(5263, () => {
    console.log('http://localhost:5263');
});