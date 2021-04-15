
$('.drag').draggable();

$('.drag').click(function(){
    console.log(this, 'clicked')
    var data = $(this).data('clicked');
    var all = $('.all');
    if(data == undefined || data == false){ /*
        $(this).data('clicked', true); 
        this.style.background = 'red'; 
        $(this).draggable('disable'); */
        if(all.children().length <= 0){
            all.draggable().css({
                top: '0px',
                left: '0px',
                width: $(window).width(),
                height: $(window).height(),
                'z-index': 1
            });
        }
        var top = parseInt(all.css('top').replace('px','')) +
                    parseInt($(this).css('top').replace('px',''))
        var left = parseInt(all.css('left').replace('px','')) +
                    parseInt($(this).css('left').replace('px',''))
        $(this).css({
            top: top,
            left: left
        })
        $('.all').append($(this));
    } 
    else {
        $(this).data('clicked', false); /*
        this.style.background = 'grey'; */
        $(this).draggable('enable');
        $('body').append($(this));
        if(all.children() <= 0){ 
            all.draggable('destroy'); 
        }
        
        var top = parseInt(all.css('top').replace('px','')) -
                    parseInt($(this).css('top').replace('px',''))
        var left = parseInt(all.css('left').replace('px','')) -
                    parseInt($(this).css('left').replace('px',''))
        $(this).css({
            top: top,
            left: left
        }) 
    }
})


