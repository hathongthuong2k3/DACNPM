var path =
  window.location.pathname.split("/")[
    window.location.pathname.split("/").length - 1
  ];
if (
  !localStorage.getItem("apitoken") &&
  (path === "Adminpage.html" ||
    path === "Attendstaffpage.html" ||
    path === "Attendstupage.html" ||
    path === "Attendteapage.html" ||
    path === "Fileteapage.html" ||
    path === "Infostaffpage.html" ||
    path === "Infoteapage.html" ||
    path === "Infostupage.html" ||
    path === "manageCoursePage.html" ||
    path === "Markstupage.html" ||
    path === "Paystaffpage.html" ||
    path === "Payteapage.html" ||
    path === "Paystupage.html" ||
    path === "Rateteapage.html" ||
    path === "Staffpage.html" ||
    path === "Stataccesspage.html" ||
    path === "Stataccesspage.html" ||
    path === "Statfinancialpage.html")
) {
  window.location.replace("../Loginpage/Login.html");
}
function getInfo() {
  if (localStorage.getItem("apitoken")) {
    $.ajax({
      type: "get",
      url: "http://localhost:3000/users/info",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("apitoken"),
      },
      dataType: "JSON",
      success: function (res) {
        localStorage.setItem("user", JSON.stringify(res.data));
        $("#title-name").html(res.data.name);
        $("#title-email").html(res.data.email);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        localStorage.clear();
        window.location.replace("../Loginpage/Login.html");
      },
    }).then(() => {
      if (localStorage.getItem("role") === "student") {
        $("#user-name").html(JSON.parse(localStorage.getItem("user")).name);
        $("#user-role").html("Học viên");
        $("#user-avt").attr(
          "src",
          JSON.parse(localStorage.getItem("user")).image === null
            ? "https://th.bing.com/th/id/OIP.CVdkzge14K0HJZWZg5DiMQHaHn?pid=ImgDet&rs=1"
            : JSON.parse(localStorage.getItem("user")).image
        );
      } else if (localStorage.getItem("role") === "teacher") {
        $("#user-name").html(JSON.parse(localStorage.getItem("user")).name);
        $("#user-role").html("Giảng viên");
        $("#user-avt").attr(
          "src",
          JSON.parse(localStorage.getItem("user")).image === null
            ? "https://th.bing.com/th/id/OIP.CVdkzge14K0HJZWZg5DiMQHaHn?pid=ImgDet&rs=1"
            : JSON.parse(localStorage.getItem("user")).image
        );
      }
      loadModal();
      loadModal1();
    });
  }
}
$(document).ready(function () {
  getInfo();
  signout();
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

function loadModal() {
  const user = JSON.parse(localStorage.getItem("user"));
  var dateOfBirth = new Date(user.dateofbirth);
  var timezoneOffset = dateOfBirth.getTimezoneOffset();
  dateOfBirth.setMinutes(dateOfBirth.getMinutes() - timezoneOffset);

  $("#userinfo").click(function (e) {
    e.preventDefault();
    var str = "";
    str +=
      `
                    <div class="col-span-2">
                        <form>
                            <div>
                                <div class="gap-6 mb-6">
                                    <label for="full_name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ
                                        và tên</label>
                                    <input type="text" id="full_name" disabled
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Nguyễn Văn A" value="` +
      user.name +
      `" required>
                                </div>
                            </div>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="dob"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Năm
                                        sinh</label>
                                    <input type="date" id="dob" disabled
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value=` +
      dateOfBirth.toISOString().split("T")[0] +
      `   required>
                                </div>
                                <div>
                                    <label for="gender"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giới
                                        tính</label>
                                    <div class="flex">
                                        <div class="flex items-center mt-3 mr-4">
                                        `;
    if (user.sex === "M") {
      str += `<input disabled checked id="inline-radio" type="radio"
                                            value="Nam" name="inline-radio-group"
                                            class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">`;
    } else {
      str += `<input disabled id="inline-radio" type="radio"
            value="Nam" name="inline-radio-group"
            class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">`;
    }
    str += `
                                            
                                            <label for="inline-radio"
                                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nam</label>
                                        </div>
                                        <div class="flex items-center mt-3 mr-4">
                                        `;
    if (user.sex === "F") {
      str += `<input disabled checked id="inline-2-radio" type="radio"
            value="Nữ" name="inline-radio-group"
            class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">`;
    } else {
      str += `<input disabled id="inline-2-radio" type="radio"
            value="Nữ" name="inline-radio-group"
            class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">`;
    }
    str +=
      `<label for="inline-2-radio"
                                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nữ</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="gap-6 mb-6">
                                <div>
                                    <label for="address"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa
                                        chỉ</label>
                                    <input disabled type="text" id="address"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="" value="` +
      user.address +
      `" required>
                                </div>
                            </div>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="phone"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số
                                        điện thoại</label>
                                    <input disabled type="tel" id="phone"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="0912345678" pattern="[0-9]{10}" value="` +
      user.phone +
      `" required>
                                </div>
                                <div>
                                    <label for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa
                                        chỉ email</label>
                                    <input type="email" id="email" disabled
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="nguyenvana@company.com" value="` +
      user.email +
      `" required>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="" style="margin-top: 2vh;">
                        <label for="dropzone-file"
                            class="flex flex-col items-center justify-center w-full h-64 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mb-10">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <img src="https://th.bing.com/th/id/OIP.CVdkzge14K0HJZWZg5DiMQHaHn?pid=ImgDet&rs=1"
                                    alt="">
                                <input disabled id="dropzone-file" type="file" class="hidden" />
                            </div>
                        </label>

                        <div class="w-full gap-4">
                        </div>
                    </div>
                `;
    $("#userModal").html(str);
    // $('#closeBtn').click(function (e) {
    //     e.preventDefault();
    //     $('#default-modal').html('');
    // });
  });
}
function loadModal1() {
  const user = JSON.parse(localStorage.getItem("user"));
  var dateOfBirth = new Date(user.dateofbirth);
  var timezoneOffset = dateOfBirth.getTimezoneOffset();
  dateOfBirth.setMinutes(dateOfBirth.getMinutes() - timezoneOffset);
  $("#userinfo").click(function (e) {
    e.preventDefault();
    var str = "";
    str += `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-auto">
                        <form>
                            <div class="mb-4">
                                <label for="full_name" class="form-label">Họ và tên</label>
                                <input type="text" id="full_name" disabled class="form-control" placeholder="Nguyễn Văn A" value="${
                                  user.name
                                }" required>
                            </div>
                            <div class="row mb-4">
                                <div class="col">
                                    <label for="dob" class="form-label">Năm sinh</label>
                                    <input type="date" id="dob" disabled class="form-control" value="${
                                      dateOfBirth.toISOString().split("T")[0]
                                    }" required>
                                </div>
                                <div class="col">
                                    <label class="form-label">Giới tính</label>
                                    <div class="form-check">
                                        <input disabled ${
                                          user.sex === "M" ? "checked" : ""
                                        } id="inline-radio" type="radio" value="M" name="inline-radio-group" class="form-check-input">
                                        <label for="inline-radio" class="form-check-label">Nam</label>
                                    </div>
                                    <div class="form-check">
                                        <input disabled ${
                                          user.sex === "F" ? "checked" : ""
                                        } id="inline-2-radio" type="radio" value="F" name="inline-radio-group" class="form-check-input">
                                        <label for="inline-2-radio" class="form-check-label">Nữ</label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label for="address" class="form-label">Địa chỉ</label>
                                <input disabled type="text" id="address" class="form-control" placeholder="" value="${
                                  user.address
                                }" required>
                            </div>
                            <div class="row mb-4">
                                <div class="col">
                                    <label for="phone" class="form-label">Số điện thoại</label>
                                    <input disabled type="tel" id="phone" class="form-control" placeholder="0912345678" pattern="[0-9]{10}" value="${
                                      user.phone
                                    }" required>
                                </div>
                                <div class="col">
                                    <label for="email" class="form-label">Địa chỉ email</label>
                                    <input type="email" id="email" disabled class="form-control" placeholder="nguyenvana@company.com" value="${
                                      user.email
                                    }" required>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-4 ml-auto mr-auto">
                        <div class="d-flex flex-column align-items-center justify-content-center w-100 h-100">
                            <label for="dropzone-file" class="border border-dashed rounded-lg cursor-pointer bg-light p-0">
                                <div class="d-flex flex-column align-items-center justify-content-center">
                                    <img src="https://th.bing.com/th/id/OIP.CVdkzge14K0HJZWZg5DiMQHaHn?pid=ImgDet&rs=1" alt="" class="img-fluid w-100">
                                    <input disabled id="dropzone-file" type="file" class="hidden d-none">
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        `;
    $("#userModal1").html(str);
  });
}

function signout() {
  $("#signout").click(function (e) {
    e.preventDefault();
    Swal.fire({
      title: "Bạn chắc chứ?",
      text: "Bạn đang đăng xuất",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
    }).then((result) => {
      if (result.isConfirmed) {
        Toast.fire({
          icon: "success",
          title: "Đăng xuất thành công",
        }).then(() => {
          localStorage.clear();
          window.location.replace("../HomePage/homePage.html");
        });
      }
    });
  });
}
