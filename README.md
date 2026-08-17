# 🍃 MongoDB & Mongoose Learning

A personal learning repository for practicing **MongoDB, Mongoose, Express.js, and React.js** through small exercises, CRUD operations, database connectivity, schemas, models, and API integration.

This repository contains my hands-on practice while learning how to build applications that communicate with **MongoDB using Mongoose**.

---

## 🚀 Technologies Used

* **MongoDB** — NoSQL database
* **Mongoose** — MongoDB ODM for Node.js
* **Node.js** — JavaScript runtime
* **Express.js** — Backend/API framework
* **React.js** — Frontend library
* **Axios** — HTTP requests
* **JavaScript**
* **HTML & CSS**

---

## 📂 Repository Structure

```text
MongoDB-Mongoose-Learning/
│
├── myapp/              # React practice application
│
├── ex1.jsx             # Mongoose/React practice
├── ex2.jsx             # Mongoose/React practice
├── ex3.jsx             # Mongoose/React practice
├── ex4.jsx             # MongoDB + Mongoose CRUD practice
│
├── form.html            # HTML form practice
├── form.js              # Form/backend practice
├── home.html             # Basic HTML practice
│
├── pb478.html
├── pb478.jsx
├── pract.jsx
├── task.jsx
├── Validators.jsx
│
├── package.json
├── package-lock.json
└── .gitignore
```

---

## 📚 What I'm Learning

### MongoDB

* Database and collection creation
* Documents and fields
* CRUD operations
* Querying documents
* Filtering data
* Sorting
* Updating documents
* Deleting documents
* Counting documents

### Mongoose

* Connecting Node.js with MongoDB
* Creating schemas
* Creating models
* Inserting documents
* `insertMany()`
* `find()`
* `updateMany()`
* `deleteOne()`
* `countDocuments()`
* Query operators such as `$gt` and `$inc`
* Sorting and pagination with `sort()`, `skip()` and `limit()`

### Express.js

* Creating an Express server
* Creating API routes
* Handling GET and POST requests
* Receiving request data
* Sending responses
* Using CORS
* Connecting Express with MongoDB through Mongoose

### React.js

* `useState`
* Form handling
* Controlled inputs
* Event handling
* Axios API requests
* Connecting React frontend with Express backend

---

## 🔥 CRUD Practice

One of the main exercises in this repository uses a **Movie** collection.

### Movie Schema

```javascript
{
    title: String,
    dir: String,
    genre: String,
    rating: Number,
    year: Number,
    lan: String,
    Boolean: Boolean
}
```

### Operations Practiced

#### 1. Insert Multiple Documents

```javascript
Movie.insertMany(movies);
```

#### 2. Find Movies With Rating Greater Than 8.5

```javascript
Movie.find({
    rating: { $gt: 8.5 }
});
```

#### 3. Find the Second Highest Rated Movie

```javascript
Movie.find({}, { title: 1, rating: 1, _id: 0 })
    .sort({ rating: -1 })
    .skip(1)
    .limit(1);
```

#### 4. Increase Action Movie Ratings

```javascript
Movie.updateMany(
    { genre: "Action" },
    { $inc: { rating: 0.2 } }
);
```

#### 5. Count Hindi Movies

```javascript
Movie.countDocuments({
    lan: "Hindi"
});
```

#### 6. Delete a Movie

```javascript
Movie.deleteOne({
    title: "Jawaan"
});
```

---

## 🔗 React + Express + MongoDB Flow

Some exercises demonstrate how a React form can communicate with a backend API and store data in MongoDB.

```text
React Form
    ↓
Axios Request
    ↓
Express API
    ↓
Mongoose
    ↓
MongoDB
```

Example:

```text
User enters username
        ↓
React useState
        ↓
Axios
        ↓
POST /insert
        ↓
Express receives data
        ↓
Mongoose Model
        ↓
MongoDB
```

---

## ⚙️ Setup

### 1. Clone the Repository

```bash
git clone https://github.com/JeelFinaviya/MongoDB-Mongoose-Learning.git
```

### 2. Open the Project

```bash
cd MongoDB-Mongoose-Learning
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Make Sure MongoDB Is Running

The practice projects use local MongoDB connections such as:

```text
mongodb://127.0.0.1:27017/
```

### 5. Run the Required File

For example:

```bash
node ex4.jsx
```

Depending on the exercise, run the corresponding Node/React application.

---

## 🧠 Key Concepts Practiced

| Concept                   | Practice |
| ------------------------- | -------- |
| MongoDB Connection        | ✅        |
| Mongoose Schema           | ✅        |
| Mongoose Model            | ✅        |
| Insert Documents          | ✅        |
| Insert Multiple Documents | ✅        |
| Find Documents            | ✅        |
| Query Operators           | ✅        |
| Sorting                   | ✅        |
| Skip & Limit              | ✅        |
| Update Documents          | ✅        |
| Delete Documents          | ✅        |
| Count Documents           | ✅        |
| Express API               | ✅        |
| React Forms               | ✅        |
| Axios                     | ✅        |
| CORS                      | ✅        |

---

## 🎯 Goal

The goal of this repository is to build a strong practical understanding of **MongoDB and Mongoose** and learn how databases can be integrated with **Node.js, Express.js, and React.js**.

This repository will continue to grow as I learn and practice more advanced concepts.

---

## 👨‍💻 Author

**Jeel Finaviya**

Computer Science & Information Technology Student
Interested in **Full Stack Development, Java, AI/ML, and Backend Development**.

---

⭐ This repository represents my ongoing learning and practice with MongoDB and Mongoose.
