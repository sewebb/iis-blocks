<?php

function iis_render_block_newsletter( $attributes ) {
	ob_start();

	?>
	<div class="<?php imns( 'm-card m-card--padded' ); ?>">
		<div class="<?php imns( 'm-card__content' ); ?>">
			<?php

			if ( isset( $attributes['title'] ) && strlen( $attributes['title'] ) > 0 ) {
				echo '<h1 class="beta">' . apply_filters( 'the_title', $attributes['title'] ) . '</h1>';
			}

			if ( isset( $attributes['content'] ) && strlen( $attributes['content'] ) > 0 ) {
				echo '<p>' . $attributes['content'] . '</p>';
			}

			?>
			<form class="<?php imns( 'm-form' ); ?>" data-form="/wp-json/iis/v1/newsletter" action="" method="post">
				<div>
					<meta name="form-validation" content="email=required,min:3|terms=required">
					<input type="hidden" name="list" value="<?php echo esc_attr( $attributes['listId'] ); ?>">
				</div>
				<div role="alert"  data-form-error class="<?php imns( 'm-alert m-alert--error' ); ?> is-hidden"></div>
				<div role="alert"  data-form-success class="<?php imns( 'm-alert m-alert--success' ); ?> is-hidden">
					<p>{success}</p>
				</div>
				<div class="<?php imns( 'm-form-control m-form-control--small' ); ?>">
					<div class="<?php imns( 'm-form__row' ); ?> u-m-b-2">
						<div class="<?php imns( 'field-group' ); ?>">
							<input type="email" name="email" class="<?php imns( 'a-input' ); ?>" placeholder="<?php esc_attr_e( 'E-mail', 'iis-blocks' ); ?>">
						</div>
					</div>
					<div class="<?php imns( 'm-form__row' ); ?> u-m-b-2">
						<div class="<?php imns( 'field-group' ); ?>">
							<input type="text" name="name" class="<?php imns( 'a-input' ); ?>" placeholder="<?php esc_attr_e( 'Name', 'iis-blocks' ); ?>">
						</div>
					</div>
					<div class="<?php imns( 'm-form__row' ); ?> u-m-b-2">
						<div class="<?php imns( 'field-group' ); ?>">
							<div class="<?php imns( 'checkbox' ); ?>">
								<input id="newsletterTerms" type="checkbox" name="terms" value="1" class="<?php imns( 'a-checkbox' ); ?> u-visuallyhidden">
								<label for="newsletterTerms"><span><?php echo $attributes['termsText']; ?></span></label>
							</div>
						</div>
					</div>
					<div class="<?php imns( 'm-form__row' ); ?>">
						<button type="submit" class="<?php imns( 'a-button a-button--small' ); ?>">
							<span class="<?php imns( 'a-button__text' ); ?>"><?php echo esc_html( $attributes['buttonText'] ); ?></span>
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
	<?php

	$content = ob_get_clean();

	return str_replace( [ "\t", "\n", "\r" ], '', $content );
}

register_block_type(
	'iis/newsletter',
	[
		'render_callback' => 'iis_render_block_newsletter',
	]
);
