const productList = document.getElementById("product-list");

// Duyệt danh sách sản phẩm và thêm vào HTML
products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    
    // Giả sử mỗi sản phẩm có một trang chi tiết riêng theo product.pId
    const productUrl = `/product-detail.html?id=${product.pId}`;

    productDiv.innerHTML = `
        <img src="${product.images[0]}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price.toLocaleString()} VND</p>
        <a class="buy" href="${productUrl}">Xem ngay</a>
    `;

    productList.appendChild(productDiv);
});
function buyProduct(productId) {
    alert(`Bạn đã chọn mua tour có ID: ${productId}`);
}
