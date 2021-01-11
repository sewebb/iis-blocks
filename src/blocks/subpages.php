<?php

function iis_render_block_subpages( $attributes, $content ) {
	$attributes = array_merge(
		[
			'align' => 'right',
		],
		$attributes
	);

	$class_name = 'm-submenu';

	if ( $attributes['align'] ) {
		$class_name .= ' !align' . $attributes['align'];
	}

	global $post;

	$top_level = $post;

	while ( $top_level->post_parent !== 0) {
		$top_level = get_post( $top_level->post_parent );
	}

	$all_children = get_pages( [
		'child_of' => $top_level->ID,
		'post_type' => $top_level->post_type,
	] );

	$children = [];

	foreach ( $all_children as $child ) {
		if (
			( $child->post_parent === $top_level->ID && ! isset( $children[ $child->ID ] ) )
			|| ( $child->post_parent !== $top_level->ID && ! isset( $children[ $child->post_parent ] ) )
		) {
			$children[ ( $child->post_parent === $top_level->ID ? $child->ID : $child->post_parent ) ] = [
				'post' => null,
				'children' => [],
			];
		}

		if ( $child->post_parent === $top_level->ID ) {
			$children[ $child->ID ]['post'] = $child;
		} else {
			$children[ $child->post_parent ]['children'][] = $child;
		}
	}

	ob_start();
	?>
	<dl class="<?php imns( $class_name ); ?>">
		<dt class="<?php imns( 'm-submenu__title' ); ?>">
			<a href="<?php echo get_permalink( $top_level ); ?>" class="<?php imns( 'm-submenu__title__link' ); ?>">
				<span><?php echo apply_filters( 'the_title', $top_level->post_title ); ?></span>
				<svg class="icon">
					<use xlink:href="#icon-arrow-variant"></use>
				</svg>
			</a>
		</dt>
		<?php

		foreach ( $children as $child ) :
			$link_classes = 'm-submenu__item__link';

			if ( count( $child['children'] ) ) {
				$link_classes .= ' m-submenu__item__link--has-sublevel';
			}

			if ( $child['post']->ID === $post->ID ) {
				$link_classes .= ' !is-current';
			}

			?>
			<dd class="<?php imns( 'm-submenu__item' ); ?>">
				<?php if ( count( $child['children'] ) ) : ?>
					<div class="<?php imns( 'm-submenu__item__sublevel' ); ?>">
						<a href="<?php echo get_permalink( $child['post'] ); ?>" class="<?php imns( $link_classes ); ?>">
							<span><?php echo apply_filters( 'the_title', $child['post']->post_title ); ?></span>
							<svg class="icon">
								<use xlink:href="#icon-arrow-variant"></use>
							</svg>
						</a>
						<button type="button" class="<?php imns( 'm-submenu__item__toggle-button' ); ?>" data-a11y-toggle="sublvl<?php echo $child['post']->ID; ?>" aria-controls="sublvl<?php echo $child['post']->ID; ?>">
							<svg class="icon">
								<use xlink:href="#icon-arrow-down"></use>
							</svg>
						</button>
					</div>
					<ul class="<?php imns( 'm-submenu__sublevel' ); ?>" aria-hidden="true" id="sublvl<?php echo $child['post']->ID; ?>" data-focus-trap="false">
						<?php foreach ( $child['children'] as $subchild ) : ?>
						<li class="<?php imns( 'm-submenu__sublevel__item' ); ?>">
							<a href="<?php echo get_permalink( $subchild ); ?>" class="<?php imns( 'm-submenu__item__link m-submenu__sublevel__item__link' ); ?>">
								<span><?php echo apply_filters( 'the_title', $subchild->post_title ); ?></span>
								<svg class="icon">
									<use xlink:href="#icon-arrow-variant"></use>
								</svg>
							</a>
						</li>
						<?php endforeach; ?>
					</ul>
				<?php else : ?>
					<a href="<?php echo get_permalink( $child['post'] ); ?>" class="<?php imns( $link_classes ); ?>">
						<span><?php echo apply_filters( 'the_title', $child['post']->post_title ); ?></span>
						<svg class="icon">
							<use xlink:href="#icon-arrow-variant"></use>
						</svg>
					</a>
				<?php endif; ?>
			</dd>
		<?php endforeach; ?>
	</dl>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/subpages',
	[
		'render_callback' => 'iis_render_block_subpages',
	]
);
