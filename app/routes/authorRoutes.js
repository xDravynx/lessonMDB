const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res
        .status(200)
        .json({ success: true, message: `${req.method} - Request received to authors endpoint` });
    });
    
router.get('/:id', (req, res) => {
    res
        .status(200)
        .json({ success: true, message: `${req.method} - Request received to authors endpoint` });
        });

router.post('/', (req, res) => {
    res
        .status(200)
        .json({ success: true, message: `${req.method} - Request received to authors endpoint` });
        });

router.put('/:id', (req, res) => {
    res
        .status(200)
        .json({ success: true, message: `${req.method} - Request received to authors endpoint` });
        });

router.delete('/:id', (req, res) => {
    res
        .status(200)
        .json({ success: true, message: `${req.method} - Request received to authors endpoint` });
        });
        


module.exports = router;

