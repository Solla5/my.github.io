new Swiper('.swiper',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',

        clickable: true,

        dinamicBullets: true,
      },
      // автоподстройка размера
      autoHeight: true,
      // количество картинок в слайде 
      slidesPerView: 1,

      // настройка отступа между картинками 
      spaceBetween: 30,

      // бесконечный слайдер
      loop:true,

      // свободный режим 
      freeMode: true,

      autoplay: {
        // пауза между прокруткой
        dalay:100,
        //Закончить на последнем слайдере 
        stopOnLastSlide:false,
        // Отключить при ручном переключении
        disableOnInteraction: false
      },

      // скорость прокрутки
      speed: 900,

      // адаптив 
      breakpoints: {
        320:{
            slidesPerView:1,
        },
        480:{
            slidesPerView:1,
        },
        992:{
            slidesPerView:1,
        }
      }
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}