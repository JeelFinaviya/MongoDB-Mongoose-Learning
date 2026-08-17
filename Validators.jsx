const mg = require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/courses")
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.log(err));

mg.pluralize(null);

// =======================
// Course Schema
// =======================

const courseSchema = new mg.Schema({
    courseName: String,
    instructor: String,
    duration: Number,
    fees: Number,
    mode: String,
    category: String,
    active: Boolean
});

const Course = mg.model("Course", courseSchema);

// =======================
// Insert Data (Run only once)
// =======================

// const insertData = async () => {
//     try {
//         const result = await Course.insertMany([
//             {
//                 courseName: "MERN Stack Development",
//                 instructor: "Niharika Sen",
//                 duration: 6,
//                 fees: 18000,
//                 mode: "Offline",
//                 category: "Web Development",
//                 active: true
//             },
//             {
//                 courseName: "Python Programming",
//                 instructor: "Rahul Shah",
//                 duration: 4,
//                 fees: 12000,
//                 mode: "Online",
//                 category: "Programming",
//                 active: true
//             },
//             {
//                 courseName: "Data Science",
//                 instructor: "Priya Patel",
//                 duration: 8,
//                 fees: 25000,
//                 mode: "Offline",
//                 category: "Data Analytics",
//                 active: true
//             },
//             {
//                 courseName: "Machine Learning",
//                 instructor: "Amit Joshi",
//                 duration: 7,
//                 fees: 22000,
//                 mode: "Online",
//                 category: "Artificial Intelligence",
//                 active: false
//             },
//             {
//                 courseName: "Java Full Stack",
//                 instructor: "Neha Mehta",
//                 duration: 6,
//                 fees: 20000,
//                 mode: "Offline",
//                 category: "Web Development",
//                 active: true
//             },
//             {
//                 courseName: "UI/UX Design",
//                 instructor: "Karan Desai",
//                 duration: 3,
//                 fees: 10000,
//                 mode: "Online",
//                 category: "Design",
//                 active: true
//             },
//             {
//                 courseName: "Cloud Computing",
//                 instructor: "Riya Sharma",
//                 duration: 5,
//                 fees: 16000,
//                 mode: "Offline",
//                 category: "Cloud",
//                 active: false
//             }
//         ]);

//         console.log("Data Inserted Successfully");
//         console.log(result);
//     } catch (err) {
//         console.log(err.message);
//     }
// };

// insertData();

// =======================
// Queries
// =======================

const runQueries = async () => {
    try {

        const result = [];

        // 1. Course with Highest Fees
        const highestFees = await Course.find()
            .sort({ fees: -1 })
            .limit(1);

        result.push({
            HighestFeesCourse: highestFees
        });

        // 2. Find MERN Stack Development Course
        const mernCourse = await Course.findOne({
            courseName: "MERN Stack Development"
        });

        result.push({
            FoundCourse: mernCourse
        });

        // 3. Update Fees and Duration
        const updatedCourse = await Course.findOneAndUpdate(
            {
                courseName: "MERN Stack Development"
            },
            {
                $set: {
                    fees: 15000,
                    duration: 5
                }
            },
            {
                new: true
            }
        );

        result.push({
            UpdatedCourse: updatedCourse
        });

        console.log(result);

    } catch (err) {
        console.log(err.message);
    } finally {
        mg.connection.close();
    }
};

runQueries();