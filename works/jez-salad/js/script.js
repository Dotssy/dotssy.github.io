document.addEventListener('DOMContentLoaded', function () {

	// HEADER AND MOBILE MENU
	const header = document.querySelector(".header");

	// Header transformation on scroll
	window.addEventListener("scroll", () => {
		if (window.scrollY > 10) {
			header.classList.add("header-transform");
		} else {
			header.classList.remove("header-transform");
		}
	});

	// Mobile menu
	const mobileMenu = header.querySelector(".header__nav"),
		menuOpenBtn = header.querySelector(".burger-menu"),
		menuCloseBtn = mobileMenu.querySelector(".menu-close-btn");

	menuOpenBtn.onclick = () => {
		mobileMenu.style.right = "0";
	}

	menuCloseBtn.onclick = () => {
		mobileMenu.style.right = "-100%";
	}

	// ANCHORS
	const anchors = document.querySelectorAll(".header__nav ul a");

	anchors.forEach(anc => {
		anc.addEventListener("click", (e) => {
			e.preventDefault();

			const id = anc.getAttribute("href");
			const elem = document.querySelector(id);

			window.scroll({
				top: elem.offsetTop - 50,
				behavior: 'smooth',
			});
		});
	});

	// TESTIMONIALS SLIDER

	const slideNumber = document.querySelector(".slide-number"),
		slidesTotal = document.querySelector(".slides-total"),
		prevBtn = document.querySelector(".prev-slide"),
		nextBtn = document.querySelector(".next-slide"),
		numberOfSlides = document.querySelectorAll(".testimonials__slider-item").length;

	const testimonialsSlider = new Swiper(".testimonials__slider", {
		slidesPerView: "auto",
		initialSlide: 1,
		spaceBetween: 30,
		centeredSlides: true,
		navigation: {
			nextEl: ".next-slide",
			prevEl: ".prev-slide",
		},
		on: {
			slideChange: function () {
				slideNumber.textContent = this.activeIndex >= 10 ?
					this.activeIndex + 1 :
					`0${this.activeIndex + 1}`;

				if (this.activeIndex + 1 == numberOfSlides) {
					nextBtn.classList.remove("active");
				} else {
					nextBtn.classList.add("active");
				}

				if (this.activeIndex + 1 == 1) {
					prevBtn.classList.remove("active");
				} else {
					prevBtn.classList.add("active");
				}
			}
		}
	});

	slidesTotal.textContent = numberOfSlides >= 10 ? numberOfSlides : `0${numberOfSlides}`;

});