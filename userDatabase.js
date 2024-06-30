const userDatabase = []; // Initialize an empty array

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    userDatabase.push({ name, email }); // Save data to the array
    res.send('Data received successfully!');
});
