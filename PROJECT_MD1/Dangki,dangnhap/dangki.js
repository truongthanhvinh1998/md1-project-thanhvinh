let emailInput = document.getElementById("email_phone");
let passwordInput = document.getElementById("password");
let rePasswordInput = document.getElementById("repassword");
let nameInput = document.getElementById("name");
let dateInput = document.getElementById("date");
let registerBtn = document.getElementById("btn-register");
let loginBtn = document.getElementById("btn-login");
let form = document.getElementById("form");
let users = JSON.parse(localStorage.getItem("user")) || [];

form.onsubmit = function (event) {
  // ngăn chặn submit form mặc định
  event.preventDefault();
  // kiểm tra dữ liệu nhập vào
  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();
  let name = nameInput.value.trim();
  let date = dateInput.value.trim();
  let repassword = rePasswordInput.value.trim();

  if (
    email == "" ||
    password == "" ||
    repassword == "" ||
    date == "" ||
    name == ""
  ) {
    alert("Bạn phải điền đầy đủ thông tin  ");
    return;
  }
  if (!email || !isValidEmail(email)) {
    alert("Email không hợp lệ");
    return;
  }
  if (!name) {
    alert("Vui lòng nhập họ tên");
    return;
  }
  if (!password) {
    alert("Vui lòng nhập mật khẩu");
    return;
  }
  if (password.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự");
    return;
  }
  if (password !== repassword) {
    alert("Mật khẩu không trùng nhau");
    return;
  }
  if (!date) {
    alert("Vui lòng nhập ngày sinh");
    return;
  }

  // console.log('users: ', users);

  let user = {
    email: email,
    password: password,
    name: name,
    date: date,
  };
  // console.log('user: ', user);
  users.push(user);
  localStorage.setItem("user", JSON.stringify(users));
  // nếu dữ liệu hợp lệ, gửi form lên server
  // form.submit();
  alert("Đăng kí thành công ");
  window.location.href = "http://127.0.0.1:5500/Dangki,dangnhap/dangnhap.html";
};
function isValidEmail(email) {
  // kiểm tra email có hợp lệ không
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// chuyen den trang dang nhap
loginBtn.onclick = function () {
  window.location.href = "http://127.0.0.1:5500/Dangki,dangnhap/dangnhap.html";
};
