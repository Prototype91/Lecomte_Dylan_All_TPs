module.exports = function (app) {
    app.get('/hello-world', (req, res) => {
        res.send({ "message": "Hello world !" });
    });

    app.get('/message', (req, res) => {
        if (req.query.message.length > 20) {
            res.status(400).json({ message: "Bad Request" });
        };
        res.send(req.query.message);
    });

    app.post('/infos/headers', (req, res) => {
        res.send(req.headers);
    });

    app.post('/payload', (req, res) => {
        const payload = req.body;

        const date = new Date(payload.birthdate);
        const month_diff = Date.now() - date.getTime();
        const age_diff = new Date(month_diff);
        const year = age_diff.getUTCFullYear();
        const age = Math.abs(year - 1970);

        if (age > 18) {
            res.status(200).json({ message: `Welcome ${payload.firstname}` });
        };
        res.status(200).json({ message: "Forbidden" });
    });

    app.get('/rick-roll', (req, res) => {
        res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    });

    app.delete('/custom-header', (req, res) => {
        res.set({ Message: "Hello world !" }).end();
    });

    app.get('/params/:id/:key/:slug', (req, res) => {
        res.send(req.params);
    });
};