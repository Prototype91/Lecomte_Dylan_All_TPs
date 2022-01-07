const { Role } = require('../models');

module.exports = function (app) {
    app.post('/roles', async (req, res) => {
        const payload = req.body;
        try {
            const role = await Role.create(payload);
            res.send(role);
        } catch (error) {
            console.log(error);
        };
    });

    app.patch('/roles/:id', async (req, res) => {
        const payload = req.body;
        const roleId = req.params.id;
        try {
            const role = await Role.update(payload, {
                where: {
                    id: roleId
                }
            });
            res.send(role);
        } catch (error) {
            console.error(error);
        };
    });

    app.delete('/roles/:id', async (req, res) => {
        const roleId = req.params.id;
        try {
            await Role.destroy({
                where: {
                    id: roleId
                }
            });
            res.send("The role has been destroyed");
        } catch (error) {
            console.error(error);
        };
    });

    app.get('/roles/:id', async (req, res) => {
        const roleId = req.params.id;
        try {
            const role = await Role.findOne({
                where: {
                    id: roleId
                }
            });
            res.send(role);
        } catch (error) {
            console.error(error);
        };
    });

    app.get('/roles', async (req, res) => {
        try {
            const roles = await Role.findAll();
            res.send(roles);
        } catch (error) {
            console.error(error);
        };
    });
};