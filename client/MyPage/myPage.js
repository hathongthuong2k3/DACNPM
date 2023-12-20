if (!localStorage.getItem("apitoken")) {
  window.location.replace("../Loginpage/Login.html");
}
$(document).ready(function () {
  if (localStorage.getItem("role") === "student") {
    studentPage();
  } else if (localStorage.getItem("role") === "teacher") {
    teacherPage();
  }
});

function studentPage() {
  $("#bill-intro").html("Hoá đơn và thanh toán");
  $("#bill-col").html(`
    <tr>
        <th class="col-md-3">#</th>
        <th class="col-md-3">Khoá học</th>
        <th class="col-md-3">Học phí</th>
        <th class="col-md-3">Trạng thái</th>
    </tr>`);

  $("#bill-row").empty();
  studentBill.forEach((element, index) => {
    var row =
      `
        <tr>
        <th scope="row">` +
      (index + 1) +
      `</th>
        <td>` +
      element.className +
      `</td>
        <td>` +
      element.money.toLocaleString("en-US") +
      ` đ</td>`;
    if (element.status == "Đã thanh toán")
      row +=
        `<td><button type="button" class="btn btn-success">` +
        element.status +
        `</button></td> </tr>`;
    else if (element.status == "Chưa thanh toán")
      row +=
        `<td><button type="button" class="btn btn-warning">` +
        element.status +
        `</button></td> </tr>`;
    else
      row +=
        `<td><button type="button" class="btn btn-danger">` +
        element.status +
        `</button></td> </tr>`;

    $("#bill-row").append(row);
  });
}

function teacherPage() {
  $("#bill-intro").html("Hoá đơn và lương thưởng");
  $("#bill-col").html(`
    <tr>
        <th scope="col">#</th>
        <th scope="col">Lớp</th>
        <th scope="col">Lương</th>
        <th scope="col">Trạng thái</th>
    </tr>`);

  $("#bill-row").empty();
  teacherBill.forEach((element, index) => {
    var row =
      `
        <tr>
        <th scope="row">` +
      (index + 1) +
      `</th>
        <td>` +
      element.className +
      `</td>
        <td>` +
      element.money.toLocaleString("en-US") +
      ` đ</td>`;
    if (element.status == "Đã nhận")
      row +=
        `<td><button type="button" class="btn btn-success">` +
        element.status +
        `</button></td> </tr>`;
    else if (element.status == "Chưa nhận")
      row +=
        `<td><button type="button" class="btn btn-warning">` +
        element.status +
        `</button></td> </tr>`;
    else
      row +=
        `<td><button type="button" class="btn btn-danger">` +
        element.status +
        `</button></td> </tr>`;
    $("#bill-row").append(row);
  });
}

var studentBill = [
  {
    className: "IELTS1",
    money: 2000000,
    status: "Đã thanh toán",
  },
  {
    className: "TOEIC",
    money: 1500000,
    status: "Chưa thanh toán",
  },
  {
    className: "IELTS2",
    money: 2000000,
    status: "Đã huỷ",
  },
];

var teacherBill = [
  {
    className: "IELTS1",
    money: 3000000,
    status: "Đã nhận",
  },
  {
    className: "TOEIC",
    money: 2500000,
    status: "Chưa nhận",
  },
  {
    className: "IELTS2",
    money: 3400000,
    status: "Đã nhận",
  },
];
