$(document).ready(function() {
// Initialize royalSlider
var si = $('.slider').royalSlider({
addActiveClass: true,
arrowsNav: false,
autoScaleSlider: true,
controlNavigation: 'bullets',
fadeinLoadedSlide: false,
globalCaption: true,
globalCaptionInside: false,
imageScalePadding: 0,
keyboardNavEnabled: true,
loop: true,
slidesSpacing: 0,
transitionSpeed: 500,
transitionType: 'fade',
}).data('royalSlider');

// Smooth scrolling for all links
$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
&& location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
if (target.length) {
$('html, body').animate({
scrollTop: target.offset().top
}, 1000);
return false;
}
}
});
});