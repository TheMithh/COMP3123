const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from Express routes (1)!');
});

router.get('/users/:id', (req, res) => {
    const userId = req.params.id; // Parameter value
    res.send(`User with ID: ${userId} from routes (1)`);
});

module.exports = router;
