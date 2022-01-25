function getBalance() {
  $.getJSON('/current_balance', function(data) {
    $("#user_balance, .user_balance").text(data.balance);
  });
}
function loadBalance() {
  
}


$(document).ready(function(){

    //$('#ThemeList').bootstrapThemeSwitcher('loadThemeFromCookie');

    $('.slot-effect').hover(function(){
       $('.img', this).velocity({
           scale: 1.7,
           opacity: 0.5
       }, { duration: 1000 });


        $('.play-free', this).css('top', -100).velocity({
            translateY: 194
        }, {duration: 200});

        $('.play-now', this).css('top', 300).velocity({
            translateY: '-256px'
        }, {duration: 200});

        $('h2', this).velocity({
            translateY: 80
        }, {duration: 200});


    }, function(){
        $('.img', this).velocity('stop').velocity({
            scale: 1,
            opacity: 1
        }, {duration: 50});


        $('.play-free', this).velocity('stop').velocity({
            translateY: -100
        }, {duration: 50});

        $('.play-now', this).velocity('stop').velocity({
            translateY: 300
        }, {duration: 50});

        $('h2', this).velocity({
            translateY: '-100px'
        }, {duration: 200});
    });
});