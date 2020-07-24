const User = require('../../user/model/index');
const bcrypt = require('bcrypt');

exports.signUp = async (req, res) => {
  try {
    const { login, password, email } = req.body;
    const saltRounds = 5;
    const hash = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      login: login,
      password: hash,
      email: email,
    });
    res.status(200).json({
      status: 'registration succed',
      result: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: 'registration faild',
      error: {
        err,
      },
    });
  }
};
