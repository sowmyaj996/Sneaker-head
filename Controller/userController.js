const loadHomepage = (req, res) => {
    res.send('Welcome to Sneaker Head Homepage');
};

const loadLogin = (req, res) => {
    res.send('Login Page');
};

const loadRegister = (req, res) => {
    res.send('Register Page');
};

const insertUser = (req, res) => {
    const { name, email, password } = req.body;
    res.send(`User ${name} registered successfully`);
};

const loadForgotPassword = (req, res) => {
    res.send('Forgot Password Page');
};

const verifyLogin = (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.send(`Login successful for ${email}`);
    } else {
        res.send('Invalid credentials');
    }
};

const loadUserProfile = (req, res) => {
    res.send('User Profile Page');
};

const logout = (req, res) => {
    res.send('Logged out successfully');
};

module.exports = {
    loadHomepage,
    loadLogin,
    loadRegister,
    insertUser,
    loadForgotPassword,
    verifyLogin,
    loadUserProfile,
    logout
};
