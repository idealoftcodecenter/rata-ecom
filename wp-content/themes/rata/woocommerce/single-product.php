<?php
/**
 * Template for displaying single product pages
 * Customize with Tailwind CSS layout and WooCommerce hooks
 */

defined( 'ABSPATH' ) || exit;

get_header();

?>
<main class="container mx-auto px-4 md:px-8 py-8">
    <?php
    /**
     * Hook: woocommerce_before_main_content.
     *
     * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs)
     * @hooked woocommerce_breadcrumb - 20
     */
    do_action( 'woocommerce_before_main_content' );
    ?>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div class="">
            <?php
				/**
				 * Hook: woocommerce_before_single_product_summary.
				 *
				 * @hooked woocommerce_show_product_sale_flash - 10
				 * @hooked woocommerce_show_product_images - 20
				 */
				global $product;
				

				if ( empty( $product ) || ! is_a( $product, 'WC_Product' ) ) {
					$product = wc_get_product( get_the_ID() );
				}

				$related_ids = wc_get_related_products( $product->get_id(), 4 ); // fetch max 4 related products
				
				$main_img = wp_get_attachment_image_url( $product->get_image_id(), 'woocommerce_full' );
				$gallery_ids = $product->get_gallery_image_ids();
				// do_action( 'woocommerce_before_single_product_summary' );
            ?>
			<!-- Product Thumbnail -->
			<div class="grid grid-cols-5 gap-4 w-full h-[670px]">
				<div class="col-span-1 h-[670px]">
					<div class="swiper product-thumbnail-swiper h-[670px] w-full" id="single-product-thumbnail-swiper">
						<div class="swiper-wrapper flex flex-col">
							<?php
								if ( $gallery_ids ) {
									foreach ( $gallery_ids as $img_id ) {
										$img_url = wp_get_attachment_image_url( $img_id, 'full' );
										echo '<div class="swiper-slide flex items-center justify-center"><img src="' . esc_url( $img_url ) . '" alt="" class="inline-block object-cover w-full h-full" /></div>';
									}
								}
							?>
						</div>
					</div>
				</div>
				<div class="col-span-4">
					<div class="swiper" id="single-product-main-swiper">
						<div class="swiper-wrapper">
							<?php
								if ( $gallery_ids ) {
									foreach ( $gallery_ids as $img_id ) {
										$img_url = wp_get_attachment_image_url( $img_id, 'full' );
										echo '<div class="swiper-slide flex items-center justify-center"><img src="' . esc_url( $img_url ) . '" alt="" class="inline-block object-cover w-full h-full" /></div>';
									}
								}
							?>
						</div>
					</div>
				</div>
			</div>
        </div>

        <div class="">
			<p class="text-base lg:text-lg mb-2">RT89435</p>
			<h1 class="text-2xl lg:text-5xl">
				<span class="font-bold"> <?php the_title(); ?> </span>
				<?php
					$tags = get_the_terms( get_the_ID(), 'product_tag' );

					if ( $tags && ! is_wp_error( $tags ) ) {
						foreach ( $tags as $tag ) {
							$lowercase_tag = strtolower($tag->name);
							if ( $lowercase_tag !== 'uncategorized' && $lowercase_tag !== "new" && $lowercase_tag !== "limited edition") {
								echo esc_html( $tag->name );
							}
						}
					}
				?>
			</h1>
			<p class="font-bold text-[20px] lg:text-[32px] text-vivid-pink mt-8"><?php echo $product->get_price_html(); ?></p>
			<div class="w-full flex flex-wrap mt-16">
			<!-- Add to Cart -->
				<form method="post" action="<?php echo esc_url( apply_filters( 'woocommerce_add_to_cart_form_action', $product->get_permalink() ) ); ?>" class="w-1/2">
					<input type="hidden" name="add-to-cart" value="<?php echo esc_attr( $product->get_id() ); ?>" />
					<button type="submit" class="px-8 py-6 border-2 border-cream-white w-full font-bold hover:bg-cream-white transition-all">
						Add to Cart
					</button>
				</form>

				<!-- Buy Now -->
				<form method="post" action="<?php echo esc_url( wc_get_checkout_url() ); ?>" class="w-1/2">
					<input type="hidden" name="buy_now" value="1" />
					<input type="hidden" name="product_id" value="<?php echo esc_attr( $product->get_id() ); ?>" />
					<button type="submit" class="px-8 py-6 border-2 border-golden-yellow w-full bg-golden-yellow font-bold flex items-center justify-center gap-2 transition">
						Buy Now
						<span class="arrow"><span class="line"></span></span>
					</button>
				</form>
			</div>
			<div class="expandable">
				<div class="expandable-content overflow-hidden w-full transition-all duration-500 ease-in-out relative" style="height: 100px;">
					<div class="mt-10"><?php the_content(); ?></div>
					<section class="mt-10">
						<?php
						global $product;
						$attributes = $product->get_attributes();
						if ( $attributes ) {
							foreach ( $attributes as $attribute ) {
								$name = wc_attribute_label( $attribute->get_name() );
								$value = $attribute->is_taxonomy()
									? implode(', ', wp_get_post_terms($product->get_id(), $attribute->get_name(), ['fields' => 'names']))
									: $attribute->get_options()[0];
								if($name !== "isLimitedEdition") {
									echo '<div class="mt-8"><p class="text-base lg:text-lg text-charcoal-black opacity-50">' . esc_html($name) . ':</p> ' . esc_html($value) . '</div>';
								}
							}
						}
						?>
					</section>
					<div class="w-full absolute bottom-0 left-0 h-[80px] bg-gradient-to-b from-white/0 to-white pointer-events-none"></div>
				</div>
				<button class="expandable-trigger text-vivid-pink mt-6">
					<span class="text">Show more</span>
					<span class="arrow arrow-width-2 short rotate-90 transition-all"><span class="line"></span></span>
				</button>
			</div>

			<button class="text-base lg:text-lg mt-12 w-full py-6 border-t border-t-[#D3D3D3] flex items-center justify-start transition-all hover:text-vivid-pink" data-modal="care-instructions-modal">Care Instructions</button>
			<button class="text-base lg:text-lg w-full py-6 border-t border-t-[#D3D3D3] flex items-center justify-start transition-all hover:text-vivid-pink" data-modal="sizing-guide-modal">Sizing Guide</button>
			<button class="text-base lg:text-lg w-full py-6 border-t border-t-[#D3D3D3] flex items-center justify-between transition-all hover:text-vivid-pink" data-modal="delivery-and-return-details-modal">
				<span>Delivery & Return Details</span>
				<span class="text-xl lg:text-2xl">+</span>
			</button>
 
            <!-- <div class="woocommerce-product-summary"> -->
                <?php
					/**
					 * Hook: woocommerce_single_product_summary.
					 *
					 * @hooked woocommerce_template_single_title - 5
					 * @hooked woocommerce_template_single_rating - 10
					 * @hooked woocommerce_template_single_price - 10
					 * @hooked woocommerce_template_single_excerpt - 20
					 * @hooked woocommerce_template_single_add_to_cart - 30
					 * @hooked woocommerce_template_single_meta - 40
					 * @hooked woocommerce_template_single_sharing - 50
					*/
					//do_action( 'woocommerce_single_product_summary' );
				?>
			<!-- </div> -->
        </div>
    </div>
	<?php if ( $related_ids ) : ?>
		<div class="mt-20 pt-8 mb-12">
			<p class="text-sm tracking-wide text-gray-500">View More</p>
			<h2 class="text-xl lg:text-4xl mb-6">
				<span class="font-bold">Explore</span> more Collections
			</h2>

			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 mb-[4vw]">
				<?php foreach ( $related_ids as $related_id ) :
					$post_object = get_post( $related_id );
					setup_postdata( $GLOBALS['post'] =& $post_object );
					wc_get_template_part( 'content', 'product' );
				endforeach;
				wp_reset_postdata(); ?>
			</div>
		</div>
	<?php endif; ?>

	<div class="relative w-full h-[18vw]">
		<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/banners/single-product.webp"; ?>" class="absolute w-full left-0 top-0" alt="" />
	</div>

    <?php
		/**
		 * Hook: woocommerce_after_main_content.
		 *
		 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs)
		 */
		do_action( 'woocommerce_after_main_content' );
    ?>
</main>



<!-- Modal Wrapper -->
<div id="care-instructions-modal" class="modal-backdrop fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center hidden">
	<div class="modal-content relative bg-gradient-to-br from-golden-yellow to-vivid-pink w-full max-w-3xl mx-4 sm:mx-auto shadow-xl p-[3px] flex flex-col max-h-[90vh]">
		<div class="inner-content bg-white w-full">
			<!-- Header -->
			<div class="flex items-center justify-between absolute -top-[50px] right-0 gap-3">
				<span class="text-sm font-semibold text-white">Explore Website</span>
				<button class="modal-close bg-white w-[36px] h-[36px] rounded-full text-xl lg:text-2xl flex items-center justify-center" aria-label="Close">&times;</button>
			</div>
	
			<div class="p-3">
				<h1 class="text-2xl lg:text-5xl w-[70%] mx-auto text-center font-bold py-8 border-b-2 border-dashed border-vivid-pink">Care Instructions</h1>
				<p class="text-center leading-[1.2em] w-[80%] mx-auto mt-8">Gentle care = longer wear!</p>
				<div class="mt-12 mb-4 mx-4 border border-[#E6E6E6]">
					<!-- Scrollable Body -->
					<div class="p-4 lg:p-8 max-h-[400px] overflow-y-auto scroll-smooth" style="scrollbar-width: thin;">
						<p class="leading-[1.3em] mb-4">
							At Rata, we dream of creating designs that aren’t just used but cherished—pieces that become an extension of your life, passed down, celebrated, and loved. But let’s be real: we can only take our creations so far. While we pour our hearts into every detail, from sourcing durable materials to embracing slow, thoughtful craftsmanship, the true magic of making them last forever lies with you.
						</p>
						<p class="leading-[1.3em] mb-4">
							This isn’t just a transaction; it’s the start of a shared journey. When a Rata piece leaves our hands and enters your world, it’s no longer just ours—it’s yours to protect, nurture, and love. Together, we’re co-creating a future where objects aren’t disposable but integral to the stories we tell and the lives we live.
						</p>

						<p class="font-bold text-vivid-pink text-lg lg:text-xl mt-8">What We Do</p>
						<p class="leading-[1.3em] mb-4">
							We build with intention. Every bead woven, every stitch placed, and every colour chosen is designed to withstand the test of time. We source materials that are not only strong but age with grace, gaining character as they accompany you through life. Our designs are meticulously crafted by skilled artisans who infuse their hands and hearts into every creation.
						</p>
						<p class="leading-[1.3em] mb-4">
							But more than just making beautiful things, we believe in making meaningful ones. Each Rata piece is a singular moment—a one-of-a-kind creation that holds the promise of joy, not just today but in years to come.
						</p>
						
						<p class="font-bold text-vivid-pink text-lg lg:text-xl">Where You Come In</p>
						<p class="leading-[1.3em] mb-4">
							Here’s the twist: longevity doesn’t just come from craftsmanship—it comes from connection. You are the caretaker of your Rata piece. Its lifespan is shaped by how much you love it, how deeply you care for it, and the memories you weave into it.
						</p>
						<p class="leading-[1.3em] mb-4">
							It’s in the way you carry it with you to milestones and quiet moments alike. It’s in the way you repair a tiny snag instead of letting it go. It’s in the stories you’ll one day tell your children about how this particular piece was with you on that special day. Your devotion transforms Rata from a crafted object into a lifelong companion.
						</p>
						
						<p class="font-bold text-vivid-pink text-lg lg:text-xl">Why This Matters</p>
						<p class="leading-[1.3em] mb-4">
							In a world full of fleeting trends and throwaway habits, there’s something radical—and comforting—about choosing to love what you own. It’s about valuing the things that serve us and treating them with the respect they deserve.
						</p>
						<p class="leading-[1.3em] mb-4">
							This isn’t just about sustainability; it’s about creating meaning. Together, we can make each Rata design more than the sum of its beads and threads. By committing to this partnership, you’re not just investing in a product—you’re investing in a relationship.
						</p>
						
						<p class="font-bold text-vivid-pink text-lg lg:text-xl">Let’s Write Forever Together</p>
						<p class="leading-[1.3em] mb-4">
							So here’s to Rata, and here’s to you. We’re not just a team—we’re co-conspirators in a movement to slow down, care more, and fall in love with the things we bring into our lives.
						</p>
						<p class="leading-[1.3em] mb-4">
							When you carry Rata, you carry not just a piece of craftsmanship but a piece of our shared dream: that everything worth loving is worth keeping.❤️ 
						</p>
						<a href="<?php echo esc_url( get_template_directory_uri() . '/assets/img/cont/Rata-care-instructions.pdf' ); ?>" download class="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded transition" title="Download Care Manual">
							Download this manual
							<span class="arrow arrow-width-2"><span class="line"></span></span>
						</a>

						<div class="w-full p-12 bg-golden-yellow flex items-center justify-center mt-6">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/img/cont/rata-footer-logo.png" alt="Rata" class="inline-block h-[48px]" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Modal Wrapper -->
<div id="sizing-guide-modal" class="modal-backdrop fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center hidden">
	<div class="modal-content relative bg-gradient-to-br from-golden-yellow to-vivid-pink w-full max-w-3xl mx-4 sm:mx-auto shadow-xl p-[3px] flex flex-col max-h-[90vh]">
		<div class="inner-content bg-white w-full">
			<!-- Header -->
			<div class="flex items-center justify-between absolute -top-[50px] right-0 gap-3">
				<span class="text-sm font-semibold text-white">Explore Website</span>
				<button class="modal-close bg-white w-[36px] h-[36px] rounded-full text-xl lg:text-2xl flex items-center justify-center" aria-label="Close">&times;</button>
			</div>
	
			<div class="p-3">
				<p class="text-base lg:text-lg text-center text-vivid-pink font-bold">Sizing Guide</p>
				<h1 class="text-2xl lg:text-5xl w-[70%] mx-auto text-center font-bold py-8 border-b-2 border-dashed border-vivid-pink">Find Your Fit</h1>
				<p class="text-center leading-[1.2em] w-[80%] mx-auto mt-8">Find the size that best fits you with the Rata size guide. Refer to our measurement charts or follow the instructions below.</p>

				<div class="mt-12 mb-4 mx-4 border border-[#E6E6E6] flex">
					<div class="w-1/2 p-0 lg:p-4">
						<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/sizing-guide/bracelate.webp"; ?>" class="inline-block w-full" alt="" />
					</div>
					<!-- Scrollable Body -->
					<div class="w-1/2 px-0 lg:px-6 overflow-y-auto scroll-smooth" style="scrollbar-width: thin;">
						<h3 class="text-sm mt-4 lg:text-lg font-body mb-6 font-bold">Use Flexible Tape Measurement or a string</h3>
						<p class="text-xs lg:text-base leading-[20px]">Use a flexible measuring tape or a piece of string. With your palm open and facing up, wrap it around your wrist just above the wrist bone. Mark where it overlaps—this is your wrist size. Then, add extra length based on your preference: for a snug fit or a more relaxed fit.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Modal Wrapper -->
<div id="delivery-and-return-details-modal" class="modal-backdrop fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center hidden">
	<div class="modal-content relative bg-gradient-to-br from-golden-yellow to-vivid-pink w-full max-w-3xl mx-4 sm:mx-auto shadow-xl p-[3px] flex flex-col max-h-[90vh]">
		<div class="inner-content bg-white w-full">
			<!-- Header -->
			<div class="flex items-center justify-between absolute -top-[50px] right-0 gap-3">
				<span class="text-sm font-semibold text-white">Explore Website</span>
				<button class="modal-close bg-white w-[36px] h-[36px] rounded-full text-xl lg:text-2xl flex items-center justify-center" aria-label="Close">&times;</button>
			</div>
	
			<div class="p-3">
				<h1 class="text-2xl lg:text-5xl w-[70%] mx-auto text-center font-bold py-8 border-b-2 border-dashed border-vivid-pink">Delivery & Return</h1>
				<p class="text-center leading-[1.2em] w-[80%] mx-auto mt-8">Last Updated: 21st Feb 2025</p>
				<div class="mt-12 mb-4 mx-4 border border-[#E6E6E6]">
					<!-- Scrollable Body -->
					<div class="p-4 lg:p-8 max-h-[400px] overflow-y-auto scroll-smooth" style="scrollbar-width: thin;">
						<h1 class="text-4xl font-bold mb-4">Shipping & Delivery</h1>
						<p class="mb-6">Welcome to <strong>Rata Studio</strong>! We are committed to ensuring a smooth and reliable shipping experience for all our customers. Please read our Shipping &amp; Delivery Policy to understand our process, timelines, and other essential details before placing your order.</p>
						<p class="mt-10 font-bold text-vivid-pink text-lg lg:text-xl">1. Processing Time</p>
						<p class="mt-4">All orders are processed within 3 to 20 business days after payment confirmation depending upon the complexity of the product.</p>
						<p class="mt-4">Orders placed on weekends or public holidays will be processed on the next business day.</p>
						<p class="mt-4">You will receive a confirmation email with tracking details once your order has been shipped.</p>

						<p class="mt-10 font-bold text-vivid-pink text-lg lg:text-xl">2. Shipping Methods &amp; Delivery Time</p>
						<p class="mt-4">We offer standard, shipping options for delivery.</p>
						<p class="mt-4">Estimated delivery times vary based on your location:</p>
						<ul class="list-disc ml-6 mb-4">
							<li>Domestic Shipping: 3–5 business days</li>
							<li>International Shipping: 7–45 business days</li>
						</ul>
						<p class="mt-4">Delivery times may be subject to delays due to unforeseen circumstances such as weather conditions, customs clearance, or courier service disruptions.</p>

						<p class="mt-10 font-bold text-vivid-pink text-lg lg:text-xl">3. Shipping Charges</p>
						<p class="mt-4">Shipping charges are calculated at checkout based on the shipping method and destination.</p>
						<p class="mt-4">Any applicable duties, taxes, or customs fees for international orders are the responsibility of the customer.</p>

						<p class="mt-10 font-bold text-vivid-pink text-lg lg:text-xl">4. Tracking Your Order</p>
						<p class="mt-4">Once your order has been shipped, you will receive a tracking number via email.</p>
						<p class="mt-4">You can track your order through our courier partner’s website using the provided tracking information.</p>

						<p class="mt-10 font-bold text-vivid-pink text-lg lg:text-xl">5. Undeliverable or Lost Packages</p>
						<p class="mt-4">If your package is marked as undeliverable due to incorrect shipping details, failed delivery attempts, or refusal, it may be returned to us. Additional shipping fees may apply for re-delivery.</p>
						<p class="mt-4">In case of lost packages, please contact our customer support at <a href="mailto:hi@ratalove.com" class="text-vivid-pink underline">hi@ratalove.com</a> or +91 9810013770 for assistance.</p>

						<p class="mt-10 font-bold text-vivid-pink text-lg lg:text-xl">6. Damaged or Missing Items</p>
						<p class="mt-4">If you receive a damaged package or items are missing from your order, please contact us within 48 hours of delivery with supporting photos, videos and order details.</p>
						<p class="mt-4">We will investigate and provide an appropriate resolution.</p>

						<p class="mt-10 font-bold text-vivid-pink text-lg lg:text-xl">7. Changes to This Policy</p>
						<p class="mt-4">We reserve the right to update this policy at any time.</p>
						<p class="mt-4">Any changes will be reflected on this page with a revised "Last Updated" date.</p>


						<h1 class="text-4xl font-bold mb-4 mt-12 pt-12 border-t border-[#e6e6e6]">Order Cancellation and Refund</h1>

						<p class="mb-6">Welcome to <strong>Rata Studio</strong>! We value our customers and strive to provide a smooth shopping experience. Please read our Order Cancellation &amp; Refund Policy carefully before making a purchase.</p>

						<p class="mt-10 font-bold text-vivid-pink text-lg lg:text-xl">1. Order Cancellation</p>
						<p class="mt-4">Customers can cancel their order within 24 hours of placing it.</p>
						<p class="mt-4">To request a cancellation, please contact our customer support at <a href="mailto:hi@ratalove.com" class="text-vivid-pink underline">hi@ratalove.com</a> or +91 9810013770 with your order details.</p>
						<p class="mt-4">Orders cannot be cancelled once they have been processed or shipped.</p>
						<p class="mt-4">Rata Studio reserves the right to cancel any order due to unforeseen circumstances, including stock unavailability or payment issues. In such cases, customers will be notified promptly.</p>

						<p class="mt-10 font-bold text-vivid-pink text-lg lg:text-xl">2. No Refund Policy</p>
						<p class="mt-4">Rata Studio does not offer refunds on any orders.</p>
						<p class="mt-4">We encourage customers to carefully review product details before completing their purchase.</p>
						<p class="mt-4">If you receive a defective or damaged item, please contact us within two business days for assistance.</p>

						<p class="mt-10 font-bold text-vivid-pink text-lg lg:text-xl">3. Changes to This Policy</p>
						<p class="mt-4">We may update this policy from time to time.</p>
						<p class="mt-4">Any changes will be posted on this page with a revised "Last Updated" date.</p>
						<p class="mt-4">Your continued use of our website and services signifies your acceptance of the updated policy.</p>

						<p class="mt-10 font-bold text-vivid-pink text-lg lg:text-xl">4. Contact Us</p>
						<p class="mb-2">If you have any questions or need assistance regarding order cancellations, please reach out to us:</p>
						<address class="not-italic mb-6">
							Rata Studio<br />
							Email: <a href="mailto:hi@ratalove.com" class="text-vivid-pink underline">hi@ratalove.com</a><br />
							Phone: +91 9810013770<br />
							Address: RATA Studio, Basement, 528, Sushant Lok 1, Block C, Sector 43, Gurugram, Haryana – 122002
						</address>

						<p class="mt-10 font-semibold">Thank you for shopping with Rata Studio!</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<?php
get_footer();
