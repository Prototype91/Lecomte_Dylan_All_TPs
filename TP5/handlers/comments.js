const { Comment } = require('../models');

module.exports = function (app) {
    app.post('/comments', async (req, res) => {
        const payload = req.body;
        try {
            const comment = await Comment.create(payload);
            res.send(comment);
        } catch (error) {
            console.log(error);
        };
    });

    app.patch('/comments/:id', async (req, res) => {
        const payload = req.body;
        const commentId = req.params.id;
        try {
            const comment = await Comment.update(payload, {
                where: {
                    id: commentId
                }
            });
            res.send(comment);
        } catch (error) {
            console.error(error);
        };
    });

    app.delete('/comments/:id', async (req, res) => {
        const commentId = req.params.id;
        try {
            await Comment.destroy({
                where: {
                    id: commentId
                }
            });
            res.send("The comment has been destroyed");
        } catch (error) {
            console.error(error);
        };
    });

    app.get('/comments/:id', async (req, res) => {
        const commentId = req.params.id;
        try {
            const comment = await Comment.findOne({
                where: {
                    id: commentId
                }
            });
            res.send(comment);
        } catch (error) {
            console.error(error);
        };
    });

    app.get('/comments', async (req, res) => {
        try {
            const comments = await Comment.findAll();
            res.send(comments);
        } catch (error) {
            console.error(error);
        };
    });
};