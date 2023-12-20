$(document).ready(function () {
  loadLog();
  loadRegisterLog();
});
function loadLog() {
  $.ajax({
    type: "get",
    url: "http://localhost:3000/logs",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("apitoken"),
    },
    dataType: "JSON",
    success: function (res) {
      var str = "";
      res.data.forEach((el, index) => {
        str +=
          `<tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ` +
          el.username +
          `
            </th>
            <td class="px-6 py-4">
            ` +
          el.role +
          `
            </td>
            <td class="px-6 py-4">
            ` +
          el.action +
          `
            </td>
            <td class="px-6 py-4">
            ` +
          formatDate(el.date) +
          `
            </td>
            <td class="px-6 py-4 flex justify-center">
            `;
        if (el.status) {
          str += `<b style="color:green">Thành công</b>`;
        } else {
          str += `<b style="color:red">Thất bại</b>`;
        }
        `
                
            </td>
        </tr>`;
      });
      $("#access-list").html(str);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      Toast.fire({
        icon: "error",
        title: jqXHR.responseJSON.msg,
      });
    },
  });
}
function loadRegisterLog() {
  $.ajax({
    type: "get",
    url: "http://localhost:3000/register-logs",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("apitoken"),
    },
    dataType: "JSON",
    success: function (res) {
      var str = "";
      res.data.forEach((el, index) => {
        str +=
          `<tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ` +
          el.username +
          `
                </th>
                <td class="px-6 py-4">
                ` +
          el.role +
          `
                </td>
                <td class="px-6 py-4">
                ` +
          el.email +
          `
                </td>
                <td class="px-6 py-4">
                ` +
          formatDate(el.date) +
          `
                </td>

            </tr>`;
      });
      $("#register-list").html(str);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      Toast.fire({
        icon: "error",
        title: jqXHR.responseJSON.msg,
      });
    },
  });
}
function formatDate(date) {
  date = new Date(date);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
