export const modifyMessage = (req, res, next) => {
  req.body.time = `${req.body.time}`;
  next();
};
