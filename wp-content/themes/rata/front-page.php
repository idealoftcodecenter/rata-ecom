<?php 

$category = get_term_by( 'slug', 'the-mesh-garden', 'product_cat' );

/**
 * Template Part: Fixed Sticky Section for "The Mesh Garden" Products
 */
$args = [
    'post_type'      => 'product',
    'posts_per_page' => -1, // -1 fetches all products
    'post_status'    => 'publish',
    'tax_query'      => [
        [
            'taxonomy' => 'product_cat',
            'field'    => 'slug',
            'terms'    => 'the-mesh-garden', // replace with your category slug
        ],
    ],
];

$query = new WP_Query($args);

get_header();
?>

<?php /* Template: front-page.php */ ?>
<main class="w-full">
	<!-- =================================================== HERO SECTION =================================================== -->
	<article class="w-full min-h-screen max-h-screen overflow-hidden home-hero-slider">
		<!-- Slider main container -->
		 <div class="content absolute left-0 right-0 bottom-[5vh] z-20">
			<div class="container mx-auto px-4 md:px-0">
				<p class="text-golden-yellow flex items-center gap-2 text-[16px] lg:text-[20px]">
					<span>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.65527 5.00781L8.7666 5.2334L8.99219 5.34473L12.3164 7L8.99219 8.65527L8.7666 8.7666L8.65527 8.99219L7 12.3164L5.34473 8.99219L5.2334 8.7666L5.00781 8.65527L1.68262 7L5.00781 5.34473L5.2334 5.2334L5.34473 5.00781L7 1.68262L8.65527 5.00781Z" stroke="rgb(244, 193, 0)" stroke-width="1.5"/>
						</svg>
					</span>
					New Collection
				</p>
				<h1 class="text-white text-10xl leading-[1em]">The <span class="font-bold">Mesh</span></h1>
				<h1 class="text-white text-10xl leading-[1em] ml-[8vw] font-bold">Garden</h1>
				<p class="text-white text-[16px] lg:text-[20px] mt-[2vw]">
					Jewelry that captures nature's balance of strength<br />and fragility, bringing garden-inspired resilience to<br />your everyday.
				</p>
				<?php
					$category = get_term_by( 'slug', 'the-mesh-garden', 'product_cat' );
					if ( $category && ! is_wp_error( $category ) ) : $category_link = get_term_link( $category );
				?>
					<p class="text-white text-[18px] lg:text-[24px] font-bold mt-8">
						<a href="<?php echo esc_url( $category_link ); ?>" class="text-white">
							EXPLORE <span class="arrow arrow-width-4 arrow-white translate-y-[-6px]"><span class="line"></span></span>
						</a>
					</p>
				<?php endif; ?>
			</div>
		</div>
		<div class="swiper" id="home-hero-slider">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">
				<!-- Slides -->
				<div class="swiper-slide w-full h-full min-h-screen relative">
					<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/hero-slider/home-hero-slider-1.webp"; ?>" alt="Rata" class="absolute left-0 top-[50%] translate-y-[-50%] inline-block w-full" />
				</div>
				<div class="swiper-slide w-full h-full min-h-screen relative">
					<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/hero-slider/home-hero-slider-2.webp"; ?>" alt="Rata" class="absolute left-0 top-[50%] translate-y-[-50%] inline-block w-full" />
				</div>
				<div class="swiper-slide w-full h-full min-h-screen relative">
					<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/hero-slider/home-hero-slider-3.webp"; ?>" alt="Rata" class="absolute left-0 top-[50%] translate-y-[-50%] inline-block w-full" />
				</div>
			</div>
			<!-- If we need pagination -->
			<!-- <div class="swiper-pagination"></div> -->
	
			<!-- If we need navigation buttons -->
			<!-- <div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div> -->
		</div>
	</article>

	<!-- =================================================== BEHIND THE SCENES SECTION =================================================== -->
	<article class="bg-white pb-[10vh]">
		<div class="container mx-auto px-4 md:px-0">
			<header class="w-full mt-12 mb-8">
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)]">
					<p class="leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px]">Behind the Scenes</p>
				</div>
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex relative">
					<h1 class="translate-y-[2px] md:translate-y-[10px] ml-[6vw]">Discover the</h1>
				</div>
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex items-center justify-between">
					<h1 class="translate-y-[2px] md:translate-y-[10px] font-bold">Story of Rata</h1>
				</div>
			</header>
			<section class="relative aspect-video">
				<video class="w-full object-cover auto-play-on-scroll" id="behind-the-scenes" muted playsinline preload="auto" data-src="<?php echo get_template_directory_uri() . "/assets/img/cont/process/our-process.mp4"; ?>"></video>
				<input type="range" id="timeline" min="0" value="0" step="0.1" class="absolute bottom-0 left-0 w-full h-2 appearance-none bg-yellow-400 cursor-pointer accent-pink-500" />
			</section>
			<div class="w-full flex items-center justify-between mt-6">
				<div class="max-w-[600px]">
					<p class="text-lg lg:text-xl">Rata creates uplifting, heirloom-worthy jewellery crafted with love and imagination to brighten spirits and free minds from worries.</p>
				</div>
				<div class="">
					<a href="" class="text-vivid-pink text-lg lg:text-xl">More About Us <span class="arrow translate-y-[-3px]"><span class="line"></span></span></a>
				</div>
			</div>	
		</div>
	</article>


	<!-- =================================================== MESH GARDEN COLLECTION SECTION =================================================== -->
	<article class="bg-white relative">
		<div class="container sticky top-0 overflow-y-auto h-screen mx-auto px-4 md:px-0">
			<header class="w-full mt-12 mb-8">
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)]">
					<p class="leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px] flex items-center gap-2 text-vivid-pink">
						<span>
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.65527 5.00781L8.7666 5.2334L8.99219 5.34473L12.3164 7L8.99219 8.65527L8.7666 8.7666L8.65527 8.99219L7 12.3164L5.34473 8.99219L5.2334 8.7666L5.00781 8.65527L1.68262 7L5.00781 5.34473L5.2334 5.2334L5.34473 5.00781L7 1.68262L8.65527 5.00781Z" stroke="rgb(242, 0, 121)" stroke-width="1.5"/>
							</svg>
						</span>
						<span>New Collection</span>
					</p>
				</div>
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex items-center justify-between relative">
					<h1 class="translate-y-[2px] md:translate-y-[10px] ml-[6vw] font-bold">The Mesh Garden</h1>
					<p class="text-right leading-[1.2em]">Explore the serenity and strength of a garden in your everyday life and<br />remind yourself that true resilience often comes dressed in delicacy.</p>
				</div>
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex items-center justify-between">
					<h1 class="translate-y-[2px] md:translate-y-[10px]">Collection</h1>
				</div>
			</header>
			<section class="bg-white z-10 pb-[10vw]">
				<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 mb-[4vw]">
					<?php
						if ($query->have_posts()) {
							while ($query->have_posts()) {
								$query->the_post();
								wc_get_template_part('content', 'product'); // loads the WooCommerce product template
							}
							wp_reset_postdata();
						} else {
							echo '<p>No products found.</p>';
						}
					?>
				</div>
				
			</section>
		</div>
		<!-- <img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/mesh-garden-bottom.webp"; ?>" class="absolute bottom-0 left-0 inline-block w-full" /> -->
	</article>


	<!-- =================================================== OUR COLLABS SECTION =================================================== -->
	<article class="bg-golden-yellow">
		<div class="container mx-auto px-4 md:px-0 relative">
			<div class="swiper" id="collabs-slider">
				<div class="swiper-wrapper">
					<div class="swiper-slide w-full relative">
						<div class="flex">
							<div class="w-[40%]">
								<header class="w-full mt-12 mb-3">
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)]">
										<p class="leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px] flex items-center gap-2">
											Our Collabs
										</p>
									</div>
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)] flex relative">
										<h1 class="translate-y-[2px] md:translate-y-[10px] ml-[4vw] font-bold">Joining forces</h1>
									</div>
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)] flex items-center justify-between">
										<h1 class="translate-y-[2px] md:translate-y-[10px]">for greatness</h1>
									</div>
								</header>
								<div>
									<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/collabs/banner-01.webp"; ?>" class="inline-block w-full" alt="" />
								</div>
							</div>
							<div class="w-[60%]">
								<section class="w-full mt-12 mb-3">
									<div class="w-full h-[32px] md:h-[48px]">
									</div>
									<div class="w-full h-[64px] md:h-[96px] border-y border-y-[rgba(255,255,255,.2)] border-l border-l-[rgba(255,255,255,.2)] flex items-center justify-between px-8">
										<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/collabs/top-1.webp"; ?>" class="inline-block h-[28px] lg:h-[48px]" alt="" />
									</div>
									<div class="w-full h-[64px] md:h-[96px] border-b border-b-[rgba(255,255,255,.2)] flex items-end justify-between px-8">
										<h1 class="font-bold">Dasied Ozmillen</h1>
										<p class="font-bold">23 June 2022</p>
									</div>
									<div class="px-8 mt-6 pb-20 border-b border-b-[rgba(255,255,255,.2)]">
										<p class="lg:max-w-[70%]">
											We aimed to immerse the wearer in a whimsical world, enveloped by a vibrant garden blooming from their feet. Crafting a space of love and growth, our design invites them to embrace their true selves and explore boundless possibilities.
										</p>
									</div>
									<div class="px-8 mt-4">
										<div class="flex gap-3">
											<div class="w-[32px] pt-[2px]">
												<svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clip-path="url(#clip0_1517_6574)">
														<path d="M10.0928 0.0175781C4.57877 0.0175781 0.0927734 4.50358 0.0927734 10.0176C0.0937734 15.5326 4.57977 20.0186 10.0928 20.0186C15.6068 20.0186 20.0928 15.5326 20.0938 10.0176C20.0938 4.50358 15.6078 0.0175781 10.0928 0.0175781ZM10.0928 18.0186C5.68277 18.0186 2.09377 14.4296 2.09277 10.0176C2.09277 5.60658 5.68177 2.01758 10.0928 2.01758C14.5048 2.01758 18.0938 5.60658 18.0938 10.0176C18.0928 14.4296 14.5038 18.0186 10.0928 18.0186Z" fill="#F20079"/>
														<path d="M20 0.0175781C14.486 0.0175781 10 4.50358 10 10.0176C10.001 15.5326 14.487 20.0186 20 20.0186C25.514 20.0186 30 15.5326 30.001 10.0176C30.001 4.50358 25.515 0.0175781 20 0.0175781ZM20 18.0186C15.59 18.0186 12.001 14.4296 12 10.0176C12 5.60658 15.589 2.01758 20 2.01758C24.412 2.01758 28.001 5.60658 28.001 10.0176C28 14.4296 24.411 18.0186 20 18.0186Z" fill="#F20079"/>
														<path d="M11.5 7L15 2.5L19 6.5V14L15 17L12 15L11.5 7Z" fill="#F20079"/>
													</g>
													<defs>
														<clipPath id="clip0_1517_6574">
															<rect width="30.001" height="21" fill="white"/>
														</clipPath>
													</defs>
												</svg>
											</div>
											<p class="leading-[20px] font-bold">Curious about collaborating<br />with our brand? <a href="#" class="text-vivid-pink">Connect with us <span class="arrow"><span class="line"></span></span></a></p>
										</div>

									</div>
								</section>
								
							</div>
						</div>
					</div>
					<div class="swiper-slide w-full relative">
						<div class="flex">
							<div class="w-[40%]">
								<header class="w-full mt-12 mb-3">
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)]">
										<p class="leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px] flex items-center gap-2">
											Our Collabs
										</p>
									</div>
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)] flex relative">
										<h1 class="translate-y-[2px] md:translate-y-[10px] ml-[4vw] font-bold">Joining forces</h1>
									</div>
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)] flex items-center justify-between">
										<h1 class="translate-y-[2px] md:translate-y-[10px]">for greatness</h1>
									</div>
								</header>
								<div>
									<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/collabs/banner-02.webp"; ?>" class="inline-block w-full" alt="" />
								</div>
							</div>
							<div class="w-[60%]">
								<section class="w-full mt-12 mb-3">
									<div class="w-full h-[32px] md:h-[48px]">
									</div>
									<div class="w-full h-[64px] md:h-[96px] border-y border-y-[rgba(255,255,255,.2)] border-l border-l-[rgba(255,255,255,.2)] flex items-center justify-between px-8">
										<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/collabs/top-2.webp"; ?>" class="inline-block h-[28px] lg:h-[48px]" alt="" />
									</div>
									<div class="w-full h-[64px] md:h-[96px] border-b border-b-[rgba(255,255,255,.2)] flex items-end justify-between px-8">
										<h1 class="font-bold">Dhee <span class="font-normal text-[0.7em]">(Srilankan Musician)</span></h1>
										<p class="font-bold">8 August 2024</p>
									</div>
									<div class="px-8 mt-6 pb-20 border-b border-b-[rgba(255,255,255,.2)]">
										<p class="lg:max-w-[70%]">
											Filmfare Award winning, Sri Lankan - Australian singer Dhee wore our pieces from our Mesh Garden Collection in her music video for  I Wear My Roots Like A Medal.
										</p>
									</div>
									<div class="px-8 mt-4">
										<div class="flex gap-3">
											<div class="w-[32px] pt-[2px]">
												<svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clip-path="url(#clip0_1517_6574)">
														<path d="M10.0928 0.0175781C4.57877 0.0175781 0.0927734 4.50358 0.0927734 10.0176C0.0937734 15.5326 4.57977 20.0186 10.0928 20.0186C15.6068 20.0186 20.0928 15.5326 20.0938 10.0176C20.0938 4.50358 15.6078 0.0175781 10.0928 0.0175781ZM10.0928 18.0186C5.68277 18.0186 2.09377 14.4296 2.09277 10.0176C2.09277 5.60658 5.68177 2.01758 10.0928 2.01758C14.5048 2.01758 18.0938 5.60658 18.0938 10.0176C18.0928 14.4296 14.5038 18.0186 10.0928 18.0186Z" fill="#F20079"/>
														<path d="M20 0.0175781C14.486 0.0175781 10 4.50358 10 10.0176C10.001 15.5326 14.487 20.0186 20 20.0186C25.514 20.0186 30 15.5326 30.001 10.0176C30.001 4.50358 25.515 0.0175781 20 0.0175781ZM20 18.0186C15.59 18.0186 12.001 14.4296 12 10.0176C12 5.60658 15.589 2.01758 20 2.01758C24.412 2.01758 28.001 5.60658 28.001 10.0176C28 14.4296 24.411 18.0186 20 18.0186Z" fill="#F20079"/>
														<path d="M11.5 7L15 2.5L19 6.5V14L15 17L12 15L11.5 7Z" fill="#F20079"/>
													</g>
													<defs>
														<clipPath id="clip0_1517_6574">
															<rect width="30.001" height="21" fill="white"/>
														</clipPath>
													</defs>
												</svg>
											</div>
											<p class="leading-[20px] font-bold">Curious about collaborating<br />with our brand? <a href="#" class="text-vivid-pink">Connect with us <span class="arrow"><span class="line"></span></span></a></p>
										</div>

									</div>
								</section>
								
							</div>
						</div>
					</div>
					<div class="swiper-slide w-full relative">
						<div class="flex">
							<div class="w-[40%]">
								<header class="w-full mt-12 mb-3">
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)]">
										<p class="leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px] flex items-center gap-2">
											Our Collabs
										</p>
									</div>
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)] flex relative">
										<h1 class="translate-y-[2px] md:translate-y-[10px] ml-[4vw] font-bold">Joining forces</h1>
									</div>
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)] flex items-center justify-between">
										<h1 class="translate-y-[2px] md:translate-y-[10px]">for greatness</h1>
									</div>
								</header>
								<div>
									<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/collabs/banner-03.webp"; ?>" class="inline-block w-full" alt="" />
								</div>
							</div>
							<div class="w-[60%]">
								<section class="w-full mt-12 mb-3">
									<div class="w-full h-[32px] md:h-[48px]">
									</div>
									<div class="w-full h-[64px] md:h-[96px] border-y border-y-[rgba(255,255,255,.2)] border-l border-l-[rgba(255,255,255,.2)] flex items-center justify-between px-8">
										<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/collabs/top-3.webp"; ?>" class="inline-block h-[28px] lg:h-[48px]" alt="" />
									</div>
									<div class="w-full h-[64px] md:h-[96px] border-b border-b-[rgba(255,255,255,.2)] flex items-end justify-between px-8">
										<h1 class="font-bold">OShoJain <span class="font-normal text-[0.7em]">(Music Concert)</span></h1>
										<p class="font-bold">3 March 2024</p>
									</div>
									<div class="px-8 mt-6 pb-20 border-b border-b-[rgba(255,255,255,.2)]">
										<p class="lg:max-w-[70%]">
											The collaboration with the immensely talented singer-songwriter Osho Jain came to life at his recent concert in Bengaluru, where Rata brought a touch of elegance and artistry to the evening, harmonizing with soulful music.
										</p>
									</div>
									<div class="px-8 mt-4">
										<div class="flex gap-3">
											<div class="w-[32px] pt-[2px]">
												<svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clip-path="url(#clip0_1517_6574)">
														<path d="M10.0928 0.0175781C4.57877 0.0175781 0.0927734 4.50358 0.0927734 10.0176C0.0937734 15.5326 4.57977 20.0186 10.0928 20.0186C15.6068 20.0186 20.0928 15.5326 20.0938 10.0176C20.0938 4.50358 15.6078 0.0175781 10.0928 0.0175781ZM10.0928 18.0186C5.68277 18.0186 2.09377 14.4296 2.09277 10.0176C2.09277 5.60658 5.68177 2.01758 10.0928 2.01758C14.5048 2.01758 18.0938 5.60658 18.0938 10.0176C18.0928 14.4296 14.5038 18.0186 10.0928 18.0186Z" fill="#F20079"/>
														<path d="M20 0.0175781C14.486 0.0175781 10 4.50358 10 10.0176C10.001 15.5326 14.487 20.0186 20 20.0186C25.514 20.0186 30 15.5326 30.001 10.0176C30.001 4.50358 25.515 0.0175781 20 0.0175781ZM20 18.0186C15.59 18.0186 12.001 14.4296 12 10.0176C12 5.60658 15.589 2.01758 20 2.01758C24.412 2.01758 28.001 5.60658 28.001 10.0176C28 14.4296 24.411 18.0186 20 18.0186Z" fill="#F20079"/>
														<path d="M11.5 7L15 2.5L19 6.5V14L15 17L12 15L11.5 7Z" fill="#F20079"/>
													</g>
													<defs>
														<clipPath id="clip0_1517_6574">
															<rect width="30.001" height="21" fill="white"/>
														</clipPath>
													</defs>
												</svg>
											</div>
											<p class="leading-[20px] font-bold">Curious about collaborating<br />with our brand? <a href="#" class="text-vivid-pink">Connect with us <span class="arrow"><span class="line"></span></span></a></p>
										</div>

									</div>
								</section>
								
							</div>
						</div>
					</div>
					<div class="swiper-slide w-full relative">
						<div class="flex">
							<div class="w-[40%]">
								<header class="w-full mt-12 mb-3">
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)]">
										<p class="leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px] flex items-center gap-2">
											Our Collabs
										</p>
									</div>
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)] flex relative">
										<h1 class="translate-y-[2px] md:translate-y-[10px] ml-[4vw] font-bold">Joining forces</h1>
									</div>
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)] flex items-center justify-between">
										<h1 class="translate-y-[2px] md:translate-y-[10px]">for greatness</h1>
									</div>
								</header>
								<div>
									<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/collabs/banner-04.webp"; ?>" class="inline-block w-full" alt="" />
								</div>
							</div>
							<div class="w-[60%]">
								<section class="w-full mt-12 mb-3">
									<div class="w-full h-[32px] md:h-[48px]">
									</div>
									<div class="w-full h-[64px] md:h-[96px] border-y border-y-[rgba(255,255,255,.2)] border-l border-l-[rgba(255,255,255,.2)] flex items-center justify-between px-8">
										<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/collabs/top-4.webp"; ?>" class="inline-block h-[28px] lg:h-[48px]" alt="" />
									</div>
									<div class="w-full h-[64px] md:h-[96px] border-b border-b-[rgba(255,255,255,.2)] flex items-end justify-between px-8">
										<h1 class="font-bold">Dasied Ozmillen</h1>
										<p class="font-bold">23 June 2022</p>
									</div>
									<div class="px-8 mt-6 pb-20 border-b border-b-[rgba(255,255,255,.2)]">
										<p class="lg:max-w-[70%]">
											We aimed to immerse the wearer in a whimsical world, enveloped by a vibrant garden blooming from their feet. Crafting a space of love and growth, our design invites them to embrace their true selves and explore boundless possibilities.
										</p>
									</div>
									<div class="px-8 mt-4">
										<div class="flex gap-3">
											<div class="w-[32px] pt-[2px]">
												<svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clip-path="url(#clip0_1517_6574)">
														<path d="M10.0928 0.0175781C4.57877 0.0175781 0.0927734 4.50358 0.0927734 10.0176C0.0937734 15.5326 4.57977 20.0186 10.0928 20.0186C15.6068 20.0186 20.0928 15.5326 20.0938 10.0176C20.0938 4.50358 15.6078 0.0175781 10.0928 0.0175781ZM10.0928 18.0186C5.68277 18.0186 2.09377 14.4296 2.09277 10.0176C2.09277 5.60658 5.68177 2.01758 10.0928 2.01758C14.5048 2.01758 18.0938 5.60658 18.0938 10.0176C18.0928 14.4296 14.5038 18.0186 10.0928 18.0186Z" fill="#F20079"/>
														<path d="M20 0.0175781C14.486 0.0175781 10 4.50358 10 10.0176C10.001 15.5326 14.487 20.0186 20 20.0186C25.514 20.0186 30 15.5326 30.001 10.0176C30.001 4.50358 25.515 0.0175781 20 0.0175781ZM20 18.0186C15.59 18.0186 12.001 14.4296 12 10.0176C12 5.60658 15.589 2.01758 20 2.01758C24.412 2.01758 28.001 5.60658 28.001 10.0176C28 14.4296 24.411 18.0186 20 18.0186Z" fill="#F20079"/>
														<path d="M11.5 7L15 2.5L19 6.5V14L15 17L12 15L11.5 7Z" fill="#F20079"/>
													</g>
													<defs>
														<clipPath id="clip0_1517_6574">
															<rect width="30.001" height="21" fill="white"/>
														</clipPath>
													</defs>
												</svg>
											</div>
											<p class="leading-[20px] font-bold">Curious about collaborating<br />with our brand? <a href="#" class="text-vivid-pink">Connect with us <span class="arrow"><span class="line"></span></span></a></p>
										</div>

									</div>
								</section>
								
							</div>
						</div>
					</div>
					<div class="swiper-slide w-full relative">
						<div class="flex">
							<div class="w-[40%]">
								<header class="w-full mt-12 mb-3">
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)]">
										<p class="leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px] flex items-center gap-2">
											Our Collabs
										</p>
									</div>
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)] flex relative">
										<h1 class="translate-y-[2px] md:translate-y-[10px] ml-[4vw] font-bold">Joining forces</h1>
									</div>
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)] flex items-center justify-between">
										<h1 class="translate-y-[2px] md:translate-y-[10px]">for greatness</h1>
									</div>
								</header>
								<div>
									<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/collabs/banner-05.webp"; ?>" class="inline-block w-full" alt="" />
								</div>
							</div>
							<div class="w-[60%]">
								<section class="w-full mt-12 mb-3">
									<div class="w-full h-[32px] md:h-[48px]">
									</div>
									<div class="w-full h-[64px] md:h-[96px] border-y border-y-[rgba(255,255,255,.2)] border-l border-l-[rgba(255,255,255,.2)] flex items-center justify-between px-8">
										<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/collabs/top-5.webp"; ?>" class="inline-block h-[28px] lg:h-[48px]" alt="" />
									</div>
									<div class="w-full h-[64px] md:h-[96px] border-b border-b-[rgba(255,255,255,.2)] flex items-end justify-between px-8">
										<h1 class="font-bold">Dhee <span class="font-normal text-[0.7em]">(Srilankan Musician)</span></h1>
										<p class="font-bold">6 march 2024</p>
									</div>
									<div class="px-8 mt-6 pb-20 border-b border-b-[rgba(255,255,255,.2)]">
										<p class="lg:max-w-[70%]">
											Filmfare Award winning, Sri Lankan - Australian singer Dhee wore our pieces from our Mesh Garden Collection in her music video for  I Wear My Roots Like A Medal.
										</p>
									</div>
									<div class="px-8 mt-4">
										<div class="flex gap-3">
											<div class="w-[32px] pt-[2px]">
												<svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clip-path="url(#clip0_1517_6574)">
														<path d="M10.0928 0.0175781C4.57877 0.0175781 0.0927734 4.50358 0.0927734 10.0176C0.0937734 15.5326 4.57977 20.0186 10.0928 20.0186C15.6068 20.0186 20.0928 15.5326 20.0938 10.0176C20.0938 4.50358 15.6078 0.0175781 10.0928 0.0175781ZM10.0928 18.0186C5.68277 18.0186 2.09377 14.4296 2.09277 10.0176C2.09277 5.60658 5.68177 2.01758 10.0928 2.01758C14.5048 2.01758 18.0938 5.60658 18.0938 10.0176C18.0928 14.4296 14.5038 18.0186 10.0928 18.0186Z" fill="#F20079"/>
														<path d="M20 0.0175781C14.486 0.0175781 10 4.50358 10 10.0176C10.001 15.5326 14.487 20.0186 20 20.0186C25.514 20.0186 30 15.5326 30.001 10.0176C30.001 4.50358 25.515 0.0175781 20 0.0175781ZM20 18.0186C15.59 18.0186 12.001 14.4296 12 10.0176C12 5.60658 15.589 2.01758 20 2.01758C24.412 2.01758 28.001 5.60658 28.001 10.0176C28 14.4296 24.411 18.0186 20 18.0186Z" fill="#F20079"/>
														<path d="M11.5 7L15 2.5L19 6.5V14L15 17L12 15L11.5 7Z" fill="#F20079"/>
													</g>
													<defs>
														<clipPath id="clip0_1517_6574">
															<rect width="30.001" height="21" fill="white"/>
														</clipPath>
													</defs>
												</svg>
											</div>
											<p class="leading-[20px] font-bold">Curious about collaborating<br />with our brand? <a href="#" class="text-vivid-pink">Connect with us <span class="arrow"><span class="line"></span></span></a></p>
										</div>

									</div>
								</section>
								
							</div>
						</div>
					</div>
					<div class="swiper-slide w-full relative">
						<div class="flex">
							<div class="w-[40%]">
								<header class="w-full mt-12 mb-3">
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)]">
										<p class="leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px] flex items-center gap-2">
											Our Collabs
										</p>
									</div>
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)] flex relative">
										<h1 class="translate-y-[2px] md:translate-y-[10px] ml-[4vw] font-bold">Joining forces</h1>
									</div>
									<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(255,255,255,.2)] flex items-center justify-between">
										<h1 class="translate-y-[2px] md:translate-y-[10px]">for greatness</h1>
									</div>
								</header>
								<div>
									<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/collabs/banner-06.webp"; ?>" class="inline-block w-full" alt="" />
								</div>
							</div>
							<div class="w-[60%]">
								<section class="w-full mt-12 mb-3">
									<div class="w-full h-[32px] md:h-[48px]">
									</div>
									<div class="w-full h-[64px] md:h-[96px] border-y border-y-[rgba(255,255,255,.2)] border-l border-l-[rgba(255,255,255,.2)] flex items-center justify-between px-8">
										<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/collabs/top-6.webp"; ?>" class="inline-block h-[28px] lg:h-[48px]" alt="" />
									</div>
									<div class="w-full h-[64px] md:h-[96px] border-b border-b-[rgba(255,255,255,.2)] flex items-end justify-between px-8">
										<h1 class="font-bold">OShoJain <span class="font-normal text-[0.7em]">(Music Concert)</span></h1>
										<p class="font-bold">3 March 2024</p>
									</div>
									<div class="px-8 mt-6 pb-20 border-b border-b-[rgba(255,255,255,.2)]">
										<p class="lg:max-w-[70%]">
											The collaboration with the immensely talented singer-songwriter Osho Jain came to life at his recent concert in Bengaluru, where Rata brought a touch of elegance and flair to the evening with our crafted brooches, harmonising with soulful music. 
										</p>
									</div>
									<div class="px-8 mt-4">
										<div class="flex gap-3">
											<div class="w-[32px] pt-[2px]">
												<svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clip-path="url(#clip0_1517_6574)">
														<path d="M10.0928 0.0175781C4.57877 0.0175781 0.0927734 4.50358 0.0927734 10.0176C0.0937734 15.5326 4.57977 20.0186 10.0928 20.0186C15.6068 20.0186 20.0928 15.5326 20.0938 10.0176C20.0938 4.50358 15.6078 0.0175781 10.0928 0.0175781ZM10.0928 18.0186C5.68277 18.0186 2.09377 14.4296 2.09277 10.0176C2.09277 5.60658 5.68177 2.01758 10.0928 2.01758C14.5048 2.01758 18.0938 5.60658 18.0938 10.0176C18.0928 14.4296 14.5038 18.0186 10.0928 18.0186Z" fill="#F20079"/>
														<path d="M20 0.0175781C14.486 0.0175781 10 4.50358 10 10.0176C10.001 15.5326 14.487 20.0186 20 20.0186C25.514 20.0186 30 15.5326 30.001 10.0176C30.001 4.50358 25.515 0.0175781 20 0.0175781ZM20 18.0186C15.59 18.0186 12.001 14.4296 12 10.0176C12 5.60658 15.589 2.01758 20 2.01758C24.412 2.01758 28.001 5.60658 28.001 10.0176C28 14.4296 24.411 18.0186 20 18.0186Z" fill="#F20079"/>
														<path d="M11.5 7L15 2.5L19 6.5V14L15 17L12 15L11.5 7Z" fill="#F20079"/>
													</g>
													<defs>
														<clipPath id="clip0_1517_6574">
															<rect width="30.001" height="21" fill="white"/>
														</clipPath>
													</defs>
												</svg>
											</div>
											<p class="leading-[20px] font-bold">Curious about collaborating<br />with our brand? <a href="#" class="text-vivid-pink">Connect with us <span class="arrow"><span class="line"></span></span></a></p>
										</div>

									</div>
								</section>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="absolute right-0 bottom-[3vw] flex items-center gap-8 z-10">
				<div class="w-[42px] h-[42px] lg:w-[64px] lg:h-[64px] bg-[#F6F2E9] rounded-full flex items-center justify-center collabs-slider-prev cursor-pointer">
					<svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-180">
						<path d="M18.6667 3.26378e-06C18.6667 0.848003 19.5218 2.11429 20.3875 3.17715C21.5005 4.54858 22.8305 5.74515 24.3553 6.65829C25.4987 7.34286 26.8847 8 28 8M28 8C26.8847 8 25.4975 8.65715 24.3553 9.34172C22.8305 10.256 21.5005 11.4526 20.3875 12.8217C19.5218 13.8857 18.6667 15.1543 18.6667 16M28 8L-1.39876e-06 8" stroke="#242424" stroke-width="3"/>
					</svg>
				</div>
				<div class="w-[42px] h-[42px] lg:w-[64px] lg:h-[64px] bg-[#F6F2E9] rounded-full flex items-center justify-center collabs-slider-next cursor-pointer">
					<svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M18.6667 3.26378e-06C18.6667 0.848003 19.5218 2.11429 20.3875 3.17715C21.5005 4.54858 22.8305 5.74515 24.3553 6.65829C25.4987 7.34286 26.8847 8 28 8M28 8C26.8847 8 25.4975 8.65715 24.3553 9.34172C22.8305 10.256 21.5005 11.4526 20.3875 12.8217C19.5218 13.8857 18.6667 15.1543 18.6667 16M28 8L-1.39876e-06 8" stroke="#242424" stroke-width="3"/>
					</svg>
				</div>
			</div>
		</div>
	</article>


	<!-- =================================================== CUSTOM MADE SECTION =================================================== -->
	<!-- <article class="bg-white">
		<div class="container mx-auto px-4 md:px-0">
			<header class="w-full mt-12 mb-8">
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)]">
					<p class="leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px] flex items-center gap-2">
						Custom Made
					</p>
				</div>
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex relative">
					<h1 class="translate-y-[2px] md:translate-y-[10px] ml-[4vw] font-bold">Weaving  Stories</h1>
				</div>
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex items-center justify-between">
					<h1 class="translate-y-[2px] md:translate-y-[10px]">through Beads</h1>
				</div>
			</header>
		</div>
	</article> -->


	<!-- =================================================== EVERYTHING AT RATA SECTION =================================================== -->
	<!-- <article class="bg-white">
		<div class="container mx-auto px-4 md:px-0">
			<header class="w-full mt-12 mb-8">
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)]">
					<p class="leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px] flex items-center gap-2">
						Everything at Rata
					</p>
				</div>
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex relative">
					<h1 class="translate-y-[2px] md:translate-y-[10px] ml-[4vw]">Explore all</h1>
				</div>
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex items-center justify-between">
					<h1 class="translate-y-[2px] md:translate-y-[10px] font-bold">Collections</h1>
				</div>
			</header>
		</div>
	</article> -->


	<!-- =================================================== OUR PARTNER STORIES SECTION =================================================== -->
	<article class="bg-cream-white">
		<div class="container mx-auto px-4 md:px-0 py-6 flex items-center">
			<section class="w-2/5">
				<header class="w-full mt-12 mb-8">
					<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)]">
						<p class="leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px] flex items-center gap-2">
							Our Partner Stores
						</p>
					</div>
					<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex relative">
						<h1 class="translate-y-[2px] md:translate-y-[10px] ml-[4vw]">We are also</h1>
					</div>
					<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex items-center justify-between">
						<h1 class="translate-y-[2px] md:translate-y-[10px] font-bold">Located at -</h1>
					</div>
				</header>
			</section>
			<section class="w-3/5 flex items-center justify-center gap-6">
				<div class="partner-thumbnail text-xs min-w-[200px] relative group">
					<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/partner/01.webp" ?>" alt="" class="inline-block w-full" />
				</div>
				<div class="partner-thumbnail text-xs min-w-[200px] relative group">
					<div class="hover-content min-w-[160px] absolute left-[50%] -top-3 translate-x-[-50%] px-5 py-2 transition-all duration-200 ease-in-out text-white text-center bg-vivid-pink scale-0 group-hover:scale-100">Order Online</div>
					<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/partner/02.webp" ?>" alt="" class="inline-block w-full" />
				</div>
				<div class="partner-thumbnail text-xs min-w-[200px] relative group">
					<div class="hover-content min-w-[160px] absolute left-[50%] -top-3 translate-x-[-50%] px-5 py-2 transition-all duration-200 ease-in-out text-white text-center bg-vivid-pink scale-0 group-hover:scale-100">Shop In-Store</div>
					<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/partner/03.webp" ?>" alt="" class="inline-block w-full" />
				</div>
				<div class="partner-thumbnail text-xs min-w-[200px] relative group">
					<div class="hover-content min-w-[160px] absolute left-[50%] -bottom-3 translate-x-[-50%] px-5 py-2 transition-all duration-200 ease-in-out text-center bg-golden-yellow scale-0 group-hover:scale-100">Now in NYC</div>
					<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/partner/04.webp" ?>" alt="" class="inline-block w-full" />
				</div>
			</section>
		</div>
	</article>


	<!-- =================================================== EMMERSIVE SECTION =================================================== -->
	<article class="bg-white">
		<div class="container mx-auto px-4 md:px-0 flex items-center justify-center">
			<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/home/emmersive-section.webp"; ?>" class="inline-block w-full" />
		</div>
	</article>


	<!-- =================================================== OUR STORIES SECTION =================================================== -->
	<article class="bg-white">
		<div class="container mx-auto px-4 md:px-0">
			<header class="w-full mt-12 mb-8">
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)]">
					<p class="leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px] flex items-center gap-2">
						Our Stories
					</p>
				</div>
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex relative">
					<h1 class="translate-y-[2px] md:translate-y-[10px] ml-[4vw] font-bold">Dive in Rata's</h1>
				</div>
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex items-center justify-between">
					<h1 class="translate-y-[2px] md:translate-y-[10px] font-bold">Journal & News</h1>
					<p class="flex items-center gap-8">
						<span>Whimsical</span>
						<span>One of a Kind</span>
						<span>Inclusive</span>
					</p>
				</div>
			</header>
			<div class="swiper" id="our-stories-slider">
				<!-- Additional required wrapper -->
				<div class="swiper-wrapper">
					<!-- Slides -->
					<div class="swiper-slide">
						<div class="block w-full h-full bg-cream-white group border-2 border-cream-white">
							<div class="relative w-full overflow-hidden bg-white flex items-center justify-center transition-shadow duration-200">
								<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/features/rata-feature-thumbnail.webp" ?>" alt="" />
							</div>
							<div class="p-4">
								<!-- Product Title -->
								<p class="text-[16px] lg:text-[20px] font-bold text-charcoal-black">
									<span class="text-vivid-pink inline-block mr-2">//</span>
									Rata Feature
								</p>
								<p class="text-[16px] lg:text-[20px] text-charcoal-black mb-2">Brown Paper Bag: 2024 Gift Directory</p>
								<p class="text-xs lg:text-base text-charcoal-black leading-[10px]">Insight into our Sanctuary of Shine Collection, paying an ode to nature and its beauty.</p>
								<p>
									<a href="#" class="inline-block text-vivid-pink mt-3">Read More <span class="arrow"><span class="line"></span></span></a>
								</p>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="block w-full h-full bg-cream-white group border-2 border-cream-white">
							<div class="relative w-full overflow-hidden bg-white flex items-center justify-center transition-shadow duration-200">
								<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/features/rata-journal-thumbanil.webp" ?>" alt="" />
							</div>
							<div class="p-4">
								<!-- Product Title -->
								<p class="text-[16px] lg:text-[20px] font-bold text-charcoal-black">
									<span class="text-vivid-pink inline-block mr-2">//</span>
									Rata Journal
								</p>
								<p class="text-[16px] lg:text-[20px] text-charcoal-black mb-2">An Interview with Blue the Border</p>
								<p class="text-xs lg:text-base text-charcoal-black leading-[10px]">Founder Pratiksha Tandon speaks to Blur the Border on how love and care forged a brand that that makes people feel special. </p>
								<!-- read-more link -->
								<p>
									<a href="#" class="inline-block text-vivid-pink mt-3">Read More <span class="arrow"><span class="line"></span></span></a>
								</p>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="block w-full h-full bg-cream-white group border-2 border-cream-white">
							<div class="relative w-full overflow-hidden bg-white flex items-center justify-center transition-shadow duration-200">
								<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/features/rata-feature-2-thumbnail.webp" ?>" alt="" />
							</div>
							<div class="p-4">
								<!-- Product Title -->
								<p class="text-[16px] lg:text-[20px] font-bold text-charcoal-black">
									<span class="text-vivid-pink inline-block mr-2">//</span>
									Rata Feature
								</p>
								<p class="text-[16px] lg:text-[20px] text-charcoal-black mb-2">Spotlight: Sanctuary of Shine</p>
								<p class="text-xs lg:text-base text-charcoal-black leading-[10px]">Indian Express Indulge gives us an insight into our Sanctuary of Shine Collection - paying an ode to nature and its beauty.</p>
								<!-- read-more link -->
								<p>
									<a href="#" class="inline-block text-vivid-pink mt-3">Read More <span class="arrow"><span class="line"></span></span></a>
								</p>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="block w-full h-full bg-cream-white group border-2 border-cream-white">
							<div class="relative w-full overflow-hidden bg-white flex items-center justify-center transition-shadow duration-200">
								<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/features/rata-feature-3-thumbnail.webp" ?>" alt="" />
							</div>
							<div class="p-4">
								<!-- Product Title -->
								<p class="text-[16px] lg:text-[20px] font-bold text-charcoal-black">
									<span class="text-vivid-pink inline-block mr-2">//</span>
									Rata Feature
								</p>
								<p class="text-[16px] lg:text-[20px] text-charcoal-black mb-2">Grazia's favourite heart-shaped baubles </p>
								<p class="text-xs lg:text-base text-charcoal-black leading-[10px]">Our beaded heart ring was featured in Grazia - symbolising a boundless capacity for love and affection.</p>
								<!-- read-more link -->
								<p>
									<a href="#" class="inline-block text-vivid-pink mt-3">Read More <span class="arrow"><span class="line"></span></span></a>
								</p> 
							</div>
						</div>
					</div>
				</div>
				<!-- If we need pagination -->
				<!-- <div class="swiper-pagination"></div> -->
		
				<!-- If we need navigation buttons -->
				<!-- <div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div> -->
			</div>
		</div>
	</article>


	<!-- =================================================== CONNECT WITH US SECTION =================================================== -->
	<article class="bg-white mt-[5vw]">
		<div class="container mx-auto px-4 md:px-0">
			<header class="w-full mt-12">
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)]">
					<p class="leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px] flex items-center gap-2"> Connect with Us </p>
				</div>
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex relative">
					<h1 class="translate-y-[2px] md:translate-y-[10px] ml-[4vw] font-bold">Let's build</h1>
				</div>
				<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex items-center justify-between">
					<h1 class="translate-y-[2px] md:translate-y-[10px]">something together</h1>
				</div>
			</header>
			<div class="w-full flex justify-center mt-[-22px] relative">
				<form class="w-[90%] max-w-[480px] mx-auto bg-[#FFF9EE] p-6 space-y-6 relative border-2 border-[#F9DE78]">
					<span class="absolute right-[-24px] top-[-3px] z-10">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.5 23.5L0 0V23.5H23.5Z" fill="#F9DE78"/>
						</svg>

					</span>
					<!-- Name -->
					<div>
						<label class="block font-semibold text-sm px-4 pt-2 pb-1 bg-white">Name</label>
						<input type="text" name="name" placeholder="Add your name here" class="w-full px-4 pb-2 pt-1 border border-transparent bg-white focus:outline-none focus:border-yellow-400" />
					</div>
	
					<!-- Contact -->
					<div>
						<label class="block font-semibold text-sm px-4 pt-2 pb-1 bg-white">Mobile Number/Email ID</label>
						<input type="text" name="contact" placeholder="Add your contact details" class="w-full px-4 pb-2 pt-1 border border-transparent bg-white focus:outline-none focus:border-yellow-400" />
					</div>
	
					<!-- Reference -->
					<div>
						<label class="block font-semibold text-sm px-4 pt-2 pb-1 bg-white">Want to share any references?</label>
						<div class="flex items-center gap-2 text-gray-500 px-4 pb-2 pt-1 bg-white border border-transparent">
							<svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M12 4v16m8-8H4" /> </svg>
							<span>Upload your Reference</span>
						</div>
					</div>
	
					<!-- Submit Button -->
					<div class="w-full flex justify-center">
						<button type="submit" class="bg-yellow-400 text-black font-semibold px-6 py-3 shadow transition flex items-center justify-center gap-2" >
							Share Details
							<span class="arrow"><div class="line"></div></span>
						</button>
					</div>
	
					<!-- WhatsApp Box -->
					<div class="bg-[#EFE3C7] text-sm p-4 rounded flex items-center justify-between">
						<div>
							<div class="font-semibold">Want to have a quick chat? Let's Connect!</div>
							<div>Message us on WhatsApp.</div>
						</div>
						<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M30.6717 9.38838C29.2856 7.99319 27.6364 6.88691 25.8198 6.13363C24.0031 5.38035 22.055 4.99505 20.0883 5.00005C11.8417 5.00005 5.12833 11.7117 5.125 19.9617C5.125 22.5984 5.81333 25.1717 7.12167 27.4417L5 35.1934L12.9317 33.1117C15.1257 34.306 17.5837 34.9323 20.0817 34.9334H20.0883C28.3333 34.9334 35.0467 28.2217 35.05 19.9717C35.0557 18.0059 34.6716 16.0584 33.9201 14.2418C33.1686 12.4253 32.0645 10.7757 30.6717 9.38838ZM20.0883 32.4084H20.0833C17.8559 32.4086 15.6694 31.8093 13.7533 30.6734L13.3 30.4034L8.59333 31.6384L9.84833 27.05L9.55333 26.58C8.30798 24.5974 7.64872 22.303 7.65167 19.9617C7.655 13.105 13.2333 7.52671 20.0933 7.52671C21.7271 7.52308 23.3453 7.84352 24.8544 8.46947C26.3635 9.09542 27.7335 10.0145 28.885 11.1734C30.0427 12.3268 30.9603 13.6982 31.5848 15.2084C32.2093 16.7186 32.5283 18.3375 32.5233 19.9717C32.52 26.8284 26.9417 32.4084 20.0883 32.4084ZM26.91 23.0934C26.535 22.905 24.6983 22.0017 24.355 21.8767C24.0133 21.7517 23.765 21.69 23.515 22.0634C23.265 22.4367 22.5483 23.2784 22.33 23.5284C22.1117 23.7784 21.8933 23.8084 21.52 23.6217C21.1467 23.435 19.9417 23.04 18.5133 21.7667C17.4017 20.775 16.6517 19.5517 16.4333 19.1767C16.215 18.8017 16.41 18.6 16.5983 18.4134C16.7667 18.2467 16.9717 17.9767 17.1583 17.7584C17.345 17.54 17.4067 17.385 17.5317 17.135C17.6567 16.885 17.595 16.6667 17.5 16.48C17.4067 16.2917 16.6583 14.4517 16.3467 13.7034C16.045 12.9784 15.7367 13.075 15.5067 13.065C15.2685 13.0553 15.0301 13.0509 14.7917 13.0517C14.6021 13.0565 14.4156 13.1005 14.2438 13.1808C14.072 13.2611 13.9186 13.376 13.7933 13.5184C13.45 13.8934 12.485 14.7967 12.485 16.6367C12.485 18.4767 13.825 20.255 14.0117 20.505C14.1983 20.755 16.6483 24.53 20.3983 26.15C21.2917 26.535 21.9883 26.765 22.53 26.9384C23.425 27.2234 24.24 27.1817 24.885 27.0867C25.6033 26.9801 27.0967 26.1834 27.4083 25.31C27.72 24.4367 27.72 23.6884 27.6267 23.5317C27.5333 23.375 27.2817 23.28 26.91 23.0934Z" fill="black"/>
						</svg>
					</div>
				</form>
			</div>

		</div>
	</article>


</main>

<script>
	document.addEventListener('DOMContentLoaded', function () {
		const heroSwiper = new Swiper('#home-hero-slider', {
			effect: 'fade', // fade effect for smooth transitions
			speed: 1000, // transition speed in milliseconds
			direction: 'horizontal',
			loop: true,
			autoplay: {
				delay: 3000, // time in milliseconds between slides
				disableOnInteraction: false, // keeps autoplay running after user interacts
			},
		});
		const storiesSwiper = new Swiper('#our-stories-slider', {
			direction: 'horizontal',
			slidesPerView: "auto",
			spaceBetween: 20,
		});

		const collabsSlider = new Swiper('#collabs-slider', {
			direction: 'horizontal',
			slidesPerView: "auto",
			spaceBetween: 20,
			navigation: {
				nextEl: '.collabs-slider-next',
				prevEl: '.collabs-slider-prev',
			},
			slidesPerView: 1,
		});

    	// const validation = new JustValidate('form');

		// validation
		// 	.addField('[name="name"]', [
		// 		{
		// 			rule: 'required',
		// 			errorMessage: 'Name is required',
		// 		}
		// 	])
		// 	.addField('[name="contact"]', [
		// 		{
		// 			rule: 'required',
		// 			errorMessage: 'Contact is required',
		// 		},
		// 		{
		// 			rule: 'email',
		// 			errorMessage: 'Enter a valid email or phone',
		// 		}
		// 	]);


			const videos = document.querySelectorAll(".auto-play-on-scroll");

			const observer = new IntersectionObserver((entries) => {
				entries.forEach(entry => {
					const video = entry.target;
					if (entry.isIntersecting) {
						// Load video only once
						if (!video.src) {
							video.src = video.dataset.src;
						}
						video.play().catch(() => {});
					} else {
						video.pause();
					}
				});
			}, {
				threshold: 0.5
			});

			videos.forEach(video => observer.observe(video));


			const video = document.getElementById('behind-the-scenes');
			const timeline = document.getElementById('timeline');

			video.addEventListener('loadedmetadata', () => {
				timeline.max = video.duration;
			});

			video.addEventListener('timeupdate', () => {
				timeline.value = video.currentTime;
			});

			timeline.addEventListener('input', () => {
				video.currentTime = timeline.value;
			});

	});
</script>

<?php get_footer(); ?>
