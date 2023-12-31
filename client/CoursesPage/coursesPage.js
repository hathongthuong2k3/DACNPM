// var card = [
//     {title: "Toeic 4 kỹ năng", str: "Khóa học Luyện thi TOEIC 4 kỹ năng sẽ trang bị cho bạn những kiến thức và kỹ năng cần thiết để chinh phục kỳ thi TOEIC. Với đội ngũ giáo viên giỏi chuyên TOEIC cùng phương pháp giảng dạy hiệu quả, khóa học sẽ giúp bạn nâng cao toàn diện trình độ tiếng Anh và tự tin chinh phục kỳ thi TOEIC.", image: "../img/TOEIC-5.png", href: "../CoursesPageDetail/CoursesPageDetail.html?id=0" },
//     {title: "IELTS", str: "Bạn đang cần luyện thi IELTS để du học, định cư hay chứng minh trình độ tiếng Anh? Hãy tham gia ngay khóa học IELTS tại SEP English! Với mục tiêu giúp học viên chinh phục thành công kỳ thi IELTS, khóa học sẽ cung cấp cho bạn một lộ trình ôn luyện kỹ lưỡng và bài bản cả 4 kỹ năng Nghe - Nói - Đọc - Viết.", image: "../img/IELTS-1.png", href: "../CoursesPageDetail/CoursesPageDetail.html?id=1" },
//     {title: "AV Giao Tiếp", str: "Anh Văn Giao Tiếp là khóa học thiết thực giúp bạn nâng cao khả năng giao tiếp tiếng Anh trong cuộc sống. Với mục tiêu giúp học viên tự tin sử dụng tiếng Anh trong giao tiếp thường nhật, khóa học sẽ cung cấp cho bạn những kiến thức và kỹ năng cần thiết.", image: "../img/AVGT-1.png", href: "../CoursesPageDetail/CoursesPageDetail.html?id=2" },
//     {title: "AV Thiếu Nhi", str: "Khóa học Anh văn thiếu nhi tại SEP được thiết kế đặc biệt để kích thích sự tò mò, sáng tạo, và khám phá của trẻ qua việc học tiếng Anh. Chúng tôi áp dụng phương pháp học thông qua trò chơi, hình ảnh, và hoạt động thú vị, giúp trẻ học một cách tự nhiên và hiệu quả.", image: "../img/avtn-1.png", href: "../CoursesPageDetail/CoursesPageDetail.html?id=3" }
// ];

$(document).ready(function () {
  $(".course-list").empty();
  $.ajax({
    type: "get",
    url: "http://localhost:3000/courses/all",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("apitoken"),
    },
    dataType: "JSON",
    success: function (res) {
      var str = "";
      res.data.forEach(function (el, index) {
        str += `
                    <li class="course">
                        <h3>${index + 1}. ${el.name}</h3>
                        <p>${el.short}</p>
                        <div class="course__card">
                            <div class="card__left">
                                <img src="${
                                  el.imgintro
                                }" alt="" class="course__image">
                            </div>
                            <div class="card__right">
                                <h2> Khoá học ${el.name}</h2>
                                <a class="more" href="../CoursesPageDetail/CoursesPageDetail.html?id=${index}" role="button">Tìm hiểu thêm</a>
                            </div>
                        </div>
                    </li>`;
        $(".course-list").html(str);
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      Toast.fire({
        icon: "error",
        title: jqXHR.responseJSON.msg,
      });
    },
  });
});
