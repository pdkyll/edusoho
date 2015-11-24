define(function(require, exports, module) {
    var Swiper = require('swiper');
    var Laryload = require('echo.js');
    exports.run = function() {
        Laryload.init();
        
        if ($(".es-poster .swiper-slide").length > 1) {
            var swiper = new Swiper('.es-poster.swiper-container', {
                pagination: '.swiper-pager',
                paginationClickable: true,
                autoplay: 5000,
                autoplayDisableOnInteraction: false,
                loop: true,
                calculateHeight: true,
                roundLengths: true,
                onInit: function(swiper) {
                   $(".swiper-slide").removeClass('swiper-hidden'); 
                }
            });
        }
    }
});