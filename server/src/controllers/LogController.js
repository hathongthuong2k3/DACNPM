const Log = require('../models/Log');
class LogController {
  async getLogs(req, res, next) {
    try {
      const queryResult = await Log.getLogs();
      if (queryResult) {
        return res.json({
          check: true,
          data: queryResult,
        });
      } else {
        return res
          .status(400)
          .json({ check: false, error: 'Không có lịch sử' });
      }
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ check: false, error: 'Lỗi máy chủ' });
    }
  }
  async getLog(req, res, next) {
    try {
      const { id } = req.query;
      const queryResult = await Log.getLog(id);
      if (queryResult) {
        return res.json({
          check: true,
          data: queryResult,
        });
      } else {
        return res
          .status(400)
          .json({ check: false, error: 'Không có lịch sử' });
      }
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ check: false, error: 'Lỗi máy chủ' });
    }
  }
  async addLog(req, res, next) {
    try {
      const queryResult = await Log.addLog();
      if (queryResult) {
        return res.json({
          check: true,
        });
      } else {
        return res
          .status(400)
          .json({ check: false, error: 'Lịch sử đã tồn tại' });
      }
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ check: false, error: 'Lỗi máy chủ' });
    }
  }
  // async editLog(req, res, next) {
  //   try {
  //     const string = req.headers.authorization;
  //     if (!string) return res.status(403).json({ check: false, error: 'Bạn chưa đăng nhập' });
  //     const check = await requireApiKey(string.split(" ")[1]);
  //     if (!check || check == null) {
  //       return res.status(403).json({ check: false, error: 'Bạn chưa đăng nhập' });
  //     }
  //     if (check.role !== 'admin') {
  //       return res.status(403).json({ check: false, error: 'Đây là nơi không dành cho bạn' });
  //     }
  //     const queryResult = await Log.addLog();
  //     if (queryResult) {
  //       return res.json({
  //         check: true
  //       });
  //     } else {
  //       return res
  //         .status(400)
  //         .json({ check: false, error: 'Không có lớp học' });
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     return res.status(500).json({ check: false, error: 'Lỗi máy chủ' });
  //   }
  // }
}
module.exports = new LogController();
