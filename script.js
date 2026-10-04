// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }
    });

    document.querySelectorAll("#navMenu a").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            menuBtn.innerHTML = "☰";
        });
    });
}

// ===============================
// SELECT PROGRAM
// ===============================

function selectProgram(programName) {
    const program = document.getElementById("program");
    if (program) {
        program.value = programName;
    }
}

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
    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }
    });

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

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
        if (!link.rel.includes("noopener")) {
            link.rel += " noopener";
        }
        if (!link.rel.includes("noreferrer")) {
            link.rel += " noreferrer";
        }
    });
});
