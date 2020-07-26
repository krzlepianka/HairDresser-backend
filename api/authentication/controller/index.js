const User = require('../../user/model/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
  const { login, password, email } = req.body;
  const saltRounds = 5;
  try {
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

exports.signIn = async (req, res) => {
  const { login, password } = req.body;
  const saltRounds = 5;
  let decodedPassword;
  let user;
  try {
    user = await User.findOne({ login });
    if (user) {
      decodedPassword = await bcrypt.compare(password, user.password);
      if (decodedPassword) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000 + 60 * 60),
            data: user._id,
          },
          'secret'
        );
        return res.status(200).json({
          message: 'login succed',
          token: token,
        });
      } else {
        return res.status(404).json({
          message: 'invalid passoword',
        });
      }
    } else {
      return res.status(404).json({
        message: 'there is no such a user',
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

exports.checkToken = (req, res, next) => {
  const { authorization } = req.headers;
  let token = authorization.slice(6, authorization.length);
  console.log(token);
  next();
};
