<?php
/**
 * Template Name: About
 * A minimalistic custom About page template
 */

get_header();
?>

<section class="bg-white pt-8 pb-12">
	<article class="container mx-auto px-4 md:px-0">
		<header class="w-full mt-12 mb-8">
			<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)]">
				<p class="text-vivid-pink leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px]">About Us</p>
			</div>
			<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex relative">
				<h1 class="translate-y-[2px] md:translate-y-[10px]"><span class="font-bold">Crafting</span> timeless art pieces to narrate unique stories</h1>
				<span class="absolute right-6 -bottom-2 h-6 hidden md:block"><img src="<?php echo get_template_directory_uri() . "/assets/img/icns/three-flowers.png"; ?>" class="inline-block h-full" alt="" /></span>
			</div>
			<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex items-center justify-between">
				<h1 class="translate-y-[2px] md:translate-y-[10px]">of <span class="font-bold">sustainable craftsmanship</span> and <span class="font-bold">personal expression.</span></h1>
			</div>
		</header>
	</article>
</section>

<section class="bg-[#FFF6D2] pt-8 pb-12">
	<article class="container mx-auto px-4 md:px-0">
		<header class="w-full mt-12 mb-8">
			<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)]">
				<p class="text-vivid-pink leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px]">Behind the Scenes</p>
			</div>
			<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex relative">
				<h1 class="translate-y-[2px] md:translate-y-[10px]"><span class="font-bold">Studio Rata</span>, celebrating beauty in</h1>
			</div>
			<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex items-center justify-between">
				<h1 class="translate-y-[2px] md:translate-y-[10px]">handcrafted artistry and a <span class="font-bold">whimsical spirit</span></h1>
			</div>
		</header>
		<div class="flex w-full">
			<div class="flex-grow"></div>
			<div class="max-w-[600px]">
				<p class="text-gray-700 text-lg leading-relaxed">
					Rata is a luxury lifestyle brand that celebrates handcrafted artistry with a whimsical touch. We curate <span class="font-bold">exquisite beaded art jewellery</span> and <span class="font-bold">lifestyle accessories</span>, designed for the <span class="font-bold">fashionable and outgoing individual</span> within the global vibrant luxury space.
				</p>
			</div>
		</div>
	</article>
</section>

<?php get_footer(); ?>