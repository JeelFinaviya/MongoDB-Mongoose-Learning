const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/details')
.then(()=>{console.log('success')})
.catch((err)=>{console.log(err)})

mongoose.pluralize(null)

const schema = new mongoose.Schema({
   name : {
    type : String ,
    required : true
   },
   age:Number,
   enroll:Number
})

const student = new mongoose.model('student' , schema)

const creatDoc = async() => {
    try{
        const studentdata = [
            {name:'jeel',age:18,enroll:24002171410011},
            {name:'ved',age:1,enroll:24002171410030}
        ]

        const result = await student.insertMany(studentdata)
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

creatDoc()