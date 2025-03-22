const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/users', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok',
        metadata: [
            {
                id: 1,
                name: 'Hieu Nguyen',
            },
            {
                id: 2,
                name: 'Messi'
            },
            {
                id: 3,
                name: 'Ronaldo'
            }
        ]
    })
})

module.exports = router;