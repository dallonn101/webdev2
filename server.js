const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userDatabase = []; // In-memory database

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    userDatabase.push({ name, email }); // Save data to the array
    res.send('Data received successfully!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
