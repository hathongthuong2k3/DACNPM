$(document).ready(function () {
    loadNav();
});

function loadNav() {
    var idRole = localStorage.getItem('idRole');
    if (idRole === "1") {
        $('#nav__login').remove();
        $('#my-class-link').html('Khoá học của tôi');

        $('#my-page-link').html('Trang của tôi');

    }
    else if (idRole === "2") {
        $('#nav__login').remove();
        $('#my-class-link').html('Lớp học của tôi');
        $('#my-page-link').html('Trang của tôi');
    }
    else {
        $('#nav__user').remove();
    }
    $('#my-class-link').attr('href', '../MyCourses/myCourses.html');
    $('#my-page-link').attr('href', '../MyPage/myPage.html');

}