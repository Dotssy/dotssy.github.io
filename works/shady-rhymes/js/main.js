document.addEventListener('DOMContentLoaded', function () {
	// BURGER MENU
	const header = document.querySelector(".header"),
				menuIcon = header.querySelector(".menu-icon");

	menuIcon.addEventListener("click", () => {
		menuIcon.classList.toggle("menu-icon--active");
		header.classList.toggle("header--mobile");
	});	

	// Change header bg on scroll
	window.addEventListener("scroll", () => {
		if (window.scrollY > 0) {
			header.classList.add("header-transform");
		} 
		else {
			header.classList.remove("header-transform");
		}
	});

	// WELCOME SLIDER
	const welcomeSlider = new Swiper(".welcome__slider", {
		spaceBetween: 30,
		effect: "fade",
		speed: 800,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 5000,
		},
	});

	// TESTIMONIALS SLIDER
	const testimonialsSlider = new Swiper(".testimonials__slider", {
		spaceBetween: 30,
		effect: "fade",
		speed: 400,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 7000,
		},
	});
	
	// ACCORDION
	const accordion = document.querySelector(".ideas__accordion"),
				accordionBtns = accordion.querySelectorAll(".accordion__btn");

				
	accordionBtns.forEach(btn => {
		btn.addEventListener("click", () => {
			btn.classList.toggle("active");

			btn.nextElementSibling.classList.toggle("show");
		});
	});

});