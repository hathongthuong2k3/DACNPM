if (!localStorage.getItem("apitoken")) {
  window.location.replace("../Loginpage/Login.html");
} else if (localStorage.getItem("role") === "student") {
  $(document).ready(function () {
    loadCourses(studentCourses);
  });
} else if (localStorage.getItem("role") === "teacher") {
  $(document).ready(function () {
    loadCourses(teacherCourses);
  });
}

var studentCourses = [
  {
    courseName: "AVGT1",
    courseDate: "9/8/2023",
    courseStatus: "Đã học xong",
  },
  {
    courseName: "IELTS1",
    courseDate: "12/10/2023",
    courseStatus: "Đang học",
  },
  {
    courseName: "IELTS2",
    courseDate: "4/11/2023",
    courseStatus: "Chưa học",
  },
];

var teacherCourses = [
  {
    courseName: "AVGT1",
    courseDate: "9/8/2023",
    courseStatus: "Đã dạy",
  },
  {
    courseName: "IELTS1",
    courseDate: "12/10/2023",
    courseStatus: "Đang dạy",
  },
  {
    courseName: "IELTS2",
    courseDate: "4/11/2023",
    courseStatus: "Chưa dạy",
  },
];

function loadCourses(courseList) {
  courseList.forEach((element, index) => {
    $("#course-list").append(
      `<tr>
                <th scope="row" class="course-no">` +
        (index + 1) +
        `</th>
                <td class="course-name">` +
        element.courseName +
        `</td>
                <td class="course-date">` +
        element.courseDate +
        `</td>
                <td class="course-status">` +
        element.courseStatus +
        `</td>
            </tr>`
    );
  });
}
