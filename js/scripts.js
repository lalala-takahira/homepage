$(document).ready(function() {
    $('.report-summary').on('click', function() {
        const reportId = $(this).attr('data-id');

        $('.report-summary.open').not(this).removeClass('open');
        $('.report-detail:visible').not('#' + reportId).slideUp(180);

        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('#' + reportId).slideUp(180);
        } else {
            $(this).addClass('open');
            $('#' + reportId).slideDown(180);
        }
    });

    const hashTarget = window.location.hash.replace('#', '');
    if (hashTarget && $('#' + hashTarget).hasClass('report-detail')) {
        $('.report-summary[data-id="' + hashTarget + '"]').addClass('open');
        $('#' + hashTarget).show();
    }

    $(document).on('click', '#menu-button', function() {
        const menu = $('#nav-menu');
        const isOpen = menu.toggleClass('active').hasClass('active');
        $(this)
            .attr('aria-expanded', isOpen)
            .attr('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    });

    $(window).on('resize', function() {
        if ($(window).width() > 768) {
            $('#nav-menu').removeClass('active');
            $('#menu-button').attr('aria-expanded', 'false').attr('aria-label', 'メニューを開く');
        }
    });

    const now = new Date();
    const reservationsOpenAt = new Date('2026-09-01T10:00:00+09:00');
    const reservationsCloseAt = new Date('2026-10-11T00:00:00+09:00');
    let statusText = '9/1 10:00 受付開始';
    let ctaText = '申込ページを確認する';

    if (now >= reservationsOpenAt && now < reservationsCloseAt) {
        statusText = '参加者募集中';
        ctaText = '公式サイトから申し込む';
    } else if (now >= reservationsCloseAt) {
        statusText = '受付は終了しました';
        ctaText = 'イベント詳細を見る';
    }

    $('[data-event-status]').text(statusText);
    $('[data-event-cta]').each(function() {
        const textNode = Array.from(this.childNodes).find(function(node) {
            return node.nodeType === Node.TEXT_NODE;
        });
        if (textNode) {
            textNode.nodeValue = ctaText + ' ';
        }
    });
});
