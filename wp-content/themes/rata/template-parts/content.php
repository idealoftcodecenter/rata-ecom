<div class="swiper" id="mainProductSlider">
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<?php foreach ($gallery_ids as $img_id): $img_url = wp_get_attachment_image_url( $img_id, 'full' ); ?>
								<div class="swiper-slide">
									<a href="<?= esc_url($img_url['url']) ?>" class="glightbox">
										<img src="<?= $img_url ?>" class="w-full" />
									</a>
								</div>
							<?php endforeach; ?>
						</div>
					</div>
				</div>