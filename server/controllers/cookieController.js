const cookieController = {};

cookieController.setUserIDCookie = (req, res, next) => {
  res.cookie("userID", res.locals.userId, {
    httpOnly: true,
    secure: true,
    maxAge: 60000,
  });
  next();
};
