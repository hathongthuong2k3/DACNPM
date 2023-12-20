// document
//   .getElementById("login-button")
//   .addEventListener("click", function (event) {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     const rememberCheckbox = document.getElementById("remember");

//     rememberCheckbox.checked = false;

//     if (username && password) {
//       const urlParams = new URLSearchParams(window.location.search);
//       const actor = urlParams.get("actor");

//       var loginPage = "";

//       // Định nghĩa đường dẫn tới trang đăng nhập dựa trên vai trò (actor) đã trích xuất
//       if (actor === "student") {
//         localStorage.setItem("idRole", 1);
//         loginPage = "../HomePage/homePage.html";
//       } else if (actor === "teacher") {
//         localStorage.setItem("idRole", 2);
//         loginPage = "../HomePage/homePage.html";
//       } else if (actor === "admin") {
//         localStorage.setItem("idRole", 3);
//         loginPage = "../Adminpage/Adminpage.html";
//       } else if (actor === "staff") {
//         localStorage.setItem("idRole", 4);
//         loginPage = "../Staffpage/Staffpage.html";
//       }

//       // Chuyển hướng đến trang đăng nhập tương ứng
//       window.location.href = loginPage;
//     } else {
//       // Hiển thị thông báo hoặc thực hiện xử lý khác nếu có lỗi
//       alert("Vui lòng điền đầy đủ thông tin.");
//     }
//     // Ngăn chặn hành động mặc định của nút submit trong form
//     event.preventDefault();
//   });
if (localStorage.getItem("apitoken")) {
  switch (localStorage.getItem("role")) {
    case "student":
      window.location.replace("../MyCourses/myCourses.html");
      break;
    case "teacher":
      window.location.replace("../MyCourses/myCourses.html");
      break;
    case "staff":
      window.location.replace("../Staffpage/Staffpage.html");
      break;
    case "admin":
      window.location.replace("../Adminpage/Adminpage.html");
      break;
  }
}
$(document).ready(function () {
  login();
});
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

function login() {
  $("#login-button").click(function (e) {
    e.preventDefault();
    const username = $("#username").val();
    const password = $("#password").val();
    const info = {
      username: username,
      userpassword: password,
    };
    $.ajax({
      type: "get",
      url: "http://localhost:3000/users/user",
      data: info,
      dataType: "JSON",
      success: function (res) {
        if (res.check === true) {
          Toast.fire({
            icon: "success",
            title: "Đăng nhập thành công",
          }).then(() => {
            localStorage.setItem("apitoken", res.apitoken);
            localStorage.setItem("role", res.role);
            switch (res.role) {
              case "student":
                window.location.replace("../MyCourses/myCourses.html");
                break;
              case "teacher":
                window.location.replace("../MyCourses/myCourses.html");
                break;
              case "staff":
                window.location.replace("../Staffpage/Staffpage.html");
                break;
              case "admin":
                window.location.replace("../Adminpage/Adminpage.html");
                break;
              default:
                break;
            }
          });
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        Toast.fire({
          icon: "error",
          title: jqXHR.responseJSON.msg,
        });
      },
    });
  });
}
