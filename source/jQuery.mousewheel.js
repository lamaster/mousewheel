// (c)2011 Astafiev Alexey <astafiev.alexey@gmail.com>
;(function($){
    var eventName = $.browser.mozilla ? 'DOMMouseScroll' : 'mousewheel'; // I don't know how to test it 

    function handler(event){
        event.type = 'mousewheel';
        event.wheelDelta = event.wheelDelta ? event.wheelDelta/120 : -(event.detail || 0)/3;
    }

    $.event.special.mousewheel = {
        setup: function(data){
            $.event.add(this, eventName, handler, data);
            return false;
        },
        teardown: function(){
            $.event.remove(this, eventName, handler);
            return false;
        }
    };

    $.fn.mousewheel = function(fn){
        return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
    };
})(jQuery);