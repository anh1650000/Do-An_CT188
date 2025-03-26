const productNames ={
    1: "Bến Tre-Vĩnh Long-Cần Thơ",
    2:"Cao Bằng - Thác Bản Giốc - Ba Bể",
    3:"Đà Lạt",
    4:"Hà Giang - Lũng Cú - Đồng Văn",
    5:"Hạ Long - Vịnh Lan Hạ - Cát Bà",
    6:"Đà Nẵng - Hội An - Huế",
    7:"Pháp - Bỉ - Hà Lan",
    8:"Phú Quốc",
    9:"Bangkok - Pattaya - Wat Arun"
}

document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    
    // Duyệt danh sách sản phẩm và thêm vào HTML
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        
        const productName = productNames[product.pId] || "Sản phẩm không có tên";
        const productUrl = `/product-detail.html?product-id=${product.pId}`;
    
        productDiv.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}">
            <h3>${productName}</h3>
            <p>Chỉ từ:${product.price.toLocaleString()} VND</p>
            <a class="buy" href="${productUrl}">Đặt lịch ngay</a>
        `;
    
        productList.appendChild(productDiv);
});
});

function buyProduct(productId) {
    alert(`Bạn đã chọn mua tour có ID: ${productId}`);
}
