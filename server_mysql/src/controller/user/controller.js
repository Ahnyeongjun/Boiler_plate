const { User } = require("../../models");
const query = require("./query");

const register = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    // if (query.findOneByEmail(email)) res.status(409).end();
    const encodedPassword = await query.passwordEncoding(password);
    await User.create({ email, password: encodedPassword, name });

    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(409).end();
  }
};

module.exports = {
  register,
};
