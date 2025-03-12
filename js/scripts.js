$(document).ready(function() {
    console.log('Document is ready');
  
    // タイトル部分クリック時に開閉する処理
    $('.report-summary').on('click', function() {
      // クリックされたsummaryのdata-idを取得
      let reportId = $(this).attr('data-id');
      
      // すでに開いてるものがあれば閉じる（.open を外す＆slideUp）
      $('.report-summary.open').not(this).removeClass('open');
      $('.report-detail:visible').not('#'+reportId).slideUp();
  
      // 自分が開いているかどうか判定
      if ($(this).hasClass('open')) {
        // 自分がopenだった場合は閉じる
        $(this).removeClass('open');
        $('#' + reportId).slideUp();
      } else {
        // 自分が閉じている場合は開く
        $(this).addClass('open');
        $('#' + reportId).slideDown();
      }
    });
  
    // メニュー開閉（既存のコードがある場合はここに）
    $('#menu-button').click(function() {
      $('#nav-menu').toggleClass('active');
    });
  
    // ウィンドウリサイズ時にメニューを閉じる等
    $(window).resize(function() {
      if ($(window).width() > 768) {
        $('#nav-menu').removeClass('active');
      }
    });
  });
  