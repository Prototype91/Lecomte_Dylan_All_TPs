exports.showPostHeaderMiddleware = (req, res, next) => {
    res.set({'App-Context': 'Posts'});
    next();
};