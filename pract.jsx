// // const mg = require('mongoose')

// // mg.connect('mongodb://127.0.0.1:27017/practT4')
// // .then(()=>console.log('Success.'))
// // .catch((err)=>console.log(err.message))


// // const schema = new mg.Schema(
// //     {
// //         name:{
// //             type:String,
// //             required:true
// //         },
// //         surname:String,
// //         age:Number,
// //         active:Boolean,
// //         date:{
// //             type:Date,
// //             dafault:new Date().toLocaleDateString()
// //         }
// //     }
// // )

// // const person = new mg.model('person',schema) 
// // mg.pluralize(null)

// // const creatDoc = async()=>{
// //     try {
// //         const data = new person({
// //             name:'jeel',
// //             surname:'finaviya',
// //             age:18,
// //             active:true,
// //         })
// //         const result = await data.save()


// //     } catch (error) {

// //     }
// // }
// // creatDoc()


// // const mg = require('mongoose')

// // mg.connect('mongodb://127.0.0.1:27017/practT4')

// // const schema = new mg.Schema({
// //     name:{
// //         type:String,
// //         required:true
// //     },
// //     surname:{
// //         type:String,
// //         require:true,
// //         default:'__'
// //     },
// //     date:{
// //         type:Date,
// //         default: new Date()
// //     },
// //     age:Number,
// //     active:Boolean
// // })

// // const person = new mg.model('person',schema)
// // mg.pluralize(null)

// // const creatDoc = async()=>{
// //     try {

// //         const data = new person({
// //             name:'jeel',
// //             age:18,
// //             active:true
// //         })

// //         const result = await data.save()
// //         console.log(result)
// //     } catch (error) {

// //     }
// // }

// // creatDoc()

// // const mg = require('mongoose')
// // mg.connect('mongodb://127.0.0.1:27017/practT4')
// // mg.pluralize(null)

// // const schema = new mg.Schema({
// //     name:{
// //         type:String,
// //         required:true
// //     },
// //     surname:String,
// //     date:{
// //         type:String,
// //         default:new Date().toLocaleDateString()
// //     }
// // })
// // const person = new mg.model('person',schema)

// // const creatDoc = async()=>{
// //     try {

// //         const data = [
// //             {name:'jeel',surname:'finaviya'},
// //             {name:'ved',surname:'patel'},
// //             {name:'isha',surname:'rangani'},
// //             {name:'kaushal',surname:'padsala'}
// //         ]

// //         const result = await person.insertMany(data)
// //         console.log(result)
// //     } catch (error) {

// //     }
// // }
// // creatDoc()


// const mg = require('mongoose')
// mg.connect('mongodb://127.0.0.1:27017/practT4')
// mg.pluralize(null) 


// const schema = new mg.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     surname:String,
//     date:{
//         type:String,
//         default:new Date().toLocaleDateString()
//     }
// })

// const person = new mg.model('person',schema)

// const creatDoc = async()=>{
//     try {

//         // const data = [
//         //     {name:'jeel',surname:'finaviya'},
//         //     {name:'ved',surname:'patel'},
//         //     {name:'isha',surname:'rangani'},
//         //     {name:'kaushal',surname:'padsala'}
//         // ]

//         // const result = await person.insertMany(data)
//         // console.log(result)

//         // const result = await person.find({name:'jeel'})

//         // const uone = await person.updateOne({_id:result[0]._id},{$set:{surname:'patel'}})

//         const findone = await person.findOne({name:'jeel'})
//         console.log(await person.findByIdAndUpdate(findone._id,{name:'jeel patel'}))
//         // console.log(result[0]._id)

//     } catch (error) {

//     }

// }
// creatDoc()

const mg = require('mongoose')
const validator = require('validator')
mg.connect('mongodb://127.0.0.1:27017/movie')

mg.pluralize(null)

// const schema = new mg.Schema({
//     username: {
//         type: String,
//         required: [true, 'Username required!'],
//         minlength: [4, 'Min length is 4'],
//         maxlength: [20, 'max length is 20'],
//         match: /^[A-Za-z]+[0-9]+$/,
//         trim: true,
//         uppercase: true
//     },
//     email: {
//         type: String,
//         unique: [true, 'already exists'],
//         match: [/^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/, 'Invalid email']
//     },
//     age: {
//         type: Number,
//         min: 18,
//         max: 65
//     },
//     role: {
//         type: String,
//         enum: ['user', 'admin'],
//         default: 'user'
//     }
// })

// const person = new mg.model('person', schema)

// const creatdata = async () => {
//     try {

//         const data = new person({
//             username: '  sfga34 ',
//             email: ' a1e@xample.com',
//             age: 25,
//             role: 'user'

//         })
//         const res = await data.save()
//         console.log(res)

//     } catch (error) {

//         console.log(error.message)
//     }
// }

// creatdata()

// const schema = new mg.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         validate: [validator.isEmail, 'This is not an email,']
//     },
//     product: {
//         type: String,
//         required: true,
//         validate: [validator.isAlphanumeric, 'This is not numeric']
//     }
// })
// const person = new mg.model('person', schema)

// const creatDoc = async () => {
//     try {

//         const data = new person({
//             email: '1agecc@gmail.com',
//             product: "fhxvf111"

//         })
//         data.save()

//     } catch (error) {
//         console.log(error.message)

//     }
// }
// creatDoc()


const movieSchema = new mg.Schema({
    title: String,
    director: String,
    genre: String,
    rating: Number,
    releaseYear: Number,
    language: String,
    available: Boolean
});
const movies = [
    { title: "3 Idiots", director: "Rajkumar Hirani", genre: "Comedy", rating: 9.2, releaseYear: 2009, language: "Hindi" },
    { title: "KGF Chapter 2", director: "Prashanth Neel", genre: "Action", rating: 8.8, releaseYear: 2022, language: "Kannada" },
    { title: "Dangal", director: "Nitesh Tiwari", genre: "Drama", rating: 8.9, releaseYear: 2016, language: "Hindi" },
    { title: "Baahubali", director: "S. S. Rajamouli", genre: "Action", rating: 8.7, releaseYear: 2015, language: "Telugu" },
    { title: "Jawan", director: "Atlee", genre: "Action", rating: 7.8, releaseYear: 2023, language: "Hindi" },
    { title: "Drishyam", director: "Nishikant Kamat", genre: "Thriller", rating: 8.4, releaseYear: 2015, language: "Hindi" },
    { title: "Pushpa", director: "Sukumar", genre: "Action", rating: 8.1, releaseYear: 2021, language: "Telugu" }
];

const Movie = new mg.model('Movie', movieSchema)

const creatDoc = async () => {
    try {
        await Movie.insertMany(movies)
        console.log(await Movie.find({rating:{$gt:8.5}}))
        console.log(await Movie.find({},{title:1,rating:1,_id:0}).sort({rating:-1}).skip(1).limit(1))
        console.log(await Movie.updateMany( {genre:'Action'}, {$inc:{rating:0.2}}))
        console.log(await Movie.countDocuments({language:'Hindi'}))
        console.log(await Movie.deleteOne({title:'Jawan'}))

    } catch (error) {
        console.log(error)

    }
}
creatDoc()