document.addEventListener("DOMContentLoaded", function () {
    alert("Đặt lịch thành công!");
    let bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));

    if (!bookingInfo) {
        document.getElementById("bookingDetails").innerHTML = "<p>Không có thông tin đặt tour.</p>";
        return;
    }

    let { tour, user } = bookingInfo;
    document.getElementById("bookingDetails").innerHTML = `
        <p><strong>Tên khách hàng:</strong> ${user.fullname}</p>
        <p><strong>Số điện thoại:</strong> ${user.phone}</p>
        <p><strong>Tên tour:</strong> ${tour.name}</p>
        <p><strong>Người lớn:</strong> ${tour.adults}</p>
        <p><strong>Trẻ em:</strong> ${tour.children}</p>
        <p><strong>Em bé:</strong> ${tour.infants}</p>
        <p><strong>Tổng tiền:</strong> ${tour.totalPrice.toLocaleString()} VND</p>
    `;
});