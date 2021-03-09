let userName = localStorage.getItem("username");
let passwordUser = localStorage.getItem("pass");
let log_out = document.getElementById("log_out");

function check() {
  let fullname = document.getElementById("fullname").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let repeat = document.getElementById("repeat-password").value;
  if (fullname === "") {
    alert("Xin Vui Lòng Nhập Tên");
    return false;
  } else if (password === "") {
    alert("Xin Vui Lòng Nhập Mật Khẩu");
    return false;
  } else if (email === "") {
    alert("Xin Vui Lòng Nhập Email");
  } else if (repeat === "") {
    alert("Xin Vui Lòng Nhập Laị");
  } else if (repeat !== password) {
    alert("Mật Khẩu Không Khớp");
  } else {
    alert("Đăng Kí Thành Công");
  }
  localStorage.setItem("username", fullname);
  localStorage.setItem("pass", password);
}
function login() {
  const admin = document.getElementById("admin").value;
  const password = document.getElementById("password").value;
  const hello = document.getElementById("hello");
  if (admin === userName && password === passwordUser) {
    window.location.href = "/";
  } else {
    alert("Tài Khoản Chưa Được Đăng Kí");
    hello.innerHTML = "No Account";
  }
}

let login_btn = document.getElementById("login-btn");
if (login_btn) {
  login_btn.addEventListener("click", function(event) {
    event.preventDefault();
  });
} else {
}

window.onload = function() {
  let userName = window.localStorage.getItem("username");
  if (userName) {
    hello.innerHTML = "Hello" + " " + userName;
    log();
  }
};
function log() {
  let logOut = document.getElementById("log_out");
  logOut.innerHTML = "logout";
}

function removeKey() {
  if (typeof Storage !== "undefined") {
    localStorage.clear();
    alert("Đăng Xuất Thành Công");
    window.location.href = "/";
  }
}
