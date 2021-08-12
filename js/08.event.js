/**
 * scroll, wheel, resize  
 * 
 * 
 * */

/************* Global init ***************/


/************* user function *************/


/************* event callback ************/
function onScroll (e) {
	// console.log(e);
	// console.log(window.scrollY);    // js
	// console.log($(this).scrollTop());   // jQuery
	// $().offset();
	
	var guideTop = $(this).scrollTop() + $(this).outerHeigth();	
	$('h1.title').each(function(v, i) {
		if(guideTop - 200 > $(this).offset().top) $(this).addClass('active');	});
	$('.box').each(function (v, i) {
		if(guideTop - 200 > $(this).offset().top) $(this).addClass('active');	});
}

function onWheel (e) {
	// console.log(e.deltaY);  // ie, chrome, ff -> +(내리고) -(올리고), opera(부호 반대)
	// console.log(e.originalEvent.deltaY); // jQuery
	console.log(e);
}

function onResize (e) {
	console.log(e);
	console.log(window.innerWidth);
	console.log($(this).width())
	console.log($(this).innerWidth())
	console.log($(this).outerWidth())
	console.log($(this).outerWidth(true))
}

// function onScroll2 () {
// 	console.log($(this).outerHeigth());
// }
console.log($(this).outerHeight())


/************* event init ****************/
// window.addEventListener('scroll', onScroll).trigger('scroll');
$(window).scroll(onScroll2);

// window.addEventListener('wheel', onWheel);
// $(window).on('wheel', onWheel);

// window.addEventListener('resize', onResize);
// $(window).resize(onResize);


/************* start init ****************/

