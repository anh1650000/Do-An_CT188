
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
            <td><button onclick="removeFavorite('${tour.pId}')">Xóa</button></td>
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



