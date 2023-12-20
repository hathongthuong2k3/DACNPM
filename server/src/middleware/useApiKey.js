var jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");

const User = require("../models/User");
var index = 1;

const createApiKey = (data) => {
  var token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: data,
    },
    "secret"
  );
  return token;
};
const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "thaingocrang2014@gmail.com",
    pass: "kkxmcqhenpyhqkzv",
  },
  secure: true,
});
const requireApiKey = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ check: false, msg: "Bạn chưa đăng nhập" });
  }
  const apiKey = req.headers.authorization.split(" ")[1];
  jwt.verify(apiKey, "secret", async (err, decoded) => {
    if (err || !decoded) {
      return res.status(404).json({ check: false, msg: "Bạn chưa đăng nhập" });
    } else {
      const queryResult = await User.authUser(
        decoded.data.id,
        decoded.data.role
      );
      const admin =
        decoded.data.role !== "admin" &&
        (req.baseUrl === "/admins" ||
          req.baseUrl === "/classes" ||
          req.baseUrl === "/courses" ||
          req.baseUrl === "/register-logs" ||
          req.baseUrl === "/logs");
      const staff = decoded.data.role !== "staff" && req.baseUrl === "/files";
      if (admin || staff) {
        return res
          .status(403)
          .json({ check: false, msg: "Đây là nơi không dành cho bạn" });
      }
      if (!queryResult || queryResult == null) {
        return res
          .status(404)
          .json({ check: false, msg: "Bạn chưa đăng nhập" });
      }
      res.user = queryResult;
      next();
    }
  });
};

const sendMail = async (req, res, next) => {
  const { to, role } = req.query;
  const checkMail = await User.checkEmail(to, role);
  console.log(checkMail);
  if (!checkMail) {
    return res
      .status(403)
      .json({ check: false, msg: "Bạn không có quyền đăng ký" });
  } else {
    const mailData = {
      from: "BK English Center",

      to: to,
      subject: "Đăng ký tài khoản",
      html:
        `
            <b>Chào bạn! </b>
            <br/> 
            <p>Đây là mã xác thực của bạn</p>
            ` +
        createApiKey(index) +
        `<br/>
            <p>Lưu ý: Vui lòng không chia sẻ với bất kì ai khác, mã chỉ có tác dụng trong 5 phút và chỉ sử dụng được 1 lần</p>`,
    };
    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        return console.log(error);
      }
      res.status(200).send({
        check: true,
        message: "Mail send",
        message_id: info.messageId,
      });
    });
  }
};
const requireOtp = (req, res, next) => {
  if (req.body.role === "admin" || req.body.role === "staff") {
    if (!req.headers.authorization) {
      return res
        .status(403)
        .json({ check: false, msg: "Bạn không có quyền đăng ký" });
    } else {
      const apiKey = req.headers.authorization.split(" ")[1];
      jwt.verify(apiKey, "secret", async (err, decoded) => {
        if (err || !decoded) {
          return res
            .status(404)
            .json({ check: false, msg: "Bạn không có quyền đăng ký" });
        } else {
          if (decoded.data === index) {
            index++;
            next();
          } else {
            return res
              .status(404)
              .json({ check: false, msg: "Bạn không có quyền đăng ký" });
          }
        }
      });
    }
  } else {
    next();
  }
};
module.exports = { requireApiKey, createApiKey, requireOtp, sendMail };
