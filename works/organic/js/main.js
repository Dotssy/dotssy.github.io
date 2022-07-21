document.addEventListener('DOMContentLoaded', function () {

	const menuIcon = document.querySelector(".menu-icon"),
		header = document.querySelector(".header");

	// БУРГЕР МЕНЮ
	menuIcon.addEventListener("click", () => {
		menuIcon.classList.toggle("menu-icon--active");
		header.classList.toggle("header--mobile");
	});

	// СЛАЙДЕР СО СТРЕЛКАМИ
	const sliderArrows = document.querySelector(".slider-arrows"),
		slidesArrows = sliderArrows.querySelectorAll(".slider-arrows__item"),
		prev = sliderArrows.querySelector(".slider-arrows__arrow--left"),
		next = sliderArrows.querySelector(".slider-arrows__arrow--right");

	let slideIndex = 0,
		sliderArrowsId = null;
	const imgDuration = 5000; // Дефолтное значение таймера

	function showSlideArrows(n = 0) { // Функция для переключения слайдов
		slideIndex += n;

		if (slideIndex < 0) slideIndex = slidesArrows.length - 1;
		if (slideIndex >= slidesArrows.length) slideIndex = 0;

		slidesArrows.forEach(slide => slide.classList.add("hide"));
		slidesArrows[slideIndex].classList.remove("hide");
	}

	// События слайдера со стрелками
	prev.addEventListener("click", () => showSlideArrows(-1));

	next.addEventListener("click", () => showSlideArrows(1));

	// Остановка автоплея по наведению
	sliderArrows.addEventListener("mouseover", () => clearInterval(sliderArrowsId));

	// Запуск автоплея при убирании курсора со слайда
	sliderArrows.addEventListener("mouseout", () => {
		sliderArrowsId = setInterval(() => showSlideArrows(1), imgDuration);
	});

	showSlideArrows();
	sliderArrowsId = setInterval(() => showSlideArrows(1), imgDuration);



	// СЛАЙДЕР С ТОЧКАМИ
	const sliderDots = document.querySelector(".slider-dots"),
		sliderDotsItems = sliderDots.querySelectorAll(".slider-dots__item"),
		navButtons = sliderDots.querySelectorAll(".slider-dots__nav-item");

	let currentSlide = 0,
		sliderDotsId = null;
	const sliderDotsDuration = 4000;

	function changeSlide(n = 0) {
		currentSlide = n;

		if (currentSlide < 0) currentSlide = sliderDotsItems.length - 1;
		if (currentSlide >= sliderDotsItems.length) currentSlide = 0;

		sliderDotsItems.forEach(slide => slide.classList.add("hide"));
		sliderDotsItems[currentSlide].classList.remove("hide");

		navButtons.forEach(btn => btn.classList.remove("slider-dots__nav-item--active"));
		navButtons[currentSlide].classList.add("slider-dots__nav-item--active");
	}

	// События слайдера с точками
	navButtons.forEach(btn => {
		btn.addEventListener("click", (e) => {
			currentSlide = Number(e.target.getAttribute("data-slide-number")) - 1;
			changeSlide(currentSlide);
		});
	});

	sliderDots.addEventListener("mouseover", () => clearInterval(sliderDotsId));

	sliderDots.addEventListener("mouseout", () => {
		sliderDotsId = setInterval(() => changeSlide(currentSlide + 1), sliderDotsDuration);
	});

	changeSlide();
	sliderDotsId = setInterval(() => changeSlide(currentSlide + 1), sliderDotsDuration);


});