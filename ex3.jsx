const mg = require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/data')

const employeeSchema = new mg.Schema(
    {
        name:String,
        age:Number,
        active:Boolean
    }
)
const employee = new mg.model('employee',employeeSchema)
const operations = async() => {
    try{
        // const a = [
        //     {name:'Radha',age:18,active:true},
        //     {name:'Shyam',age:15,active:false},
        //     {name:'Ram',age:19,active:false},
        // ]
        // const result = await employee.insertMany(a)
        // console.log(result)
        // const result = await employee.updateOne(
        //     {name:'Shyam'},{$set:{active:true}},{upsert:true}
        // )

        // const emp = await employee.findOne({},{name:1})
        // console.log(result.name)
        // console.log(result._id)

        // const result = await employee.findByIdAndUpdate(emp._id,{name:'Nishi',age:30,active:false})

        const id = await employee.findOne({},{name:1})

        const emp = await employee.findByIdAndDelete(id._id)

    }catch(err){
        console.log(err)
    }
}

operations()