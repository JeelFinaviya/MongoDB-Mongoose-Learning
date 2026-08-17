const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/applicantdata")
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err));

const applicantSchema = new mongoose.Schema({

    Firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 10
    },

    age: {
        type: Number,
        min: 18,
        max: 30,
        required: true
    },

    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: "Invalid Email"
        }
    },

    citychoice: {
        type: String,
        uppercase: true,
        enum: ["AHMEDABAD", "PUNE", "BANGALORE"],
        required: true
    }

});

const Applicant = mongoose.model("applicant", applicantSchema);

const createDoc = async () => {
    try {

        const data = new Applicant({
            Firstname: "  Jeel  ",
            age: 22,
            email: "jeel@gmail.com",
            citychoice: "pune"
        });

        const result = await data.save();

        console.log("Document Inserted Successfully");
        console.log(result);

    } catch (err) {
        console.log(err.message);
    }
};

createDoc();