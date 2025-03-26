
document.addEventListener("DOMContentLoaded", renderFavorites);
window.addEventListener("storage", renderFavorites);

function renderFavorites() {
    let favorites = JSON.parse(localStorage.getItem("favoriteTours")) || [];
    let container = document.getElementById("favoriteItems");
    if (!container) return;
    container.innerHTML = "";

    if (favorites.length === 0) {
        container.innerHTML = `<tr><td colspan="8">Chưa có tour yêu thích nào!</td></tr>`;
        return;
    }

    // Sử dụng DocumentFragment để giảm reflow
    let fragment = document.createDocumentFragment();

    favorites.forEach((tour) => {
        let row = document.createElement("tr");
        
        row.innerHTML = `
            <td><img src="${tour.image}" width="100"></td>
            <td>${tour.name}</td>
            <td>${tour.adults}</td>
            <td>${tour.children}</td>
            <td>${tour.infants}</td>
            <td>${tour.totalPrice.toLocaleString()} VND</td>
            <td><button class ="bt-book" onclick="bookTour('${tour.pId}')">Đặt</button> 
                <button onclick="removeFavorite('${tour.pId}')">Xóa</button>
            </td>

        `;

        fragment.appendChild(row);
    });

    container.appendChild(fragment);
}

function removeFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem("favoriteTours")) || [];
    favorites = favorites.filter(tour => tour.pId !== id);
    localStorage.setItem("favoriteTours", JSON.stringify(favorites));
    renderFavorites();
}
function clearFavorites() {
    if (confirm("Bạn có chắc chắn muốn xóa tất cả tour khỏi danh sách yêu thích không?")) {
        localStorage.removeItem("favoriteTours"); 
        renderFavorites(); 
        alert("Đã xóa tất cả tour khỏi danh sách yêu thích!");
    }
}

window.addEventListener("storage", (event) => {
    if (event.key === "favoriteTours") {
        renderFavorites();
    }
});

function bookTour(id) {
    let isConfirmed = confirm("Bạn có chắc chắn muốn đặt tour này không?");
    if (!isConfirmed) return;

    let favoriteTours = JSON.parse(localStorage.getItem("favoriteTours")) || [];
    let selectedTour = favoriteTours.find(tour => tour.pId === id);

    if (!selectedTour) {
        alert("Tour không tồn tại!");
        return;
    }

    if (selectedTour.adults === 0 && selectedTour.children === 0 && selectedTour.infants === 0) {
        alert("Vui lòng chọn ít nhất 1 khách để đặt tour!");
        return;
    }
    
    let loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!loggedInUser) {
        alert("Bạn cần đăng nhập để đặt lịch!");
        return;
    }

    let bookingInfo = {
        tour: selectedTour,
        user: loggedInUser
    };

    localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));

    window.location.href = "reply-customer.html";
}

// ở trên code cũ khong có sửa. ở dưới 
//mới sửa thử nhma khong chay duoc :< :(
// function bookTour(id, beforePage="favorites") {
//     let isConfirmed = confirm("Bạn có chắc chắn muốn đặt tour này không?");
//     if (!isConfirmed) return;

//     let favoriteTours = JSON.parse(localStorage.getItem("favoriteTours")) || [];
//     let selectedTour = (favoriteTours.find(tour => tour.pId === id) === null) ? (beforePage === "product-detail" ? id : null) : null;

//     console.log(selectedTour);
//     if (!selectedTour && beforePage === "favorites") {
//         alert("Tour không tồn tại!");
//         return;
//     }
    
//     let loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
//     if (!loggedInUser) {
//         alert("Bạn cần đăng nhập để đặt lịch!");
//         return;
//     }

//     let bookingInfo = {
//         tour: selectedTour,
//         user: loggedInUser
//     };

//     localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));

//     window.location.href = "reply-customer.html";
// }