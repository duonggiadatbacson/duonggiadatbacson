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
            "images/banner/3.jpg",
            "images/banner/4.jpg",
            "images/banner/5.jpg",
            "images/banner/6.jpg",
            "images/banner/7.jpg",
            "images/banner/8.jpg",
            "images/banner/9.jpg",
            "images/banner/10.jpg"
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
        "images/banner/1.jpg",
        "images/banner/2.jpg",
        "images/banner/3.jpg"
        
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
// ======================================================
// GALLERY LIGHTBOX
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById("image-lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.querySelector(".lightbox-close");

    if (!lightbox || !lightboxImage) {
        return;
    }

    const galleryImages = document.querySelectorAll(".gallery-item img");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    // Đóng bằng nút X

    if (closeButton) {

        closeButton.addEventListener("click", function () {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        });

    }


    // Bấm vào nền tối để đóng

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });


    // Nhấn ESC để đóng

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

});