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
        rate: 2
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
        rate: 5
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
        rate: 3
    },
];
$(document).ready(function () {
    loadData();
});
function loadData() {
    var str = '';
    tableData.forEach((el, index) => {
        str += `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <span class="teacherModal" data-id=`+ index + `>
                `+ el['name'] + `
            </span>
        </th>
        <td class="px-6 py-4">
        `+ el['course'] + `
        </td>
        <td class="px-6 py-4">
        <div class="flex items-center space-x-1 justify-center">`
        for (let i = 0; i < el['rate']; i++) {
            str += `<svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>`
        }
        for (let i = el['rate']; i < 5; i++) {
            str += `<svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        `
        }
        str += `    
            </div>
        </td>
        <td class="px-6 py-4 ">
            <button data-tooltip-target="cheer" data-id=`+ index + `
                class="addCheer mx-auto p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="w-6 h-6 text-gray-500 hover:text-gray-900 dark:text-white"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 20 18">
                    <path
                        d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                </svg>
                <div id="cheer" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tuyên dương
    <div class="tooltip-arrow" data-popper-arrow></div>
            </button>
            <button data-tooltip-target="warning" data-id=`+ index + `
                class="addWarn mx-auto p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span
                    class="material-symbols-outlined text-center w-6 h-6 text-gray-100 dark:text-white flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    priority_high
                </span>
                <div id="warning" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Cảnh cáo
    <div class="tooltip-arrow" data-popper-arrow></div>
            </button>
            <button data-tooltip-target="update" type="button"
                class="rateModal p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" data-id="`+ index + `">
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
        </td>
    </tr>`
        $('#teacher').html(str)
        addWarn();
        addCheer();
        loadTeacherModal();
        loadRateModal();
        addRateModal();
    })
}
function addWarn() {
    $('.addWarn').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        Swal.fire({
            title: "Bạn chắc chứ?",
            text: "Bạn đang gửi cảnh cáo cho " + tableData[id]['name'],
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xác nhận"
        }).then((result) => {
            if (result.isConfirmed) {
                Toast.fire({
                    icon: "success",
                    title: tableData[id]['name'] + " đã được gửi cảnh cáo"
                })
            }
        });
    })
}
function addCheer() {
    $('.addCheer').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        Swal.fire({
            title: "Bạn chắc chứ?",
            text: "Bạn đang gửi thông báo tuyên dương cho " + tableData[id]['name'],
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xác nhận"
        }).then((result) => {
            if (result.isConfirmed) {
                Toast.fire({
                    icon: "success",
                    title: tableData[id]['name'] + " đã được gửi thông báo"
                })
            }
        });
    })
}
function loadTeacherModal() {
    $('.teacherModal').click(function (e) {
        e.preventDefault();
        var str = ''
        var id = $(this).attr('data-id');
        str += `
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
    <div>
    <button type="submit"
                    class="w-full closeBtn inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" style="margin-top:20vh">
                    <span
                        class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Hủy
                    </span>
                </button>
    </div>
            </div>`;
        $('#teacherModal').html(str);
        $('.closeBtn').click(function (e) {
            e.preventDefault();
            $('#teacherModal').html('');
        });
    });
}
function loadRateModal() {
    $('.rateModal').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        var str = '';
        str += `<div class="col-span-2">
        <form id="editForm">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="full_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên</label>
                    <input disabled type="text" id="full_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nguyễn Văn A" value="`+ tableData[id]['name'] + `" required>
                </div>
                <div>
                    <label for="Lớp"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lớp</label>
                    <input type="Lớp" id="Lớp"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="IELTS 1" value="`+ tableData[id]['course'] + `" required>
                </div>
                <div>
                    <label for="rate"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Đánh giá</label>
                    <input type="number" id="rate"
                        class="disabled bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value=`+ tableData[id]['rate'] + ` required>
                </div>
            </div>
        </form>
    </div>
    <div style="margin-top: 4vh;">
        <div class="w-full ">
        <button type="submit" 
                    class="w-full closeBtn inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span
                        class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Hủy
                    </span>
                </button>
            <button form="editForm"
                class="submitEditBtn w-full mt-10 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span
                    class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Thêm
                </span>
            </button>
        </div>
    </div>`
        $('#rateModal').html(str);
        $('#teacherModal').html('');
        $('.addRate').addClass('hidden');
        editData(id);
        $('.closeBtn').click(function (e) {
            $('#rateModal').html('');
            $('.addRate').removeClass('hidden');
        })
    });
}
function editData(id) {
    $('.submitEditBtn').click(function (e) {
        e.preventDefault();
        var course = $('#Lớp').val();
        var rate = Number($('#rate').val());
        if (rate > 5 || rate < 0) {
            Toast.fire({
                icon: "error",
                title: "Đánh giá không hợp lệ"
            })
        }
        else {
            Swal.fire({
                title: "Bạn chắc chứ?",
                text: "Đánh giá của " + tableData[id]['name'] + "dạy lớp " + tableData[id]['course'] + " đang bị chỉnh sửa",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Xác nhận"
            }).then((result) => {
                if (result.isConfirmed) {
                    Toast.fire({
                        icon: "success",
                        title: "Sửa đánh giá thành công"
                    }).then(() => {
                        tableData[id]['course'] = course;
                        tableData[id]['rate'] = rate;
                        $('#rateModal').html('');
                        $('.addRate').removeClass('hidden');
                        loadData();
                    })
                }
            });
        }

    })
}
function addRateModal() {
    $('.addRate').click(function (e) {
        e.preventDefault();

        var str = '';
        str += `
            <div class="col-span-2">
        <form id="addForm">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="full_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên</label>
                    <input type="text" id="full_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nguyễn Văn A" required>
                </div>
                <div>
                    <label for="Lớp"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lớp</label>
                    <input type="Lớp" id="Lớp"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="IELTS 1" required>
                </div>
                <div>
                    <label for="rate"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Đánh giá</label>
                    <input type="number" id="rate"
                        class="disabled bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         required>
                </div>
            </div>
        </form>
    </div>
    <div style="margin-top: 4vh;">
        <div class="w-full ">
        <button type="submit" 
                    class="w-full closeBtn inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span
                        class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Hủy
                    </span>
                </button>
            <button form="addForm"
                class="submitAddBtn w-full mt-10 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span
                    class="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Thay đổi
                </span>
            </button>
        </div>
    </div>
        `
        $('.addRate').addClass('hidden');
        $('#rateModal').html(str);
        $('#teacherModal').html('');
        addRate();
        $('.closeBtn').click(function (e) {
            $('#rateModal').html('');
            $('.addRate').removeClass('hidden');
        })
    });
}
function addRate() {
    $('.submitAddBtn').click(function (e) {
        e.preventDefault();
        var fullName = $('#full_name').val();
        var course = $('#Lớp').val();
        var rate = $('#rate').val();
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
        else if (rate == '') {
            Toast.fire({
                icon: "error",
                title: "Vui lòng nhập đánh giá"
            })
        }
        else if (rate > 5 || rate < 0) {
            Toast.fire({
                icon: "error",
                title: "Đánh giá không hợp lệ"
            })
        }
        else {
            var check = false;
            tableData.forEach((el) => {
                if (el['name'] === fullName) {
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
                            'course': course,
                            'dates': el['dates'],
                            'teacherName': el['teacherName'],
                            'status': el['status'],
                            'listening': el['listening'],
                            'speaking': el['speaking'],
                            'reading': el['reading'],
                            'writing': el['writing'],
                            'payClass': el['payClass'],
                            'payCash': el['payCash'],
                            'payStatus': el['payStatus'],
                            'prizeClass': el['prizeClass'],
                            'prizeCash': el['prizeCash'],
                            'prizeStatus': el['prizeStatus'],
                            'rate': parseInt(rate)
                        })
                        $('#rateModal').html('');
                        $('.addRate').removeClass('hidden');
                        loadData();
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