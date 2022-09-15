 /* ======================= MENU ======================== */
 $( 'body' ).on('click', '.nav-btn',  function( event ){
    $( event.currentTarget ).toggleClass('active');
    $('.nav-menu').toggleClass('active');
    $( 'body' ).toggleClass('no-scroll');
    return false;
});

 /* ======================= Owl-carousel-trustbycust ======================== */
$('.owl-carousel.trustbycust-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
          
        },
        600:{
            items:1
        },
        800:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

 /* ======================= Owl-carousel-inthenews ======================== */

$('.owl-carousel.inthenews-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
          
        },
        600:{
            items:1
        },
        800:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


 /* ======================= Owl-carousel-giftbyrecpt ======================== */


$('.owl-carousel.giftbyrecpt-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
            loop:true,
        },
        768:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

/* ======================= Owl-carousel-shopbycat-carousel-1 ======================== */
$('.owl-carousel.shopbycat-carousel-1').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
            loop:true,
        },
        768:{
            items:5
        },
        1000:{
            items:5
        }
    }
});

/* ======================= Owl-carousel-shopbycat-carousel-2 ======================== */
$('.owl-carousel.shopbycat-carousel-2').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
            loop:true,
        },
        768:{
            items:5
        },
        1000:{
            items:5
        }
    }
});



/* ======================= Owl-carousel-pawsfavourite-carousel ======================== */
$('.owl-carousel.pawsfavourite-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
            loop:true,
        },
        768:{
            items:4,
           
        },
        1000:{
            items:4
        }
    }
});


/* ======================= Owl-carousel-featuredin-carousel ======================== */
$('.owl-carousel.featuredin-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
            loop:true,
           
        },
        768:{
            items:6,
          
        },
        1000:{
            items:6
        }
    }
});


class Car  {

    constructor(){
        this.color= "red",
        this.wheel= 4,
        this.function = ()=>{
            console.log("available")
        }
    }

}

const car = new Car();
console.log(car)