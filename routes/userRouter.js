const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
const passwordController = require("../Controller/passwordController");
const userAuth = require('../middleware/userAuth');

router.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    next();
});

router.get('/', userAuth.isLoggedout, userController.loadHomepage);
router.get('/user/index', userController.loadHomepage);
router.get('/user/login', userAuth.isLoggedout, userController.loadLogin);
router.post('/user/login', userAuth.isLoggedout, userController.verifyLogin);
router.get('/user/register', userAuth.isLoggedout, userController.loadRegister);
router.post('/user/register', userAuth.isLoggedout, userController.insertUser);
router.get('/user/forgot-password', userAuth.isLoggedout, userController.loadForgotPassword);
router.post('/user/forgot-password', userAuth.isLoggedout, passwordController.forgotPassword);
router.get('/user/profile', userAuth.isLoggedin, userController.loadUserProfile);
router.get('/user/logout', userAuth.isLoggedin, userController.logout);
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // This tells Express to look for 'views/user/index.ejs'
    res.render('index'); 
});

module.exports = router;


