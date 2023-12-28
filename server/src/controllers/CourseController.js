const Course = require('../models/Course');
const Log = require('../models/Log');
class CourseController {
  async getCourses(req, res, next) {
    try {
      const queryResult = await Course.getCourses();
      if (queryResult) {
        const result = await Log.addLog(
          res.user.id,
          'Xem danh sách khóa học',
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
          'Xem danh sách khóa học',
          Date.now(),
          false,
        );
        return res.status(400).json({ check: false, msg: 'Không có khóa học' });
      }
    } catch (error) {
      const result = await Log.addLog(
        res.user.id,
        'Xem danh sách khóa học',
        Date.now(),
        false,
      );
      console.error('Error:', error);
      return res.status(500).json({ check: false, msg: 'Lỗi máy chủ' });
    }
  }
  async getCourse(req, res, next) {
    try {
      const { name } = req.query;
      const queryResult = await Course.getCourse(name);
      if (queryResult) {
        const result = await Log.addLog(
          res.user.id,
          'Xem khóa học',
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
          'Xem khóa học',
          Date.now(),
          false,
        );
        return res.status(400).json({ check: false, msg: 'Không có khóa học' });
      }
    } catch (error) {
      const result = await Log.addLog(
        res.user.id,
        'Xem khóa học',
        Date.now(),
        false,
      );
      console.error('Error:', error);
      return res.status(500).json({ check: false, msg: 'Lỗi máy chủ' });
    }
  }
  async addCourse(req, res, next) {
    try {
      const { name, description, paid, prize, maxAttendDate } = req.body;
      const queryResult = await Course.addCourse(
        name,
        description,
        paid,
        prize,
        maxAttendDate,
      );
      if (queryResult) {
        const result = await Log.addLog(
          res.user.id,
          'Thêm khóa học',
          Date.now(),
          true,
        );
        return res.json({
          check: true,
        });
      } else {
        const result = await Log.addLog(
          res.user.id,
          'Thêm khóa học',
          Date.now(),
          false,
        );
        return res
          .status(400)
          .json({ check: false, msg: 'Khóa học đã tồn tại' });
      }
    } catch (error) {
      const result = await Log.addLog(
        res.user.id,
        'Xem khóa học',
        Date.now(),
        false,
      );
      console.error('Error:', error);
      return res.status(500).json({ check: false, msg: 'Lỗi máy chủ' });
    }
  }
  async editCourse(req, res, next) {
    try {
      const { oldname, name, description, paid, prize, maxAttendDate } =
        req.body;
      const queryResult = await Course.updateCourse(
        oldname,
        name,
        description,
        paid,
        prize,
        maxAttendDate,
      );
      if (queryResult) {
        const result = await Log.addLog(
          res.user.id,
          'Chỉnh sửa khóa học',
          Date.now(),
          true,
        );
        return res.json({
          check: true,
        });
      } else {
        const result = await Log.addLog(
          res.user.id,
          'Chỉnh sửa khóa học',
          Date.now(),
          false,
        );
        return res
          .status(400)
          .json({ check: false, msg: 'Khóa học đã tồn tại' });
      }
    } catch (error) {
      const result = await Log.addLog(
        res.user.id,
        'Chỉnh sửa khóa học',
        Date.now(),
        false,
      );
      console.error('Error:', error);
      return res.status(500).json({ check: false, msg: 'Lỗi máy chủ' });
    }
  }
  async removeCourse(req, res, next) {
    try {
      const { name } = req.query;
      const queryResult = await Course.deleteCourse(name);
      if (queryResult) {
        const result = await Log.addLog(
          res.user.id,
          'Xem khóa học',
          Date.now(),
          true,
        );
        return res.json({
          check: true,
        });
      } else {
        const result = await Log.addLog(
          res.user.id,
          'Xóa khóa học',
          Date.now(),
          false,
        );
        return res.status(400).json({
          check: false,
          msg: 'Khóa học không tồn tại hoặc đang có lớp học',
        });
      }
    } catch (error) {
      const result = await Log.addLog(
        res.user.id,
        'Xóa khóa học',
        Date.now(),
        false,
      );
      console.error('Error:', error);
      return res.status(500).json({ check: false, msg: 'Lỗi máy chủ' });
    }
  }
}
module.exports = new CourseController();
