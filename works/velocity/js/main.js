document.addEventListener('DOMContentLoaded', function () {

	// TABS
	const tabButtons = document.querySelectorAll(".tabs__nav button");
	const tabsItems = document.querySelectorAll(".tabs .tabs__item");

	// Function to hide tabs and remove active class from buttons
	function hideTabs() {
		tabsItems.forEach(item => item.classList.add("hide"));
		tabButtons.forEach(btn => btn.classList.remove("active"));
	}

	// Shows number of Tab item and makes corresponding button active
	function showTab(idx) {
		tabsItems[idx].classList.remove("hide");
		tabButtons[idx].classList.add("active");
	}

	hideTabs();
	showTab(0);

	tabButtons.forEach((btn, i) => {
		btn.addEventListener("click", () => {
			hideTabs();
			showTab(i);
		});
	});

	// ANCHORS
	const anchors = document.querySelectorAll(".header__nav a");

	anchors.forEach(anc => {
		anc.addEventListener("click", (e) => {
			e.preventDefault();

			const id = anc.getAttribute("href");
			const elem = document.querySelector(id);

			window.scroll({
				top: elem.offsetTop - 80,
				behavior: 'smooth',
			});
		});
	});
	
});