<?php

$attributes = array_merge(
	[
		'photoUrl'  => null,
		'photoId'   => null,
		'quote'     => '',
		'name'      => '',
		'className' => '',
	],
	$attributes
);

$class = 'a-quote';
$img   = null;

if ( $attributes['photoId'] ) {
	$img = wp_get_attachment_image( $attributes['photoId'], 'avatar', false, [ 'class' => imns( 'a-quote__avatar', false ) ] );
}

ob_start();
?>
	<blockquote class="wp-block-iis-testimonial <?php imns( $class ); ?> <?php echo iis_sanitize_html_classes( $attributes['className'] ); ?>">
		"<?php echo $attributes['quote']; ?>"
		<footer class="<?php imns( 'a-quote__footer' ); ?>">
			<figure>
				<?php echo $img; ?>
			</figure>
			<cite><?php echo esc_html( $attributes['name'] ); ?></cite>
		</footer>
	</blockquote>
	<?php

$content = ob_get_clean();

echo str_replace( [ "\t", "\n", "\r" ], '', $content );
