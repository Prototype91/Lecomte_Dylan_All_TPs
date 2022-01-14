exports.showCommentHeaderMiddleware = (req, res, next) => {
    res.set({'App-Context': 'Comments'});
    const display = `App-Context: ${res.get('App-Context')}`;
    console.log(display);
    next();
};