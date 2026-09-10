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
// ======================================================
    // ROOMS HERO SLIDESHOW
    // ======================================================

    const roomsHero = document.querySelector(".rooms-hero");

    if (roomsHero) {

        const roomsImages = [
            "images/rooms/6.jpg",
            "images/rooms/7.jpg",
            "images/rooms/8.jpg"
        ];

        let roomsIndex = 0;

        roomsHero.style.backgroundImage =
            `url("${roomsImages[roomsIndex]}")`;

        setInterval(function () {

            roomsHero.style.opacity = "0";

            setTimeout(function () {

                roomsIndex =
                    (roomsIndex + 1) % roomsImages.length;

                roomsHero.style.backgroundImage =
                    `url("${roomsImages[roomsIndex]}")`;

                roomsHero.style.opacity = "1";

            }, 1200);

        }, 5000);

    }
// ======================================================
// BLOG HERO SLIDESHOW
// ======================================================

const blogHero = document.querySelector(".blog-hero");

if (blogHero) {

    const blogImages = [
        "images/blog/1.jpg",
        "images/blog/2.jpg",
        "images/blog/3.jpg",
        "images/blog/4.jpg"
    ];

    let blogIndex = 0;

    blogHero.style.backgroundImage =
        `url("${blogImages[blogIndex]}")`;

    setInterval(function () {

        blogHero.style.opacity = "0";

        setTimeout(function () {

            blogIndex =
                (blogIndex + 1) % blogImages.length;

            blogHero.style.backgroundImage =
                `url("${blogImages[blogIndex]}")`;

            blogHero.style.opacity = "1";

        }, 1200);

    }, 5000);

}