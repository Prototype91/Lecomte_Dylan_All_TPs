exports.showUserHeaderMiddleware = (req, res, next) => {
    res.set({'App-Context': 'Users'});
    const display = `App-Context: ${res.get('App-Context')}`;
    console.log(display);
    next();
};