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
		<div class="pt-8 pb-20">
			<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/about/hero.webp"; ?>" class="inline-block w-full" alt="" />
		</div>
	</article>
</section>

<article class="pt-8 pb-12" style="background: #FFF6D2 url('<?php echo get_template_directory_uri(); ?>/assets/img/cont/about/ornament.webp') no-repeat center bottom; background-size: cover;">
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
		<div>
			<div class="flex w-full">
				<div class="flex-grow"></div>
				<div class="max-w-[600px]">
					<p class="text-gray-700 text-lg leading-relaxed">
						Rata is a luxury lifestyle brand that celebrates handcrafted artistry with a whimsical touch. We curate <span class="font-bold">exquisite beaded art jewellery</span> and <span class="font-bold">lifestyle accessories</span>, designed for the <span class="font-bold">fashionable and outgoing individual</span> within the global vibrant luxury space.
					</p>
				</div>
			</div>
			<div class="h-[30px]"></div>
			<section class="relative aspect-video">
				<video class="w-full object-cover auto-play-on-scroll" id="behind-the-scenes" muted playsinline preload="auto" src="<?php echo get_template_directory_uri() . "/assets/img/cont/process/our-process.mp4"; ?>"></video>
				<input type="range" id="timeline" min="0" value="0" step="0.1" class="absolute bottom-0 left-0 w-full h-2 appearance-none bg-yellow-400 cursor-pointer accent-pink-500" />
			</section>
			<div class="w-full h-[100px]"></div>
		</div>
	</div>
</article>

<!-- =================================================== WHY CHOOSE US SECTION =================================================== -->
<section class="bg-white py-20">
	<article class="container mx-auto px-4 md:px-0">
		<header class="w-full mt-12 mb-16">
			<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)]">
				<p class="text-vivid-pink leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px]">Why choose us?</p>
			</div>
			<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex relative">
				<h1 class="translate-y-[2px] md:translate-y-[10px]"><span class="font-bold">The Heart of Rata:</span> Our values that drive </h1>
			</div>
			<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex items-center justify-between">
				<h1 class="translate-y-[2px] md:translate-y-[10px]">the <span class="font-bold">culture & identity</span> of our brand</h1>
			</div>
		</header>
		<section class="flex flex-wrap gap-6">
			<div class="bg-cream-white p-8 flex-1">
				<div class="w-[100px] h-[100px] rounded-full bg-vivid-pink flex items-center justify-center">
					<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_1967_3063)">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M45.3987 51.1514C46.9778 48.4664 47.9014 45.347 47.9014 42.002C47.9014 36.983 45.8605 26.3327 42.571 17.0117C46.0094 13.6907 49.2899 11.0662 51.6199 10.0522C52.4184 9.70425 53.3629 10.1424 53.5983 10.9854C55.541 17.8944 52.2426 45.3404 45.3987 51.1514ZM38.3193 50.5874C33.8292 54.9884 26.8183 55.0246 22.2417 51.0166C19.73 48.8146 18.1061 45.611 18.1061 42.002C18.1061 33.047 24.2738 12.4331 28.9367 7.09912C29.5028 6.45112 30.5338 6.44233 31.1029 7.09033C35.7599 12.3973 41.9424 32.873 41.9424 42.002C41.9424 45.368 40.548 48.4064 38.3193 50.5874ZM13.6756 49.1562C9.01857 44.1102 4.86806 18.4071 6.92096 10.9941C7.15336 10.1481 8.10382 9.70411 8.90234 10.0581C11.1608 11.0541 14.2893 13.5862 17.6443 16.8022C14.7065 25.0522 10.0972 40.8372 13.6756 49.1562ZM53.4017 3.59521C49.7637 3.59521 44.9667 6.70058 40.1756 11.0176C37.2914 4.68458 33.7934 0.00195312 30.0242 0.00195312C26.2879 0.00195312 22.8198 4.5914 19.9534 10.8374C16.2409 7.5194 9.18541 1.92468 4.70121 4.07568C-4.21355 8.34768 1.52801 40.7574 5.77087 49.7334C8.83085 56.2074 15.2309 59.996 21.19 60.002H35.7539V59.9771C44.3498 60.1631 50.6486 55.6914 53.4673 49.7334C57.9515 40.2504 65.6327 3.59521 53.4017 3.59521Z" fill="white"/>
						</g>
						<defs>
							<clipPath id="clip0_1967_3063">
								<rect width="60" height="60" fill="white"/>
							</clipPath>
						</defs>
					</svg>
				</div>
				<p class="text-md lg:text-xl font-bold text-vivid-pink italic leading-[20px] mt-6">Personal</p>
				<p class="text-md lg:text-xl font-bold text-vivid-pink italic leading-[20px] -mt-3">Expression</p>
				<p class="italic leading-[1.2em] mt-2 text-lg">
					Every piece tells a<br />unique story, reflecting<br />individuality and<br />creativity.
				</p>
			</div>
			<div class="bg-cream-white p-8 flex-1">
				<div class="w-[100px] h-[100px] rounded-full bg-vivid-pink flex items-center justify-center">
					<svg width="55" height="63" viewBox="0 0 55 63" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M34.9623 8.51836H37.3439C38.0726 8.51836 38.6769 7.91406 38.6769 7.18535C38.6769 6.45664 38.0726 5.85234 37.3439 5.85234H32.8117C32.8117 3.06191 30.5367 0.804688 27.764 0.804688H27.2842C24.4937 0.804688 22.2365 3.06191 22.2365 5.85234H17.7043C16.9756 5.85234 16.3713 6.45664 16.3713 7.18535C16.3713 7.91406 16.9756 8.51836 17.7043 8.51836H20.0326L0.606231 26.1674C0.197442 26.5406 0.0552547 27.1271 0.250763 27.6426C0.44627 28.158 0.943927 28.4957 1.4949 28.4957H4.49861L26.1644 46.358V60.8611C26.1644 61.5898 26.7687 62.1941 27.4974 62.1941C28.2262 62.1941 28.8304 61.5898 28.8304 60.8611V46.358L50.4963 28.4957H53.5C54.051 28.4957 54.5486 28.158 54.7441 27.6426C54.9396 27.1271 54.7974 26.5406 54.3886 26.1674L34.9623 8.51836ZM27.2486 3.4707H27.7285C29.0437 3.4707 30.1101 4.53711 30.1101 5.85234H24.867C24.867 4.53711 25.9512 3.4707 27.2486 3.4707ZM24.0138 8.51836H30.9988L50.0519 25.8297H50.0342H50.0164H27.5152H27.4974H27.4797H15.0205H4.9785H4.96072H4.94295L24.0138 8.51836ZM18.7351 28.4957H26.1644V34.6098L18.7351 28.4957ZM28.8304 34.6098V28.4957H36.2597L28.8304 34.6098ZM14.5584 28.4957L26.1644 38.0756V42.91L8.69314 28.5135H14.5584V28.4957ZM28.8304 42.8922V38.0578L40.4365 28.4779H46.3017L28.8304 42.8922Z" fill="white"/>
					</svg>
				</div>
				<p class="text-md lg:text-xl font-bold text-vivid-pink italic leading-[20px] mt-6">Timeless</p>
				<p class="text-md lg:text-xl font-bold text-vivid-pink italic leading-[20px] -mt-3">Craftsmanship</p>
				<p class="italic leading-[1.2em] mt-2 text-lg">
					Crafted with care by<br />our beautiful beaders,<br />our jewellery<br />celebrates lasting<br />artistry.
				</p>
			</div>
			<div class="bg-cream-white p-8 flex-1">
				<div class="w-[100px] h-[100px] rounded-full bg-vivid-pink flex items-center justify-center">
					<svg width="57" height="51" viewBox="0 0 57 51" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 8.75034C23.4767 2.89616 15.0826 1.08696 8.78868 6.44763C2.49473 11.8083 1.60863 20.771 6.5513 27.1112C10.6608 32.3824 23.0976 43.5002 27.1737 47.0987C27.6296 47.5012 27.8576 47.7025 28.1237 47.7815C28.3557 47.8505 28.6097 47.8505 28.842 47.7815C29.108 47.7025 29.3358 47.5012 29.792 47.0987C33.8681 43.5002 46.3047 32.3824 50.4143 27.1112C55.3569 20.771 54.5789 11.7519 48.1768 6.44763C41.7747 1.14335 33.5233 2.89616 28.5 8.75034Z" stroke="white" stroke-width="5.58333" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<p class="text-md lg:text-xl font-bold text-vivid-pink italic leading-[20px] mt-6">Sustainable</p>
				<p class="text-md lg:text-xl font-bold text-vivid-pink italic leading-[20px] -mt-3">Beauty</p>
				<p class="italic leading-[1.2em] mt-2 text-lg">
					We embrace slow<br />design, creating<br />treasures that honor the<br />planet and is passed on<br />for generations.
				</p>
			</div>
			<div class="bg-cream-white p-8 flex-1">
				<div class="w-[100px] h-[100px] rounded-full bg-vivid-pink flex items-center justify-center">
					<svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M62.9414 16.6515C62.6275 16.0744 62.0167 15.7217 61.3598 15.7384C58.4135 15.8132 51.9759 17.4204 48.0633 23.2246C44.0505 21.0026 39.8624 21.3589 38.2122 21.8381C37.6368 22.0052 37.1867 22.4552 37.0194 23.0308C36.374 25.2541 35.975 30.6691 39.868 34.562C41.694 36.3879 43.641 37.1793 45.4687 37.2101C46.63 37.2297 47.6748 36.9406 48.5323 36.4964C48.9806 36.9056 49.4363 37.2339 49.8619 37.4796C51.1825 38.2419 53.3364 38.8589 55.7111 38.3812C58.1643 37.8877 60.6356 36.27 62.5603 32.9362C66.377 26.3254 64.4268 19.3816 62.9414 16.6515ZM46.4361 33.5853C46.3343 33.3539 46.2405 33.1138 46.1565 32.865C45.531 31.0085 45.4964 28.7976 46.4347 26.3251C44.0817 25.0015 41.6289 24.8785 40.1767 25.0251C39.9338 26.9088 40.1774 29.9218 42.3429 32.0871C43.6228 33.3671 44.7348 33.6972 45.5279 33.7105C45.859 33.7161 46.1645 33.6671 46.4361 33.5853ZM50.4786 25.9608C53.0816 21.4521 57.634 19.7579 60.3329 19.3436C61.3234 21.8879 62.1322 26.6775 59.5293 31.1862C58.0407 33.7647 56.3649 34.6797 55.0209 34.9501C53.5985 35.2361 52.3053 34.8487 51.6119 34.4484C50.9189 34.0482 49.9365 33.1221 49.4734 31.7472C49.0356 30.4479 48.9901 28.5394 50.4786 25.9608Z" fill="white"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M51.9267 44.4418C52.6897 44.9486 53.164 45.6752 53.4594 46.4763C54.0642 48.1178 53.8132 49.6792 52.9266 50.9598C52.9207 50.9686 52.9144 50.9773 52.9085 50.9861C54.3438 50.5402 55.7162 50.0036 57.0101 49.4513C57.7591 49.1318 58.513 48.7919 59.2438 48.4622C60.621 47.841 61.9171 47.2561 62.9478 46.9135C63.7451 46.6482 64.6863 46.413 65.5861 46.5267C66.0723 46.5883 66.5872 46.7563 67.0516 47.106C67.5185 47.4577 67.8349 47.9187 68.0354 48.4108C68.475 49.4895 68.1614 50.5752 67.8059 51.3375C67.4272 52.1502 66.8276 52.9751 66.1308 53.7675C64.7273 55.3635 62.6916 57.0946 60.4072 58.6843C58.114 60.2803 55.5047 61.7801 52.9193 62.8868C50.3615 63.9819 47.6962 64.7495 45.3295 64.7495C43.2393 64.7498 37.9946 64.235 32.8666 63.4877C30.2835 63.1115 27.6843 62.6694 25.4783 62.1917C23.3394 61.7283 21.3693 61.1914 20.1856 60.5691C19.6103 60.2667 19.25 59.6703 19.25 59.02V47.0815C19.25 46.5908 19.456 46.1228 19.8178 45.791C20.1796 45.4596 20.6639 45.2954 21.1528 45.3381C32.3054 46.3153 39.4436 45.2366 44.0202 44.4526C44.2918 44.4061 44.5599 44.3595 44.8231 44.3137C46.6886 43.9889 48.3305 43.7029 49.5856 43.7565C50.3587 43.7894 51.1868 43.9507 51.9267 44.4418ZM22.75 48.9753V57.8559C23.5757 58.1404 24.751 58.453 26.2192 58.7711C28.3193 59.2258 30.8334 59.6545 33.3712 60.0245C38.485 60.7693 43.513 61.2498 45.3292 61.2495C47.0176 61.2495 49.1799 60.6807 51.542 59.6692C53.8762 58.67 56.2786 57.2938 58.408 55.8119C60.5458 54.3237 62.3431 52.7746 63.5026 51.4561C63.9765 50.9171 64.3055 50.4597 64.5102 50.0971C64.3807 50.131 64.2289 50.1758 64.0528 50.2343C63.1799 50.5248 62.1768 50.9787 60.9469 51.5352C60.1867 51.8793 59.3397 52.2625 58.3835 52.6706C53.6476 54.6915 47.0648 56.9056 39.9504 54.7237C39.0831 54.4581 38.563 53.5736 38.752 52.6864C38.9406 51.7991 39.7764 51.2034 40.6766 51.3137C43.1109 51.6126 46.0355 51.2454 48.0802 50.3592C49.1064 49.9144 49.7413 49.4125 50.049 48.968C50.2943 48.6131 50.3811 48.2452 50.1753 47.6866C50.1179 47.5312 50.0675 47.4483 50.0381 47.4077C50.0122 47.372 49.9975 47.3622 49.9909 47.3576C49.9765 47.3482 49.8543 47.2712 49.4364 47.2533C48.587 47.2169 47.3701 47.4269 45.3586 47.7738C45.121 47.8147 44.8718 47.8578 44.611 47.9026C40.1275 48.6705 33.2289 49.7128 22.75 48.9753ZM64.7497 49.5273L64.7493 49.5325L64.7497 49.5273Z" fill="white"/>
					</svg>
				</div>
				<p class="text-md lg:text-xl font-bold text-vivid-pink italic leading-[20px] mt-6">Inclusive</p>
				<p class="text-md lg:text-xl font-bold text-vivid-pink italic leading-[20px] -mt-3">Luxury</p>
				<p class="italic leading-[1.2em] mt-2 text-lg">
					Luxury for all, designed<br />to make every moment<br />beautiful and<br />meaningful.
				</p>
			</div>
		</section>
	</article>
</section>


<!-- =================================================== TEAM SECTION =================================================== -->
<section class="bg-white pt-20">
	<article class="container mx-auto px-4 md:px-0">
		<header class="w-full mt-12 mb-16">
			<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)]">
				<p class="text-vivid-pink leading-[32px] md:leading-[48px] translate-y-[10px] md:translate-y-[18px]">Meet the Founders & Beaders</p>
			</div>
			<div class="w-full h-[32px] md:h-[48px] border-b border-b-[rgba(0,0,0,.08)] flex relative">
				<h1 class="translate-y-[2px] md:translate-y-[10px]">The <span class="font-bold">Passionate Hands</span> behind Rata</h1>
			</div>
		</header>
		<section class="flex flex-wrap mt-20 mb-16 gap-8">
			<div class="flex-1 flex items-end justify-between gap-6">
				<div class="flex-1">
					<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/about/team/pratiksha.webp"; ?>" class="inline-block w-full" alt="" />
				</div>
				<div class="flex-1">
					<h3 class="font-bold text-xl lg:text-4xl">Pratiksha Tandon</h3>
					<p class="text-vivid-pink text-base lg:text-xl -mt-2">Founder</p>
					<p class="pt-16 pb-4">
						<svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.5016 21.9C13.5016 25.5 10.9016 28.2 7.40156 28.2C3.10156 28.2 0.101562 24.2 0.101562 18.6C0.101562 11.8 4.60156 4.8 12.2016 0L12.6016 0.599998C7.90156 3.6 5.40156 7 5.40156 10.1C5.40156 15.6 13.5016 15.6 13.5016 21.9ZM30.0016 21.9C30.0016 25.5 27.4016 28.2 23.9016 28.2C19.6016 28.2 16.6016 24.2 16.6016 18.6C16.6016 11.8 21.1016 4.8 28.7016 0L29.1016 0.599998C24.4016 3.6 21.9016 7 21.9016 10.1C21.9016 15.6 30.0016 15.6 30.0016 21.9Z" fill="#F20079"/>
						</svg>
					</p>
					<p class="font-bold">
						We created a whimsical brand that immerses the wearer in a vibrant garden, inviting them to embrace their true selves and explore limitless possibilities.
					</p>
				</div>
			</div>
			<div class="flex-1 flex items-end justify-between gap-6">
				<div class="flex-1">
					<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/about/team/saagar.webp"; ?>" class="inline-block w-full" alt="" />
				</div>
				<div class="flex-1">
					<h3 class="font-bold text-xl lg:text-4xl">Saagar Seth</h3>
					<p class="text-vivid-pink text-base lg:text-xl -mt-2">Co-Founder & Social Sensei</p>
					<p class="pt-16 pb-4">
						<svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.5016 21.9C13.5016 25.5 10.9016 28.2 7.40156 28.2C3.10156 28.2 0.101562 24.2 0.101562 18.6C0.101562 11.8 4.60156 4.8 12.2016 0L12.6016 0.599998C7.90156 3.6 5.40156 7 5.40156 10.1C5.40156 15.6 13.5016 15.6 13.5016 21.9ZM30.0016 21.9C30.0016 25.5 27.4016 28.2 23.9016 28.2C19.6016 28.2 16.6016 24.2 16.6016 18.6C16.6016 11.8 21.1016 4.8 28.7016 0L29.1016 0.599998C24.4016 3.6 21.9016 7 21.9016 10.1C21.9016 15.6 30.0016 15.6 30.0016 21.9Z" fill="#F20079"/>
						</svg>
					</p>
					<p class="font-bold">
						We created a whimsical brand that immerses the wearer in a vibrant garden, inviting them to embrace their true selves and explore limitless possibilities.
					</p>
				</div>
			</div>
		</section>
		<section>
			<div class="swiper" id="team-slider">
				<!-- Additional required wrapper -->
				<div class="swiper-wrapper">
					<!-- Slides -->
					<div class="swiper-slide">
						<div class="block w-full h-full bg-cream-white group border-8 border-cream-white">
							<div class="relative w-full overflow-hidden bg-white flex items-center justify-center transition-shadow duration-200">
								<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/about/team/01.webp" ?>" alt="" />
							</div>
							<div class="p-4">
								<!-- Product Title -->
								<p class="text-[16px] lg:text-[20px] font-bold text-charcoal-black">
									<span class="text-vivid-pink inline-block mr-2">//</span>
									Dinesh Kumar Basor
								</p>
								<p class="text-[16px] lg:text-[20px] text-charcoal-black mb-2">Admin & Bead Artist</p>
								<p class="text-xs lg:text-base text-charcoal-black leading-[20px]">Lorem ipsum dolor sit amet consectetur. Quis nunc eu tincidunt viverra tortor eget molestie. Natoque non aliquet mi nec.</p>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="block w-full h-full bg-cream-white group border-8 border-cream-white">
							<div class="relative w-full overflow-hidden bg-white flex items-center justify-center transition-shadow duration-200">
								<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/about/team/02.webp" ?>" alt="" />
							</div>
							<div class="p-4">
								<!-- Product Title -->
								<p class="text-[16px] lg:text-[20px] font-bold text-charcoal-black">
									<span class="text-vivid-pink inline-block mr-2">//</span>
									Mukesh Mandal
								</p>
								<p class="text-[16px] lg:text-[20px] text-charcoal-black mb-2">Bead Artist</p>
								<p class="text-xs lg:text-base text-charcoal-black leading-[20px]">Lorem ipsum dolor sit amet consectetur. Quis nunc eu tincidunt viverra tortor eget molestie. Natoque non aliquet mi nec.</p>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="block w-full h-full bg-cream-white group border-8 border-cream-white">
							<div class="relative w-full overflow-hidden bg-white flex items-center justify-center transition-shadow duration-200">
								<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/about/team/03.webp" ?>" alt="" />
							</div>
							<div class="p-4">
								<!-- Product Title -->
								<p class="text-[16px] lg:text-[20px] font-bold text-charcoal-black">
									<span class="text-vivid-pink inline-block mr-2">//</span>
									Nageena Khatun
								</p>
								<p class="text-[16px] lg:text-[20px] text-charcoal-black mb-2">Crochet Artist</p>
								<p class="text-xs lg:text-base text-charcoal-black leading-[20px]">Lorem ipsum dolor sit amet consectetur. Quis nunc eu tincidunt viverra tortor eget molestie. Natoque non aliquet mi nec.</p>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="block w-full h-full bg-cream-white group border-8 border-cream-white">
							<div class="relative w-full overflow-hidden bg-white flex items-center justify-center transition-shadow duration-200">
								<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/about/team/04.webp" ?>" alt="" />
							</div>
							<div class="p-4">
								<!-- Product Title -->
								<p class="text-[16px] lg:text-[20px] font-bold text-charcoal-black">
									<span class="text-vivid-pink inline-block mr-2">//</span>
									Rabiuk Malik
								</p>
								<p class="text-[16px] lg:text-[20px] text-charcoal-black mb-2">Bead Artist</p>
								<p class="text-xs lg:text-base text-charcoal-black leading-[20px]">Lorem ipsum dolor sit amet consectetur. Quis nunc eu tincidunt viverra tortor eget molestie. Natoque non aliquet mi nec.</p>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="block w-full h-full bg-cream-white group border-8 border-cream-white">
							<div class="relative w-full overflow-hidden bg-white flex items-center justify-center transition-shadow duration-200">
								<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/about/team/04.webp" ?>" alt="" />
							</div>
							<div class="p-4">
								<!-- Product Title -->
								<p class="text-[16px] lg:text-[20px] font-bold text-charcoal-black">
									<span class="text-vivid-pink inline-block mr-2">//</span>
									Mohammed Javed
								</p>
								<p class="text-[16px] lg:text-[20px] text-charcoal-black mb-2">Bead Artist</p>
								<p class="text-xs lg:text-base text-charcoal-black leading-[20px]">Lorem ipsum dolor sit amet consectetur. Quis nunc eu tincidunt viverra tortor eget molestie. Natoque non aliquet mi nec.</p>
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
		</section>
	</article>
</section>
<section class="bg-white relative py-[120px]">
	<div class="absolute inset-0 bg-[linear-gradient(to_top,_#F4C100_0%,_#F4C100_50%,_white_50%,_white_100%)]"></div>
	<article class="container mx-auto px-4 md:px-0">
		<div class="swiper" id="home-hero-slider">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">
				<!-- Slides -->
				<div class="swiper-slide w-full  relative">
					<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/about/studio/01.webp"; ?>" alt="Rata" class="inline-block w-full" />
				</div>
				<div class="swiper-slide w-full  relative">
					<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/about/studio/01.webp"; ?>" alt="Rata" class="inline-block w-full" />
				</div>
				<div class="swiper-slide w-full  relative">
					<img src="<?php echo get_template_directory_uri() . "/assets/img/cont/about/studio/01.webp"; ?>" alt="Rata" class="inline-block w-full" />
				</div>
			</div>
			<!-- If we need pagination -->
			<!-- <div class="swiper-pagination"></div> -->
	
			<!-- If we need navigation buttons -->
			<!-- <div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div> -->
		</div>
	</article>
</section>



<!-- =================================================== OUR PARTNER STORIES SECTION =================================================== -->
<article class="bg-cream-white mt-[100px] mb-[140px]">
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

<!-- =================================================== OUR STORIES SECTION =================================================== -->
<article class="bg-white mb-[140px]">
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


<?php get_footer(); ?>

<script>
	document.addEventListener('DOMContentLoaded', function () {

		const heroSwiper = new Swiper('#home-hero-slider', {
			effect: 'slide', // fade effect for smooth transitions
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

		const teamSlider = new Swiper('#team-slider', {
			direction: 'horizontal',
			slidesPerView: "auto",
			spaceBetween: 20,
		});


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