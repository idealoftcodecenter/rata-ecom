<?php
/*
Template Name: Contact Page
*/
get_header(); ?>

<main class="container mx-auto px-4 md:px-0 mb-24">
	<div class="my-4">
		<?php do_action( 'woocommerce_before_main_content' );?>
	</div>
	<h1 class="mt-8">Contact <span class="font-bold">US</span></h1>
	<article class="flex mt-4 lg:pr-24">
		<section class="w-1/2 bg-[#FFFBF0] px-8 py-6 border border-golden-yellow mt-12 contat-form-box">
			<?php // echo do_shortcode('[contact-form-7 id="550ecf9" title="Contact Form"]'); ?>
			<div class="mb-6">
				<label class="block font-semibold text-sm px-4 pt-2 pb-1 bg-white">Name</label>
				<input type="text" name="name" placeholder="Add your name here" class="w-full px-4 pb-2 pt-1 border border-transparent bg-white focus:outline-none focus:border-yellow-400" />
			</div>

			<!-- Contact -->
			<div class="mb-6">
				<label class="block font-semibold text-sm px-4 pt-2 pb-1 bg-white">Mobile Number/Email ID</label>
				<input type="text" name="contact" placeholder="Add your contact details" class="w-full px-4 pb-2 pt-1 border border-transparent bg-white focus:outline-none focus:border-yellow-400" />
			</div>

			<!-- Reference -->
			<div class="mb-6">
				<label class="block font-semibold text-sm px-4 pt-2 pb-1 bg-white">Mobile Number/Email ID</label>
				<textarea type="text" name="contact" placeholder="Add your contact details" class="w-full px-4 pb-2 pt-1 border border-transparent bg-white focus:outline-none focus:border-yellow-400"></textarea>
			</div>

			<!-- Submit Button -->
			<div class="w-full flex">
				<button type="submit" class="bg-yellow-400 text-black font-semibold px-6 py-3 shadow transition flex items-center justify-center gap-2" >
					Share Details
					<span class="arrow"><div class="line"></div></span>
				</button>
			</div>
		</section>
		<section class="w-1/2 lg:px-24 mt-12">
			<h1 class="mb-6">Our Head Office</h2>
			<address class="normal">
				<p class="font-bold text-xl lg:text-2xl">RATA Studio</p>
				<p class="leading-[1.2em] text-md lg:text-lg">
					Basement, 528, Sushant Lok 1,<br>
					Block C, Sector 43,<br>
					Gurugram, Haryana 122002</p>
					<p class="mt-8  text-md lg:text-lg">
						+91 9810013770<br>
						hi@ratalove.com
					</p>
				</p>
			</address>

			<h2 class="text-2xl lg:text-4xl mt-8 mb-2">Follow Us</h2>
			<!-- Right: Social Icons -->
			<div class="flex space-x-4">
				<a href="https://linkedin.com" class="social-links-footer" target="_blank" rel="noopener">
					<svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M40.1444 16.2641C40.1251 14.7809 39.8533 13.3124 39.3413 11.9244C38.8973 10.7536 38.2192 9.69032 37.3502 8.80248C36.4813 7.91463 35.4406 7.22175 34.2947 6.7681C32.9537 6.25376 31.537 5.97564 30.1049 5.9456C28.2611 5.86139 27.6765 5.83789 22.996 5.83789C18.3155 5.83789 17.7156 5.83789 15.8852 5.9456C14.4537 5.97586 13.0377 6.25397 11.6972 6.7681C10.5512 7.22143 9.51036 7.9142 8.64136 8.80209C7.77237 9.68997 7.09434 10.7534 6.65065 11.9244C6.14624 13.2935 5.87464 14.7407 5.84757 16.2034C5.76515 18.0892 5.74023 18.6865 5.74023 23.4688C5.74023 28.251 5.74023 28.862 5.84757 30.7342C5.87632 32.199 6.14657 33.6443 6.65065 35.0171C7.09508 36.1877 7.77362 37.2507 8.6429 38.1382C9.51219 39.0257 10.5531 39.7182 11.6992 40.1714C13.0359 40.7064 14.4522 41.0044 15.8871 41.0526C17.7328 41.1368 18.3174 41.1623 22.9979 41.1623C27.6784 41.1623 28.2783 41.1623 30.1087 41.0526C31.5408 41.0238 32.9576 40.7464 34.2986 40.2321C35.4441 39.7779 36.4845 39.0849 37.3534 38.1971C38.2223 37.3093 38.9006 36.2463 39.3452 35.0758C39.8492 33.705 40.1195 32.2597 40.1482 30.7929C40.2306 28.909 40.2556 28.3117 40.2556 23.5275C40.2517 18.7453 40.2517 18.1382 40.1444 16.2641ZM22.9845 32.5123C18.0893 32.5123 14.1237 28.4606 14.1237 23.459C14.1237 18.4574 18.0893 14.4056 22.9845 14.4056C25.3345 14.4056 27.5883 15.3594 29.25 17.0573C30.9117 18.7551 31.8452 21.0579 31.8452 23.459C31.8452 25.8601 30.9117 28.1628 29.25 29.8607C27.5883 31.5585 25.3345 32.5123 22.9845 32.5123ZM32.1979 16.1818C31.9265 16.1821 31.6577 16.1276 31.4069 16.0216C31.1561 15.9156 30.9283 15.7601 30.7363 15.5641C30.5444 15.368 30.3922 15.1351 30.2885 14.8789C30.1848 14.6227 30.1315 14.348 30.1317 14.0707C30.1317 13.7936 30.1852 13.5192 30.2889 13.2632C30.3927 13.0072 30.5448 12.7746 30.7366 12.5787C30.9284 12.3827 31.1561 12.2273 31.4066 12.1212C31.6572 12.0152 31.9257 11.9606 32.1969 11.9606C32.4682 11.9606 32.7367 12.0152 32.9873 12.1212C33.2378 12.2273 33.4655 12.3827 33.6573 12.5787C33.849 12.7746 34.0012 13.0072 34.1049 13.2632C34.2087 13.5192 34.2622 13.7936 34.2622 14.0707C34.2622 15.2379 33.3383 16.1818 32.1979 16.1818Z"  />
						<path d="M22.9882 29.3409C26.167 29.3409 28.7439 26.7079 28.7439 23.46C28.7439 20.2121 26.167 17.5791 22.9882 17.5791C19.8094 17.5791 17.2324 20.2121 17.2324 23.46C17.2324 26.7079 19.8094 29.3409 22.9882 29.3409Z" />
					</svg>
				</a>
				<a href="https://instagram.com" class="social-links-footer" target="_blank" rel="noopener">
					<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M39.1667 5.875H7.83333C7.31395 5.875 6.81584 6.08132 6.44858 6.44858C6.08132 6.81584 5.875 7.31395 5.875 7.83333V39.1667C5.875 39.6861 6.08132 40.1842 6.44858 40.5514C6.81584 40.9187 7.31395 41.125 7.83333 41.125H39.1667C39.6861 41.125 40.1842 40.9187 40.5514 40.5514C40.9187 40.1842 41.125 39.6861 41.125 39.1667V7.83333C41.125 7.31395 40.9187 6.81584 40.5514 6.44858C40.1842 6.08132 39.6861 5.875 39.1667 5.875ZM16.3305 35.91H11.0979V19.0879H16.3305V35.91ZM13.7142 16.7908C12.9102 16.7908 12.1391 16.4714 11.5706 15.9028C11.0021 15.3343 10.6827 14.5633 10.6827 13.7593C10.6827 12.9552 11.0021 12.1842 11.5706 11.6157C12.1391 11.0471 12.9102 10.7278 13.7142 10.7278C14.5182 10.7278 15.2893 11.0471 15.8578 11.6157C16.4263 12.1842 16.7457 12.9552 16.7457 13.7593C16.7457 14.5633 16.4263 15.3343 15.8578 15.9028C15.2893 16.4714 14.5182 16.7908 13.7142 16.7908ZM35.9119 35.91H30.6851V27.73C30.6851 25.7795 30.6499 23.2709 27.967 23.2709C25.2449 23.2709 24.8317 25.3976 24.8317 27.5929V35.9119H19.6088V19.0898H24.6221V21.3889H24.6946C25.3898 20.067 27.0975 18.6727 29.6374 18.6727C34.9328 18.6727 35.91 22.1546 35.91 26.6862L35.9119 35.91Z" />
					</svg>
				</a>
			</div>
		</section>
	</article>
</main>

<?php get_footer(); ?>
