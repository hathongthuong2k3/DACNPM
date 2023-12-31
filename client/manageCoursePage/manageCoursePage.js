// var courseData = [
//   {
//     course: "IELTS",
//     fee: 5000000,
//     salary: 4000000,
//     description: "Hello",
//     time: 2,
//   },
//   {
//     course: "TOEFL",
//     fee: 4500000,
//     salary: 3800000,
//     description: "Hi",
//     time: 1.5,
//   },
//   {
//     course: "GRE",
//     fee: 5500000,
//     salary: 4200000,
//     description: "Hola",
//     time: 2.5,
//   },
//   {
//     course: "GMAT",
//     fee: 6000000,
//     salary: 4500000,
//     description: "Bonjour",
//     time: 3,
//   },
//   {
//     course: "SAT",
//     fee: 4800000,
//     salary: 3600000,
//     description: "Ciao",
//     time: 2,
//   },
// ];
var courseData;
$(document).ready(function () {
  loadData();
  loadAddData();
});
function loadData() {
  $.ajax({
    type: "get",
    url: "http://localhost:3000/courses",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("apitoken"),
    },
    dataType: "JSON",
    success: function (res) {
      courseData = res.data;
      res.data.forEach((el, index) => {
        str +=
          `<tr
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="px-6 py-4">
            ` +
          el["name"] +
          `
        </td>
        <td class="px-6 py-4">
        ` +
          el["paidStudent"].toLocaleString("en-US") +
          ` đ
        </td>
        <td class="px-6 py-4">
        ` +
          el["prizeStudent"].toLocaleString("en-US") +
          ` đ
        </td>
        <td class="px-6 py-4">
        ` +
          el["paidTeacher"].toLocaleString("en-US") +
          ` đ
        </td>
        <td class="px-6 py-4">
        ` +
          el["prizeTeacher"].toLocaleString("en-US") +
          ` đ
        </td>
        <td class="px-6 py-4">
        ` +
          el["maxAttendDate"] +
          ` buổi
        </td>
        <td class="px-6 py-4 flex justify-center">
<button type="button" data-modal-target="extralarge-modal" data-modal-toggle="extralarge-modal" data-id=` +
          index +
          ` data-tooltip-target="detail"
                class="detailBtn flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
    </svg>
                <div id="detail" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Chi tiết
                    <div class="tooltip-arrow" data-popper-arrow></div>
            </button>
            <button type="button" data-id=` +
          index +
          ` data-tooltip-target="update"
                class="editBtn flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 20 18">
                    <path
                        d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                    <path
                        d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                </svg>
                <div id="update" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Chỉnh sửa
                    <div class="tooltip-arrow" data-popper-arrow></div>
            </button>
            <button type="button" data-tooltip-target="delete"
                class="deleteBtn flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                data-id=` +
          index +
          `>
                <svg class="w-5 h-5 text-gray-500 hover:text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 18 20">
                    <path
                        d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                </svg>
                <div id="delete" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Xóa
                    <div class="tooltip-arrow" data-popper-arrow></div>
            </button>
        </td>
        </tr>`;
      });
      $("#course").html(str);
      loadEditData();
      loadDetailData();
      deleteData();
    },
  });
  var str = "";
}
function loadDetailData() {
  $(".detailBtn").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("data-id");
    $("#nameCourse").html(courseData[id].name);
    let str = "";
    str +=
      `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td class="px-6 py-4">
          ` +
      courseData[id].imgintro +
      `
      </td>
      <td class="px-6 py-4">
      ` +
      courseData[id].short +
      `
      </td>
      <td class="px-6 py-4">
      ` +
      courseData[id].img +
      `
      </td>
      <td class="px-6 py-4">
      ` +
      courseData[id].intro +
      `
      </td>
      <td class="px-6 py-4">
      ` +
      courseData[id].description +
      `
      </td>
  </tr>`;
    $("#detail1").html(str);
  });
}
function loadAddData() {
  $(".addModal").click(function (e) {
    e.preventDefault();
    $(".addModal").addClass("hidden");
    var str = "";
    str += `
            <div class="mb-5 gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <form id="addForm">
                <div class="grid gap-6 mb-6 md:grid-cols-4">
                    <div>
                        <label for="courseName"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lớp học</label>
                        <input type="text" id="courseName"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="IELTS"
                            required>
                    </div>
                    <div>
                        <label for="imgintro"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hình giới thiệu</label>
                        <input type="text" id="imgintro"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="...." required>
                    </div>
                    <div>
                        <label for="short"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả ngắn</label>
                        <input type="text" id="short"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="...." required>
                    </div>
                    <div>
                        <label for="img"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hình mô tả</label>
                        <input type="text" id="img"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="...." required>
                    </div>
                    <div>
                        <label for="intro"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giới thiệu</label>
                        <input type="text" id="intro"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="...." required>
                    </div>
                    <div>
                        <label for="description"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả</label>
                        <input type="text" id="description"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="...." required>
                    </div>
                    <div>
                        <label for="fee"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Học phí</label>
                        <input type="text" id="fee"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1000000"
                            required>
                    </div>
                    <div>
                        <label for="prizeStudent"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Học bổng</label>
                        <input type="text" id="prizeStudent"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1000000" required>
                    </div>
                    <div>
                        <label for="salary"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lương</label>
                        <input type="text" id="salary"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1000000"
                            required>
                    </div>
                    <div>
                        <label for="prizeTeacher"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thưởng</label>
                        <input type="text" id="prizeTeacher"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1000000" required>
                    </div>
                    <div>
                        <label for="time"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thời gian</label>
                        <input type="number" id="time"
                            class="disabled bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1 tháng" required>
                    </div>
                </div>
        </form>
        <div style="margin-top: 4vh;">
            <div class="w-full flex justify-between">
            <button type="submit" 
                    class="closeBtn inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span
                        class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Hủy
                    </span>
                </button>
                <button form="addForm" type="submit"
                    class="submitAddBtn inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 hover:text-white">
                    <span
                        class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Thêm
                    </span>
                </button>
            </div>
        </div>
        </div>
        </div>
        `;
    $("#addModal").html(str);
    $("#addModal").removeClass("invisible opacity-0");
    $("#addModal").addClass("opacity-100");
    $("#editModal").addClass("invisible opacity-0");
    $("#editModal").removeClass("opacity-100");
    setTimeout(function () {
      $("#editModal").html("");
    }, 200);
    $(".closeBtn").click(function (e) {
      $("#addModal").removeClass("opacity-100");
      $("#addModal").addClass("invisible opacity-0");
      setTimeout(function () {
        $(".addModal").removeClass("hidden");
        $("#addModal").html("");
      }, 200);
    });
    addData();
  });
}
function addData() {
  $(".submitAddBtn").click(function (e) {
    e.preventDefault();
    var courseName = $("#courseName").val();
    var intro = $("#intro").val();
    var imgintro = $("#imgintro").val();
    var img = $("#img").val();
    var short = $("#short").val();
    var description = $("#description").val();
    var fee = $("#fee").val();
    var salary = $("#salary").val();
    var prizeStudent = $("#prizeStudent").val();
    var prizeTeacher = $("#prizeTeacher").val();
    var time = $("#time").val();
    if (
      !courseName ||
      !fee ||
      !prizeStudent ||
      !prizeTeacher ||
      !intro ||
      !imgintro ||
      !img ||
      !short ||
      !salary ||
      !description ||
      !time
    ) {
      Toast.fire({
        icon: "error",
        title: "Vui lòng nhập đầy đủ thông tin",
      });
      return;
    }
    $.ajax({
      type: "post",
      url: "http://localhost:3000/courses/course",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("apitoken"),
      },
      data: {
        name: courseName,
        intro: intro,
        img: img,
        imgintro: imgintro,
        short: short,
        description: description,
        paidStudent: Number(fee),
        prizeStudent: Number(prizeStudent),
        paidTeacher: Number(salary),
        prizeTeacher: Number(prizeTeacher),
        maxAttendDate: Number(time),
      },
      dataType: "JSON",
      success: function (res) {
        Toast.fire({
          icon: "success",
          title: "Thêm khóa học thành công",
        }).then(() => {
          $("#addModal").removeClass("opacity-100");
          $("#addModal").addClass("invisible opacity-0");
          setTimeout(function () {
            $(".addModal").removeClass("hidden");
            $("#addModal").html("");
          }, 200);
          loadData();
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
}
function loadEditData() {
  $(".editBtn").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("data-id");
    var str = "";
    str +=
      `
      <div class="mb-5 gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <form id="addForm">
          <div class="grid gap-6 mb-6 md:grid-cols-4">
              <div>
                  <label for="courseName"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lớp học</label>
                  <input type="text" id="courseName"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="` +
      courseData[id].name +
      `" data-value="` +
      courseData[id].name +
      `"
                      placeholder="IELTS"
                      required>
              </div>
              <div>
                  <label for="imgintro"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hình giới thiệu</label>
                  <input type="text" id="imgintro"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="` +
      courseData[id].imgintro +
      `"
                      placeholder="...." required>
              </div>
              <div>
                  <label for="short"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả ngắn</label>
                  <input type="text" id="short"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="` +
      courseData[id].short +
      `"
                      placeholder="...." required>
              </div>
              <div>
                  <label for="img"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hình mô tả</label>
                  <input type="text" id="img"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="` +
      courseData[id].img +
      `"
                      placeholder="...." required>
              </div>
              <div>
                  <label for="intro"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giới thiệu</label>
                  <input type="text" id="intro"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="` +
      courseData[id].intro +
      `"
                      placeholder="...." required>
              </div>
              <div>
                  <label for="description"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả</label>
                  <textarea id="description"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="` +
      courseData[id].description +
      `"
                       placeholder="...." required></textarea>
              </div>
              <div>
                  <label for="fee"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Học phí</label>
                  <input type="text" id="fee"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="` +
      courseData[id].paidStudent +
      `"
                      placeholder="1000000"
                      required>
              </div>
              <div>
                  <label for="prizeStudent"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Học bổng</label>
                  <input type="text" id="prizeStudent"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="` +
      courseData[id].prizeStudent +
      `"
                      placeholder="1000000" required>
              </div>
              <div>
                  <label for="salary"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lương</label>
                  <input type="text" id="salary"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="` +
      courseData[id].paidTeacher +
      `"
                      placeholder="1000000"
                      required>
              </div>
              <div>
                  <label for="prizeTeacher"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thưởng</label>
                  <input type="text" id="prizeTeacher"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="` +
      courseData[id].prizeTeacher +
      `"
                      placeholder="1000000" required>
              </div>
              <div>
                  <label for="time"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thời gian</label>
                  <input type="number" id="time"
                      class="disabled bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="` +
      courseData[id].maxAttendDate +
      `" placeholder="1 tháng" required>
              </div>
          </div>
  </form>
  <div style="margin-top: 4vh;">
      <div class="w-full flex justify-between">
      <button type="submit" 
              class="closeBtn inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span
                  class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Hủy
              </span>
          </button>
          <button form="addForm" type="submit"
              class="submitEditBtn inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 hover:text-white">
              <span
                  class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Thay đổi
              </span>
          </button>
      </div>
  </div>
  </div>
  </div>
        `;
    $("#editModal").html(str);
    $("#editModal").removeClass("invisible opacity-0");
    $("#editModal").addClass("opacity-100");
    $("#addModal").addClass("invisible opacity-0");
    $("#addModal").removeClass("opacity-100");
    setTimeout(function () {
      $("#addModal").html("");
    }, 200);
    $(".closeBtn").click(function (e) {
      $("#editModal").removeClass("opacity-100");
      $("#editModal").addClass("invisible opacity-0");
      setTimeout(function () {
        $(".addModal").removeClass("hidden");
        $("#editModal").html("");
      }, 200);
    });
    editData(id);
  });
}
function editData(id) {
  $(".submitEditBtn").click(function (e) {
    e.preventDefault();
    var oldName = $("#courseName").attr("data-value");
    var courseName = $("#courseName").val();
    var intro = $("#intro").val();
    var imgintro = $("#imgintro").val();
    var img = $("#img").val();
    var short = $("#short").val();
    var description = $("#description").val();
    var fee = $("#fee").val();
    var salary = $("#salary").val();
    var prizeStudent = $("#prizeStudent").val();
    var prizeTeacher = $("#prizeTeacher").val();
    var time = $("#time").val();
    if (
      !courseName ||
      !fee ||
      !prizeStudent ||
      !prizeTeacher ||
      !intro ||
      !imgintro ||
      !img ||
      !short ||
      !salary ||
      !description ||
      !time
    ) {
      Toast.fire({
        icon: "error",
        title: "Vui lòng nhập đầy đủ thông tin",
      });
      return;
    }
    Swal.fire({
      title: "Bạn chắc chứ?",
      text: "Bạn đang chỉnh sửa thông tin của " + courseData[id]["name"],
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
    }).then((result) => {
      if (result.isConfirmed) {
        $.ajax({
          type: "patch",
          url: "http://localhost:3000/courses/course",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("apitoken"),
          },
          data: {
            oldname: oldName,
            name: courseName,
            intro: intro,
            img: img,
            imgintro: imgintro,
            short: short,
            description: description,
            paidStudent: Number(fee),
            prizeStudent: Number(prizeStudent),
            paidTeacher: Number(salary),
            prizeTeacher: Number(prizeTeacher),
            maxAttendDate: Number(time),
          },
          dataType: "JSON",
          success: function (res) {
            Toast.fire({
              icon: "success",
              title: "Sửa khóa học thành công",
            }).then(() => {
              $("#editModal").removeClass("opacity-100");
              $("#editModal").addClass("invisible opacity-0");
              setTimeout(function () {
                $(".addModal").removeClass("hidden");
                $("#editModal").html("");
              }, 200);
              loadData();
            });
          },
          error: function (jqXHR, textStatus, errorThrown) {
            Toast.fire({
              icon: "error",
              title: jqXHR.responseJSON.msg,
            });
          },
        });
      }
    });
  });
}
function formatDate(date) {
  date = new Date(date);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
function deleteData() {
  $(".deleteBtn").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("data-id");
    Swal.fire({
      title: "Bạn chắc chứ?",
      text: "Bạn đang xóa thông tin của " + courseData[id]["name"],
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
    }).then((result) => {
      if (result.isConfirmed) {
        $.ajax({
          type: "delete",
          url:
            "http://localhost:3000/courses/course?name=" +
            courseData[id]["name"],
          headers: {
            Authorization: "Bearer " + localStorage.getItem("apitoken"),
          },
          dataType: "JSON",
          success: function (res) {
            Toast.fire({
              icon: "success",
              title: "Xóa khóa học thành công",
            }).then(() => {
              loadData();
            });
          },
          error: function (jqXHR, textStatus, errorThrown) {
            Toast.fire({
              icon: "error",
              title: jqXHR.responseJSON.msg,
            });
          },
        });
      }
    });
  });
}
