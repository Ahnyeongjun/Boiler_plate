const { User } = require("../../model/user");


const register = async (req, res) => {

    const user = new User(req.body);
    try {
        const findUser = await User.findOne({ email: req.body.email });
        if (findUser) return res.status(400).end();
        user.save();
    } catch (err) {
        console.log(err);
        res.status(400).end();
    }
    res.status(200).end();
};

const login = async (req, res) => {
    try {
        user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).end();
        isMatch = await user.comparePassword(req.body.password)
        if (isMatch) return res.status(400).end();
        user = await user.generateToken;

        res.cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id })
    } catch (err) {
        console.log(err);
        res.status(400).end();
    }
};


module.exports = {
    register,
    login,
}
