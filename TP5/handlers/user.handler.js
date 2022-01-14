const { User, Post } = require('../models');

exports.user_list = async (req, res) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    };
};

exports.user_detail = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findOne({ where: { id } });
        if (req?.query.showPosts === true) {
            const posts = await Post.findAll({ where: { userId: id } });
            res.send({
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                link: user.link,
                username: user.username,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
                posts
            });
        } else {
            res.send(user);
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    };
};

exports.user_create = async (req, res) => {
    const payload = req.body;
    try {
        const user = await User.create(payload);
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
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
        res.status(500).json({ message: "Une erreur est survenue" });
    };
};

exports.user_delete = async (req, res) => {
    const userId = req.params.id;
    try {
        await User.destroy({ where: { id: userId } });
        res.send("The user has been destroyed");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    };
};