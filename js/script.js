        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            loop: true
        });
        
        AOS.init();

        function sendMessage(params) { 
            Swal.fire({
              title: "<i>Mensaje Enviado</i>", 
              html: "<b>Gracias</b>, pronto seras contactado por nosotros",  
              confirmButtonText: "OK", 
            }); 
          }