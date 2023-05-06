let form = document.querySelector(".form");
let loginBtn = document.getElementById("btn-login");

//check validate
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let emailInput = document.querySelector(".email").value;
  let passwordInput = document.querySelector(".password").value;
  let users = JSON.parse(localStorage.getItem("user")) || [];
  let is_login = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === emailInput && users[i].password === passwordInput) {
      is_login = users[i];
    }
  }
  if (is_login) {
    console.log(is_login);
    localStorage.setItem("currentUser", JSON.stringify(is_login)); // lưu thông tin người dùng hiện tại vào localStorage
    window.location.href = "http://127.0.0.1:5500/Trangchu/trangchu.html"; // chuyển hướng đến trang chủ
  } else {
    alert("Email hoặc mật khẩu không đúng");
  }
});
// // chuyen sang trang dang ki
let registerBtn = document.getElementById("btn-register");
registerBtn.onclick = function () {
  window.location.href = "http://127.0.0.1:5500/Dangki,dangnhap/dangki.html";
};
