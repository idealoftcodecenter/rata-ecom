<?php
/**
 * Template for displaying single product pages
 * Customize with Tailwind CSS layout and WooCommerce hooks
 */

defined( 'ABSPATH' ) || exit;

get_header( 'shop' );

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

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
            do_action( 'woocommerce_before_single_product_summary' );
            ?>
        </div>

        <div class="">
            <div class="woocommerce-product-summary">
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
                do_action( 'woocommerce_single_product_summary' );
                ?>
            </div>
        </div>
    </div>

    <div class="mt-12">
        <?php
        /**
         * Hook: woocommerce_after_single_product_summary.
         *
         * @hooked woocommerce_output_product_data_tabs - 10
         * @hooked woocommerce_upsell_display - 15
         * @hooked woocommerce_output_related_products - 20
         */
        do_action( 'woocommerce_after_single_product_summary' );
        ?>
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

<?php
get_footer( 'shop' );
