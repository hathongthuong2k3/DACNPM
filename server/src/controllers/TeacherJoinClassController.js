const TeacherJoinClass = require('../models/TeacherJoinClass');

class TeacherJoinClassController {
  async getTeacherJoinClasses(req, res) {
    try {
      const result = await TeacherJoinClass.getTeacherJoinClasses();

      if (result) {
        return res.json({
          check: true,
          data: result,
        });
      } else {
        return res
          .status(400)
          .json({ check: false, msg: 'Không có giáo viên' });
      }
    } catch (error) {
      console.log('Error:', error);
      return res.status(500).json({ check: false, msg: 'Lỗi máy chủ' });
    }
  }
  async addTeacherJoinClass(req, res) {
    try {
      const { idTeacher, idClass, attendDate } = req.body;
      if (!idTeacher || idTeacher == '') {
        return { success: false, check: false, msg: 'idTeacher is required' };
      }
      if (!idClass || idClass == '') {
        return { success: false, check: false, msg: 'idClass is required' };
      }
      if (!attendDate || attendDate == '') {
        return { success: false, check: false, msg: 'attendDate is required' };
      } else {
        const queryResult = await TeacherJoinClass.addTeacherJoinClass(
          idTeacher,
          idClass,
          attendDate,
        );

        if (queryResult) {
          return res.json({
            check: true,
          });
        } else {
          return res
            .status(400)
            .json({ check: false, msg: 'Dữ liệu đã tồn tại' });
        }
      }
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ check: false, msg: 'Lỗi máy chủ' });
    }
  }

  // async editTeacherJoinClass(req, res) {
  //   try {
  //     const {
  //       id,
  //       idTeacher,
  //       idClass,
  //       attendDate,
  //       rating,
  //       paidStatus,
  //       prize,
  //       prizeStatus,
  //     } = req.body;
  //     if (!id || id == "") {
  //       return res
  //         .status(400)
  //         .json({ check: false, msg: "Hãy chọn giáo viên cần chỉnh sửa" });
  //     }
  //     if (!idTeacher || idTeacher == "") {
  //       return res
  //         .status(400)
  //         .json({ check: false, msg: "Hãy chọn giáo viên cần chỉnh sửa" });
  //     }
  //     if (!idClass || idClass == "") {
  //       return res
  //         .status(400)
  //         .json({ check: false, msg: "Hãy chọn lớp cần chỉnh sửa" });
  //     }
  //     if (
  //       (idTeacher && idTeacher !== "") ||
  //       (idClass && idClass !== "") ||
  //       (attendDate && attendDate !== "") ||
  //       (rating && rating !== "") ||
  //       (paidStatus && paidStatus !== "") ||
  //       (prize && prize !== "") ||
  //       (prizeStatus && prizeStatus !== "")
  //     ) {
  //       const queryResult = await TeacherJoinClass.editTeacherJoinClass(
  //         idTeacher,
  //         idClass,
  //         attendDate,
  //         rating,
  //         paidStatus,
  //         prize,
  //         prizeStatus,
  //         id
  //       );

  //       if (queryResult) {
  //         return res.json({
  //           check: true,
  //         });
  //       } else {
  //         return res
  //           .status(400)
  //           .json({ check: false, msg: "Dữ liệu không thay đổi" });
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     return res.status(500).json({ check: false, msg: "Lỗi máy chủ" });
  //   }
  // }
  async updateDate(req, res) {
    try {
      const { id, attendDate, status } = req.body;
      if (!id || id == '') {
        return res
          .status(400)
          .json({ check: false, msg: 'Hãy chọn giáo viên cần chỉnh sửa' });
      }
      if (!attendDate || attendDate == '') {
        return res.status(400).json({ check: false, msg: 'Hãy nhập ngày' });
      }
      if (!status || status == '') {
        return res
          .status(400)
          .json({ check: false, msg: 'Hãy nhập trạng thái' });
      } else {
        const queryResult = await TeacherJoinClass.updateDate(
          attendDate,
          status,
          id,
        );

        if (queryResult) {
          return res.json({
            check: true,
          });
        } else {
          return res
            .status(400)
            .json({ check: false, msg: 'Dữ liệu không thay đổi' });
        }
      }
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ check: false, msg: 'Lỗi máy chủ' });
    }
  }
  async updateRating(req, res) {
    try {
      const { id, rating } = req.body;
      if (!id || id == '') {
        return res
          .status(400)
          .json({ check: false, msg: 'Hãy chọn giáo viên cần chỉnh sửa' });
      }
      if (!rating || rating == '') {
        return res.status(400).json({ check: false, msg: 'Hãy nhập đánh giá' });
      } else {
        const queryResult = await TeacherJoinClass.updateRating(rating, id);
        if (queryResult) {
          return res.json({
            check: true,
          });
        } else {
          return res
            .status(400)
            .json({ check: false, msg: 'Dữ liệu không thay đổi' });
        }
      }
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ check: false, msg: 'Lỗi máy chủ' });
    }
  }
  async updateSalary(req, res) {
    try {
      const { id, paidStatus } = req.body;
      if (!id || id == '') {
        return res
          .status(400)
          .json({ check: false, msg: 'Hãy chọn giáo viên cần chỉnh sửa' });
      }
      if (!paidStatus || paidStatus == '') {
        return res
          .status(400)
          .json({ check: false, msg: 'Hãy chọn trạng thái' });
      } else {
        const queryResult = await TeacherJoinClass.updateSalary(paidStatus, id);
        if (queryResult) {
          return res.json({
            check: true,
          });
        } else {
          return res
            .status(400)
            .json({ check: false, msg: 'Dữ liệu không thay đổi' });
        }
      }
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ check: false, msg: 'Lỗi máy chủ' });
    }
  }
  async updatePrize(req, res) {
    try {
      const { id, prizeStatus } = req.body;
      if (!id || id == '') {
        return res
          .status(400)
          .json({ check: false, msg: 'Hãy chọn giáo viên cần chỉnh sửa' });
      }
      if (!prizeStatus || prizeStatus == '') {
        return res
          .status(400)
          .json({ check: false, msg: 'Hãy chọn trạng thái' });
      } else {
        const queryResult = await TeacherJoinClass.updatePrize(prizeStatus, id);
        if (queryResult) {
          return res.json({
            check: true,
          });
        } else {
          return res
            .status(400)
            .json({ check: false, msg: 'Dữ liệu không thay đổi' });
        }
      }
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ check: false, msg: 'Lỗi máy chủ' });
    }
  }
  async deleteSalary(req, res) {
    try {
      const { id } = req.body;
      if (!id || id == '') {
        return res
          .status(400)
          .json({ check: false, msg: 'Hãy chọn giáo viên cần chỉnh sửa' });
      } else {
        const queryResult = await TeacherJoinClass.deleteSalary(id);
        if (queryResult) {
          return res.json({
            check: true,
          });
        } else {
          return res
            .status(400)
            .json({ check: false, msg: 'Dữ liệu không thay đổi' });
        }
      }
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ check: false, msg: 'Lỗi máy chủ' });
    }
  }
  async deletePrize(req, res) {
    try {
      const { id } = req.body;
      if (!id || id == '') {
        return res
          .status(400)
          .json({ check: false, msg: 'Hãy chọn giáo viên cần chỉnh sửa' });
      } else {
        const queryResult = await TeacherJoinClass.deletePrize(id);
        if (queryResult) {
          return res.json({
            check: true,
          });
        } else {
          return res
            .status(400)
            .json({ check: false, msg: 'Dữ liệu không thay đổi' });
        }
      }
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ check: false, msg: 'Lỗi máy chủ' });
    }
  }
  async deleteTeacherJoinClass(req, res) {
    try {
      const { id } = req.body;

      if (!id || id == '') {
        return res
          .status(400)
          .json({ check: false, msg: 'Hãy chọn giáo viên cần xóa' });
      }

      const queryResult = await TeacherJoinClass.deleteTeacherJoinClass(id);
      if (queryResult) {
        return res.json({
          check: true,
        });
      } else {
        return res
          .status(400)
          .json({ check: false, msg: 'Giáo viên không dạy lớp này' });
      }
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ check: false, msg: 'Lỗi máy chủ' });
    }
  }
}

module.exports = new TeacherJoinClassController();
