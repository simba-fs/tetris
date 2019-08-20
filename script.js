// alias 
const log = console.log;

var tet = $('#tet');

function right(){
	log('right');
}

function left(){
	log('left');
}

function down(){
	log('down');
}

function flipR(){
	log('flipR');
}

function flipL(){
	log('flipL');
}

function flipU(){
	log('flipU');
}

// bind keypress
var config = {
	right:{
		key: 'right',
		fn: right 
	},
	left: {
		key: 'left',
		fn: left 
	},
	down:{
		key: 'down',
		fn: down 
	},
	flipR:{
		key: 'a',
		fn: flipR 
	},
	flipL: {
		key: 'd',
		fn: flipL
	},
	flipU: {
		key: 's',
		fn: flipU
	}
}


$document = $(document);
$.each(config, (index, item) => {
	$document.bind('keydown', item.key, item.fn);
});
