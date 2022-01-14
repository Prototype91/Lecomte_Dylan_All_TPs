exports.showPostHeaderMiddleware = (req, res, next) => {
    res.set({'App-Context': 'Posts'});
    const display = `App-Context: ${res.get('App-Context')}`;
    console.log(display);
    next();
};