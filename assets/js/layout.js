//header
$(window).on("scroll", function () {
	if ($(this).scrollTop() > 0) {
		$(".header").addClass("small");
	} else {
		$(".header").removeClass("small");
	}
});

window.onload = function () {
	var viewOffset = $("main").offset().top - $(window).scrollTop();
	if (viewOffset < 0) {
		$(".header").addClass("small");
	}
};

//menu button
$(function () {
	$(".navmenu").click(function () {
		$(".menu").addClass("full");
		$("body").addClass("noscroll");
	});
	$(".close").click(function () {
		$(".menu").removeClass("full");
		$("body").removeClass("noscroll")
	});
});

//project grid
// init Masonry
var $grid = $('.projects-list').masonry({
	columnWidth: '.grid-sizer', // do not use .grid-sizer in layout
	itemSelector: '.grid-item',
	percentPosition: true,
	gutter: 32
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress(function () {
	$grid.masonry('layout');
});

//loader
var sr = ScrollReveal({
	origin: "bottom",
	duration: 800,
	delay: 0,
	scale: 1
});

sr.reveal('.projects-list li');
sr.reveal('.posts-list a');
