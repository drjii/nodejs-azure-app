const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('HEllo IT 360 Classs, this is a sample APP'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});