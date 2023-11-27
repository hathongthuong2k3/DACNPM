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
    },
];
$(document).ready(function () {
    loadData();
});
function loadData() {
    var payStr = '';
    var prizeStr = '';
    tableData.forEach((el, index) => {
        if (el['payClass'] !== "") {
            payStr += `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <span data-id=`+ index + ` class="studentModal">
                    `+ el['name'] + `
                </span>
            </th>
            <td class="px-6 py-4">
            `+ el['payClass'] + `
            </td>
            <td class="px-6 py-4">
            `+ el['payCash'].toLocaleString('en-US') + ` đ
            </td>
            <td class="px-6 py-4">
            `
            if (el['payStatus'] == 0) {
                payStr += "Chưa nhận"
            }
            else {
                payStr += "Đã nhận"
            }
            payStr += `
            </td>
            <td class="px-6 py-4 flex justify-center">
                <button data-id=`+ index + ` data-tooltip-target="notification"
                    class="payWarning flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" `
            if (el['payStatus'] == 1) {
                payStr += 'disabled'
            }
            payStr += `>
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
                class="editPayBtn flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" data-id="`+ index + `">
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
                class="deletePayBtn flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" data-id="`+ index + `">
                <svg class="w-5 h-5 text-gray-500 hover:text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
  </svg>
  <div id="delete" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Xóa
    <div class="tooltip-arrow" data-popper-arrow></div>
            </button>
        </td >
        </tr>`
        }
        if (el['prizeClass'] !== "") {
            prizeStr += `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <span data-id=`+ index + ` class="studentModal">
                    `+ el['name'] + `
                </span>
            </th>
            <td class="px-6 py-4">
            `+ el['prizeClass'] + `
            </td>
            <td class="px-6 py-4">
            `+ el['prizeCash'].toLocaleString('en-US') + ` đ
            </td>
            <td class="px-6 py-4">
            `
            if (el['payStatus'] == 0) {
                prizeStr += "Chưa nhận"
            }
            else {
                prizeStr += "Đã nhận"
            }
            prizeStr += `
            </td>
            <td class="px-6 py-4 flex justify-center">
                <button data-id=`+ index + ` data-tooltip-target="notification1"
                    class="prizeWarning flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"`
            if (el['prizeStatus'] == 1) {
                prizeStr += 'disabled'
            }
            prizeStr += `>
                    <svg class="w-6 h-6 text-gray-500 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 18 19">
                        <path
                            d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
                    </svg>
                    <div id="notification1" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Thông báo nhận thưởng
    <div class="tooltip-arrow" data-popper-arrow></div>
                </button>
                <button type="button" data-id=`+ index + ` data-tooltip-target="update1"
                class="editPrizeBtn flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 20 18">
                    <path
                        d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                    <path
                        d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                </svg>
                <div id="update1" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Chỉnh sửa
    <div class="tooltip-arrow" data-popper-arrow></div>
            </button>
            <button type="button" data-tooltip-target="delete1"
                class="deletePrizeBtn flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" data-id="`+ index + `">
                <svg class="w-5 h-5 text-gray-500 hover:text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
  </svg>
  <div id="delete1" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Xóa
    <div class="tooltip-arrow" data-popper-arrow></div>
            </button>
            </td>
        </tr>`
        }
    })
    $('#payData').html(payStr);
    $('#prizeData').html(prizeStr);
    loadStudentModal();
    addPayModal();
    addPrizeModal();
    addWarn();
    editPayModal();
    deletePay();
    editPrizeModal();
    deletePrize();
}
function loadStudentModal() {
    $('.studentModal').click(function (e) {
        e.preventDefault();
        var str = ''
        var id = $(this).attr('data-id');
        str += `
        <div class="mb-5 grid grid-cols-3 gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="col-span-2" id="modal1">
        <form>
            <div>
                <div class="gap-6 mb-6">
                    <label for="full_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên</label>
                    <input disabled type="text" id="full_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nguyễn Văn A" value="`+ tableData[id]['name'] + `" required>
                </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="dob" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Năm
                        sinh</label>
                    <input disabled type="date" id="dob"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value=`+ (new Date(tableData[id].birthYear.getTime() - (tableData[id].birthYear.getTimezoneOffset() * 60000))).toISOString().split('T')[0] + `     required>
                </div>
                <div>
                    <label for="gender"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giới tính</label>
                    <div class="flex">`
        if (tableData[id]['gender'] === "Nam") {
            str += `<div class="flex items-center mt-3 mr-4">
                        <input disabled id="inline-radio" type="radio" value="Nam" name="inline-radio-group"
                            checked class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="inline-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nam</label>
                    </div>
                    <div class="flex items-center mt-3 mr-4">
                        <input disabled id="inline-2-radio" type="radio" value="Nữ" name="inline-radio-group"
                            class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="inline-2-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nữ</label>
                    </div>`
        }
        else {
            str += `<div class="flex items-center mt-3 mr-4">
                        <input disabled id="inline-radio" type="radio" value="Nam" name="inline-radio-group"
                             class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="inline-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nam</label>
                    </div>
                    <div class="flex items-center mt-3 mr-4">
                        <input disabled id="inline-2-radio" type="radio" value="Nữ" name="inline-radio-group"
                        checked class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="inline-2-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nữ</label>
                    </div>`
        }
        str += ` 
                    </div>
                </div>
            </div>
            <div class="gap-6 mb-6">
                <div>
                    <label for="address"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa chỉ</label>
                    <input disabled type="text" id="address"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="" value="`+ tableData[id]['address'] + `"required>
                </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số
                        điện thoại</label>
                    <input disabled type="tel" id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="0912345678" value="`+ tableData[id]['phoneNumber'] + `"pattern="[0-9]{10}" required>
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa
                        chỉ email</label>
                    <input disabled type="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="nguyenvana@company.com" value="`+ tableData[id]['email'] + `" required>
                </div>
            </div>
            <div class="mb-6">
                <label for="Lớp"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lớp</label>
                <input disabled type="Lớp" id="Lớp"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="IELTS 1" value="`+ tableData[id]['course'] + `" required>
            </div>
        </form>
    </div>
        <div>
        <div>
                <label for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    
                    <div class="flex flex-col items-center justify-center pt-5 pb-6"style="margin-top: 12vh;" >
                        <img src="https://th.bing.com/th/id/OIP.CVdkzge14K0HJZWZg5DiMQHaHn?pid=ImgDet&rs=1" alt="">
                    </div>
                    <input disabled id="dropzone-file" type="file" class="hidden" />
                </label>
                <button type="submit"
                    class="w-full closeBtn inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" style="margin-top:20vh">
                    <span
                        class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Hủy
                    </span>
                </button>
            </div></div>`;
        $('#studentModal').html(str);
        $('#studentModal').removeClass('invisible opacity-0');
        $('#studentModal').addClass('opacity-100');
        $('#payModal').removeClass('opacity-100');
        $('#payModal').addClass('invisible opacity-0');
        $('#prizeModal').removeClass('opacity-100');
        $('#prizeModal').addClass('invisible opacity-0');
        setTimeout(function () {
            $('.payModal').removeClass('hidden');
            $('.prizeModal').removeClass('hidden');
            $('#payModal').html('');
            $('#prizeModal').html('');
        }, 200);
        $('.closeBtn').click(function (e) {
            $('#studentModal').removeClass('opacity-100');
            $('#studentModal').addClass('invisible opacity-0');
            setTimeout(function () {
                $('#studentModal').html('');
            }, 200);
        })
    });
}
function addPayModal() {
    $('.payModal').click(function (e) {
        e.preventDefault();
        $('.payModal').addClass('hidden');
        var str = '';
        str += `
            <div class="grid grid-cols-3 gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="col-span-2">
            <form id="payForm">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="namePay"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên</label>
                        <input type="text" id="namePay"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nguyễn Văn A"
                            required>
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
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số tiền nhận</label>
                        <input type="text" id="pay"
                            class="disabled bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    </div>
                    <div>
                    <label for="payStatus" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trạng thái</label>
                    <select id="payStatus" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      <option value="" selected>Chọn trạng thái</option>
                      <option value="0">Chưa nhận</option>
                      <option value="1">Đã nhận</option>
                    </select>
                    </div>
                </div>    
        </div>
        </form>
        <div style="margin-top: 4vh;">
            <div class="w-full ">
            <button type="submit" 
                    class="w-full closeBtn inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span
                        class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Hủy
                    </span>
                </button>
                <button form="payForm" type="submit"
                    class="submitAddPayBtn w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 hover:text-white">
                    <span
                        class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Thêm
                    </span>
                </button>
            </div>
        </div>
        </div>
        `
        $('#payModal').html(str);
        $('#payModal').removeClass('invisible opacity-0');
        $('#payModal').addClass('opacity-100');
        $('#studentModal').removeClass('opacity-100');
        $('#studentModal').addClass('invisible opacity-0');
        setTimeout(function () {
            $('#studentModal').html('');
        }, 200);
        $('.closeBtn').click(function (e) {
            $('#payModal').removeClass('opacity-100');
            $('#payModal').addClass('invisible opacity-0');
            setTimeout(function () {
                $('.payModal').removeClass('hidden');
                $('#payModal').html('');
            }, 200);
        })
        addPay();
    });
}
function addPrizeModal() {
    $('.prizeModal').click(function (e) {
        e.preventDefault();
        $('.prizeModal').addClass('hidden');
        var str = '';
        str += `
            <div class="grid grid-cols-3 gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="col-span-2">
            <form id="prizeForm">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="namePrize"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên</label>
                        <input type="text" id="namePrize"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 required:border-red-500 required:bg-red-500"
                            placeholder="Nguyễn Văn A"
                            required>
                    </div>
                    <div>
                        <label for="classPrize"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lớp</label>
                        <input type="text" id="classPrize"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="IELTS 1" required>
                    </div>
                    <div>
                        <label for="prize"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số tiền thưởng</label>
                        <input type="text" id="prize"
                            class="disabled bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    </div>
                    <div>
                    <label for="prizeStatus" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trạng thái</label>
                    <select id="prizeStatus" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      <option value="" selected>Chọn trạng thái</option>
                      <option value="0">Chưa nhận</option>
                      <option value="1">Đã nhận</option>
                    </select>
                    </div>
                </div>
            
        </div></form>
        <div style="margin-top: 4vh;">
            <div class="w-full ">
                <button type="submit" 
                    class="w-full closeBtn inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span
                        class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Hủy
                    </span>
                </button>
                <button form="prizeForm" type="submit"
                    class="submitAddPrizeBtn w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 hover:text-white">
                    <span
                        class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Thêm
                    </span>
                </button>
            </div>
        </div>
        </div>
        `
        $('#prizeModal').html(str);
        $('#prizeModal').removeClass('invisible opacity-0');
        $('#prizeModal').addClass('opacity-100');
        $('#studentModal').removeClass('opacity-100');
        $('#studentModal').addClass('invisible opacity-0');
        setTimeout(function () {
            $('#studentModal').html('');
        }, 200);
        $('.closeBtn').click(function (e) {
            $('#prizeModal').removeClass('opacity-100');
            $('#prizeModal').addClass('invisible opacity-0');
            setTimeout(function () {
                $('.prizeModal').removeClass('hidden');
                $('#prizeModal').html('');
            }, 200);
        })
        addPrize();
    });
}
function addPay() {
    $('.submitAddPayBtn').click(function (e) {
        e.preventDefault();
        var fullName = $('#namePay').val();
        var course = $('#classPay').val();
        var payAmount = Number($('#pay').val());
        var status = $('#payStatus').val();
        if (fullName == '') {
            Toast.fire({
                icon: "error",
                title: "Vui lòng nhập tên"
            })
        }
        else if (course == '') {
            Toast.fire({
                icon: "error",
                title: "Vui lòng nhập lớp"
            })
        }
        else if (payAmount == '') {
            Toast.fire({
                icon: "error",
                title: "Vui lòng nhập khoản thu"
            })
        }
        else if (status == '') {
            Toast.fire({
                icon: "error",
                title: "Vui lòng chọn trạng thái"
            })
        }
        else {
            var check = false;
            tableData.forEach((el) => {
                if (el['name'] === fullName && el['payClass'] === course) {
                    Toast.fire({
                        icon: "error",
                        title: "Đã tồn tại học phí"
                    })
                    check = true;
                }
                else if (el['name'] === fullName) {
                    check = true;
                    Toast.fire({
                        icon: "success",
                        title: "Thêm thành công"
                    }).then(() => {
                        tableData.push({
                            'name': el['name'],
                            'gender': el['gender'],
                            'birthYear': el['birthYear'],
                            'address': el['address'],
                            'phoneNumber': el['phoneNumber'],
                            'email': el['email'],
                            'course': el['course'],
                            'dates': el['dates'],
                            'teacherName': el['teacherName'],
                            'status': el['status'],
                            'listening': el['listening'],
                            'speaking': el['speaking'],
                            'reading': el['reading'],
                            'writing': el['writing'],
                            'payClass': course,
                            'payCash': payAmount,
                            'payStatus': status,
                            'prizeClass': "",
                            'prizeCash': 0,
                            'prizeStatus': 0,
                        })
                        loadData();
                        $('#payModal').removeClass('opacity-100');
                        $('#payModal').addClass('invisible opacity-0');
                        setTimeout(function () {
                            $('.payModal').removeClass('hidden');
                            $('#payModal').html('');
                        }, 200);
                    })
                }
            })
            if (check === false) {
                Toast.fire({
                    icon: "error",
                    title: "Tên không tồn tại"
                })
            }
        }
    })
}
function addPrize() {
    $('.submitAddPrizeBtn').click(function (e) {
        e.preventDefault();
        var fullName = $('#namePrize').val();
        var course = $('#classPrize').val();
        var prizeAmount = Number($('#prize').val());
        var status = $('#prizeStatus').val();
        if (fullName == '') {
            Toast.fire({
                icon: "error",
                title: "Vui lòng nhập tên"
            })
        }
        else if (course == '') {
            Toast.fire({
                icon: "error",
                title: "Vui lòng nhập lớp"
            })
        }
        else if (prizeAmount == '') {
            Toast.fire({
                icon: "error",
                title: "Vui lòng nhập khoản thu"
            })
        }
        else if (status == '') {
            Toast.fire({
                icon: "error",
                title: "Vui lòng chọn trạng thái"
            })
        }
        else {
            var check = false;
            tableData.forEach((el) => {
                if (el['name'] === fullName && el['prizeClass'] === course) {
                    Toast.fire({
                        icon: "error",
                        title: "Đã tồn tại học phí"
                    })
                    check = true;
                }
                else if (el['name'] === fullName) {
                    check = true;
                    Toast.fire({
                        icon: "success",
                        title: "Thêm thành công"
                    }).then(() => {
                        tableData.push({
                            'name': el['name'],
                            'gender': el['gender'],
                            'birthYear': el['birthYear'],
                            'address': el['address'],
                            'phoneNumber': el['phoneNumber'],
                            'email': el['email'],
                            'course': el['course'],
                            'dates': el['dates'],
                            'teacherName': el['teacherName'],
                            'status': el['status'],
                            'listening': el['listening'],
                            'speaking': el['speaking'],
                            'reading': el['reading'],
                            'writing': el['writing'],
                            'payClass': "",
                            'payCash': 0,
                            'payStatus': 0,
                            'prizeClass': course,
                            'prizeCash': prizeAmount,
                            'prizeStatus': status,
                        })
                        loadData();
                        $('#prizeModal').removeClass('opacity-100');
                        $('#prizeModal').addClass('invisible opacity-0');
                        setTimeout(function () {
                            $('.prizeModal').removeClass('hidden');
                            $('#prizeModal').html('');
                        }, 200);
                    })
                }
            })
            if (check === false) {
                Toast.fire({
                    icon: "error",
                    title: "Tên không tồn tại"
                })
            }
        }
    });
}
function addWarn() {
    $('.payWarning').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        Swal.fire({
            title: "Bạn chắc chứ?",
            text: "Bạn đang gửi thông báo nhận lương cho " + tableData[id]['name'],
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
    $('.prizeWarning').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        Swal.fire({
            title: "Bạn chắc chứ?",
            text: "Bạn đang gửi thông báo nhận thưởng cho " + tableData[id]['name'],
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
function editPayModal() {
    $('.editPayBtn').click(function (e) {
        e.preventDefault();
        $('.payModal').addClass('hidden');
        var id = $(this).attr('data-id');
        var str = '';
        str += `
            <div class="grid grid-cols-3 gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="col-span-2">
            <form id="payForm">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="namePay"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên</label>
                        <input type="text" id="namePay"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nguyễn Văn A" value="`+ tableData[id]['name'] + `"
                            required>
                    </div>
                    <div>
                        <label for="classPay"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lớp</label>
                        <input type="text" id="classPay"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="IELTS 1" value="`+ tableData[id]['payClass'] + `" required>
                    </div>
                    <div>
                        <label for="pay"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số tiền nhận</label>
                        <input type="text" id="pay"
                            class="disabled bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="`+ tableData[id]['payCash'] + `" required>
                    </div>
                    <div>
                    <label for="payStatus" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trạng thái</label>
                    <select id="payStatus" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      <option value="">Chọn trạng thái</option>
                      <option value="0"`
        if (tableData[id]['payStatus'] == 0) {
            str += 'selected'
        }
        str += `>Chưa nhận</option>
                      <option value="1"`
        if (tableData[id]['payStatus'] == 1) {
            str += 'selected'
        }
        str += `>Đã nhận</option>
                    </select>
                    </div>
                </div>    
        </div>
        </form>
        <div style="margin-top: 4vh;">
            <div class="w-full ">
                <button type="submit"
                    class="closeBtn w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span
                        class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Hủy
                    </span>
                </button>
                <button form="payForm" type="submit"
                    class="submitEditPayBtn w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 hover:text-white">
                    <span
                        class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Thay đổi
                    </span>
                </button>
            </div>
        </div>
        </div>
        `
        $('#payModal').html(str);
        $('#payModal').removeClass('invisible opacity-0');
        $('#payModal').addClass('opacity-100');
        $('#studentModal').removeClass('opacity-100');
        $('#studentModal').addClass('invisible opacity-0');
        setTimeout(function () {
            $('#studentModal').html('');
        }, 200);
        $('.closeBtn').click(function (e) {
            $('#payModal').removeClass('opacity-100');
            $('#payModal').addClass('invisible opacity-0');
            setTimeout(function () {
                $('.payModal').removeClass('hidden');
                $('#payModal').html('');
            }, 200);
        })
        editPay();
    })
}
function editPay() {
    $('.submitEditPayBtn').click(function (e) {
        e.preventDefault();
        var fullName = $('#namePay').val();
        var course = $('#classPay').val();
        var payAmount = Number($('#pay').val());
        var status = $('#payStatus').val();
        tableData.forEach((el) => {
            if (el['name'] === fullName && el['payClass'] === course) {
                Swal.fire({
                    title: "Bạn chắc chứ?",
                    text: "Bạn đang chỉnh sửa thông tin của " + el['name'] + " dạy lớp " + el['payClass'],
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
                            el['payCash'] = payAmount
                            el['payStatus'] = status
                            $('#payModal').removeClass('opacity-100');
                            $('#payModal').addClass('invisible opacity-0');
                            setTimeout(function () {
                                $('.payModal').removeClass('hidden');
                                $('#payModal').html('');
                            }, 200);
                            loadData();
                        })
                    }
                });
            }
        })
    })
}
function deletePay() {
    $('.deletePayBtn').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        Swal.fire({
            title: "Bạn chắc chứ?",
            text: "Bạn đang xóa thông tin của " + tableData[id]['name'] + " dạy lớp " + tableData[id]['payClass'],
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
                    tableData[id]['payClass'] = '';
                    tableData[id]['payCash'] = 0;
                    tableData[id]['payStatus'] = 0;
                    loadData();
                })
            }
        });
    })
}
function editPrizeModal() {
    $('.editPrizeBtn').click(function (e) {
        e.preventDefault();
        $('.prizeModal').addClass('hidden');
        var id = $(this).attr('data-id');
        var str = '';
        str += `
            <div class="grid grid-cols-3 gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="col-span-2">
            <form id="prizeForm">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="namePrize"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên</label>
                        <input type="text" id="namePrize"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nguyễn Văn A" value="`+ tableData[id]['name'] + `"
                            required>
                    </div>
                    <div>
                        <label for="classPrize"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lớp</label>
                        <input type="text" id="classPrize"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="IELTS 1" value="`+ tableData[id]['prizeClass'] + `" required>
                    </div>
                    <div>
                        <label for="prize"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số tiền nhận</label>
                        <input type="text" id="prize"
                            class="disabled bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="`+ tableData[id]['prizeCash'] + `" required>
                    </div>
                    <div>
                    <label for="prizeStatus" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trạng thái</label>
                    <select id="prizeStatus" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      <option value="">Chọn trạng thái</option>
                      <option value="0"`
        if (tableData[id]['prizeStatus'] == 0) {
            str += 'selected'
        }
        str += `>Chưa nhận</option>
                      <option value="1"`
        if (tableData[id]['prizeStatus'] == 1) {
            str += 'selected'
        }
        str += `>Đã nhận</option>
                    </select>
                    </div>
                </div>    
        </div>
        </form>
        <div style="margin-top: 4vh;">
            <div class="w-full ">
                <button type="submit"
                    class="closeBtn w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span
                        class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Hủy
                    </span>
                </button>
                <button form="prizeForm" type="submit"
                    class="submitEditPrizeBtn w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 hover:text-white">
                    <span
                        class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Thay đổi
                    </span>
                </button>
            </div>
        </div>
        </div>
        `
        $('#prizeModal').html(str);
        $('#prizeModal').removeClass('invisible opacity-0');
        $('#prizeModal').addClass('opacity-100');
        $('#studentModal').removeClass('opacity-100');
        $('#studentModal').addClass('invisible opacity-0');
        setTimeout(function () {
            $('#studentModal').html('');
        }, 200);
        $('.closeBtn').click(function (e) {
            $('#prizeModal').removeClass('opacity-100');
            $('#prizeModal').addClass('invisible opacity-0');
            setTimeout(function () {
                $('.prizeModal').removeClass('hidden');
                $('#prizeModal').html('');
            }, 200);
        })
        editPrize();
    })
}
function editPrize() {
    $('.submitEditPrizeBtn').click(function (e) {
        e.preventDefault();
        var fullName = $('#namePrize').val();
        var course = $('#classPrize').val();
        var prizeAmount = Number($('#prize').val());
        var status = $('#prizeStatus').val();
        tableData.forEach((el) => {
            if (el['name'] === fullName && el['prizeClass'] === course) {
                Swal.fire({
                    title: "Bạn chắc chứ?",
                    text: "Bạn đang chỉnh sửa thông tin của " + el['name'] + " dạy lớp " + el['prizeClass'],
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
                            el['prizeCash'] = prizeAmount
                            el['prizeStatus'] = status
                            $('#prizeModal').removeClass('opacity-100');
                            $('#prizeModal').addClass('invisible opacity-0');
                            setTimeout(function () {
                                $('.prizeModal').removeClass('hidden');
                                $('#prizeModal').html('');
                            }, 200);
                            loadData();
                        })
                    }
                });
            }
        })
    })
}
function deletePrize() {
    $('.deletePrizeBtn').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        Swal.fire({
            title: "Bạn chắc chứ?",
            text: "Bạn đang xóa thông tin của " + tableData[id]['name'] + " dạy lớp " + tableData[id]['prizeClass'],
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
                    tableData[id]['prizeClass'] = '';
                    tableData[id]['prizeCash'] = 0;
                    tableData[id]['prizeStatus'] = 0;
                    loadData();
                })
            }
        });
    })
}