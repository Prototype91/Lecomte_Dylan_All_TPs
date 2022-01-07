const { Comment } = require('../models');

exports.comment_list = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.send(comments);
    } catch (error) {
        console.error(error);
    };
};

exports.comment_detail = async (req, res) => {
    const id = req.params.id;
    try {
        const comment = await Comment.findOne({ where: { id } });
        res.send(comment);
    } catch (error) {
        console.error(error);
    };
};

exports.comment_create = async (req, res) => {
    const payload = req.body;
    try {
        const comment = await Comment.create(payload);
        res.send(comment);
    } catch (error) {
        console.log(error);
    };
};

exports.comment_update = async (req, res) => {
    const payload = req.body;
    const id = req.params.id;
    try {
        const comment = await Comment.update(payload, { where: { id } });
        res.send(comment);
    } catch (error) {
        console.error(error);
    };
};

exports.comment_delete = async (req, res) => {
    const id = req.params.id;
    try {
        await Comment.destroy({ where: { id } });
        res.send("The comment has been destroyed");
    } catch (error) {
        console.error(error);
    };
};