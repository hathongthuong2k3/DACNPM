if (!localStorage.getItem('idRole')) {
    window.location.replace('../Loginpage/ChooseActor.html')
}
$(document).ready(function () {
    loadData();
});
function loadData() {
    var idRole = localStorage.getItem('idRole');
    if (idRole === "1") {
        $('#myclass').html('Khóa học của tôi');
        $('#myclass').attr('href', '../MyCourses/myCoursesStudent.html');
        $('#mypage').html('Trang của tôi');
        $('#mypage').attr('href', '../MyCourses/myCoursesStudent.html');
    }
    else {
        $('#myclass').html('Lớp học của tôi');
        $('#myclass').attr('href', '../Adminpage/Adminpage.html');
        $('#mypage').html('Trang của tôi');
        $('#mypage').attr('href', '../Attendstupage/Attendstupage.html');
    }
}