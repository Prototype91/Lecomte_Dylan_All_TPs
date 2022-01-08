const { Role } = require('../models');

exports.role_list = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.send(roles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    };
};

exports.role_detail = async (req, res) => {
    const id = req.params.id;
    try {
        const role = await Role.findOne({ where: { id } });
        res.send(role);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    };
};

exports.role_create = async (req, res) => {
    const payload = req.body;
    try {
        const role = await Role.create(payload);
        res.send(role);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    };
};

exports.role_update = async (req, res) => {
    const payload = req.body;
    const id = req.params.id;
    try {
        const role = await Role.update(payload, { where: { id } });
        res.send(role);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    };
};

exports.role_delete = async (req, res) => {
    const id = req.params.id;
    try {
        await Role.destroy({ where: { id } });
        res.send("The role has been destroyed");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    };
};