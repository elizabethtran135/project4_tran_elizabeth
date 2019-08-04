//HAMBURGER
$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});
//change home beluga title on page load
window.addEventListener("load",
  function() {
    document.getElementById("underrated").innerHTML = "The Arctic Whale - The Most Underrated Animal Deserves a Website";
  }, false
);


//random images

var r_image = [
  "images/oc.jpg",
  "images/random1.png",
  "images/random2.jpg",
  "images/random3.jpg",
  "images/random4.jpg"
],

im = document.getElementById("my_image");
var rand_int = Math.floor(Math.random() * 3);
im.src = r_image[rand_int];


//external_link alert
var ext_link =
document.getElementById("external_link");
ext_link.addEventListener("click",
  function(event) {
    var is_sure = confirm("Do you want to leave the Beloved Belugas website and check out WWF?");
      if (is_sure === false) {
        event.preventDefault();
        alert("You have confirmed to stay on Beloved Belugas");
      }
  }, false
);
