///// block /////
(function($){
	// x, y 是方塊的位置，這個值是以 w 換算的
	// c 是方塊顏色
	// w 是方塊的邊長
	$.fn.block = function(x,y,c='#00ff00',w=30){
		x *= w;
		y *= w;
		var cvs = $(this);
		var ctx
		if(!cvs.data('ctx')){
			ctx = cvs[0].getContext('2d')
			cvs.data('ctx', ctx);
		}else{
			ctx = cvs.data('ctx');
		}
		var tmp = ctx.fillStyle;
		ctx.fillStyle = c;
		ctx.fillRect(x, y, w, w);
		ctx.fillStyle = tmp;
	}
})(jQuery);
