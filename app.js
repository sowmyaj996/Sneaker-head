// routes/userRouter.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // This looks inside 'views/user/' for a file named 'index.ejs' or 'home.ejs'
    // Change 'home' to match the name of your file (without the .ejs extension)
    res.render('home'); 
});

module.exports = router;