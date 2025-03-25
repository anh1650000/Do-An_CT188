document.addEventListener("DOMContentLoaded", function () {
    let bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));

    if (!bookingInfo) {
        document.getElementById("bookingDetails").innerHTML = "<p>Không có thông tin đặt tour.</p>";
        return;
    }

    let { tour, user } = bookingInfo;
    document.getElementById("reply-detail").innerHTML = `
        <div class="div-details user-details">
            <h2 class="booking__title">Thông tin khách hàng</h2>
            <p class="booking__description" id="user-name"><span class="span-title-p">Tên khách hàng:</span>${user.fullname}</p>
            <p class="booking__description" id="phone"><span class="span-title-p">Số điện thoại:</span>${user.phone}</p>
            <p class="booking__description" id="email"><span class="span-title-p">Email:</span>${user.email}</p>
        </div>
        <div class="div-details tour-details">
            <h2 class="booking__title">Thông tin tour</h2>
            <p class="booking__description" id="tour-name"><span class="span-title-p" id="tour-name">Tên tour:</span>${tour.name}</p>
            <p class="booking__description" id="adults-quantity"><span class="span-title-p">Người lớn:</span>${tour.adults}</p>
            <p class="booking__description" id="children-quantity"><span class="span-title-p">Trẻ em:</span>${tour.children}</p>
            <p class="booking__description" id="infant-quantity"><span class="span-title-p">Em bé:</span>${tour.infants}</p>
            <p class="booking__description" id="total-price"><span class="span-title-p">Tổng tiền:</span>${tour.totalPrice.toLocaleString()+" VND"}</p>
        </div>
    `;
});