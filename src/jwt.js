import jwt from "jsonwebtoken";

const createToken = (user) => {
  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_JWT, {
    expiresIn: "5h",
  });

  return accessToken;
};

const verifyToken = async (req, res, next) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    //
    return res.json({
      status: 401,
      message: "Não autorizado",
    });
  }

  try {
    const jwtData = jwt.verify(accessToken.split(" ")[1], process.env.ACCESS_TOKEN_JWT);

    req.user = { ...jwtData.user };
  } catch {
    //
    return res.json({
      status: 401,
      message: "Não autorizado",
    });
  }

  return next();
};

export { verifyToken, createToken };
