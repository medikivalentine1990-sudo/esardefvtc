document.addEventListener("DOMContentLoaded", function () {
    // ===============================
    // MOBILE MENU
    // ===============================
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {
        const setMenuState = function (isOpen) {
            navMenu.classList.toggle("active", isOpen);
            menuBtn.setAttribute("aria-expanded", String(isOpen));
            menuBtn.textContent = isOpen ? "✕" : "☰";
        };

        menuBtn.addEventListener("click", function () {
            const isOpen = !navMenu.classList.contains("active");
            setMenuState(isOpen);
        });

        document.querySelectorAll("#navMenu a").forEach(function (link) {
            link.addEventListener("click", function () {
                setMenuState(false);
            });
        });

        document.addEventListener("click", function (event) {
            const clickedInsideNav = navMenu.contains(event.target);
            const clickedOnButton = menuBtn.contains(event.target);

            if (!clickedInsideNav && !clickedOnButton && navMenu.classList.contains("active")) {
                setMenuState(false);
            }
        });
    }

    // ===============================
    // SELECT PROGRAM
    // ===============================
    window.selectProgram = function (programName) {
        const program = document.getElementById("program");
        if (program) {
            program.value = programName;
            program.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    // ===============================
    // WHATSAPP APPLICATION
    // ===============================
    const applicationForm = document.getElementById("applicationForm");

    if (applicationForm) {
        applicationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const nameInput = document.getElementById("name");
            const phoneInput = document.getElementById("phone");
            const genderInput = document.getElementById("gender");
            const programInput = document.getElementById("program");
            const messageInput = document.getElementById("message");

            if (!nameInput || !phoneInput || !programInput || !genderInput || !messageInput) {
                alert("Form elements are missing. Please refresh and try again.");
                return;
            }

            const name = nameInput.value.trim();
            const phone = phoneInput.value.trim();
            const gender = genderInput.value;
            const program = programInput.value;
            const message = messageInput.value.trim();

            if (!name || !phone || !program) {
                alert("Please complete all required fields.");
                return;
            }

            const normalizedPhone = phone.replace(/\D+/g, "");
            if (normalizedPhone.length < 9 || normalizedPhone.length > 15) {
                alert("Please enter a valid phone number.");
                phoneInput.focus();
                return;
            }

            const whatsappNumber = "237679952732";
            const whatsappMessage = `*ESARDEF VTC ONLINE APPLICATION*

*Full Name:* ${name}

*Phone Number:* ${phone}

*Gender:* ${gender || "Not specified"}

*Program:* ${program}

*Additional Message:* ${message || "None"}

I would like to apply for admission at ESARDEF Computer and Catering Vocational Training Center, Limbe.`;

            const whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappMessage);
            const popup = window.open(whatsappURL, "_blank", "noopener,noreferrer");

            if (!popup) {
                window.location.href = whatsappURL;
            }
        });
    }

    // ===============================
    // BACK TO TOP
    // ===============================
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        const toggleTopButton = function () {
            topBtn.classList.toggle("show", window.scrollY > 500);
        };

        toggleTopButton();

        window.addEventListener("scroll", toggleTopButton);

        topBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // ===============================
    // SAFE EXTERNAL LINKS
    // ===============================
    document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
        if (!link.rel.includes("noopener")) {
            link.rel += " noopener";
        }
        if (!link.rel.includes("noreferrer")) {
            link.rel += " noreferrer";
        }
    });
});
