const express = require('express');
const app = express();
const PORT = 3000;

// باش نخلي public فولدر accessible
app.use(express.static('public'));

app.listen('https://test-alpha-eight-80.vercel.app/', () => {
    console.log(`Server khdam f http://localhost:${PORT}`);
});