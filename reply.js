document.addEventListener("DOMContentLoaded", function () {
    alert("Đặt lịch thành công!");
    let bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));

    if (!bookingInfo) {
        document.getElementById("bookingDetails").innerHTML = "<p>Không có thông tin đặt tour.</p>";
        return;
    }

    let { tour, user } = bookingInfo;
    document.getElementById("bookingDetails").innerHTML = `
        <p class="booking__description" id="user-name"><strong>Tên khách hàng:</strong> ${user.fullname}</p>
        <p class="booking__description" id="phone"><strong>Số điện thoại:</strong> ${user.phone}</p>
        <p class="booking__description" id="tour-name"><strong>Tên tour:</strong> ${tour.name}</p>
        <p class="booking__description" id="adults-quantity"><strong>Người lớn:</strong> ${tour.adults}</p>
        <p class="booking__description" id="children-quantity"><strong>Trẻ em:</strong> ${tour.children}</p>
        <p class="booking__description" id="infant-quantity"><strong>Em bé:</strong> ${tour.infants}</p>
        <p class="booking__description" id="total-price"><strong>Tổng tiền:</strong> ${tour.totalPrice.toLocaleString()} VND</p>
    `;
});