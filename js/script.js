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

        const enlaces = document.querySelectorAll('a[href^="#"]');

            enlaces.forEach(enlace => {
                enlace.addEventListener('click', function(evento) {
                    evento.preventDefault();

                    const destinoId = this.getAttribute('href');
                    const destino = document.querySelector(destinoId);

                    destino.scrollIntoView({
                    behavior: 'smooth',
                    });
                });
            });
            

        function sendMessage(params) { 
            Swal.fire({
              title: "<i>Mensaje Enviado</i>", 
              html: "<b>Gracias</b>, pronto seras contactado por nosotros",  
              confirmButtonText: "OK", 
            }); 
          }