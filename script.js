// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }

});


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});



// ===============================
// SELECT PROGRAM
// ===============================

function selectProgram(programName) {

    const program = document.getElementById("program");

    program.value = programName;

}



// ===============================
// WHATSAPP APPLICATION
// ===============================

const applicationForm =
    document.getElementById("applicationForm");


applicationForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const gender =
        document.getElementById("gender").value;

    const program =
        document.getElementById("program").value;

    const message =
        document.getElementById("message").value.trim();


    if (!name || !phone || !program) {

        alert("Please complete all required fields.");

        return;

    }


    // ESARDEF WhatsApp number

    const whatsappNumber =
        "237679952732";


    const whatsappMessage =

`*ESARDEF VTC ONLINE APPLICATION*

*Full Name:* ${name}

*Phone Number:* ${phone}

*Gender:* ${gender || "Not specified"}

*Program:* ${program}

*Additional Message:* ${message || "None"}

I would like to apply for admission at ESARDEF Computer and Catering Vocational Training Center, Limbe.`;


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(
        whatsappURL,
        "_blank"
    );

});



// ===============================
// BACK TO TOP
// ===============================

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});