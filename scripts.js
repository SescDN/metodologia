jQuery(function($){
    $(document).ready(function(){
        $('#slider').slick({
            infinite: false,
            arrows: false,
            dots: true,
            appendDots:$('#controle'),	
            speed: 1000,
            customPaging:
                function(slider, i){
                    var title = $(slider.$slides[i]).data('title');
                    return '<svg></svg><a>' +title +'</a>';
                }
        });

        $('.mais').click(function(){
            $(this).next('aside').slideToggle('slow');
        });
    });
});