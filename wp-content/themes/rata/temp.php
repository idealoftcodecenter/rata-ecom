
				<?php foreach ($gallery_ids as $img_id): $img_url = wp_get_attachment_image_url( $img_id, 'full' ); ?>
					<div class="cursor-pointer" data-slide-index="<?= $i ?>">
						<img src="<?= $img_url ?>" class="w-full" />
					</div>
				<?php endforeach; ?>