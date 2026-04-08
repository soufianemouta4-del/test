const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // مهم للفورم
app.use(express.json()); // مهم لو كنت تبعث JSON



app.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}`));