<?php

require_once get_template_directory() . '/inc/setup.php';
require_once get_template_directory() . '/inc/block-patterns.php';
require_once get_template_directory() . '/inc/woocommerce.php';

add_filter( 'block_categories_all', 'your_custom_block_category', 10, 2 );

function your_custom_block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'theme-rata',
				'title' => __( 'Theme Rata', 'rata-blocks' ),
				'icon'  => 'wordpress', // Optional: Use a Dashicon or custom SVG
			),
		)
	);
}

