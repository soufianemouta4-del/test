const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// باش نخلي public فولدر accessible
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server khdam f http://localhost:${PORT}`);
});