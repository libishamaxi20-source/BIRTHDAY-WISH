/* =========================================
   PAGE NAVIGATION 💗
========================================= */

function openPage(pageId) {

    // Hide Home
    const home = document.getElementById("home");

    if (home) {
        home.classList.add("home-hidden");
    }

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active-page");
    });

    // Find the page we want to open
    const nextPage = document.getElementById(pageId);

    if (nextPage) {

        // Show selected page
        nextPage.classList.add("active-page");

        // Always start at the top
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    }
}


/* =========================================
   BACK BUTTON 💕
========================================= */

function goBack(pageId) {

    openPage(pageId);

}


/* =========================================
   BACK TO HOME 🏠
========================================= */

function goHome() {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active-page");
    });

    // Show Home
    const home = document.getElementById("home");

    if (home) {
        home.classList.remove("home-hidden");
    }

    // Go to top
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });
}


/* =========================================
   FINAL SURPRISE 🎉
========================================= */

function showFinalSurprise() {

    const finalMessage =
        document.getElementById("final-message");

    if (finalMessage) {
        finalMessage.classList.add("show");
    }

    createConfetti();
    createLoveHearts();
}


/* =========================================
   CONFETTI ❤️
========================================= */

function createConfetti() {

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "✨",
        "🎉",
        "🎊"
    ];

    for (let i = 0; i < 45; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        confetti.style.animationDelay =
            Math.random() * 0.8 + "s";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        document.body.appendChild(confetti);

        setTimeout(function() {
            confetti.remove();
        }, 4500);
    }
}


/* =========================================
   FLOATING LOVE HEARTS 💕
========================================= */

function createLoveHearts() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.zIndex = "10000";

        heart.style.pointerEvents = "none";

        heart.style.transition =
            "transform 3s ease-out, opacity 3s ease-out";

        document.body.appendChild(heart);

        setTimeout(function() {

            heart.style.transform =
                `translateY(-${window.innerHeight + 100}px)
                 translateX(${Math.random() * 120 - 60}px)
                 rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 50);

        setTimeout(function() {

            heart.remove();

        }, 3200);
    }
}


/* =========================================
   PHOTO SCROLL ANIMATION 📸
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const photoCards =
            document.querySelectorAll(".photo-card");

        if (photoCards.length === 0) {
            return;
        }

        // If browser supports IntersectionObserver
        if ("IntersectionObserver" in window) {

            const photoObserver =
                new IntersectionObserver(
                    function(entries) {

                        entries.forEach(
                            function(entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "photo-visible"
                                    );

                                    photoObserver.unobserve(
                                        entry.target
                                    );
                                }
                            }
                        );
                    },
                    {
                        threshold: 0.2
                    }
                );

            photoCards.forEach(
                function(card, index) {

                    card.style.transitionDelay =
                        (index * 0.12) + "s";

                    photoObserver.observe(card);
                }
            );

        } else {

            // Fallback for older browsers
            photoCards.forEach(
                function(card) {

                    card.classList.add(
                        "photo-visible"
                    );
                }
            );
        }
    }
);


/* =========================================
   PAGE STARTUP ❤️
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        // Make sure Home is visible
        const home =
            document.getElementById("home");

        if (home) {
            home.classList.remove(
                "home-hidden"
            );
        }

        // Make sure all other pages are hidden
        const pages =
            document.querySelectorAll(".page");

        pages.forEach(function(page) {

            page.classList.remove(
                "active-page"
            );
        });

    }
);