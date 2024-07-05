// scripts.js
$(document).ready(function() {
    console.log('Document is ready');
   // メニューボタンのクリックイベント
    $('#menu-button').click(function() {
        console.log('Menu button clicked');
        $('#nav-menu').toggleClass('active');
    });

    // ウィンドウリサイズイベント
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('#nav-menu').removeClass('active');
        }
    });
});
