(function($) {
    var self = $.jarb = new function(){};
    $.extend(self, {
        jarbImgs : [
			"http://www.relatably.com/q/img/jar-jar-binks-quotes-mp3/tumblr_nxay3r8YgN1rl29sro1_1446660135_cover.png"
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
