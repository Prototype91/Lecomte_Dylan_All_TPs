const { Post } = require('../models');

module.exports = function (app) {
    app.post('/posts', async (req, res) => {
        const payload = req.body;
        try {
            const post = await Post.create(payload);
            res.send(post);
        } catch (error) {
            console.log(error);
        };
    });

    app.patch('/posts/:id', async (req, res) => {
        const payload = req.body;
        const postId = req.params.id;
        try {
            const post = await Post.update(payload, {
                where: {
                    id: postId
                }
            });
            res.send(post);
        } catch (error) {
            console.error(error);
        };
    });

    app.delete('/posts/:id', async (req, res) => {
        const postId = req.params.id;
        try {
            await Post.destroy({
                where: {
                    id: postId
                }
            });
            res.send("The post has been destroyed");
        } catch (error) {
            console.error(error);
        };
    });

    app.get('/posts/:id', async (req, res) => {
        const postId = req.params.id;
        try {
            const post = await Post.findOne({
                where: {
                    id: postId
                }
            });
            res.send(post);
        } catch (error) {
            console.error(error);
        };
    });

    app.get('/posts', async (req, res) => {
        try {
            const posts = await Post.findAll();
            res.send(posts);
        } catch (error) {
            console.error(error);
        };
    });
};