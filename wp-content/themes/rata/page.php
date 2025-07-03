<?php get_header(); ?>

<?php /* Template: page.php */ ?>

<main class="pt-20">
	<div class="max-w-screen-xl mx-auto px-4 py-12">
		<?php if (have_posts()) : ?>
			<?php while (have_posts()) : the_post(); ?>
				<article <?php post_class("mt-8"); ?>>
					<h2 class="text-2xl font-heading"><?php the_title(); ?></h2>
					<div class="mt-2 text-base font-body">
						<?php the_content(); ?>
					</div>
				</article>
			<?php endwhile; ?>
		<?php else : ?>
			<p>No posts found.</p>
		<?php endif; ?>
	</div>
</main>

<?php get_footer(); ?>
