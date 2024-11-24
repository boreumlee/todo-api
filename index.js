const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();  // .env 파일을 로드

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the To-Do API!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// import todos routes
const todosRoutes = require('./routes/todos');

// 사용 todos routes
app.use('/todos', todosRoutes);

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error: ', error);
});