<?php
defined('ABSPATH') || exit;
get_header();

// Get all product categories
$product_categories = get_terms([
    'taxonomy'   => 'product_cat',
    'hide_empty' => true,
    'orderby'    => 'menu_order',
	'exclude'    => [ get_option('default_product_cat') ], // Exclude "Uncategorized"
]);

$total_categories = count($product_categories);

?>

<main class="container mx-auto px-4 md:px-0">

	<div class="my-4">
		<?php do_action( 'woocommerce_before_main_content' );?>
	</div>

	<header class="w-full">
		<div class="w-full h-[32px] md:h-[48px] border-b border-b-[#EAEAEA]">
			<p class="text-[#595959] leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px]">Explore All</p>
		</div>
		<div class="w-full h-[32px] md:h-[48px] border-b border-b-[#EAEAEA] flex">
			<p class="text-[#595959] leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px] opacity-0">Explore All</p><h1 class="translate-y-[2px] md:translate-y-[10px]">Our Product <span class="font-bold">Catalogue</span></h1>
		</div>
		<!-- <div class="w-full h-[32px] md:h-[48px] border-b border-b-[#EAEAEA]"></div> -->
	</header>

	<div class="w-full">
		<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/banners/collections-banner-1.png"; ?>" class="inline-block w-full" />
	</div>

	<p class="text-lg flex items-center space-x-2 text-vivid-pink mt-12 mb-0"><span>All collections</span><span class="w-6 h-6 text-white inline-flex items-center justify-center relative"><img src="<?php echo get_template_directory_uri() . "/assets/img/icns/pink-flower-filled.svg" ?>" /><span class="block w-full h-full leading-6 text-center font-bold absolute left-0 top-0"><?php echo $total_categories; ?></span></span></p>

    <?php foreach ($product_categories as $category) :
		// Custom heading for known categories (fallback to name)
		$slug = $category->slug;
		$heading = $category->name;

		// Optional custom description
		$description = $category->description;

		// Get top 4 products from this category
		$products = new WP_Query([
			'post_type'      => 'product',
			'posts_per_page' => 6,
			'tax_query'      => [[
				'taxonomy' => 'product_cat',
				'field'    => 'term_id',
				'terms'    => $category->term_id,
			]],
		]);

		if (!$products->have_posts()) continue;
    ?>

    <section>
		<header class="w-full">
			<div class="w-full h-[32px] md:h-[48px] border-b border-b-[#EAEAEA]">
				<h1 class="translate-y-[2px] md:translate-y-[10px]"><span class="font-bold"><?php echo esc_html($heading); ?></span></h1>
			</div>
			<div class="w-full h-[32px] md:h-[48px] border-b border-b-[#EAEAEA] flex items-center justify-between">
				<div class="flex items-center space-x-4">
					<?php if ($description): ?>
						<h1 class="translate-y-[2px] md:translate-y-[10px] opacity-0"><span class="font-bold"><?php echo $heading; ?></span></h1><p class="text-[#595959] max-w-[420px] leading-[14px] md:leading-[18px] -translate-x-[25%] "><?php echo esc_html($description); ?></p>
					<?php endif; ?>
					
				</div>
				<a href="<?= esc_url(get_term_link($category)); ?>" class="text-sm text-vivid-pink font-semibold"><span>View All</span> <span class="arrow"><span class="line"></span></span></a>
			</div>
		</header>
        

        

		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 mb-[4vw]">
			<?php while ($products->have_posts()) : $products->the_post(); ?>
				<?php wc_get_template_part('content', 'product'); ?>
			<?php endwhile; ?>
		</div>

        <?php wp_reset_postdata(); ?>
    </section>

    <?php endforeach; ?>

</main>

<?php get_footer(); ?>
