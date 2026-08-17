const mg = require('mongoose')


mg.connect('mongodb://127.0.0.1:27017/ljku')
.then(()=>{console.log('Success')})
.catch((err)=>{console.log(err)})

mg.pluralize(null)
const mySchema = new mg.Schema({
    name:{
        type:String,
        required:true
    },
    Surname:String,
    age:Number,
    active:Boolean,
    data:{
        type:Date,
        default:new Date().toLocaleDateString()
    }
})

const person = new mg.model('person',mySchema)

const creatDoc = async() => {
    try{
        const personData = new person({
            name:'Jeel',
            surname:'Finaviya',
            age:18,
            active:true
        })
        const result = await personData.save()
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

creatDoc()