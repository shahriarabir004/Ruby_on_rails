$(document).ready(function(){
    $('.navbar .dropdown').hover(function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
    }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp()
    });
 

    $('#testBtn').click(function () {
        var cnt=4;
        var btn = $(this);
        btn.button('loading');
        setTimeout(function () {
            cnt++;
            //
            btn.text('  ' + cnt);
            //btn.button('reset');
        }, 600);
     });

    $('#testBtnDown').click(function () {
        var cnt=4;
        var btn = $(this);
        btn.button('loading');
        setTimeout(function () {
            if (cnt > 0) {
                cnt--;
            }
            //btn.button('reset');
            btn.text(' ' + cnt);
        }, 600);
     });

})


