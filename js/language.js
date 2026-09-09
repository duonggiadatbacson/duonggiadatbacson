const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.rooms": "Rooms",
        "nav.blog": "Blog",
        "nav.contact": "Contact",
        "nav.booking": "BOOK NOW",

        "home.heroSubtitle": "QUYNH SON VILLAGE - BAC SON - LANG SON",
        "home.heroDescription": "A peaceful retreat among the mountains of Bac Son",
        "home.viewRooms": "VIEW ROOMS",
        "home.bookNow": "BOOK NOW",
        "home.welcome": "WELCOME",
        "home.introTitle": "DUONG GIA DAT HOMESTAY",

        "rooms.pageTitle": "Rooms",
        "rooms.updating": "Room information will be updated.",

        "about.pageTitle": "About",
        "blog.pageTitle": "Blog",
        "contact.pageTitle": "Contact",

        "contact.phone": "Phone: Updating",
        "contact.zalo": "Zalo: Updating",
        "contact.facebook": "Facebook: Updating",
        "contact.call": "CALL TO BOOK"
    }
};

function applyEnglish() {

    const dictionary = translations.en;

    document.querySelectorAll("[data-lang-key]").forEach(function(element) {

        const key = element.getAttribute("data-lang-key");

        if (dictionary[key] !== undefined) {
            element.textContent = dictionary[key];
        }

    });

    document.querySelectorAll(".language-switcher button").forEach(function(button) {

        button.classList.toggle(
            "active",
            button.getAttribute("data-lang") === "en"
        );

    });

    document.documentElement.lang = "en";
    document.title = "Duong Gia Dat Homestay";

    localStorage.setItem("language", "en");
}

function setLanguage(lang) {

    if (lang === "vi") {

        localStorage.setItem("language", "vi");

        location.reload();

        return;
    }

    if (lang === "en") {

        applyEnglish();

        return;
    }

    localStorage.setItem("language", "vi");
    location.reload();
}

document.addEventListener("DOMContentLoaded", function() {

    const savedLanguage =
        localStorage.getItem("language") || "vi";

    if (savedLanguage === "en") {

        applyEnglish();

    } else {

        document.querySelectorAll(".language-switcher button").forEach(function(button) {

            button.classList.toggle(
                "active",
                button.getAttribute("data-lang") === "vi"
            );

        });

        document.documentElement.lang = "vi";
    }

});



