<?php
/**
 * Render HTML for archive block
 *
 * @param  array $atts Attributes
 * @return string Block output
 */
function iis_render_block_archive( $atts ) {
	ob_start();

	$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
	$args  = [
		'post_type' => $atts['postType'],
		'paged'     => $paged,
	];

	$q = new WP_Query( $args );

	?>
	<main role="main" class="article">
		<div class="iis-o-search">
			<div class="iis-o-search-result">
				<ul class="iis-o-search-result__list">
					<?php if ( $q->have_posts() ) :
						while ( $q->have_posts() ) :
							$q->the_post();

							include __DIR__ . '/../components/search-post.php';
						endwhile; ?>
						<?php
						wp_reset_postdata();
					endif; ?>

				</ul>
			</div>
			<?php
			$next_page = next_posts( $q->max_num_pages, false );
			$prev_page = previous_posts( false );

			if ( $next_page || ( $prev_page && $paged > 1 ) ) : ?>
				<div class="iis-o-search__padded iis-o-search__border">
					<div class="iis-a-paging-wrapper">
						<?php if ( $prev_page && $paged > 1 ) : ?>
							<a href="<?php echo esc_url( $prev_page ); ?>" class="iis-a-paging">
								<span class="u-visuallyhidden"><?php esc_html_e( 'Previous page', 'iis' ); ?></span>
								<svg class="iis-icon iis-a-paging__icon">
									<use xlink:href="#icon-arrow-backwards"></use>
								</svg>
							</a>
						<?php endif; ?>
						<span class="iis-a-paging-wrapper__text">
						<?php

						printf(
						// translators: Page 1 of 10
							__( 'page %1$s of %2$s' ),
							max( 1, get_query_var( 'paged' ) ),
							$q->max_num_pages
						);

						?>
					</span>
						<?php if ( $next_page ) : ?>
							<a href="<?php echo esc_url( $next_page ); ?>" class="iis-a-paging">
								<span class="u-visuallyhidden"><?php esc_html_e( 'Next page', 'iis' ); ?></span>
								<svg class="iis-icon iis-a-paging__icon">
									<use xlink:href="#icon-arrow-forwards"></use>
								</svg>
							</a>
						<?php endif; ?>
					</div>
				</div>
			<?php endif; ?>
		</div>
	</main>

	<?php

	$content = ob_get_clean();

	return str_replace( [ "\t", "\n", "\r" ], '', $content );
}

register_block_type(
	'iis/postarchive',
	[
		'render_callback' => 'iis_render_block_archive',
	]
);
