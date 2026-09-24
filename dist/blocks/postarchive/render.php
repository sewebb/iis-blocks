<?php

ob_start();

$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
$args  = [
	'post_type' => $attributes['postType'],
	'paged'     => $paged,
];

$q = new WP_Query( $args );

?>
	<main role="main" class="article">
		<div class="<?php imns( 'o-search' ); ?>">
			<div class="<?php imns( 'o-search-result' ); ?>">
				<ul class="<?php imns( 'o-search-result__list' ); ?>">
					<?php
				if ( $q->have_posts() ) :
					while ( $q->have_posts() ) :
						$q->the_post();

						?>
<li class="iis-o-search-result__item">
	<article class="row">
		<?php $content_grid = ''; if ( has_post_thumbnail() ) : ?>
			<div class="grid-18 grid-md-6">
				<a href="<?php the_permalink(); ?>">
					<?php the_post_thumbnail( 'article-thumb', [ 'class' => 'iis-o-search-result__image iis-o-search-result__image--article' ] ); ?>
				</a>
			</div>
		<?php endif; ?>
		<div class="grid-18 grid-md-12">
			<div class="iis-o-search-result__item__content">
				<header><time class="iis-a-meta" datetime="<?php echo esc_attr( $post->post_date ); ?>"><?php echo get_the_date(); ?></time></header>
				<h1 class="beta"><a href="<?php the_permalink(); ?>" class="iis-o-search-result__item__link"><?php the_title(); ?></a></h1>
				<?php the_excerpt(); ?>
			</div>
		</div>
	</article>
</li>
<?php
					endwhile;
					?>
						<?php
					wp_reset_postdata();
				endif;
				?>

				</ul>
			</div>
			<?php
		$next_page = next_posts( $q->max_num_pages, false );
		$prev_page = previous_posts( false );

		if ( $next_page || ( $prev_page && $paged > 1 ) ) :
		?>
				<div class="<?php imns( 'o-search__padded o-search__border' ); ?>">
					<div class="<?php imns( 'a-paging-wrapper' ); ?>">
						<?php if ( $prev_page && $paged > 1 ) : ?>
							<a href="<?php echo esc_url( $prev_page ); ?>" class="<?php imns( 'a-paging' ); ?>">
								<span class="u-visuallyhidden"><?php esc_html_e( 'Previous page', 'iis-blocks' ); ?></span>
								<svg class="<?php imns( 'icon a-paging__icon' ); ?>">
									<use xlink:href="#icon-arrow-backwards"></use>
								</svg>
							</a>
						<?php endif; ?>
						<span class="<?php imns( 'a-paging-wrapper__text' ); ?>">
						<?php

					printf(
					// translators: Page 1 of 10
						__( 'page %1$s of %2$s', 'iis-blocks' ),
						max( 1, get_query_var( 'paged' ) ),
						$q->max_num_pages
					);

					?>
					</span>
						<?php if ( $next_page ) : ?>
							<a href="<?php echo esc_url( $next_page ); ?>" class="<?php imns( 'a-paging' ); ?>">
								<span class="u-visuallyhidden"><?php esc_html_e( 'Next page', 'iis-blocks' ); ?></span>
								<svg class="<?php imns( 'icon a-paging__icon' ); ?>">
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

echo str_replace( [ "\t", "\n", "\r" ], '', $content );
