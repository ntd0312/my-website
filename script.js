// script.js

function showContent(contentId) {
    // Ẩn tất cả các phần nội dung
    document.getElementById("overview").classList.add("hidden");
    document.getElementById("bangDieuVan").classList.add("hidden");
    document.getElementById("bangDatHang").classList.add("hidden");

    // Hiển thị phần nội dung được chọn
    document.getElementById(contentId).classList.remove("hidden");
}

console.log("Dashboard loaded");
