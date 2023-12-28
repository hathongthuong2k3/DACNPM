var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
const User = require('../models/User');
const Log = require('../models/Log');
var index = 1;

const createApiKey = (data) => {
  var token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 8 * 60 * 60,
      data: data,
    },
    'secret',
  );
  return token;
};
const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: 'thaingocrang2014@gmail.com',
    pass: 'kkxmcqhenpyhqkzv',
  },
  secure: true,
});
const requireApiKey = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ check: false, msg: 'Bạn chưa đăng nhập' });
  }
  const apiKey = req.headers.authorization.split(' ')[1];
  jwt.verify(apiKey, 'secret', async (err, decoded) => {
    if (err || !decoded) {
      return res.status(404).json({ check: false, msg: 'Bạn chưa đăng nhập' });
    } else {
      const queryResult = await User.authUser(
        decoded.data.id,
        decoded.data.role,
      );
      const admin =
        decoded.data.role !== 'admin' &&
        (req.baseUrl === '/admins' ||
          req.baseUrl === '/classes' ||
          req.baseUrl === '/courses' ||
          req.baseUrl === '/register-logs' ||
          req.baseUrl === '/logs');
      const staff = decoded.data.role !== 'staff' && req.baseUrl === '/files';
      if (admin || staff) {
        return res
          .status(403)
          .json({ check: false, msg: 'Đây là nơi không dành cho bạn' });
      }
      if (!queryResult || queryResult == null) {
        return res
          .status(404)
          .json({ check: false, msg: 'Bạn chưa đăng nhập' });
      }
      res.user = queryResult;
      next();
    }
  });
};

const sendMail = async (req, res, next) => {
  const { to, role } = req.query;
  const checkMail = await User.checkEmail(to, role);
  if (!checkMail) {
    return res
      .status(403)
      .json({ check: false, msg: 'Bạn không có quyền đăng ký' });
  } else {
    const mailData = {
      from: 'BK English Center',

      to: to,
      subject: 'Đăng ký tài khoản',
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
        res.status(400).send({
          check: false,
          msg: error,
        });
      }
      res.status(200).send({
        check: true,
        message: 'Mail send',
        message_id: info.messageId,
      });
    });
  }
};
const sendCheer = async (req, res, next) => {
  const { to } = req.query;
  const mailData = {
    from: 'BK English Center',

    to: to,
    subject: 'Tuyên dương',
    html: `
            <b>Chào bạn! </b>
            <br/> 
            <p>Cảm ơn vì đã đồng hành cùng chúng tôi trong suốt thời gian qua</p>
            <br/>
            <p>Thật tốt khi được làm việc chung với bạn</p>`,
  };
  transporter.sendMail(mailData, async (error, info) => {
    if (error) {
      const result = await Log.addLog(
        res.user.id,
        'Gửi email tuyên dương',
        Date.now(),
        false,
      );
      res.status(400).send({
        check: false,
        msg: error,
      });
    } else {
      const result = await Log.addLog(
        res.user.id,
        'Gửi email tuyên dương',
        Date.now(),
        true,
      );
      res.status(200).send({
        check: true,
        message: 'Mail send',
        message_id: info.messageId,
      });
    }
  });
};
const sendPay = async (req, res, next) => {
  const { to } = req.query;
  const mailData = {
    from: 'BK English Center',

    to: to,
    subject: 'Đóng tiền học phí',
    html: `
            <b>Chào bạn! </b>
            <br/> 
            <p>Cảm ơn vì đã đồng hành cùng chúng tôi trong suốt thời gian qua</p>
            <br/>
            <p>Sau khi kiểm tra thì chúng tôi thấy bạn chưa đóng tiền học phí. Hãy đến trung tâm gần nhất để thanh toán</p>`,
  };
  transporter.sendMail(mailData, async (error, info) => {
    if (error) {
      const result = await Log.addLog(
        res.user.id,
        'Gửi thông báo đóng học phí',
        Date.now(),
        false,
      );
      res.status(400).send({
        check: false,
        msg: error,
      });
    } else {
      const result = await Log.addLog(
        res.user.id,
        'Gửi thông báo đóng học phí',
        Date.now(),
        true,
      );
      res.status(200).send({
        check: true,
        message: 'Mail send',
        message_id: info.messageId,
      });
    }
  });
};
const sendSalary = async (req, res, next) => {
  const { to } = req.query;
  const mailData = {
    from: 'BK English Center',

    to: to,
    subject: 'Nhận lương',
    html: `
            <b>Chào bạn! </b>
            <br/> 
            <p>Cảm ơn vì đã đồng hành cùng chúng tôi trong suốt thời gian qua</p>
            <br/>
            <p>Sau khi kiểm tra thì chúng tôi thấy bạn nhận được lượng. Hãy đến trung tâm gần nhất để thanh toán</p>`,
  };
  transporter.sendMail(mailData, async (error, info) => {
    if (error) {
      const result = await Log.addLog(
        res.user.id,
        'Gửi thông báo nhận lương',
        Date.now(),
        false,
      );
      res.status(400).send({
        check: false,
        msg: error,
      });
    } else {
      const result = await Log.addLog(
        res.user.id,
        'Gửi thông báo nhận lương',
        Date.now(),
        true,
      );
      res.status(200).send({
        check: true,
        message: 'Mail send',
        message_id: info.messageId,
      });
    }
  });
};
const sendPrize = async (req, res, next) => {
  const { to } = req.query;
  const mailData = {
    from: 'BK English Center',

    to: to,
    subject: 'Tuyên dương',
    html: `
            <b>Chào bạn! </b>
            <br/> 
            <p>Cảm ơn vì đã đồng hành cùng chúng tôi trong suốt thời gian qua</p>
            <br/>
            <p>Sau quá trình làm việc rất tích cực của bạn, chúng tôi muốn thông báo rằng bạn đã nhận được phần thưởng của trung tâm. Hãy đến trung tâm mà bạn đã học để nhận thưởng</p>`,
  };
  transporter.sendMail(mailData, async (error, info) => {
    if (error) {
      const result = await Log.addLog(
        res.user.id,
        'Gửi thông báo nhận thưởng',
        Date.now(),
        false,
      );
      res.status(400).send({
        check: false,
        msg: error,
      });
    } else {
      const result = await Log.addLog(
        res.user.id,
        'Gửi thông báo nhận thưởng',
        Date.now(),
        true,
      );
      res.status(200).send({
        check: true,
        message: 'Mail send',
        message_id: info.messageId,
      });
    }
  });
};
const sendWarning = async (req, res, next) => {
  const { to } = req.query;
  const mailData = {
    from: 'BK English Center',

    to: to,
    subject: 'Yêu cầu chấn chỉnh',
    html: `
            <b>Chào bạn! </b>
            <br/> 
            <p>Hình như bạn đang có dấu hiệu đi xuống trong làm việc</p>
            <br/>
            <p>Nếu có bất kì điều gì cần trao đổi hãy liên hệ ngay với chúng tôi. Hãy để mỗi ngày đi làm là một niềm vui</p>`,
  };
  transporter.sendMail(mailData, async (error, info) => {
    if (error) {
      const result = await Log.addLog(
        res.user.id,
        'Gửi thông báo cảnh cáo',
        Date.now(),
        false,
      );
      res.status(400).send({
        check: false,
        msg: error,
      });
    } else {
      const result = await Log.addLog(
        res.user.id,
        'Gửi thông báo cảnh cáo',
        Date.now(),
        true,
      );
      res.status(200).send({
        check: true,
        message: 'Mail send',
        message_id: info.messageId,
      });
    }
  });
};
const requireOtp = (req, res, next) => {
  if (req.body.role === 'admin' || req.body.role === 'staff') {
    if (!req.headers.authorization) {
      return res
        .status(403)
        .json({ check: false, msg: 'Bạn không có quyền đăng ký' });
    } else {
      const apiKey = req.headers.authorization.split(' ')[1];
      jwt.verify(apiKey, 'secret', async (err, decoded) => {
        if (err || !decoded) {
          return res
            .status(404)
            .json({ check: false, msg: 'Bạn không có quyền đăng ký' });
        } else {
          if (decoded.data === index) {
            index++;
            next();
          } else {
            return res
              .status(404)
              .json({ check: false, msg: 'Bạn không có quyền đăng ký' });
          }
        }
      });
    }
  } else {
    next();
  }
};
module.exports = {
  requireApiKey,
  createApiKey,
  requireOtp,
  sendMail,
  sendCheer,
  sendPay,
  sendPrize,
  sendWarning,
  sendSalary,
};
