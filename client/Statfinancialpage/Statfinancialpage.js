var data = [];
var sponsorData = [];
$(document).ready(function () {
  loadIncome();
  loadOutcome();
  loadSponsor();
  loadAddData();
});
function loadData() {
  var str = "";
  data.forEach((el, index) => {
    str +=
      ` <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td class="px-6 py-4">
        ` +
      (index + 1) +
      `
    </td>
    <td class="px-6 py-4">
        ` +
      el.name +
      `
    </td>
    <td class="px-6 py-4">
        ` +
      el.type +
      `
    </td>
    <td class="px-6 py-4">
    ` +
      el.amount.toLocaleString("en-US") +
      ` đ
    </td>
    <td class="px-6 py-4">
    `;
    if (el.status === 1) {
      str += `<b style="color:green">Đã hoàn thành</b>`;
    } else {
      str += `<b style="color:red">Chưa hoàn thành</b>`;
    }
    `
    </td>
</tr>`;
  });
  $("#listAll").html(str);
}
function loadIncome() {
  $.ajax({
    type: "get",
    url: "http://localhost:3000/admins/income",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("apitoken"),
    },
    dataType: "JSON",
    success: function (res) {
      var str = "";
      res.data.forEach((el, index) => {
        data.push({
          name: el.name + " thuộc lớp " + el.className,
          type: "Doanh thu",
          amount: el.pay,
          status: el.status,
        });
        console.log(data);
        str +=
          `<tr
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="px-6 py-4">
            ` +
          (index + 1) +
          `
        </td>
        <td class="px-6 py-4">
        ` +
          el["name"] +
          `
        </td>
        <td class="px-6 py-4">
        ` +
          el["className"] +
          `
        </td>
        <td class="px-6 py-4">
        ` +
          el["pay"].toLocaleString("en-US") +
          ` đ
        </td>
        <td class="px-6 py-4">
        `;
        if (el.status === 1) {
          str += `<b style="color:green">Đã hoàn thành</b>`;
        } else {
          str += `<b style="color:red">Chưa hoàn thành</b>`;
        }
        `
        </td>
    </tr>
`;
      });
      $("#income").html(str);
      loadData();
    },
  });
}
function loadOutcome() {
  $.ajax({
    type: "get",
    url: "http://localhost:3000/admins/outcome",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("apitoken"),
    },
    dataType: "JSON",
    success: function (res) {
      var str = "";
      res.data.forEach((el, index) => {
        data.push({
          name: el.name + " thuộc lớp " + el.className,
          type: "Chi trả",
          amount: el.prize,
          status: el.status,
        });
        str +=
          `<tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4">
              ` +
          (index + 1) +
          `
          </td>
          <td class="px-6 py-4">
          ` +
          el["name"] +
          `
          </td>
          <td class="px-6 py-4">
          ` +
          el["className"] +
          `
          </td>
          <td class="px-6 py-4">
          ` +
          el["prize"].toLocaleString("en-US") +
          ` đ
          </td>
          <td class="px-6 py-4">
          `;
        if (el.status === 1) {
          str += `<b style="color:green">Đã hoàn thành</b>`;
        } else {
          str += `<b style="color:red">Chưa hoàn thành</b>`;
        }
        `
          </td>
      </tr>
  `;
      });
      $("#outcome").html(str);
      loadData();
    },
  });
}
function loadSponsor() {
  $.ajax({
    type: "get",
    url: "http://localhost:3000/sponsors",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("apitoken"),
    },
    dataType: "JSON",
    success: function (res) {
      var str = "";
      sponsorData = res.data;
      res.data.forEach((el, index) => {
        data.push({
          name: el.name,
          type: "Tài trợ",
          amount: el.amount,
          status: el.status,
        });

        str +=
          `<tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="px-6 py-4">
                ` +
          (index + 1) +
          `
            </td>
            <td class="px-6 py-4">
            ` +
          el["name"] +
          `
            </td>
            <td class="px-6 py-4">
            ` +
          el["amount"].toLocaleString("en-US") +
          ` đ
            </td>
            <td class="px-6 py-4">
            `;
        if (el.status === 1) {
          str += `<b style="color:green">Đã hoàn thành</b>`;
        } else {
          str += `<b style="color:red">Chưa hoàn thành</b>`;
        }
        str +=
          `
            </td>
            <td class="px-6 py-4 flex justify-center">
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
        </tr>
    `;
      });
      $("#sponsor").html(str);
      loadData();
      loadEditData();
    },
  });
}
function loadAddData() {
  $(".add").click(function (e) {
    e.preventDefault();
    var str = "";
    str += `
    <div class="mb-5 gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <form id="addForm">
        <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div>
                <label for="sponsor"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên nhà tài trợ</label>
                <input type="text" id="sponsor"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="IELTS"
                    required>
            </div>
            <div>
                <label for="amount"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số tiền</label>
                <input type="text" id="amount"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1000000"
                    required>
            </div>
            <div>
                <label for="status"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trạng thái</label>
                <input type="text" id="status"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1000000"
                    required>
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
</div>`;
    $("#modal").html(str);
    $("#modal").removeClass("invisible opacity-0");
    $("#modal").addClass("opacity-100");
    $(".add").addClass("hidden");
    addData();
    $(".closeBtn").click(function (e) {
      $("#modal").removeClass("opacity-100");
      $("#modal").addClass("invisible opacity-0");
      setTimeout(function () {
        $("#modal").html("");
        $(".add").removeClass("hidden");
      }, 200);
    });
  });
}
function addData() {
  $(".submitAddBtn").click(function (e) {
    e.preventDefault();
    $(".add").addClass("hidden");
    var sponsor = $("#sponsor").val();
    var amount = $("#amount").val();
    var status = $("#status").val();
    if (!sponsor || !amount || !status) {
      Toast.fire({
        icon: "error",
        title: "Vui lòng điền đầy đủ thông tin",
      });
    } else {
      $.ajax({
        type: "post",
        url: "http://localhost:3000/sponsors/sponsor",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("apitoken"),
        },
        data: {
          name: sponsor,
          amount: Number(amount),
          status: Number(status),
        },
        dataType: "JSON",
        success: function (res) {
          loadSponsor();
          Toast.fire({
            icon: "success",
            title: "Thêm thành công",
          }).then(() => {
            $("#modal").removeClass("opacity-100");
            $("#modal").addClass("invisible opacity-0");
            setTimeout(function () {
              $("#modal").html("");
              $(".add").removeClass("hidden");
            }, 200);
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
}
function loadEditData() {
  $(".editBtn").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("data-id");
    var str = "";
    str +=
      `
            <div class="mt-5 gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <form id="addForm">
                <div class="grid gap-6 mb-6 md:grid-cols-3">
                    <div>
                        <label for="className"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lớp học</label>
                        <input type="text" id="className" data-value=` +
      sponsorData[id]["name"] +
      `
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="IELTS1" value="` +
      sponsorData[id]["name"] +
      `"
                            required>
                    </div>
                    <div>
                        <label for="maxStudent"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sĩ số tối đa</label>
                        <input type="text" id="maxStudent"
                            class="disabled bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nguyễn Văn A" value="` +
      sponsorData[id]["maxStudent"] +
      `" required>
                    </div>
                    <div>
                        <label for="maxStudent"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sĩ số tối đa</label>
                        <input type="text" id="maxStudent"
                            class="disabled bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nguyễn Văn A" value="` +
      sponsorData[id]["maxStudent"] +
      `" required>
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
    $("#modal").html(str);
    $("#modal").removeClass("invisible opacity-0");
    $("#modal").addClass("opacity-100");
    $(".closeBtn").click(function (e) {
      $("#modal").removeClass("opacity-100");
      $("#modal").addClass("invisible opacity-0");
      setTimeout(function () {
        $(".add").removeClass("hidden");
        $("#modal").html("");
      }, 200);
    });
    editData(id);
  });
}
function editData(id) {
  $(".submitEditBtn").click(function (e) {
    e.preventDefault();
    var oldname = $("#className").attr("data-value");
    var className = $("#className").val();
    var courseName = $("#courseName").val();
    var schedule = $("#schedule").val();
    var maxStudents = $("#maxStudent").val();
    var startDate = $("#startDate").val();
    var endDate = $("#endDate").val();
    var address = $("#address").val();
    if (
      !className ||
      !courseName ||
      !schedule ||
      !maxStudents ||
      !startDate ||
      !endDate ||
      !address
    ) {
      Toast.fire({
        icon: "error",
        title: "Vui lòng nhập đầy đủ thông tin",
      });
      return;
    }
    maxStudents = parseInt(maxStudents);
    Swal.fire({
      title: "Bạn chắc chứ?",
      text:
        "Bạn đang chỉnh sửa thông tin của " +
        classData[0][id]["name"] +
        " thuộc khóa " +
        classData[0][id]["courseName"],
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
    }).then((result) => {
      if (result.isConfirmed) {
        $.ajax({
          type: "patch",
          url: "http://localhost:3000/classes/class",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("apitoken"),
          },
          data: {
            name: className,
            idCourse: courseName,
            schedule: schedule,
            maxStudent: maxStudents,
            startDate: startDate,
            endDate: endDate,
            address: address,
            oldname: oldname,
          },
          dataType: "JSON",
          success: function (res) {
            Toast.fire({
              icon: "success",
              title: "Sửa lớp thành công",
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
      text:
        "Bạn đang xóa thông tin của " +
        classData[0][id]["name"] +
        " thuộc khóa " +
        classData[0][id]["courseName"],
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
            "http://localhost:3000/classes/class?name=" +
            classData[0][id]["name"],
          headers: {
            Authorization: "Bearer " + localStorage.getItem("apitoken"),
          },
          dataType: "JSON",
          success: function (res) {
            if (res.check === true) {
              Toast.fire({
                icon: "success",
                title: "Xóa thành công",
              }).then(() => {
                loadData();
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
      }
    });
  });
}
