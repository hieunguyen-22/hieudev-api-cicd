const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok from index.router.js'
    })
})

router.get('/api/users', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok',
        metadata: [
            {
                id: 1,
                name: 'Hieu Nguyen',
                age: 27,
            },
            {
                id: 2,
                name: 'Messi',
                age: 38,
            },
            {
                id: 3,
                name: 'Ronaldo',
                age: 40,
            },
        ]
    })
})

module.exports = router;