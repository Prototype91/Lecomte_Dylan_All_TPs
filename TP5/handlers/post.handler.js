const { Post, Comment } = require('../models');

exports.post_list = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.send(posts);
    } catch (error) {
        console.error(error);
    };
};

exports.post_detail = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findOne({ where: { id } });
        if (req?.query.showComments) {
            const comments = await Comment.findAll({ where: { postId: id } });
            res.send({ post, comments });
        } else {
            res.send(post);
        };
    } catch (error) {
        console.error(error);
    };
};

exports.post_create = async (req, res) => {
    const payload = req.body;
    try {
        const post = await Post.create(payload);
        res.send(post);
    } catch (error) {
        console.log(error);
    };
};

exports.post_update = async (req, res) => {
    const payload = req.body;
    const id = req.params.id;
    try {
        const post = await Post.update(payload, { where: { id } });
        res.send(post);
    } catch (error) {
        console.error(error);
    };
};

exports.post_delete = async (req, res) => {
    const id = req.params.id;
    try {
        await Post.destroy({ where: { id } });
        res.send('The post has been destroyed');
    } catch (error) {
        console.error(error);
    };
};