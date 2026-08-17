# 🍃 MongoDB & Mongoose Learning

A hands-on learning repository covering **MongoDB and Mongoose** with practical exercises using **Node.js, Express.js, React.js, and Axios**.

This repository contains my practice while learning how to connect applications with MongoDB, design schemas and models using Mongoose, perform CRUD operations, work with queries and update operators, and connect a React frontend with an Express/Mongoose backend.

---

## 🚀 Technologies Used

* **MongoDB** — NoSQL database
* **Mongoose** — ODM for MongoDB and Node.js
* **Node.js** — JavaScript runtime
* **Express.js** — Backend framework
* **React.js** — Frontend library
* **Axios** — HTTP client for API requests
* **JavaScript**
* **HTML**

---

## 📚 Topics Covered

### MongoDB & Mongoose Fundamentals

* Connecting Node.js with MongoDB
* MongoDB databases and collections
* Mongoose schemas
* Mongoose models
* Documents and fields
* Custom collection naming using `pluralize()`
* Creating and saving documents
* Inserting multiple documents
* Schema validation
* Required fields
* Default values
* Different data types

### CRUD Operations

* Create
* Read
* Update
* Delete

### Mongoose Queries

* `find()`
* `findOne()`
* `findByIdAndUpdate()`
* `findByIdAndDelete()`
* `insertMany()`
* `updateOne()`
* `updateMany()`
* `deleteOne()`
* `countDocuments()`

### Query Operators

* `$gt`
* `$inc`
* `$set`

### Query Features

* Projection
* Sorting
* `skip()`
* `limit()`
* Finding the second-highest value
* Updating documents conditionally
* Upsert operations

### Full-Stack Integration

* React forms
* React `useState`
* Form submission
* Axios requests
* Express routes
* CORS
* JSON request handling
* Sending frontend data to MongoDB
* Connecting React → Express → Mongoose → MongoDB

---

# 🧩 Mongoose Basics

## 1. Connecting to MongoDB

Mongoose is used to establish a connection between Node.js and MongoDB.

Example:

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/details')
    .then(() => console.log('success'))
    .catch((err) => console.log(err));
```

Local MongoDB follows this general structure:

```text
mongodb://127.0.0.1:27017/<database-name>
```

Different practice exercises in this repository use databases such as:

```text
ljku
details
data
movies
test
```

---

# 🏗️ Schema & Model

## 2. Creating a Schema

A Mongoose schema defines the structure of documents stored in a collection.

Example:

```javascript
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    enroll: Number
});
```

Different data types practiced include:

* `String`
* `Number`
* `Boolean`
* `Date`

---

## 3. Required Fields

Fields can be made mandatory using `required`.

```javascript
name: {
    type: String,
    required: true
}
```

This prevents a document from being saved without the required value.

---

## 4. Default Values

Mongoose also supports default values.

Example:

```javascript
data: {
    type: Date,
    default: new Date()
}
```

This automatically provides a value when one is not supplied.

---

## 5. Creating a Model

A model is created from a schema and is used to interact with MongoDB documents.

```javascript
const Student = mongoose.model('student', schema);
```

The model can then be used for operations such as:

```javascript
Student.find()
Student.insertMany()
Student.updateOne()
Student.deleteOne()
```

---

# ✏️ Create Operations

## 6. Insert a Single Document

Example:

```javascript
const personData = new Person({
    name: 'Jeel',
    surname: 'Finaviya',
    age: 18,
    active: true
});

const result = await personData.save();
```

This creates and saves one document in MongoDB.

---

## 7. Insert Multiple Documents

Mongoose provides `insertMany()` for inserting multiple documents.

```javascript
const studentData = [
    {
        name: 'Jeel',
        age: 18,
        enroll: 24002171410011
    },
    {
        name: 'Ved',
        age: 1,
        enroll: 24002171410030
    }
];

const result = await Student.insertMany(studentData);
```

---

# 🔍 Read Operations

## 8. Find Documents

`find()` returns documents matching a condition.

```javascript
const result = await Movie.find({
    rating: { $gt: 8.5 }
});
```

This retrieves movies with a rating greater than `8.5`.

---

## 9. Find One Document

`findOne()` returns a single matching document.

```javascript
const result = await Employee.findOne(
    {},
    { name: 1 }
);
```

---

## 10. Projection

Projection allows us to specify which fields should be returned.

Example:

```javascript
const result = await Movie.find(
    {},
    {
        title: 1,
        rating: 1,
        _id: 0
    }
);
```

This returns only:

```text
title
rating
```

and excludes `_id`.

---

# 📊 Sorting & Limiting

## 11. Sorting

Documents can be sorted using `sort()`.

```javascript
.sort({ rating: -1 })
```

* `1` → ascending
* `-1` → descending

---

## 12. Skip & Limit

`skip()` skips documents and `limit()` restricts the number of returned documents.

Example:

```javascript
const result = await Movie.find(
    {},
    {
        title: 1,
        rating: 1,
        _id: 0
    }
)
.sort({ rating: -1 })
.skip(1)
.limit(1);
```

This can be used to find the **second-highest-rated movie**.

---

# ✏️ Update Operations

## 13. updateOne()

Updates a single matching document.

```javascript
const result = await Employee.updateOne(
    { name: 'Shyam' },
    {
        $set: {
            active: true
        }
    }
);
```

---

## 14. `$set`

The `$set` operator changes the value of a field.

```javascript
{
    $set: {
        active: true
    }
}
```

---

## 15. `$inc`

The `$inc` operator increases or decreases a numeric field.

Example:

```javascript
const result = await Movie.updateMany(
    { genre: 'Action' },
    {
        $inc: {
            rating: 0.2
        }
    }
);
```

This increases the rating of all Action movies by `0.2`.

---

## 16. updateMany()

`updateMany()` updates all documents matching the condition.

```javascript
await Movie.updateMany(
    { genre: 'Action' },
    {
        $inc: {
            rating: 0.2
        }
    }
);
```

---

## 17. Upsert

Upsert means:

> Update the document if it exists; otherwise create a new document.

Example:

```javascript
await Employee.updateOne(
    { name: 'Shyam' },
    {
        $set: {
            active: true
        }
    },
    {
        upsert: true
    }
);
```

---

# 🗑️ Delete Operations

## 18. deleteOne()

Deletes one document matching a condition.

```javascript
const result = await Movie.deleteOne({
    title: 'Jawaan'
});
```

---

## 19. findByIdAndDelete()

A document can also be deleted using its MongoDB `_id`.

```javascript
const id = await Employee.findOne(
    {},
    { name: 1 }
);

const result = await Employee.findByIdAndDelete(id._id);
```

---

# 🔢 Counting Documents

## 20. countDocuments()

Counts the number of documents matching a condition.

```javascript
const count = await Movie.countDocuments({
    lan: 'Hindi'
});

console.log('Hindi Movies =', count);
```

---

# 🎬 Movie CRUD Practice

One of the main exercises in this repository uses a **Movie** collection.

## Movie Schema

```javascript
const schema = new mongoose.Schema({
    title: String,
    dir: String,
    genre: String,
    rating: Number,
    year: Number,
    lan: String,
    Boolean: Boolean
});
```

### Operations Practiced

### 1. Insert Multiple Movies

Using:

```javascript
Movie.insertMany(movies);
```

The practice dataset includes movies such as:

* 3 Idiots
* KGF Chapter 1
* Baahubali: The Beginning
* Dangal
* Inception
* Interstellar
* The Dark Knight
* Pushpa
* Avatar
* RRR

### 2. Find Movies With Rating Greater Than 8.5

```javascript
Movie.find({
    rating: {
        $gt: 8.5
    }
});
```

### 3. Find the Second-Highest Rated Movie

```javascript
Movie.find(
    {},
    {
        title: 1,
        rating: 1,
        _id: 0
    }
)
.sort({
    rating: -1
})
.skip(1)
.limit(1);
```

### 4. Increase Action Movie Ratings

```javascript
Movie.updateMany(
    {
        genre: 'Action'
    },
    {
        $inc: {
            rating: 0.2
        }
    }
);
```

### 5. Count Hindi Movies

```javascript
Movie.countDocuments({
    lan: 'Hindi'
});
```

### 6. Delete a Movie

```javascript
Movie.deleteOne({
    title: 'Jawaan'
});
```

---

# 🌐 React + Express + Mongoose

This repository also contains an exercise demonstrating how a React form can send data to an Express backend and store it in MongoDB.

## Data Flow

```text
React
  ↓
useState
  ↓
Form Submission
  ↓
Axios
  ↓
Express API
  ↓
Mongoose
  ↓
MongoDB
```

---

## React Form

The React component uses `useState` to manage the username.

```javascript
const [userName, setUsername] = useState('');
```

The form captures user input and sends it to the backend using Axios.

---

## Express Backend

The backend creates an API endpoint:

```javascript
app.post('/insert', async (req, res) => {
    const data = new Person({
        username: req.body.userName
    });

    await data.save();

    res.send('data send.');
});
```

The backend uses:

```javascript
app.use(express.json());
app.use(cors());
```

to handle JSON requests and allow communication between the frontend and backend.

---

# 🔄 Full Request Flow

When a user enters a username:

```text
User enters username
        ↓
React input
        ↓
useState
        ↓
Form submit
        ↓
Axios
        ↓
POST /insert
        ↓
Express
        ↓
Mongoose Model
        ↓
MongoDB
        ↓
Document Saved
```

This exercise helped me understand how a frontend application communicates with a backend API and finally stores data in MongoDB.

---

# 📁 Project Structure

```text
MongoDB-Mongoose-Learning/
│
├── myapp/
│
├── ex1.jsx
├── ex2.jsx
├── ex3.jsx
├── ex4.jsx
│
├── form.html
├── form.js
├── home.html
│
├── pb478.html
├── pb478.jsx
├── pract.jsx
├── task.jsx
├── Validators.jsx
│
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

# ⚙️ Setup & Installation

## 1. Clone the Repository

```bash
git clone https://github.com/JeelFinaviya/MongoDB-Mongoose-Learning.git
```

## 2. Open the Project

```bash
cd MongoDB-Mongoose-Learning
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start MongoDB

Make sure your local MongoDB server is running.

The practice files use local MongoDB connections such as:

```text
mongodb://127.0.0.1:27017/
```

## 5. Run a Practice File

For example:

```bash
node ex4.jsx
```

Run the specific file corresponding to the exercise you want to practice.

---

# 🔐 Git & Project Safety

The repository ignores files that should not be uploaded:

```text
node_modules/
.env
```

`node_modules` should not be committed because dependencies can be recreated using:

```bash
npm install
```

---

# 🧠 Learning Progress

| Topic                     | Status |
| ------------------------- | :----: |
| MongoDB Connection        |    ✅   |
| Mongoose Connection       |    ✅   |
| Schema                    |    ✅   |
| Model                     |    ✅   |
| Required Fields           |    ✅   |
| Default Values            |    ✅   |
| Data Types                |    ✅   |
| Single Document Insert    |    ✅   |
| `insertMany()`            |    ✅   |
| `find()`                  |    ✅   |
| `findOne()`               |    ✅   |
| Projection                |    ✅   |
| Sorting                   |    ✅   |
| `skip()`                  |    ✅   |
| `limit()`                 |    ✅   |
| `$gt`                     |    ✅   |
| `$set`                    |    ✅   |
| `$inc`                    |    ✅   |
| `updateOne()`             |    ✅   |
| `updateMany()`            |    ✅   |
| Upsert                    |    ✅   |
| `deleteOne()`             |    ✅   |
| `findByIdAndDelete()`     |    ✅   |
| `findByIdAndUpdate()`     |    ✅   |
| `countDocuments()`        |    ✅   |
| Express API               |    ✅   |
| CORS                      |    ✅   |
| React Forms               |    ✅   |
| Axios                     |    ✅   |
| React → Express → MongoDB |    ✅   |

---

# 🎯 Purpose of This Repository

The purpose of this repository is to build a strong practical foundation in **MongoDB and Mongoose** by writing and testing real database operations rather than only studying theory.

I am using this repository to progressively learn how to:

* Design MongoDB document structures
* Work with Mongoose schemas and models
* Perform CRUD operations
* Write database queries
* Use query and update operators
* Validate data
* Connect backend APIs with MongoDB
* Connect React applications with backend APIs
* Build a foundation for full-stack applications

This repository will continue to grow as I learn more advanced MongoDB, Mongoose, Express, and full-stack concepts.

---

## 👨‍💻 Author

### Jeel Finaviya

**Computer Science & Information Technology Student**

Interested in:

* Full Stack Development
* Java
* JavaScript
* MongoDB
* Backend Development
* AI/ML

---

⭐ **Learning by building, practicing, and experimenting with MongoDB & Mongoose.**

If you find this repository useful, feel free to ⭐ the repository.
