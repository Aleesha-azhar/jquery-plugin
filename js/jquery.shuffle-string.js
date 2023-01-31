(function ($) {
    $.fn.shuffleString = function (options) {
          var settings = $.extend({
            color : "black",
            complete : null
          },options)
        return this.each(function () {

            $(this).text(suffleStringOfChar($(this).text()));
            $(this).css('color', settings.color);
            if ($.isFunction(settings.complete)){
                settings.complete.call(this);
            }


            function suffleStringOfChar(string) {

                let arr = string.split('');
                arr.sort(function(){
                    return 0.5 - Math.random();
                });
                string = arr.join('');
                return string;
            }

        });
    }
}(jQuery));