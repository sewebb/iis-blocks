<?php

ob_start();
?>
	<div class="wp-block-iis-buttons row <?php imns( 'm-buttons' ); ?>">
		<?php echo str_replace( '<div><a', '<div class="grid-auto"><a', $content ); ?>
	</div>
	<?php

echo ob_get_clean();
