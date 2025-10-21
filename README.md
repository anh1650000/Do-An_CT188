<h1>Đồ án CT188 – Thiết kế Website Tĩnh Đặt Chuyến Du Lịch</h1> <p><strong>Mô tả ngắn:</strong><br> Đồ án là một website tĩnh mô phỏng hệ thống <em>Đặt chuyến du lịch</em> (Tour Booking) được thực hiện trong môn <strong>CT188 – Nhập môn Lập trình Web</strong>. Mục tiêu: thiết kế giao diện, wireframe và các chức năng client-side cơ bản (đăng ký, đăng nhập, xem chi tiết, yêu thích, đặt lịch) sử dụng HTML/CSS/JavaScript và Local Storage để lưu trạng thái tạm thời.</p> <hr> <h2>🔖 Nội dung chính</h2> <ul> <li>Trang chủ (danh sách chuyến đi)</li> <li>Trang đăng nhập / đăng ký</li> <li>Trang chi tiết chuyến đi (chọn ngày, số lượng, tính giá)</li> <li>Trang yêu thích (lưu & xóa)</li> <li>Trang xác nhận đặt lịch (hiển thị thông tin người dùng + chi tiết đặt)</li> <li>Trang phản hồi khách hàng</li> </ul> <hr> <h2>👥 Nhóm thực hiện</h2> <ul> <li><strong>Phạm Duy Anh (Nhóm trưởng)</strong> — B2308346 — Quản lý dự án, Thiết kế tổng thể</li> <li><strong>Lê Hoàng Uyên</strong> — B2303792 — Giao diện & wireframe</li> <li><strong>Nguyễn Thị Ngọc Hân</strong> — B2306531 — Trang chi tiết & logic tính toán</li> <li><strong>Nguyễn Thị Như Ý</strong> — B2306608 — Trang yêu thích & tối ưu UI</li> </ul> <p><strong>Giảng viên hướng dẫn:</strong> ThS. Vũ Duy Linh</p> <hr> <h2>⚙️ Công nghệ & công cụ</h2> <ul> <li><strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript (vanilla)</strong></li> <li>Layout: <strong>Flexbox</strong>, <strong>CSS Grid</strong></li> <li>Lưu trạng thái client: <strong>Local Storage</strong></li> <li>Chạy nhanh: <strong>Live Server (VSCode)</strong> hoặc mở trực tiếp <code>trangchu.html</code></li> </ul> <p><em>Lưu ý:</em> Website tĩnh (không backend). Dữ liệu demo (chuyến đi, ảnh, giá, lịch trình) được lưu trong file JS hoặc assets.</p> <hr><h2>📂 Cấu trúc thư mục(Dự án chưa cấu trúc lại thư mục - Dưới đây là gợi ý cấu trúc thư mục)</h2>
<pre><code>
Do-An_CT188/
├── trangchu.html
├── product.html
├── detail.html
├── login.html
├── register.html
├── favorite.html
├── booking.html
├── feedback.html
├── css/
│   └── style.css
├── js/
│   ├── data.js          # dữ liệu mẫu (chuyến đi)
│   └── main.js          # xử lý logic chính
├── assets/
│   ├── images/
│   └── icons/
└── docs/
    └── BÁO CÁO ĐỒ ÁN NHÓM.docx
</code></pre>
 <hr> <h2>🚀 Hướng dẫn chạy nhanh (local)</h2> <ol> <li>Clone repository: <pre><code>git clone https://github.com/anh1650000/Do-An_CT188.git cd Do-An_CT188</code></pre> </li> <li>Mở file <code>trangchu.html</code> trên trình duyệt hoặc dùng Live Server trong VSCode (<code>http://127.0.0.1:5500</code>).</li> <li>Tương tác: Đăng ký, đăng nhập, thêm yêu thích, đặt chuyến, phản hồi (lưu tạm bằng Local Storage).</li> </ol> <hr> <h2>🛠 Chi tiết triển khai</h2> <ul> <li><strong>Quản lý người dùng:</strong> Local Storage (object users: {name, email, phone, password}).</li> <li><strong>Phiên đăng nhập:</strong> lưu currentUser, hiển thị tên & nút Đăng xuất.</li> <li><strong>Danh sách chuyến:</strong> <code>data.js</code> chứa mảng tour {id, title, images, days, price, schedule}.</li> <li><strong>Yêu thích:</strong> lưu mảng id tours theo user (<code>favorites_{username}</code>).</li> <li><strong>Đặt lịch:</strong> form chọn ngày, số lượng, validate, tính tiền, lưu đơn tạm (<code>booking_{username}</code>).</li> <li><strong>UI:</strong> responsive, ẩn/hiện chi tiết, modal xác nhận đặt vé.</li> </ul> <hr> <h2>✅ Checklist tính năng</h2> <ul> <li>✅ Wireframes đầy đủ các trang</li> <li>✅ Hiển thị danh sách tour + chi tiết</li> <li>✅ Đăng ký / đăng nhập</li> <li>✅ Yêu thích (thêm/xóa/xóa tất cả)</li> <li>✅ Đặt lịch + xác nhận</li> <li>✅ Phản hồi khách hàng</li> <li>☑️ Tuỳ chọn: thêm backend hoặc SPA</li> </ul> <hr> <h2>🧾 Tài liệu & báo cáo</h2> <p>Báo cáo chi tiết nằm trong thư mục <code>docs/BÁO CÁO ĐỒ ÁN NHÓM.docx</code> — bao gồm wireframes, chức năng, biểu mẫu, hướng dẫn sử dụng và hình minh họa.</p> <hr> <h2>💡 Gợi ý cải tiến</h2> <ul> <li>Thêm backend (FastAPI / Express) để lưu dữ liệu thực.</li> <li>Dùng JWT để xác thực thay vì Local Storage đơn thuần.</li> <li>Nâng UI thành SPA bằng Vue 3 hoặc React + Tailwind.</li> <li>Thêm phần quản trị CRUD tour, upload ảnh.</li> </ul> <hr> <h2>📞 Liên hệ</h2> <p>Đại diện nhóm thực hiện dự án — Trường CNTT & TT, Đại học Cần Thơ<br> Email nhóm: <a href="mailto:phamduyanh.01062005da@gmail.com">phamduyanh.01062005da@gmail.com</a></p> <hr> <h2>📜 Bản quyền</h2> <p>Dự án phục vụ <strong>mục đích học tập</strong> (CT188) — <strong>Không sử dụng cho thương mại</strong>.<br>Trường Đại học Cần Thơ HK2 - 2024-2025</p>
