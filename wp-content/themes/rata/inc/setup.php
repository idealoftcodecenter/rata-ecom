<?php

// =====================================================================================================> Rata Theme Setup
// This file sets up theme support and registers menus.
function rata_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('align-wide');
    add_theme_support('editor-styles'); // ✔️ Enables custom styles in block editor
    add_theme_support('wp-block-styles'); // ✔️ Loads default Gutenberg block styles
    add_theme_support('responsive-embeds');
    add_theme_support('woocommerce');

    register_nav_menus([
        'primary' => __('Primary Menu', 'rata'),
        'footer'  => __('Footer Menu', 'rata'),
		'footer_policies' => __('Footer Policies Menu', 'rata'), // ✅ NEW
    ]);

    // ✔️ Load your Tailwind editor styles in Gutenberg editor
    add_editor_style('assets/css/tailwind.css');
}
add_action('after_setup_theme', 'rata_theme_setup');





// =====================================================================================================> Enqueue Scripts and Styles
// This function enqueues the theme's scripts and fallback styles (like style.css) using cache-busting.
function rata_enqueue_scripts() {
    // Optionally enqueue theme info-only style.css
	wp_enqueue_style('rata-style', get_stylesheet_uri(), [], filemtime(get_template_directory() . '/style.css'));

	// Enqueue your custom scripts
	wp_enqueue_script('rata-scripts', get_template_directory_uri() . '/assets/js/header.js', [], false, true);

	// Enqueue the load more script
	wp_enqueue_script('rata-load-more', get_template_directory_uri() . '/assets/js/load-more.js', ['jquery'], null, true);
    wp_localize_script( 'rata-load-more', 'rata_ajax_params', [
        'ajax_url' => admin_url( 'admin-ajax.php' ),
        'query_vars' => json_encode( $GLOBALS['wp_query']->query ),
        'current_page' => max( 1, get_query_var('paged') ),
        'max_page' => $GLOBALS['wp_query']->max_num_pages,
    ]);

	wp_enqueue_style('swiper-style', 'https://unpkg.com/swiper/swiper-bundle.min.css');
    wp_enqueue_script('swiper-script', 'https://unpkg.com/swiper/swiper-bundle.min.js', array(), null, true);

	wp_enqueue_script( 'just-validate', 'https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js', array(), null, true );

	wp_enqueue_script('rata-gallery', get_template_directory_uri() . '/assets/js/micromodal.min.js');

	wp_enqueue_script('rata-gallery', get_template_directory_uri() . '/assets/js/gallery.js', ['swiper-script'], null, true);

	// ===================================================================================================== LIGHTBOX ENQUEUING
	// GLightbox for zoom
    wp_enqueue_style('glightbox-css', 'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css');
    wp_enqueue_script('glightbox-js', 'https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js', [], null, true);

	// ===================================================================================================== TEMPORARY ENQUEUING 
	wp_enqueue_style('swiper-style', '/assets/index-rkK2SzGx.css');
    wp_enqueue_script('swiper-script', '/assets/index-7lUWUbe5.js', array(), null, true);


}
add_action('wp_enqueue_scripts', 'rata_enqueue_scripts');



// =====================================================================================================> Preload Tailwind CSS
// This function preloads Tailwind CSS early to improve perceived performance and avoid FOUC.
function rata_preload_tailwind_css() {
    $tailwind_path = get_template_directory() . '/assets/css/tailwind.css';
    $tailwind_uri  = get_template_directory_uri() . '/assets/css/tailwind.css';
    $version       = filemtime($tailwind_path);

    // Prevent FOUC by adding temporary hidden class
    echo "<style>html.fouc-preload{visibility:hidden;}</style>\n";

    // Preload tailwind and load it with rel switch
    echo "<link rel='preload' href='{$tailwind_uri}?ver={$version}' as='style' onload=\"this.onload=null;this.rel='stylesheet'\">\n";

    // Fallback for non-JS users
    echo "<noscript><link rel='stylesheet' href='{$tailwind_uri}?ver={$version}'></noscript>\n";

    // Remove FOUC class once CSS is loaded
    echo "<script>document.documentElement.classList.remove('fouc-preload');</script>\n";
}
add_action('wp_head', 'rata_preload_tailwind_css', 5);



// =====================================================================================================> Add WooCommerce Support
// This function adds support for WooCommerce features in the theme.
// It allows the theme to integrate with WooCommerce functionalities.
function rata_add_woocommerce_support() {
    add_theme_support('woocommerce');
}
add_action('after_setup_theme', 'rata_add_woocommerce_support');



add_action('customize_register', function($wp_customize) {
    $wp_customize->add_section('rata_colors', [
        'title'    => __('Theme Colors', 'rata'),
        'priority' => 30,
    ]);

    $colors = [
        'golden-yellow' => '244, 193, 0',
        'cream-white'   => '246, 242, 233',
        'pure-white'    => '255, 255, 255',
        'vivid-pink'    => '242, 0, 121',
        'soft-ivory'    => '255, 251, 240',
        'warm-beige'    => '239, 227, 199',
        'charcoal-black'=> '36, 36, 36',
        'gray-medium'   => '138, 138, 138',
    ];

    foreach ($colors as $slug => $default) {
        $setting = "rata_color_{$slug}";

        $wp_customize->add_setting($setting, [
            'default'   => $default,
            'transport' => 'refresh',
        ]);

        $wp_customize->add_control($setting, [
            'label'   => ucwords(str_replace('-', ' ', $slug)) . ' (R,G,B)',
            'section' => 'rata_colors',
            'type'    => 'text',
        ]);
    }
});


add_action('wp_head', function() {
    $slugs = [
        'golden-yellow',
        'cream-white',
        'pure-white',
        'vivid-pink',
        'soft-ivory',
        'warm-beige',
        'charcoal-black',
        'gray-medium',
    ];

    echo "<style>:root {";
    foreach ($slugs as $slug) {
        $value = get_theme_mod("rata_color_{$slug}");
        if ($value) {
            echo "--color-{$slug}: {$value};";
        }
    }
    echo "}</style>";
});

function rata_include_products_in_tag_archives($query) {
    if (!is_admin() && $query->is_main_query() && is_tax('product_tag')) {
        $query->set('post_type', 'product');
    }
}
add_action('pre_get_posts', 'rata_include_products_in_tag_archives');


// =====================================================================================================> Load more ajax handler
function rata_load_more_products_ajax() {
    $paged = $_POST['page'] ?? 1;
    $query_vars = json_decode( stripslashes( $_POST['query'] ), true );

    $query_vars['paged'] = $paged;

    $loop = new WP_Query( $query_vars );

    if ( $loop->have_posts() ) :
        while ( $loop->have_posts() ) : $loop->the_post();
            wc_get_template_part( 'content', 'product' );
        endwhile;
    endif;

    wp_die();
}
add_action( 'wp_ajax_rata_load_more_products', 'rata_load_more_products_ajax' );
add_action( 'wp_ajax_nopriv_rata_load_more_products', 'rata_load_more_products_ajax' );
