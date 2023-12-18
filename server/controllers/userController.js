const User = require("../models/User");

class UserController {
    async createUser(req, res) {
        try {
            const { firstname, lastname } = req.body;

            const candidate = await User.findOne({firstname, lastname});

            if (candidate) {
                console.log(req.body);
                return res.status(400).json({message: `User ${firstname, lastname} is already exist`})
            }

            const user = new User({firstname, lastname})

            await user.save();

            return res.status(200).json({message: `User ${firstname, lastname } was created`});
        }


        catch (e) {
            console.log(req.body);
            res.send({message: "Server error"});
        }
    }


    async getUsers(req, res) {
        try {
            const users = await User.find();
            return res.json(users);
        }

        catch (e) {
            console.log(req.body);
            res.send({message: "Server error"});
        }
    }
}

module.exports = new UserController();