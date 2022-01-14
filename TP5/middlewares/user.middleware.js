exports.showUserHeaderMiddleware = (req, res, next) => {
    res.set({'App-Context': 'Users'});
    next();
};