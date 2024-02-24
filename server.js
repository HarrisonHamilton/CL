const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST endpoint to start the machine
app.post('/start-machine', (req, res) => {
    const { machineCode } = req.body;

    // Here you would implement logic to interact with the laundry machine
    // For demonstration purposes, let's just log the received machine code
    console.log('Received machine code:', machineCode);

    // Send response indicating success
    res.status(200).send('Machine started successfully');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
