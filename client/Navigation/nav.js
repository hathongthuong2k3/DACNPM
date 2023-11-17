$(document).ready(function () {
    loadNav();
});

function loadNav() {
    var idRole = localStorage.getItem('idRole');
    if (idRole === "1") {
        $('#nav__login').remove();
        $('#my-class-link').html('Khoá học của tôi');
        $('#my-class-link').attr('href', '../MyCourses/myCoursesStudent.html');
        $('#my-page-link').html('Trang của tôi');
        $('#my-page-link').attr('href', '../MyPage/myPageStudent.html');
    }
    else if (idRole === "2") {
        $('#nav__login').remove();
        $('#my-class-link').html('Lớp học của tôi');
        $('#my-class-link').attr('href', '../MyCourses/myCoursesStudent.html');
        $('#my-page-link').html('Trang của tôi');
        $('#my-page-link').attr('href', '../MyPage/myPageStudent.html');
    }
    else {
        $('#nav__user').remove();
    }
    
}