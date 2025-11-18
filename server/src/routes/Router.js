const express = require('express');
const router = express();


router.use("/api", require('./salaoRoutes'));

//Teste router
router.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;