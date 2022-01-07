const { User, Post } = require('../models');

module.exports = function (app) {
    app.post('/users', async (req, res) => {
        const payload = req.body;
        try {
            const user = await User.create(payload);
            res.send(user);
        } catch (error) {
            console.log(error);
        };
    });

    app.patch('/users/:id', async (req, res) => {
        const payload = req.body;
        const userId = req.params.id;
        try {
            const user = await User.update(payload, {
                where: {
                    id: userId
                }
            });
            res.send(user);
        } catch (error) {
            console.error(error);
        };
    });

    app.delete('/users/:id', async (req, res) => {
        const userId = req.params.id;
        try {
            await User.destroy({
                where: {
                    id: userId
                }
            });
            res.send("The user has been destroyed");
        } catch (error) {
            console.error(error);
        };
    });

    app.get('/users/:id', async (req, res) => {
        const userId = req.params.id;
        try {
            const user = await User.findOne({ where: { id: userId } });

            if (req?.query.showPosts) {
                const posts = await Post.findAll({ where: { userId } });
                res.send({ user, posts });
            } else {
                res.send(user);
            };

        } catch (error) {
            console.error(error);
        };
    });

    app.get('/users/', async (req, res) => {
        try {
            const users = await User.findAll();
            res.send(users);
        } catch (error) {
            console.error(error);
        };
    });
};