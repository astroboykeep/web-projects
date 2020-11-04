$(function(){
    $('.link__filter a').click(function(event){
        event.preventDefault();
        var get_id = this.id;
        var get_current = $('.feature__content .' + get_id);

        $('.feature__item').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#all').click(function(){
        $('.feature__item').show(500);
    });
});