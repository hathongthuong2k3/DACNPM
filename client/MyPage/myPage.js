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
  $("#prize-intro").html("Học bổng");
  $("#prize-col").html(`
    <tr>
        <th scope="col">#</th>
        <th scope="col">Lớp</th>
        <th scope="col">Học bổng</th>
        <th scope="col">Trạng thái</th>
    </tr>`);
  var str = "";
  $.ajax({
    type: "get",
    url: "http://localhost:3000/studentjoinclasses/salary",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("apitoken"),
    },
    dataType: "JSON",
    success: function (res) {
      res.data.forEach((element, index) => {
        str +=
          `
            <tr>
            <th scope="row">` +
          (index + 1) +
          `</th>
            <td>` +
          element.className +
          `</td>
            <td>` +
          element.paid.toLocaleString("en-US") +
          ` đ</td>`;
        if (element.paidStatus == 1)
          str +=
            `<td><button type="button" class="btn btn-success">` +
            "Đã thanh toán" +
            `</button></td> </tr>`;
        else if (element.paidStatus == 0)
          str +=
            `<td><button type="button" class="btn btn-warning">` +
            "Chưa thanh toán" +
            `</button></td> </tr>`;
      });
      $("#bill-row").html(str);
    },
  });
  $.ajax({
    type: "get",
    url: "http://localhost:3000/studentjoinclasses/prize",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("apitoken"),
    },
    dataType: "JSON",
    success: function (res) {
      var str = "";
      res.data.forEach((element, index) => {
        str +=
          `
            <tr>
            <th scope="row">` +
          (index + 1) +
          `</th>
            <td>` +
          element.className +
          `</td>
            <td>` +
          element.prize.toLocaleString("en-US") +
          ` đ</td>`;
        if (element.prizeStatus == 1)
          str +=
            `<td><button type="button" class="btn btn-success">` +
            "Đã nhận" +
            `</button></td> </tr>`;
        else if (element.prizeStatus == 0)
          str +=
            `<td><button type="button" class="btn btn-warning">` +
            "Chưa nhận" +
            `</button></td> </tr>`;
      });
      $("#prize-row").html(str);
    },
  });
}

function teacherPage() {
  $("#bill-intro").html("Lương");
  $("#bill-col").html(`
    <tr>
        <th scope="col">#</th>
        <th scope="col">Lớp</th>
        <th scope="col">Lương</th>
        <th scope="col">Trạng thái</th>
    </tr>`);

  $("#bill-row").empty();

  var str = "";
  $.ajax({
    type: "get",
    url: "http://localhost:3000/teacherjoinclasses/salary",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("apitoken"),
    },
    dataType: "JSON",
    success: function (res) {
      res.data.forEach((element, index) => {
        str +=
          `
            <tr>
            <th scope="row">` +
          (index + 1) +
          `</th>
            <td>` +
          element.className +
          `</td>
            <td>` +
          element.paid.toLocaleString("en-US") +
          ` đ</td>`;
        if (element.paidStatus == 1)
          str +=
            `<td><button type="button" class="btn btn-success">` +
            "Đã nhận" +
            `</button></td> </tr>`;
        else if (element.paidStatus == 0)
          str +=
            `<td><button type="button" class="btn btn-warning">` +
            "Chưa nhận" +
            `</button></td> </tr>`;
      });
      $("#bill-row").html(str);
    },
  });
  $("#prize-intro").html("Thưởng");
  $("#prize-col").html(`
    <tr>
        <th scope="col">#</th>
        <th scope="col">Lớp</th>
        <th scope="col">Thưởng</th>
        <th scope="col">Trạng thái</th>
    </tr>`);

  $.ajax({
    type: "get",
    url: "http://localhost:3000/teacherjoinclasses/prize",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("apitoken"),
    },
    dataType: "JSON",
    success: function (res) {
      var str = "";
      res.data.forEach((element, index) => {
        str +=
          `
            <tr>
            <th scope="row">` +
          (index + 1) +
          `</th>
            <td>` +
          element.className +
          `</td>
            <td>` +
          element.prize.toLocaleString("en-US") +
          ` đ</td>`;
        if (element.prizeStatus == 1)
          str +=
            `<td><button type="button" class="btn btn-success">` +
            "Đã nhận" +
            `</button></td> </tr>`;
        else if (element.prizeStatus == 0)
          str +=
            `<td><button type="button" class="btn btn-warning">` +
            "Chưa nhận" +
            `</button></td> </tr>`;
      });
      $("#prize-row").html(str);
    },
  });
}

// var studentBill = [
//   {
//     className: "IELTS1",
//     money: 2000000,
//     status: "Đã thanh toán",
//   },
//   {
//     className: "TOEIC",
//     money: 1500000,
//     status: "Chưa thanh toán",
//   },
//   {
//     className: "IELTS2",
//     money: 2000000,
//     status: "Đã huỷ",
//   },
// ];

// var teacherBill = [
//   {
//     className: "IELTS1",
//     money: 3000000,
//     status: "Đã nhận",
//   },
//   {
//     className: "TOEIC",
//     money: 2500000,
//     status: "Chưa nhận",
//   },
//   {
//     className: "IELTS2",
//     money: 3400000,
//     status: "Đã nhận",
//   },
// ];
