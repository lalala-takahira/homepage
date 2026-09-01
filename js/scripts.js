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

    $('[data-event-card]').each(function() {
        const card = $(this);
        const closeAtValue = card.attr('data-event-close-at');
        const closeAt = closeAtValue ? new Date(closeAtValue) : null;

        if (!closeAt || Number.isNaN(closeAt.getTime()) || now < closeAt) {
            return;
        }

        card.find('[data-event-status]').text('受付は終了しました');
        card.find('[data-event-cta]').each(function() {
            const closedText = $(this).attr('data-closed-text') || 'イベント詳細を見る';
            const closedHref = $(this).attr('data-closed-href');
            const textNode = Array.from(this.childNodes).find(function(node) {
                return node.nodeType === Node.TEXT_NODE;
            });
            if (textNode) {
                textNode.nodeValue = closedText + ' ';
            }
            if (closedHref) {
                $(this).attr('href', closedHref);
            }
        });
    });
});
