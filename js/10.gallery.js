/************* Global init ***************/


/************* user function *************/


/************* event callback ************/
function onClick () {
	console.log(this.dataset['img']);
	console.log($(this).data('img'));
	$('.img-wrap img').attr('src', $(this).data('img'));
	$('.img-wrap .name').html( $(this).data('name'));

	this.dataset['flag2'] = 'ABCD';
	$(this).data('flag', 'ABCDE' );

	console.log(this.dataset['flag2']);
	console.log($(this).data('flag'));
}

/************* event init ****************/
$('.thumb img').click(onClick);

/************* start init ****************/

