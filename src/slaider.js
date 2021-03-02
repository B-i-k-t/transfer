/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
let slides = document.getElementsByClassName("review__item");
let dots = document.getElementsByClassName("slider__dot");
showSlides(slideIndex);


/* Увеличиваем индекс на 2 — показываем следующий слайд*/
arrow_right.onclick = function() {
    showSlides(slideIndex += 2);  
};

/* Уменьшает индекс на 2 — показываем предыдущий слайд*/
arrow_left.onclick = function() {
    showSlides(slideIndex -= 2);  
};

currentSlide1.onclick = function() {
    currentSlide(1);
}
currentSlide2.onclick = function() {
    currentSlide(1);
}
currentSlide3.onclick = function() {
    currentSlide(3);
}
currentSlide4.onclick = function() {
    currentSlide(3);
}

function currentSlide(n) {
    for (let slide of slides) {
        slide.style.display = "none";
    } 
    slides[n-1].style.display = "flex";
    slides[n].style.display = "flex";  
    for (let dot of dots) {
        dot.className = dot.className.replace(" slider__dot_active", "");
    }
    dots[n - 1].className += " slider__dot_active";
    dots[n].className += " slider__dot_active";
}

/* Функция перелистывания */
function showSlides(n) {
   
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length-1;
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

/* for small screen */

/* Устанавливаем индекс слайда по умолчанию */
let slideIndex_sm = 1;
let slides_sm = document.getElementsByClassName("review__item_sm");
let dots_sm = document.getElementsByClassName("slider__dot_sm");
showSlides_sm(slideIndex_sm);


/* Увеличиваем индекс на 1 — показываем следующий слайд*/
arrow_right_sm.onclick = function() {
    showSlides_sm(slideIndex_sm += 1);  
};

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
arrow_left_sm.onclick = function() {
    showSlides_sm(slideIndex_sm -= 1);  
};

currentSlide1_sm.onclick = function() {
    currentSlide_sm(1);
}
currentSlide2_sm.onclick = function() {
    currentSlide_sm(2);
}
currentSlide3_sm.onclick = function() {
    currentSlide_sm(3);
}
currentSlide4_sm.onclick = function() {
    currentSlide_sm(4);
}

function currentSlide_sm(n) {
    for (let slide of slides_sm) {
        slide.style.display = "none";
    } 
    slides_sm[n-1].style.display = "flex";
    for (let dot of dots_sm) {
        dot.className = dot.className.replace(" slider__dot_active", "");
    }
    dots_sm[n - 1].className += " slider__dot_active";
}

/* Функция перелистывания */
function showSlides_sm(n) {
   
    if (n > slides_sm.length) {
      slideIndex_sm = 1;
    }
    if (n < 1) {
        slideIndex_sm = slides_sm.length-1;
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides_sm) {
        slide.style.display = "none";
    } 
        
    slides_sm[slideIndex_sm - 1].style.display = "flex";

    for (let dot of dots_sm) {
        dot.className = dot.className.replace(" slider__dot_active", "");
    }
    dots_sm[slideIndex_sm - 1].className += " slider__dot_active";

}

