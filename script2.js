const swiper = new Swiper('.swiper', {
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
        
      },
      breakpoints: {
        // aqui esta consumindo uma api onde vai definir a quantidade de cards por pixels 
        640: {
          slidesPerView: 1,
          spaceBetween: 18
        },
        
        768: {
          slidesPerView: 2,
          spaceBetween: 18
        },
       
        1188: {
          slidesPerView: 3,
          spaceBetween: 24
        }
    }

}); 
  