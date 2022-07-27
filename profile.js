//file js untuk mini project sudah terlampir di branch html
//file ini hanya berisikan overview tentang file js apa saja yang terlampir pada mini project

//karena mini project menggunakan bootstrap, maka perlu melampirkan script js sesuai dengan komponen bootstrap yang digunakan

//Dilampirkan juga 2 js file terpisah yang diambil dari bootstrap, dengan nama file:
//owl.carousel
//owl.carousel.min

// Bootstrap JS File pada semua website page
src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity = "sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
crossorigin = "anonymous"


src = "https://code.jquery.com/jquery-3.6.0.min.js"
integrity = "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
crossorigin = "anonymous"

//Bootstrap JS File pada carousel banner di home page (code diperoleh dari kak mentor)
$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
}
)


//JS File yang digunakan di testimonial carousel slider (code diperoleh dari https://codepen.io/Marty-Development/pen/vYLLoaQ)
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

if (!slides.length == 0) {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    let currentSlide = function (n) {
        showSlides((slideIndex = n));
    };

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}

prev.addEventListener("click", () => {
    plusSlides(-1);
});

next.addEventListener("click", () => {
    plusSlides(1);
});