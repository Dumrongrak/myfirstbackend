const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.get('/api', (req, res) => {
    res.json({
        message: 'Hello World 🌍',
        status: 'success',
        timestamp: new Date().toISOString()
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});