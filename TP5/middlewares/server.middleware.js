exports.dateMiddleware = (req, res, next) => {
    const date = new Date();
    console.log(date);
    next();
};

exports.ecvHeaderMiddleware = (req, res, next) => {
    req.headers["Application-name"] = "ecv-digital";
    console.log(req.headers);
    next();
};

exports.checkAuthorizationMiddleware = (req, res, next) => {
    if (!req.headers["Authorization"]) {
        res.status(403);
    }
    next();
};