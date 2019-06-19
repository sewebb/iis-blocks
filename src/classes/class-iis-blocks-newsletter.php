<?php
defined( 'ABSPATH' ) || die( 'not allowed' );

if ( ! class_exists( 'Iis_Blocks_Newsletter' ) ) :
	/**
	 * Class IIS newsletter
	 *
	 * Handle the newsletters
	 */
	class Iis_Blocks_Newsletter {
		/**
		 * Class instance
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 * Constructor.
		 */
		public function __construct() {
			add_action(
				'rest_api_init',
				function () {
					register_rest_route(
						'iis-blocks/v1',
						'/mailchimp-lists',
						[
							'methods'             => 'GET',
							'callback'            => [ $this, 'get_mailchimp_lists' ],
							'permission_callback' => function () {
								return current_user_can( 'edit_posts' );
							},
						]
					);
				}
			);
		}

		/**
		 * Simple instance handling
		 *
		 * @return object Current self
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Fetch MailChimp lists.
		 *
		 * @return stdClass JSON response
		 * @throws Exception Exception.
		 */
		public static function get_mailchimp_lists() {
			$dc      = substr( MAILCHIMP_API_KEY, strpos( MAILCHIMP_API_KEY, '-' ) + 1 );
			$url     = 'https://' . $dc . '.api.mailchimp.com/3.0/lists';
			$headers = [
				'Authorization' => 'Basic ' . base64_encode( MAILCHIMP_USERNAME . ':' . MAILCHIMP_API_KEY ),
			];

			$response = wp_remote_get(
				$url,
				[
					'method'      => 'GET',
					'timeout'     => 45,
					'redirection' => 5,
					'blocking'    => true,
					'headers'     => $headers,
				]
			);

			if ( is_wp_error( $response ) ) {
				throw new Exception( $response->get_error_message() );
			}

			$body = json_decode( $response['body'] );

			if ( ! isset( $body->lists ) ) {
				throw new Exception( $body->title );
			}

			return $body->lists;
		}
	}

	Iis_Blocks_Newsletter::get_instance();

endif;
