const File = require('../models/File');
const Log = require('../models/Log');
class FileController {
  async getFiles(req, res, next) {
    try {
      const queryResult = await File.getFiles();
      if (queryResult) {
        const result = await Log.addLog(
          res.user.id,
          'Xem danh sách tài liệu',
          Date.now(),
          true,
        );
        return res.json({
          check: true,
          data: queryResult,
        });
      } else {
        const result = await Log.addLog(
          res.user.id,
          'Xem danh sách tài liệu',
          Date.now(),
          false,
        );
        return res
          .status(400)
          .json({ check: false, error: 'Không có tài liệu' });
      }
    } catch (error) {
      const result = await Log.addLog(
        res.user.id,
        'Xem danh sách tài liệu',
        Date.now(),
        false,
      );
      console.error('Error:', error);
      return res.status(500).json({ check: false, error: 'Lỗi máy chủ' });
    }
  }
  async addFile(req, res, next) {
    try {
      const {
        teacherName,
        className,
        fileName,
        filetype,
        fileAmount,
        fileStatus,
      } = req.query;
      const queryResult = await File.addFile(
        teacherName,
        className,
        fileName,
        filetype,
        fileAmount,
        fileStatus,
      );
      if (queryResult) {
        const result = await Log.addLog(
          res.user.id,
          'Thêm tài liệu',
          Date.now(),
          true,
        );
        return res.json({
          check: true,
        });
      } else {
        const result = await Log.addLog(
          res.user.id,
          'Thêm tài liệu',
          Date.now(),
          false,
        );
        return res
          .status(400)
          .json({ check: false, error: 'Giáo viên chưa đăng kí lớp' });
      }
    } catch (error) {
      const result = await Log.addLog(
        res.user.id,
        'Xem tài liệu',
        Date.now(),
        false,
      );
      console.error('Error:', error);
      return res.status(500).json({ check: false, error: 'Lỗi máy chủ' });
    }
  }
  async editFile(req, res, next) {
    try {
      const { id, fileName, filetype, fileAmount, fileStatus } = req.query;
      const queryResult = await File.updateFile(
        id,
        fileName,
        filetype,
        fileAmount,
        fileStatus,
      );
      if (queryResult) {
        const result = await Log.addLog(
          res.user.id,
          'Chỉnh sửa tài liệu',
          Date.now(),
          true,
        );
        return res.json({
          check: true,
        });
      } else {
        const result = await Log.addLog(
          res.user.id,
          'Chỉnh sửa tài liệu',
          Date.now(),
          false,
        );
        return res
          .status(400)
          .json({ check: false, error: 'tài liệu không tồn tại' });
      }
    } catch (error) {
      const result = await Log.addLog(
        res.user.id,
        'Chỉnh sửa tài liệu',
        Date.now(),
        false,
      );
      console.error('Error:', error);
      return res.status(500).json({ check: false, error: 'Lỗi máy chủ' });
    }
  }
  async removeFile(req, res, next) {
    try {
      const { id } = req.query;
      const queryResult = await File.deleteFile(id);
      if (queryResult) {
        const result = await Log.addLog(
          res.user.id,
          'Xem tài liệu',
          Date.now(),
          true,
        );
        return res.json({
          check: true,
        });
      } else {
        const result = await Log.addLog(
          res.user.id,
          'Xóa tài liệu',
          Date.now(),
          false,
        );
        return res
          .status(400)
          .json({ check: false, error: 'Tài liệu không tồn tại' });
      }
    } catch (error) {
      const result = await Log.addLog(
        res.user.id,
        'Xóa tài liệu',
        Date.now(),
        false,
      );
      console.error('Error:', error);
      return res.status(500).json({ check: false, error: 'Lỗi máy chủ' });
    }
  }
}
module.exports = new FileController();
