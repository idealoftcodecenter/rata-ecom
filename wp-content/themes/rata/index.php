<?php
/**
 * Template for individual product category pages with filter dropdown
 */
get_header();

$term = get_queried_object();
$current_tag = isset($_GET['tag']) ? sanitize_text_field($_GET['tag']) : '';
$current_orderby = isset($_GET['orderby']) ? sanitize_text_field($_GET['orderby']) : 'menu_order';
$paged = get_query_var('paged') ? get_query_var('paged') : 1;

if ($term && isset($term->term_id)) {
    $category_name = $term->name;
    $category_description = term_description($term);
    $gallery = get_field('extra_images', 'product_cat_' . $term->term_id);
    $video = get_field('category_video', 'product_cat_' . $term->term_id);

    // Get all tags
    $tags = get_terms([
        'taxonomy' => 'product_tag',
        'hide_empty' => true,
        'orderby' => 'name',
        'order' => 'ASC',
    ]);

    // Filter tags used in this category
    $filtered_tags = array_filter($tags, function ($tag) use ($term) {
        $query = new WP_Query([
            'post_type' => 'product',
            'posts_per_page' => 1,
            'tax_query' => [
                [
                    'taxonomy' => 'product_cat',
                    'field' => 'term_id',
                    'terms' => $term->term_id,
                ],
                [
                    'taxonomy' => 'product_tag',
                    'field' => 'term_id',
                    'terms' => $tag->term_id,
                ],
            ],
        ]);
        return $query->have_posts();
    });

    // Build product query with category and optional tag
    $args = [
        'post_type' => 'product',
        'posts_per_page' => 12,
        'paged' => $paged,
        'tax_query' => [
            [
                'taxonomy' => 'product_cat',
                'field' => 'term_id',
                'terms' => $term->term_id,
            ],
        ],
        'orderby' => $current_orderby,
    ];

    if (!empty($current_tag)) {
        $args['tax_query'][] = [
            'taxonomy' => 'product_tag',
            'field' => 'slug',
            'terms' => $current_tag,
        ];
    }

    $query = new WP_Query($args);

    ?>

    <main class="container mx-auto px-4 md:px-0">
        <div class="my-4">
            <?php do_action('woocommerce_before_main_content'); ?>
        </div>

        <header class="w-full">
            <div class="w-full h-[32px] md:h-[48px] border-b border-b-[#EAEAEA]">
                <p class="text-[#595959] leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px]">Explore All</p>
            </div>
            <div class="w-full h-[32px] md:h-[48px] border-b border-b-[#EAEAEA] flex">
                <p class="text-[#595959] leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px] opacity-0">Explore All</p>
                <h1 class="translate-y-[2px] md:translate-y-[10px]"><?php echo esc_html($category_name); ?></h1>
            </div>
            <div class="w-full h-[32px] md:h-[48px] border-b border-b-[#EAEAEA] flex items-center justify-between">
                <h1 class="font-bold translate-y-[2px] md:translate-y-[10px]">Collection</h1>
                <p class="text-gray-600 max-w-2xl mx-auto text-right"><?php echo $category_description; ?></p>
            </div>
        </header>

        <?php if ($gallery): ?>
            <section class="bg-gray-50 py-12">
                <div class="container mx-auto px-4">
                    <h2 class="text-2xl font-semibold mb-6">Gallery</h2>
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        <?php foreach ($gallery as $image): ?>
                            <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="rounded-lg shadow">
                        <?php endforeach; ?>
                    </div>
                </div>
            </section>
        <?php endif; ?>

        <?php if ($video): ?>
            <section class="bg-white py-12">
                <div class="container mx-auto px-4">
                    <h2 class="text-2xl font-semibold mb-6">Watch</h2>
                    <div class="aspect-w-16 aspect-h-9">
                        <?php echo wp_oembed_get($video); ?>
                    </div>
                </div>
            </section>
        <?php endif; ?>

        <section class="py-12 w-full">
            <div class="flex w-full justify-between items-center mb-6">
                <?php if (!empty($filtered_tags)): ?>
                    <div class="bg-white py-4">
                        <div class="flex whitespace-nowrap border border-warm-beige">
                            <a href="<?php echo get_term_link($term); ?>" class="px-6 py-3 text-md <?php echo empty($current_tag) ? 'bg-vivid-pink text-white' : 'border border-warm-beige text-charcoal-black transition-all hover:bg-warm-beige'; ?>">
                                All
                            </a>
                            <?php foreach ($filtered_tags as $tag): ?>
                                <a href="<?php echo esc_url(add_query_arg('tag', $tag->slug, get_term_link($term))); ?>"
                                    class="px-6 py-3 text-md <?php echo ($tag->slug === $current_tag) ? 'bg-vivid-pink text-white' : 'border border-warm-beige text-charcoal-black transition-all hover:bg-warm-beige'; ?>">
                                    <?php echo esc_html($tag->name); ?>
                                </a>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endif; ?>

                <!-- Filter Dropdown -->
                <form method="get" class="flex items-center">
                    <select name="orderby" id="orderby" class="border-0 bg-warm-beige text-lg text-bold px-3 py-2" onchange="this.form.submit()">
                        <option value="menu_order" <?php selected($current_orderby, 'menu_order'); ?>>Filters</option>
                        <option value="date" <?php selected($current_orderby, 'date'); ?>>Newest first</option>
                        <option value="price" <?php selected($current_orderby, 'price'); ?>>Price: Low to High</option>
                        <option value="price-desc" <?php selected($current_orderby, 'price-desc'); ?>>Price: High to Low</option>
                    </select>
                </form>
            </div>

            <!-- Product Grid -->
            <?php if ($query->have_posts()) : ?>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 mb-[4vw]">
                    <?php while ($query->have_posts()) : $query->the_post(); ?>
                        <?php wc_get_template_part('content', 'product'); ?>
                    <?php endwhile; ?>
                </div>
                <div class="mt-8">
                    <?php
                    echo paginate_links([
                        'total' => $query->max_num_pages
                    ]);
                    ?>
                </div>
            <?php else : ?>
                <p class="text-center text-gray-500">No products found in this category and tag.</p>
            <?php endif; ?>

            <?php wp_reset_postdata(); ?>
        </section>
    </main>
<?php } else {
    echo '<p class="text-center text-gray-500">Category not found.</p>';
} ?>

<?php get_footer(); ?>