/* IMAGE HOVER */

$(document).ready (function() {
  $('#twitter').on('mouseover', changeTwitterToRed);
  $('#twitter').on('mouseout', changeTwitterBack);
  $('#facebook').on('mouseover', changeFacebookToRed);
  $('#facebook').on('mouseout', changeFacebookBack);
  $('#dribbble').on('mouseover', changeDribbbleToRed);
  $('#dribbble').on('mouseout', changeDribbbleBack);
  $('.sitename').on('mouseover', changeLogoColor);
  $('.sitename').on('mouseout', changeLogoColorBack);

  // Twitter Icon

  function changeTwitterToRed(){
    $('#twitter').attr('src', 'images/twitter-red.png');
  };

  function changeTwitterBack() {
    $('#twitter').attr('src', 'images/twitter.png');
  }

  // Facebook Icon

  function changeFacebookToRed(){
    $('#facebook').attr('src', 'images/facebook-red.png');
  };

  function changeFacebookBack() {
    $('#facebook').attr('src', 'images/facebook.png');
  }

  // Dribbble Icon

  function changeDribbbleToRed(){
    $('#dribbble').attr('src', 'images/dribbble-red.png');
  };

  function changeDribbbleBack() {
    $('#dribbble').attr('src', 'images/dribbble.png');
  }

  // Logo Icon

  function changeLogoColor() {
    $('.sitename').attr('src', 'images/lamp-on.png');
  };

  function changeLogoColorBack() {
    $('.sitename').attr('src', 'images/lamp-off.png');
  };

});
