$(document).ready(function(){
    $('.header-navbar__btn').click(function(){
        $(this).toggleClass('open');
        $('.header-navbar__list').toggleClass('open');
    });
});


function slidesPlagin(activeSlide = 3) {
    const slides = document.querySelectorAll('.right-project__container-slide');

    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active');
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
    }
}

slidesPlagin();

console.log("Самооценка: 150/150");
console.log("1.Вёрстка валидная +10");
console.log("2. Вёрстка семантическая(присутствуют теги: main(+2), header(+2), nav(+2), section(+6), figure(+2), footer(+2), заголовки h1-h6. В итоге: +20");
console.log("3. Для оформления СV используются css-стили +10");
console.log("4. Контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет тянется во всю ширину страницы +10");
console.log("5. Вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10");
console.log("6. Есть адаптивное бургер-меню(появляется на разрешении 786px). Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. +10");
console.log("7. На странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt. +10");
console.log("8. Контакты для связи и перечень навыков оформлены в виде списка ul > li +10");
console.log("9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10");
console.log("10. CV содержит пример моего кода (решение задач с сайта codewars. +10");
console.log("11. CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10");
console.log("12. CV выполнено на английском языке +10");
console.log("13. Выполнены требования к Pull Request +10");
console.log("14. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию +10");
