var tableData = [
    {
        name: "Thái Ngọc Rạng",
        gender: "Nam",
        birthYear: new Date(2003, 0, 1),
        address: "KTX Khu A, Dĩ An, Bình Dương",
        phoneNumber: "0912345678",
        email: "rangthai@gmail.com",
        course: "IELTS 1",
        dates: 11,
        teacherName: "Nguyễn Đức Tùng",
        status: 0,
        listening: 1.0,
        speaking: 2.0,
        reading: 3.0,
        writing: 4.0,
        payClass: "IELTS1",
        payCash: 2000000,
        payStatus: 0,
        prizeClass: "",
        prizeCash: 0,
        prizeStatus: 0,
        rate: 2,
        bookClass: "IELTS1",
        bookName: "Cambridge",
        bookType: "Sách",
        bookStatus: -1,
        bookNums: 1,
    },
    {
        name: "Nguyễn Thị Hằng",
        gender: "Nữ",
        birthYear: new Date(1995, 0, 1),
        address: "123 Main Street, Hanoi",
        phoneNumber: "0987654321",
        email: "hangnguyen@gmail.com",
        course: "TOEFL Prep",
        dates: 10,
        teacherName: "Nguyễn Đức Hải",
        status: 1,
        listening: 1.0,
        speaking: 5.0,
        reading: 3.0,
        writing: 4.0,
        payClass: "TOEIC",
        payCash: 3000000,
        payStatus: 0,
        prizeClass: "TOEIC",
        prizeCash: 2000000,
        prizeStatus: 0,
        rate: 5,
        bookClass: "TOEIC",
        bookName: "Nhập môn TOEIC",
        bookType: "Tài liệu giấy",
        bookStatus: 0,
        bookNums: 2,
    },
    {
        name: "Lê Văn Hoàng",
        gender: "Nam",
        birthYear: new Date(2000, 0, 1),
        address: "456 Elm Street, Ho Chi Minh City",
        phoneNumber: "0123456789",
        email: "hoangle@gmail.com",
        course: "GRE Math",
        dates: 0,
        teacherName: "Nguyễn Phan Anh",
        status: -1,
        listening: 1.0,
        speaking: 2.0,
        reading: 9.0,
        writing: 8.0,
        payClass: "IELTS2",
        payCash: 3000000,
        payStatus: 1,
        prizeClass: "",
        prizeCash: 0,
        prizeStatus: 0,
        rate: 3,
        bookClass: "IELTS2",
        bookName: "IELTS Junior",
        bookType: "Tài liệu giấy",
        bookStatus: 1,
        bookNums: 3,
    },
];
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});
$(document).ready(function () {
    loadData();
});
var count = 0;
function loadData() {
    var str = '';
    tableData.forEach((el, index) => {
        str += `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <span class="modal" data-id=`+ index + `>
                `+ el['name'] + `
            </span>
        </th>
        <td class="px-6 py-4">
        `+ el['bookClass'] + `
        </td>
        <td class="px-6 py-4">
        `+ el['bookName'] + `
        </td>
        <td class="px-6 py-4">
        `+ el['bookType'] + `
        </td>
        <td class="px-6 py-4">
        `+ el['bookNums'] + `
        </td>
        <td class="px-6 py-4">
        `
        if (el['bookStatus'] == -1) {
            str += "Chưa có sẵn"
        }
        else if (el['bookStatus'] == 0) {
            str += "Đã có"
        }
        else if (el['bookStatus'] == 1) {
            str += "Đã nhận"
        }
        str += `
        </td>
        <td class="px-6 py-4 flex justify-center">
        <button data-id=`+ index + ` data-tooltip-target="notification"
            class="addWarn flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" `
        if (el['bookStatus'] == 1) {
            str += 'disabled'
        }
        str += `>
            <svg class="w-6 h-6 text-gray-500 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 18 19">
                <path
                    d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
            </svg>
            <div id="notification" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
Thông báo nhận lương
<div class="tooltip-arrow" data-popper-arrow></div>
        </button>
    <button type="button" data-tooltip-target="update"
        class="editBtn flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" data-id="`+ index + `">
        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 20 18">
            <path
                d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
            <path
                d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
        </svg>
        <div id="update" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
Chỉnh sửa
<div class="tooltip-arrow" data-popper-arrow></div>
    </button>
    <button type="button" data-tooltip-target="delete"
                class="deleteBtn flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" data-id="`+ index + `">
                <svg class="w-5 h-5 text-gray-500 hover:text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
  </svg>
  <div id="delete" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Xóa
    <div class="tooltip-arrow" data-popper-arrow></div>
            </button>
        </td>
    </tr>`
        $('#teacher').html(str)
        addWarn();
        addModal();
        editModal();
        deleteModal();
    })
}
function addWarn() {
    $('.addWarn').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        Swal.fire({
            title: "Bạn chắc chứ?",
            text: "Bạn đang gửi thông báo cho " + tableData[id]['name'] + " đến nhận sách?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xác nhận"
        }).then((result) => {
            if (result.isConfirmed) {
                Toast.fire({
                    icon: "success",
                    title: "Gửi thông báo thành công"
                })
            }
        });
    })
}
function addModal() {
    $('.addBtn').click(function (e) {
        e.preventDefault();
        $('.addBtn').addClass('hidden');
        var str = '';
        str += `
            <div class="gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <form id="form">
                <div class="grid gap-6 mb-6 md:grid-cols-3">
                    <div>
                        <label for="namePay"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên</label>
                        <input type="text" id="namePay"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nguyễn Văn A" required>
                    </div>
                    <div>
                        <label for="classPay"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lớp</label>
                        <input type="text" id="classPay"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="IELTS 1" required>
                    </div>
                    <div>
                        <label for="pay"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tài liệu</label>
                        <input type="text" id="pay"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cambridge" required>
                    </div>
                    <div>
                        <label for="bookType"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loại tài liệu</label>
                        <input type="text" id="bookType"
                            class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sách" required>
                    </div>
                    <div>
                        <label for="bookNums"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số lượng</label>
                        <input type="text" id="bookNums"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required>
                    </div>
                    <div>
                    <label for="bookStatus" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trạng thái</label>
                    <select id="bookStatus" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      <option value="" selected>Chọn trạng thái</option>
                      <option value="-1">Chưa có sẵn</option>
                      <option value="0">Đã có</option>
                      <option value="1">Đã nhận</option>
                    </select>
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
                <button form="form" type="submit"
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
        `
        $('.editModal').html(str);
        $('#studentModal').html('');
        addBook();
    })
}
function addBook() {
    $('.submitAddBtn').click(function (e) {
        e.preventDefault();
        var name = $('#namePay').val();
        var bookName = $('#pay').val();
        var bookClass = $('#classPay').val();
        var bookType = $('#bookType').val();
        var bookNums = $('#bookNums').val();
        var status = $('#bookStatus').val();
        if (name == '') {
            Toast.fire({
                icon: "error",
                title: "Vui lòng nhập tên"
            })
        }
        else if (bookName == '') {
            Toast.fire({
                icon: "error",
                title: "Vui lòng nhập tên sách"
            })
        }
        else if (bookClass == '') {
            Toast.fire({
                icon: "error",
                title: "Vui lòng nhập lớp"
            })
        }
        else if (bookNums == '') {
            Toast.fire({
                icon: "error",
                title: "Vui lòng chọn số lượng"
            })
        }
        else if (bookStatus == '') {
            Toast.fire({
                icon: "error",
                title: "Vui lòng chọn trạng thái"
            })
        }
        else {
            Toast.fire({
                icon: "success",
                title: "Thêm thành công"
            }).then(() => {
                tableData.push({
                    'name': name,
                    'bookName': bookName,
                    'bookClass': bookClass,
                    'bookType': bookType,
                    'bookNums': bookNums,
                    'bookStatus': status
                })
                $('.editModal').html('');
                $('.addBtn').removeClass('hidden');
                loadData();
            })
        }
    });
    $('.closeBtn').click(function (e) {
        $('.editModal').html('');
        $('.addBtn').removeClass('hidden');
    })
}
function editModal() {
    $('.editBtn').click(function (e) {
        e.preventDefault();
        $('.addBtn').addClass('hidden');
        var id = $(this).attr('data-id');
        var str = '';
        str += `
            <div class="gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <form id="form">
                <div class="grid gap-6 mb-6 md:grid-cols-3">
                    <div>
                        <label for="namePay"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên</label>
                        <input type="text" id="namePay" disabled
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nguyễn Văn A" value="`+ tableData[id]['name'] + `"
                            required>
                    </div>
                    <div>
                        <label for="classPay"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lớp</label>
                        <input type="text" id="classPay"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="IELTS 1" value="`+ tableData[id]['bookClass'] + `" required>
                    </div>
                    <div>
                        <label for="pay"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tài liệu</label>
                        <input type="text" id="pay"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="`+ tableData[id]['bookName'] + `" required>
                    </div>
                    <div>
                        <label for="bookType"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loại tài liệu</label>
                        <input type="text" id="bookType"
                            class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="`+ tableData[id]['bookType'] + `" required>
                    </div>
                    <div>
                        <label for="bookNums"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số lượng</label>
                        <input type="text" id="bookNums"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="`+ tableData[id]['bookNums'] + `" required>
                    </div>
                    <div>
                    <label for="bookStatus" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trạng thái</label>
                    <select id="bookStatus" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      <option value="">Chọn trạng thái</option>
                      <option value="-1"`
        if (tableData[id]['bookStatus'] == -1) {
            str += 'selected'
        }
        str += `>Chưa có sẵn</option>
                      <option value="0"`
        if (tableData[id]['bookStatus'] == 0) {
            str += 'selected'
        }
        str += `>Đã có</option>
                      <option value="1"`
        if (tableData[id]['bookStatus'] == 1) {
            str += 'selected'
        }
        str += `>Đã nhận</option>
                    </select>
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
                <button form="form" type="submit"
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
        `
        $('.editModal').html(str);
        $('#studentModal').html('');
        editBook(id);
    })
}
function editBook(id) {
    $('.submitEditBtn').click(function (e) {
        e.preventDefault();
        var bookName = $('#pay').val();
        var bookClass = $('#classPay').val();
        var bookType = $('#bookType').val();
        var bookNums = $('#bookNums').val();
        var status = $('#bookStatus').val();
        Swal.fire({
            title: "Bạn chắc chứ?",
            text: "Bạn đang chỉnh sửa thông tin của " + tableData[id]['name'],
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xác nhận"
        }).then((result) => {
            if (result.isConfirmed) {
                Toast.fire({
                    icon: "success",
                    title: "Chỉnh sửa thành công"
                }).then(() => {
                    tableData[id]['bookName'] = bookName;
                    tableData[id]['bookClass'] = bookClass;
                    tableData[id]['bookType'] = bookType;
                    tableData[id]['bookNums'] = bookNums;
                    tableData[id]['bookStatus'] = status;
                    $('.editModal').html('');
                    $('.addBtn').removeClass('hidden');
                    loadData();
                })
            }
        });
    })
    $('.closeBtn').click(function (e) {
        $('.editModal').html('');
        $('.addBtn').removeClass('hidden');
    })
}
function deleteModal() {
    $('.deleteBtn').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        Swal.fire({
            title: "Bạn chắc chứ?",
            text: "Bạn đang xóa thông tin của " + tableData[id]['name'],
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xác nhận"
        }).then((result) => {
            if (result.isConfirmed) {
                Toast.fire({
                    icon: "success",
                    title: "Xóa thành công"
                }).then(() => {
                    tableData.splice(id, 1);
                    loadData();
                })
            }
        });
    })
}