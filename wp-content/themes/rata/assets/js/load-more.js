jQuery(function($) {
    let page = parseInt(rata_ajax_params.current_page);
    const max = parseInt(rata_ajax_params.max_page);
    const button = $('#load-more');

    button.on('click', function() {
        if (page >= max) return;

        page++;
        $.ajax({
            url: rata_ajax_params.ajax_url,
            type: 'POST',
            data: {
                action: 'rata_load_more_products',
                query: rata_ajax_params.query_vars,
                page: page,
            },
            beforeSend: function() {
                button.text('Loading...');
            },
            success: function(res) {
                $('#product-list ul.products').append(res);
                if (page >= max) {
                    button.remove();
                } else {
                    button.text('Load More');
                }
            }
        });
    });
});
