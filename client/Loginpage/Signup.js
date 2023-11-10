function toggleAuthenticationCode() {
    var role = document.getElementById("role").value;
    var authCodeDiv = document.querySelector(".authentication-code");

    if (role === "NhanVien" || role === "QuanTriVien") {
        authCodeDiv.style.display = "block";
    } else {
        authCodeDiv.style.display = "none";
    }
}

// document.getElementById("register-button").addEventListener("click", function () {
//     window.location.href = "ChooseActorTest.html";
// });
document.getElementById("register-button").addEventListener("click", function (event) {
    var username = document.getElementById("floating_loginname").value;
    var password = document.getElementById("floating_password").value;
    var repeatPassword = document.getElementById("floating_repeat_password").value;
    var name = document.getElementById("floating_name").value;
    var birthday = document.getElementById("floating_birthday").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("floating_address").value;
    var phone = document.getElementById("floating_phone").value;
    var email = document.getElementById("floating_email").value;

    if (username && password && repeatPassword && name && birthday && gender && address && phone && email) {
        window.location.href = "ChooseActor.html";
    } else {
        // Hiển thị thông báo hoặc thực hiện xử lý khác nếu có lỗi
        alert("Vui lòng điền đầy đủ thông tin.");
    }

    // Ngăn chặn hành động mặc định của nút submit trong form
    event.preventDefault();
});