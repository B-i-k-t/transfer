/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);


/* Увеличиваем индекс на 2 — показываем следующий слайд*/
arrow_right.onclick = function() {
    showSlides(slideIndex += 2);  
};

/* Уменьшает индекс на 2 — показываем предыдущий слайд*/
arrow_left.onclick = function() {
    showSlides(slideIndex -= 2);  
};

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let slides = document.getElementsByClassName("review__item");
    let dots = document.getElementsByClassName("slider__dot");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length-1
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    } 
        
    slides[slideIndex - 1].style.display = "flex";
    slides[slideIndex].style.display = "flex";  

    for (let dot of dots) {
        dot.className = dot.className.replace(" slider__dot_active", "");
    }
    dots[slideIndex - 1].className += " slider__dot_active";
    dots[slideIndex].className += " slider__dot_active";
}
