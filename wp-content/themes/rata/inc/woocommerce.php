<?php
// Modify WooCommerce breadcrumb appearance and classes
add_filter('woocommerce_breadcrumb_defaults', function ($defaults) {
    $defaults['wrap_before'] = '<nav class="woocommerce-breadcrumb text-vivid-pink text-sm mb-4" aria-label="Breadcrumb"><ol class="flex flex-wrap items-center gap-x-1">';
    $defaults['wrap_after']  = '</ol></nav>';
    $defaults['before']      = '<li>';
    $defaults['after']       = '</li>';
    $defaults['delimiter']   = '<span class="mx-1 text-vivid-pink">&gt;</span>'; // Use > symbol
    return $defaults;
});

// Ensure breadcrumb home URL is correct
add_filter('woocommerce_breadcrumb_home_url', fn() => home_url());

// Add vivid pink class to breadcrumb links
add_filter('woocommerce_breadcrumb_main', function ($crumbs) {
    foreach ($crumbs as $key => $crumb) {
        if (!empty($crumb[1])) {
            $crumbs[$key][0] = '<a href="' . esc_url($crumb[1]) . '" class="text-vivid-pink hover:underline">' . esc_html($crumb[0]) . '</a>';
            $crumbs[$key][1] = ''; // Remove raw URL from output
        }
    }
    return $crumbs;
});


add_action('pre_get_posts', 'filter_products_by_category_and_tag');
function filter_products_by_category_and_tag($query) {
	if (
		is_admin() ||
		!$query->is_main_query() ||
		!is_tax('product_cat') ||
		!isset($_GET['tag'])
	) {
		return;
	}

	$tag_slug = sanitize_text_field($_GET['tag']);
	$category_slug = get_queried_object()->slug;

	$query->set('tax_query', [
		'relation' => 'AND',
		[
			'taxonomy' => 'product_cat',
			'field'    => 'slug',
			'terms'    => $category_slug,
		],
		[
			'taxonomy' => 'product_tag',
			'field'    => 'slug',
			'terms'    => $tag_slug,
		],
	]);
}


add_filter( 'template_include', 'custom_woocommerce_tag_template', 99 );

function custom_woocommerce_tag_template( $template ) {
    if ( is_tax( 'product_tag' ) ) {
        $template = locate_template( array( 'taxonomy-product_tag.php', 'woocommerce/taxonomy-product_tag.php' ) );
    }
    return $template;
}

