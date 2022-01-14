exports.showCommentHeaderMiddleware = (req, res, next) => {
    res.set({'App-Context': 'Comments'});
    next();
};