// login.js
module.exports = (req, res, next) => {
  if (req.method == "GET" && req.path == "/emailSendConfig") {
    res.status(200).json({
      smtpFromEmail: "dcgmail@126.com",
      smtpFromUserName: "邮件与订阅服务",
      smtpHost: "smtp.126.com",
      smtpPassword: "dcg2020",
      smtpPost: 25,
      smtpSslEnable: true,
      smtpUserName: "dcgmail@126.com"
    });
  } else if (req.method == "PUT" && req.path == "/emailSendConfig") {
    res.status(200);
  } else {
    next();
  }
};
