<?php
/**
 * Template part for displaying products in the loop
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 */

defined('ABSPATH') || exit;

global $product;

if (empty($product) || !$product->is_visible()) {
    return;
}
?>

<section <?php wc_product_class('group relative bg-cream-white transition-all duration-200 border-2 border-cream-white', $product); ?>>
	<div class="absolute top-[-14px] left-0 w-full h-[28px] flex z-10">
		<?php if ( has_term( 'new', 'product_tag', get_the_ID() ) ) : ?>
			<p class="bg-yellow-400 text-xs px-2 h-[28px] leading-[28px] text-charcoal-black flex items-center justify-around gap-1"><span class="block w-[14px] h-[14px]"><img src="<?php echo get_template_directory_uri() . "/assets/img/icns/new-star.svg"; ?>" /></span><span class="block">New</span></p>
		<?php endif; ?>
		<?php if ( has_term( 'limited-edition', 'product_tag', get_the_ID() ) ) : ?>
			<span class="bg-pink-600 text-xs px-2 h-[28px] leading-[28px] text-white flex items-center justify-around gap-1"><span class="block w-[16px] h-[16px]"><img src="<?php echo get_template_directory_uri() . "/assets/img/icns/limited-edition.svg"; ?>" /></span><span class="block">Limited Edition</span></span>
		<?php endif; ?>
	</div>
	<a href="<?php the_permalink(); ?>" class="block w-full h-full product-thumbnail">
        <!-- Product Thumbnail -->
		<div class="product-gallery relative w-full aspect-[2/2] overflow-hidden bg-white flex items-center justify-center transition-shadow duration-200">
			<?php
				echo $product->is_on_sale() ? '<span class="absolute top-2 left-2 bg-vivid-pink text-white text-xs font-bold px-2 py-1 rounded z-10">Sale</span>' : '';

				$main_img = wp_get_attachment_image_url( $product->get_image_id(), 'woocommerce_thumbnail' );
				$gallery_ids = $product->get_gallery_image_ids();
			?>

			<div class="swiper product-swiper w-full h-full">
				<div class="swiper-wrapper">
					<?php if ( $main_img ) : ?>
						<div class="swiper-slide">
							<img src="<?php echo esc_url( $main_img ); ?>" alt="" class="object-cover w-full h-full" />
						</div>
					<?php endif; ?>

					<?php
					if ( $gallery_ids ) {
						foreach ( $gallery_ids as $img_id ) {
							$img_url = wp_get_attachment_image_url( $img_id, 'full' );
							echo '<div class="swiper-slide"><img src="' . esc_url( $img_url ) . '" alt="" class="object-cover w-full h-full" /></div>';
						}
					}
					?>
				</div>
			</div>
		</div>
		<div class="p-4">
			<!-- Product Title -->
			<h2 class="text-2xl md:text-3xl font-heading font-bold text-charcoal-black group-hover:text-vivid-pink transition">
				<?php the_title(); ?>
			</h2>
			<div class="-mt-2 mb-4">
				<?php
					// TAGS: All except "new" and "limited-edition"
					$excluded_tags = ['new', 'limited-edition'];
					$product_tags = get_the_terms($product->get_id(), 'product_tag');

					if (!empty($product_tags) && !is_wp_error($product_tags)) {
						foreach ($product_tags as $tag) {
							if (!in_array(strtolower($tag->slug), $excluded_tags)) {
								echo '<div class="flex flex-wrap gap-2">';
								echo '<h5 class="inline-block text-lg">' . esc_html($tag->name) . '</h5>';
							}
						}
						echo '</div>';
					}
				?>
			</div>

	
			<!-- Product Price -->
			<div class="text-md font-bold text-vivid-pink font-body">
				<?php woocommerce_template_loop_price(); ?>
			</div>
		</div>

    </a>
</section>
