const { User, Post } = require('../models');

exports.user_list = async (req, res) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        console.error(error);
    };
};

exports.user_detail = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findOne({ where: { id } });
        if (req?.query.showPosts) {
            const posts = await Post.findAll({ where: { userId: id } });
            res.send({ user, posts });
        } else {
            res.send(user);
        };

    } catch (error) {
        console.error(error);
    };
};

exports.user_create = async (req, res) => {
    const payload = req.body;
    try {
        const user = await User.create(payload);
        res.send(user);
    } catch (error) {
        console.log(error);
    };
};

exports.user_update = async (req, res) => {
    const payload = req.body;
    const userId = req.params.id;
    try {
        const user = await User.update(payload, { where: { id: userId } });
        res.send(user);
    } catch (error) {
        console.error(error);
    };
};

exports.user_delete = async (req, res) => {
    const userId = req.params.id;
    try {
        await User.destroy({ where: { id: userId } });
        res.send("The user has been destroyed");
    } catch (error) {
        console.error(error);
    };
};