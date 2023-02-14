let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}
// reviews Swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });

//Email Js
function validate() {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == ""){
        emptyerror();
        } else {
            sendemail(name.value, email.value, msg.value);
            success();
        }
    })
}    
validate();

function sendmail(name, email, msg) {
    emailjs.send("service_gtyaifm","template_4ui0bzh",{
        from_name: email,
        to_name: name,
        message: msg,
        });        
}

function emptyerror() {
    swal({
        title: "Oh No....",
        text: "Os campos não podem estar vazios!",
        icon: "error",
      });
}
function success() {
    swal({
        title: "Email enviado com Sucesso",
        text: "Tentaremos responder em 24 horas!",
        icon: "success",
      });
}
// Header background Change On Scrool
let header = document.querySelector("header")

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scroolY > 0);
});

// Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle(".scroll-active", window.scroolY >= 400);
});