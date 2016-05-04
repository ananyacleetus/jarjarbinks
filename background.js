(function($) {
    var self = $.jarb = new function(){};
    $.extend(self, {
        jarbImgs : [
			"http://www.gannett-cdn.com/-mm-/7420484b74b75a2c735248dcda61358fb389f70a/c=0-30-1058-628&r=x329&c=580x326/local/-/media/2015/12/06/USATODAY/USATODAY/635850267481025932-JARJAR-1553719.JPG"
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
        self.handleImages(self.jarbImgs, 3000);
    });
})(jQuery);
