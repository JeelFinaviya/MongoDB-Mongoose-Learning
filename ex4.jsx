const mg = require('mongoose');

// =====================
// Database Connection
// =====================
mg.connect('mongodb://127.0.0.1:27017/movies')
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.log(err));

// =====================
// Schema
// =====================
const schema = new mg.Schema({
    title: String,
    dir: String,
    genre: String,
    rating: Number,
    year: Number,
    lan: String,
    Boolean: Boolean
});

// =====================
// Model
// =====================
const Movie = new mg.model("movie", schema);

// =====================
// CRUD Operations
// =====================
const createDoc = async () => {
    try {

        // =========================================================
        // 1 & 2) Insert Multiple Movie Documents
        // =========================================================

        /*
        const movies = [
            {
                title: "3 Idiots",
                dir: "Rajkumar Hirani",
                genre: "Comedy",
                rating: 9.2,
                year: 2009,
                lan: "Hindi",
                Boolean: true
            },
            {
                title: "KGF Chapter 1",
                dir: "Prashanth Neel",
                genre: "Action",
                rating: 8.3,
                year: 2018,
                lan: "Kannada",
                Boolean: true
            },
            {
                title: "Baahubali: The Beginning",
                dir: "S. S. Rajamouli",
                genre: "Action",
                rating: 8.1,
                year: 2015,
                lan: "Telugu",
                Boolean: true
            },
            {
                title: "Dangal",
                dir: "Nitesh Tiwari",
                genre: "Drama",
                rating: 8.4,
                year: 2016,
                lan: "Hindi",
                Boolean: false
            },
            {
                title: "Inception",
                dir: "Christopher Nolan",
                genre: "Sci-Fi",
                rating: 8.8,
                year: 2010,
                lan: "English",
                Boolean: true
            },
            {
                title: "Interstellar",
                dir: "Christopher Nolan",
                genre: "Sci-Fi",
                rating: 8.7,
                year: 2014,
                lan: "English",
                Boolean: true
            },
            {
                title: "The Dark Knight",
                dir: "Christopher Nolan",
                genre: "Action",
                rating: 9.0,
                year: 2008,
                lan: "English",
                Boolean: true
            },
            {
                title: "Pushpa",
                dir: "Sukumar",
                genre: "Action",
                rating: 7.8,
                year: 2021,
                lan: "Telugu",
                Boolean: false
            },
            {
                title: "Avatar",
                dir: "James Cameron",
                genre: "Sci-Fi",
                rating: 7.9,
                year: 2009,
                lan: "English",
                Boolean: true
            },
            {
                title: "RRR",
                dir: "S. S. Rajamouli",
                genre: "Action",
                rating: 8.0,
                year: 2022,
                lan: "Telugu",
                Boolean: true
            }
        ];

        const result = await Movie.insertMany(movies);
        console.log(result);
        */


        // =========================================================
        // 3) Display Movies Having Rating Greater Than 8.5
        // =========================================================

        /*
        const result = await Movie.find({
            rating: { $gt: 8.5 }
        });

        console.log(result);
        */


        // =========================================================
        // 4) Display Title and Rating of Second Highest Rated Movie
        // =========================================================

        /*
        const result = await Movie.find({}, { title: 1, rating: 1, _id: 0 })
            .sort({ rating: -1 })
            .skip(1)
            .limit(1);

        console.log(result);
        */


        // =========================================================
        // 5) Increase Rating of All Action Movies by 0.2
        // =========================================================

        /*
        const result = await Movie.updateMany(
            { genre: "Action" },
            { $inc: { rating: 0.2 } }
        );

        console.log(result);
        */


        // =========================================================
        // 6) Count Total Hindi Movies
        // =========================================================

        /*
        const count = await Movie.countDocuments({
            lan: "Hindi"
        });

        console.log("Hindi Movies =", count);
        */


        // =========================================================
        // 7) Delete Movie Having Title "Jawaan"
        // =========================================================

        /*
        const result = await Movie.deleteOne({
            title: "Jawaan"
        });

        console.log(result);
        */  


    } catch (error) {
        console.log(error);
    }   
};

createDoc();