const User = require("../models/User");
const { createApiKey, requireApiKey } = require("../middleware/useApiKey");
const RegisterLog = require("../models/RegisterLog");
const { createHash, checkPassword } = require("../middleware/usePassword");

class UserController {
  // [GET] /login
  async login(req, res) {
    try {
      const { username, userpassword } = req.query;
      if (!username || username === "") {
        return res
          .status(400)
          .json({ check: false, msg: "Chưa nhập tài khoản" });
      }
      if (!userpassword || userpassword === "") {
        return res
          .status(400)
          .json({ check: false, msg: "Chưa nhập mật khẩu" });
      }
      const queryResult = await User.getUser(username);
      if (queryResult) {
        const result = await checkPassword(userpassword, queryResult.password);
        if (result) {
          const user = {
            id: queryResult.id,
            role: queryResult.role,
          };
          return res.json({
            check: true,
            apitoken: createApiKey(user),
            role: queryResult.role,
          });
        } else {
          return res.status(404).json({ check: false, msg: "Sai mật khẩu" });
        }
      } else {
        return res
          .status(404)
          .json({ check: false, msg: "Tài khoản không tồn tại" });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ check: false, msg: "Lỗi máy chủ" });
    }
  }
  async getInfo(req, res) {
    try {
      const queryResult = await User.getInfo(res.user.id, res.user.role);
      if (queryResult) {
        return res.json({
          check: true,
          data: queryResult,
        });
      } else {
        return res
          .status(404)
          .json({ check: false, msg: "Tài khoản không tồn tại" });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ check: false, msg: "Lỗi máy chủ" });
    }
  }

  async addAccount(req, res) {
    try {
      const {
        username,
        userpassword,
        name,
        email,
        dob,
        sex,
        phone,
        address,
        role,
        key,
      } = req.body;
      if (!username || username == "") {
        return res
          .status(400)
          .json({ check: false, msg: "Chưa nhập tài khoản" });
      }
      if (!userpassword || userpassword == "") {
        return res
          .status(400)
          .json({ check: false, msg: "Chưa nhập mật khẩu" });
      }
      if (!name || name == "") {
        return res.status(400).json({ check: false, msg: "Chưa nhập tên" });
      }
      if (!email || email == "") {
        return res.status(400).json({ check: false, msg: "Chưa nhập email" });
      }
      if (!dob || dob == "") {
        return res
          .status(400)
          .json({ check: false, msg: "Chưa nhập ngày sinh" });
      }
      if (!sex || sex == "") {
        return res
          .status(400)
          .json({ check: false, msg: "Chưa nhập giới tính" });
      }
      if (!phone || phone == "") {
        return res
          .status(400)
          .json({ check: false, msg: "Chưa nhập số điện thoại" });
      }
      if (!address || address == "") {
        return res.status(400).json({ check: false, msg: "Chưa nhập địa chỉ" });
      }
      if (!role || role == "") {
        return res.status(400).json({ check: false, msg: "Không có vai trò" });
      }
      const password = await createHash(userpassword);
      const queryResult = await User.addUser(
        username,
        password,
        name,
        email,
        dob,
        sex,
        phone,
        address,
        role
      );
      if (queryResult) {
        const result = await RegisterLog.addRegisterLog(
          email,
          Date.now(),
          username
        );
        return res.json({
          check: true,
        });
      } else {
        return res
          .status(400)
          .json({ check: false, msg: "Tài khoản đã tồn tại" });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ check: false, msg: "Lỗi máy chủ" });
    }
  }
  async changeAccount(req, res) {
    try {
      //const string = req.headers.authorization;
      const { name, email, dob, sex, phone, address } = req.query;
      //console.log(string.split(" ")[1])
      if (!name || name == "") {
        return res.status(400).json({ check: false, msg: "Chưa nhập tên" });
      }
      if (!email || email == "") {
        return res.status(400).json({ check: false, msg: "Chưa nhập email" });
      }
      if (!dob || dob == "") {
        return res
          .status(400)
          .json({ check: false, msg: "Chưa nhập ngày sinh" });
      }
      if (!sex || sex == "") {
        return res
          .status(400)
          .json({ check: false, msg: "Chưa nhập giới tính" });
      }
      if (!phone || phone == "") {
        return res
          .status(400)
          .json({ check: false, msg: "Chưa nhập số điện thoại" });
      }
      if (!address || address == "") {
        return res.status(400).json({ check: false, msg: "Chưa nhập địa chỉ" });
      }
      const queryResult = await User.updateUser(
        res.user.id,
        name,
        email,
        dob,
        sex,
        phone,
        address,
        res.id.role
      );
      if (queryResult == true) {
        const result = await Log.addLog(
          res.user.id,
          "Chỉnh sửa tài khoản",
          Date.now(),
          true
        );
        return res.json({
          check: true,
          msg: "Thay đổi dữ liệu thành công",
        });
      } else {
        const result = await Log.addLog(
          res.user.id,
          "Chỉnh sửa tài khoản",
          Date.now(),
          false
        );
        return res.status(400).json({ check: false, msg: "Dữ liệu không đổi" });
      }
    } catch (error) {
      const result = await Log.addLog(
        res.user.id,
        "Chỉnh sửa tài khoản",
        Date.now(),
        false
      );
      console.error("Error:", error);
      return res.status(500).json({ check: false, msg: "Lỗi máy chủ" });
    }
  }
}

module.exports = new UserController();
