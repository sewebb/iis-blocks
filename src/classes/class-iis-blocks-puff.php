<?php
defined( 'ABSPATH' ) || die( 'not allowed' );

if ( ! class_exists( 'Iis_Blocks_Puff' ) ) :
	/**
	 * Class IIS puff
	 *
	 * Handle the newsletters
	 */
	class Iis_Blocks_Puff {
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
						'/puff-posts',
						[
							'methods'             => 'GET',
							'callback'            => [ $this, 'get_posts' ],
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
		 * Fetch posts.
		 *
		 * @param WP_REST_Request $request request data
		 * @return int[]|WP_Post[]
		 */
		public static function get_posts( WP_REST_Request $request ) {
			$posts = get_posts(
				[
					'post_type'   => apply_filters( 'iis_blocks_puff_post_type', 'post' ),
					'numberposts' => -1,
					's'           => $request['search'],
					'exclude'     => $request['include'],
				]
			);

			if ( isset( $request['include'] ) ) {
				$post = get_post( $request['include'] );

				if ( $post ) {
					array_unshift( $posts, $post );
				}
			}

			return $posts;
		}
	}

	Iis_Blocks_Puff::get_instance();

endif;
