var classList1 = document.querySelector('.product-middle .col-md-5').classList;
var classList2 = document.querySelector('.product-middle .col-md-7').classList;

var minWidth767 = window.matchMedia("(max-width: 767px)");

function match() {
	if (minWidth767.matches) {
		classList1.remove('order-2');
		classList1.add('order-1');
		classList2.remove('order-1');
		classList2.add('order-2');
	} else {
		classList1.remove('order-1');
		classList1.add('order-2');
		classList2.remove('order-2');
		classList2.add('order-1');
	}
}

minWidth767.addListener(match);

match();


var localeTimeStart = new Date();

function showTime() {
	var localeTime = new Date();
	var dH = `${localeTime.getHours() + 4}`;
	dH = dH.length < 2 ? '0' + dH : dH;
	var dM = `${localeTime.getMinutes()}`;
	dM = dM.length < 2 ? '0' + dM : dM;
	var dS = `${localeTime.getSeconds()}`;
	dS = dS.length < 2 ? '0' + dS : dS;
	var tmp = `${dH} : ${dM} : ${dS}`;
	document.getElementById('clock').innerHTML = tmp;
	var t = setTimeout('showTime()', 1000);
}

showTime();



$(document).ready(function() {

	$('.navbar-toggler').click(function() {
		$('#mob-menu-icon').toggleClass('open');
	});

});