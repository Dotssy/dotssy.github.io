$(document).ready(function () {

$('.myButton').on('mouseover', getRed);
$('.myButton').on('mouseout', getWhite);


function getRed(){
  $('.myButton').animate({
    width: "200px",
    height: "toggle"
  }, 2000 )
};

function getWhite(){
  $('.myButton').css('backgroundColor', 'transparent');
}


});
