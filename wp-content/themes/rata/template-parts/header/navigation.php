<?php
$menu_items = wp_get_nav_menu_items('primary');
?>

<header class="fixed top-0 left-0 right-0 z-50 bg-cream-white border-b-4 border-golden-yellow">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <!-- Logo -->
        <a href="<?php echo esc_url(home_url('/')); ?>" class="text-golden-yellow text-2xl font-heading">
            <?php has_custom_logo() ? the_custom_logo() : bloginfo('name'); ?>
        </a>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-8 text-charcoal-black font-heading text-base">
            <?php
                wp_nav_menu([
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => 'flex space-x-8',
                    'fallback_cb' => false,
                    'depth' => 1,
                ]);
            ?>
        </nav>

        <!-- Mobile Toggle -->
        <div class="md:hidden flex items-center">
            <span class="text-xs mr-2 tracking-widest font-bold text-charcoal-black">MENU</span>
            <button id="menuToggle" class="focus:outline-none" aria-label="Toggle menu">
                <svg class="w-6 h-6 text-charcoal-black" fill="none" stroke="currentColor" stroke-width="2"
                     viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </div>
    </div>

    <!-- Mobile Nav Panel -->
    <div id="mobileMenu" class="md:hidden fixed top-16 left-0 w-full bg-cream-white border-t border-golden-yellow shadow transition-transform duration-300 transform -translate-y-full z-40">
        <div class="flex flex-col items-start space-y-6 p-6 font-heading text-lg text-charcoal-black">
            <button id="menuClose" class="self-end text-xl font-bold text-charcoal-black">×</button>
            <?php
                wp_nav_menu([
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => 'flex flex-col space-y-6',
                    'fallback_cb' => false,
                    'depth' => 1,
                ]);
            ?>
        </div>
    </div>
</header>
