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
