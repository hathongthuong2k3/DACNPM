var idRole = localStorage.getItem('idRole');
if (idRole === null) {
    window.location.replace('../Loginpage/ChooseActor.html')
}
else if (idRole === '1') {
    $(document).ready(function () {
        loadCourses(studentCourses);
        $('#user-name').html(studentInfo.name);
        $('#user-role').html('Học viên');
        $('#user-avt').attr('src', studentInfo.avt);

    });
}
else if (idRole === '2') {
    $(document).ready(function () {
        loadCourses(teacherCourses);
        $('#user-name').html(teacherInfo.name);
        $('#user-role').html('Giảng viên');
        $('#user-avt').attr('src', teacherInfo.avt);
    });
}

var studentCourses = [
    {
        courseName: 'AVGT1',
        courseDate: '9/8/2023',
        courseStatus: 'Đã học xong'
    },
    {
        courseName: 'IELTS1',
        courseDate: '12/10/2023',
        courseStatus: 'Đang học'
    },
    {
        courseName: 'IELTS2',
        courseDate: '4/11/2023',
        courseStatus: 'Chưa học'
    },
]

var teacherCourses = [
    {
        courseName: 'AVGT1',
        courseDate: '9/8/2023',
        courseStatus: 'Đã dạy'
    },
    {
        courseName: 'IELTS1',
        courseDate: '12/10/2023',
        courseStatus: 'Đang dạy'
    },
    {
        courseName: 'IELTS2',
        courseDate: '4/11/2023',
        courseStatus: 'Chưa dạy'
    },
]

var studentInfo = {
    name: 'Thòng Thượng Hà',
    avt: '../img/user-avatar.jpg',

}

var teacherInfo = {
    name: 'Thòng Thượng Hà',
    avt: '../img/user-avatar.jpg',
}


function loadCourses(courseList) {
    courseList.forEach((element, index) => {
        $('#course-list').append(
            `<tr>
                <th scope="row" class="course-no">` + (index+1) + `</th>
                <td class="course-name">` + element.courseName + `</td>
                <td class="course-date">` + element.courseDate + `</td>
                <td class="course-status">` + element.courseStatus + `</td>
            </tr>`
        )
    });
}
