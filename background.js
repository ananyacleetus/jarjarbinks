(function($) {
    var self = $.javert = new function(){};
    $.extend(self, {
        javertImgs : [
			"http://i.imgur.com/ubRc02u.gif"
        ],
        handleImages : function (lstImgs, time) {
            $.each($('img'), function(i,item) { 
                if($.inArray($(item).attr('src'), lstImgs) == -1) {
					var h = $(item).height();
					var w = $(item).width();
					if(h > 0 && w > 0) {
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else {
						$(item).load(function(){
							if($.inArray($(item).attr('src'), lstImgs) == -1) {
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							}
						});
					}
				}
            });
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        }
    });
    $(function(){
        self.handleImages(self.javertImgs, 3000);
    });
})(jQuery);
