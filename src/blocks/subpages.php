<?php

function iis_render_block_subpages( $attributes, $content ) {
	$attributes = array_merge(
		[
			'align' => 'right',
		],
		$attributes
	);

	$class_name = 'm-submenu';
	$alignment  = 'align' . $attributes['align'];

	global $post;

	$top_level = $post;

	while ( $top_level && $top_level->post_parent !== 0) {
		$top_level = get_post( $top_level->post_parent );
	}

	$all_children = get_pages( [
		'child_of' => $top_level->ID,
		'post_type' => $top_level->post_type,
		'sort_column' => 'menu_order',
	] );

	$second_level_items = [];
	$third_level_items = [];

	foreach ( $all_children as $child ) {
		if ( $child->post_parent === $top_level->ID ) {
			$second_level_items[ $child->ID ] = $child;
		} else {
			if ( ! isset( $third_level_items[ $child->post_parent ] ) ) {
				$third_level_items[ $child->post_parent ] = [];
			}

			$third_level_items[ $child->post_parent ][ $child->ID ] = $child;
		}
	}

	ob_start();
	?>
	<div class="<?php echo $alignment; ?>">
		<dl class="<?php imns( $class_name ); ?>">
			<dt class="<?php imns( 'm-submenu__title' ); ?>">
				<?php if ( $post->ID !== $top_level->ID ) : ?>
				<a href="<?php echo get_permalink( $top_level ); ?>" class="<?php imns( 'm-submenu__title__link' ); ?>">
					<span><?php echo apply_filters( 'the_title', $top_level->post_title ); ?></span>
					<svg class="icon">
						<use xlink:href="#icon-arrow-variant"></use>
					</svg>
				</a>
				<?php else : ?>
				<span class="<?php imns( 'm-submenu__title__link !u-pointer-events-none' ); ?>">
					<span><?php echo apply_filters( 'the_title', $top_level->post_title ); ?></span>
				</span>
				<?php endif; ?>
			</dt>
			<?php

			foreach ( $second_level_items as $child ) :
				$link_classes = 'm-submenu__item__link';

				if ( isset( $third_level_items[ $child->ID ] ) ) {
					$link_classes .= ' m-submenu__item__link--has-sublevel';
				}

				if ( $child->ID === $post->ID ) {
					$link_classes .= ' !is-current';
				}

				?>
				<dd class="<?php imns( 'm-submenu__item' ); ?>">
					<?php if ( isset( $third_level_items[ $child->ID ] ) ) : ?>
						<div class="<?php imns( 'm-submenu__item__sublevel' ); ?>">
							<a href="<?php echo get_permalink( $child->ID ); ?>" class="<?php imns( $link_classes ); ?>">
								<span><?php echo apply_filters( 'the_title', $child->post_title ); ?></span>
								<svg class="icon">
									<use xlink:href="#icon-arrow-variant"></use>
								</svg>
							</a>
							<button type="button" class="<?php imns( 'm-submenu__item__toggle-button' ); ?>" data-a11y-toggle="sublvl<?php echo $child->ID; ?>" aria-controls="sublvl<?php echo $child->ID; ?>">
								<span class="u-visuallyhidden">Öppna/stäng</span>
							</button>
						</div>
						<ul class="<?php imns( 'm-submenu__sublevel' ); ?>" aria-hidden="true" id="sublvl<?php echo $child->ID; ?>" data-focus-trap="false">
							<?php foreach ( $third_level_items[ $child->ID ] as $subchild ) : ?>
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
						<a href="<?php echo get_permalink( $child->ID ); ?>" class="<?php imns( $link_classes ); ?>">
							<span><?php echo apply_filters( 'the_title', $child->post_title ); ?></span>
							<svg class="icon">
								<use xlink:href="#icon-arrow-variant"></use>
							</svg>
						</a>
					<?php endif; ?>
				</dd>
			<?php endforeach; ?>
		</dl>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/subpages',
	[
		'render_callback' => 'iis_render_block_subpages',
	]
);
