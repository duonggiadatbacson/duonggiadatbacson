// ==========================================================
// DUONG GIA DAT HOMESTAY
// MAIN JAVASCRIPT
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Dương Gia Đạt Homestay website loaded.");


    // ======================================================
    // HERO SLIDESHOW
    // ======================================================

    const hero = document.querySelector(".hero");

    if (hero) {

        const heroImages = [
            "images/banner/1.jpg",
            "images/banner/2.jpg",
            "images/banner/3.jpg"
        ];

        let heroIndex = 0;

        // Ảnh đầu tiên
        hero.style.backgroundImage =
            `url("${heroImages[heroIndex]}")`;

        // Tự động chuyển ảnh
        setInterval(function () {

            // Mờ ảnh hiện tại
            hero.style.opacity = "0";

            setTimeout(function () {

                // Chuyển sang ảnh tiếp theo
                heroIndex =
                    (heroIndex + 1) % heroImages.length;

                hero.style.backgroundImage =
                    `url("${heroImages[heroIndex]}")`;

                // Hiện ảnh mới
                hero.style.opacity = "1";

            }, 1200);

        }, 5000);
    }

});