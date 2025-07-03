<!DOCTYPE html>
<html <?php language_attributes(); ?> class="fouc-preload">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body <?php body_class('bg-pure-white text-charcoal-black font-body antialiased'); ?>>

    <?php wp_body_open(); ?>

    <!-- ============================================ HEADER ============================================ -->
	<header class="w-full bg-cream-white border-b-2 border-golden-yellow sticky top-0 z-50">
		<div class="container mx-auto px-4 md:px-0">
			<div class="flex justify-between items-center h-16">
				<!-- Logo -->
				<a href="<?php echo esc_url(home_url('/')); ?>" class="block custom-logo-link" aria-label="Go to homepage">
					<?php
						$custom_logo_id = get_theme_mod('custom_logo');
						$logo_url = wp_get_attachment_image_url($custom_logo_id, 'full');

						if ($logo_url) {
							echo '<img src="' . esc_url($logo_url) . '" alt="' . get_bloginfo('name') . '" class="rata-logo h-20 w-auto" />';
						} else {
							echo '<span class="text-xl font-heading text-golden-yellow">';
							bloginfo('name');
							echo '</span>';
						}
					?>
				</a>

				<!-- Desktop Nav -->
				<nav class="hidden md:flex items-center space-x-8 font-heading">
					<?php
						wp_nav_menu([
							'theme_location' => 'primary',
							'container' => false,
							'menu_class' => 'flex space-x-10 nav-menu relative font-heading',
							'fallback_cb' => false,
							'depth' => 1,
							'walker' => new Walker_Nav_Menu(),
						]);
					?>
				</nav>

				<!-- Mobile Menu Button -->
				<button id="mobileMenuToggle" class="md:hidden text-sm font-bold tracking-widest flex items-center space-x-2 focus:outline-none">
					<span>MENU</span>
					<svg id="menuIcon" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
						viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
						<path d="M4 6h16M4 12h16M4 18h16"/>
					</svg>
					<svg id="closeIcon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" stroke-width="2"
						viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
						<path d="M6 18L18 6M6 6l12 12"/>
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Nav Panel -->
		<div id="mobileMenu" class="md:hidden hidden bg-cream-white border-t-2 border-golden-yellow py-8">
			<div class="flex flex-col items-center space-y-6 font-heading text-2xl text-charcoal-black">
				<?php
					wp_nav_menu([
						'theme_location' => 'primary',
						'container' => false,
						'menu_class' => 'flex flex-col items-center space-y-6 nav-menu',
						'fallback_cb' => false,
						'depth' => 1,
						'walker' => new Walker_Nav_Menu(),
					]);
				?>
			</div>
		</div>
	</header>

