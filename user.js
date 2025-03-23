document.addEventListener("DOMContentLoaded", function () {
    checkLoginStatus();

    if (document.getElementById("register-form")) {
        document.getElementById("register-form").addEventListener("submit", register);
    }

    if (document.getElementById("login-form")) {
        document.getElementById("login-form").addEventListener("submit", login);
    }
});

function register(event) {
    event.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existingUser = users.find(user => user.phone === phone);
    if (existingUser) {
        alert("Số điện thoại này đã được đăng ký!");
        return;
    }

    let newUser = { fullname, phone, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công! Vui lòng đăng nhập.");
    window.location.href = "/login.html";
}

function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const authLinks = document.getElementById("auth-links");

    if (authLinks) {
        if (user) {
            authLinks.innerHTML = `
                <span>Xin chào, ${user.fullname}!</span>
                <button onclick="logout()">Đăng xuất</button>
            `;
        } else {
            authLinks.innerHTML = `
                <a href="/login.html">Đăng Nhập</a>
                <a href="/register.html">Đăng Ký</a>
            `;
        }
    }
}

function login(event) {
    event.preventDefault();
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.phone === phone && user.password === password);
    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Đăng nhập thành công!");
        window.location.href = "/trangchu.html"; // Chuyển hướng về trang chủ
    } else {
        alert("Số điện thoại hoặc mật khẩu không đúng!");
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    alert("Đã đăng xuất!");
    window.location.href = "/login.html";
}
document.addEventListener("DOMContentLoaded", function () {
    const favoriteLink = document.querySelector("a[href='/favorites.html']");

    if (favoriteLink) {
        favoriteLink.addEventListener("click", function (event) {
            const user = JSON.parse(localStorage.getItem("currentUser"));
            
            if (!user) {
                event.preventDefault(); 
                alert("Bạn chưa đăng nhập! Vui lòng đăng nhập trước.");
                window.location.href = "/login.html"; 
            }
        });
    }
});