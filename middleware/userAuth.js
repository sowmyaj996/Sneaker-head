const isLoggedin = (req, res, next) => { next(); };
const isLoggedout = (req, res, next) => { next(); };

module.exports = { isLoggedin, isLoggedout };
