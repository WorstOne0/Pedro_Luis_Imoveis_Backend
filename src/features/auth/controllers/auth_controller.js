// NPM Packages
import bcrypt from "bcrypt";
// JWT
import { createToken } from "@src/jwt.js";
// Models
import User from "@src/features/user/models/user.js";

export default {
  //
  login: async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }, { password: 0 });
    const userDecrypt = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ status: 404, error: "User not Found" });
    }

    // Decrypt the Password
    if (!(await bcrypt.compare(password, userDecrypt.password))) {
      // Wrong password
      return res.status(401).json({ status: 401, error: "Incorrect email or password" });
    }

    // Create Tokens
    const accessToken = createToken(user);

    return res.json({
      status: 200,
      user,
      accessToken,
    });
  },
};
