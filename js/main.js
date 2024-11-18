


$('.owl-carousel').owlCarousel({
    
    
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


//button event

    let search = document.querySelector(".search")
    let input = document.querySelector(".input")
    let btn1 = document.querySelector(".btn1")
    let left1 = document.querySelector(".left1")
    let categories=document.querySelector(".categories")
    // let shop=document.querySelector(".shop")


    search.addEventListener('click', function () {
        input.style.transform = "translateX(0)"
    })

    btn1.addEventListener('click', function () {
        left1.classList.toggle('show')
        // btn1.style.backgroundColor = "blue"
        categories.classList.toggle('categories1')

        left1.classList.toggle('show1')

        
    })

    function enter() {
        btn1.style.backgroundColor = "black"
    }

    function leave() {
        btn1.style.backgroundColor = "rgb(131, 188, 18)"

    }

    // let veg=document.querySelectorAll(".veg");
    var leafy=document.querySelector(".leafy");

    function veg(){
        leafy.style.display="block"

    }

    function veg1(){
        leafy.style.display="none"
    }
    
    




    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 75,
        stretch: 50,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });