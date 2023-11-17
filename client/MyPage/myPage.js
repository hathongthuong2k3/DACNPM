var idRole = localStorage.getItem('idRole');
if (idRole === null) {
    window.location.replace('../Loginpage/ChooseActor.html')
}
else if (idRole === '1') {
    $(document).ready(function () {
        studentPage();
    });
}
else if (idRole === '2') {
    $(document).ready(function () {
        teacherPage();
    });
}

function studentPage() {
    $('#bill-intro').html('Hoá đơn và thanh toán');
    $('#bill-col').html(`
    <tr>
        <th scope="col">#</th>
        <th scope="col">Khoá học</th>
        <th scope="col">Học phí</th>
        <th scope="col">Trạng thái</th>
        <th scope="col">Thanh toán</th>
    </tr>`);
    
    $('#bill-row').empty();
    studentBill.forEach((element, index) => {
        var row = `
        <tr>
        <th scope="row">`+ (index + 1) + `</th>
        <td>` + element.className + `</td>
        <td>`+ element.money + `</td>
        <td>`+ element.status + `</td> `;
        if (element.status == 'Đã thanh toán')
            row += `<td><button type="button" class="btn btn-success">` + element.status + `</button></td> </tr>`;
        else if (element.status == 'Chưa thanh toán')
            row += `<td><button type="button" class="btn btn-warning">` + element.status + `</button></td> </tr>`;
        else
            row += `<td><button type="button" class="btn btn-danger">` + element.status + `</button></td> </tr>`;

        $('#bill-row').append(row);
    });


}

function teacherPage() {
    $('#bill-intro').html('Hoá đơn và lương thưởng');
    $('#bill-col').html(`
    <tr>
        <th scope="col">#</th>
        <th scope="col">Lớp</th>
        <th scope="col">Lương</th>
        <th scope="col">Trạng thái</th>
    </tr>`);

    $('#bill-row').empty();
    teacherBill.forEach((element, index) => {
        var row = `<tr>
            <th scope="row">`+ (index + 1) + `</th>
            <td>` + element.className + `</td>
            <td>`+ element.money + `</td>
            <td>`+ element.status + `</td> 
        </tr>`
        $('#bill-row').append(`<tr>
            <th scope="row">`+ (index + 1) + `</th>
            <td>` + element.className + `</td>
            <td>`+ element.money + `</td>
            <td>`+ element.status + `</td> 
        </tr>`);
    });
}

var studentBill = [
    {
        className: 'IELTS1',
        money: 2000000,
        status: 'Đã thanh toán',
    },
    {
        className: 'TOEIC',
        money: 1500000,
        status: 'Chưa thanh toán',
    },
    {
        className: 'IELTS2',
        money: 2000000,
        status: 'Đã huỷ'
    }
]

var teacherBill = [
    {
        className: 'IELTS1',
        money: 3000000,
        status: 'Đã nhận',
    },
    {
        className: 'TOEIC',
        money: 2500000,
        status: 'Chưa nhận',
    },
    {
        className: 'IELTS2',
        money: 3400000,
        status: 'Đã nhận',
    }
]