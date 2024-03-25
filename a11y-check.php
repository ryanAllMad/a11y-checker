<?php
/**
 * Plugin Name:     A11y Check
 * Plugin URI:      TBD
 * Description:     Make your content accessible to more audiences. Use a11y check to check your posts for common accessibility pitfalls.
 * Author:          Ryan Duer
 * Author URI:      allmaddesigns.com
 * Text Domain:     a11y-check
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         A11y_Check
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

function a11y_editor_scripts() {
	wp_enqueue_style(
		'main-style',
		plugins_url( '/dist/main.css', __FILE__ ),
	);
	wp_enqueue_script(
		'main-script',
		plugins_url( '/dist/main.js', __FILE__ ),
		array(
			'wp-plugins',
			'react',
			'wp-primitives',
			'wp-edit-post'
		),
		'0.1.0',
		true
	);
}

add_action( 'enqueue_block_assets', 'a11y_editor_scripts' );
