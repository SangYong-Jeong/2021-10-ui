/************* Global init ***************/


/************* user function *************/


/************* event callback ************/
function onClick () {
	console.log(this.dataset['img']);
	console.log($(this).data('img'));
	$('.img-wrap img').attr('src', $(this).data('img'));
	$('.img-wrap .name').html( $(this).data('name'));

	this.dataset['flag'] = 'ABCD';
	$(this).data('flag2', 'ABCDE' );

	
}

/************* event init ****************/
$('.thumb img').click(onClick);

/************* start init ****************/

