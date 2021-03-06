<?php
/**
 *
 * Initial version created 21-05-2018 / 04:38 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Accordion' ) ) {
	/**
	 * Class accordion
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Accordion extends \WPOnion\Field {
		/**
		 * Creates / inits its sub fields.
		 */
		protected function init_subfields() {
			if ( $this->has( 'fields' ) ) {
				foreach ( $this->data( 'fields' ) as $field_id => $field ) {
					$this->field['fields'][ $field_id ] = $this->sub_field( $field, wponion_get_field_value( $field, $this->value() ), $this->name(), true );
				}
			}
		}

		/**
		 * Renders Fields HTML.
		 */
		protected function render_fields() {
			$is_open = ( true === $this->data( 'is_open' ) ) ? 'is_open' : '';
			echo '<div class="wponion-accordion-wrap ' . $is_open . '">';
			echo '<h4 class="wponion-accordion-title"> <span class="heading">' . $this->data( 'heading' ) . '</span><a title="' . __( 'Delete' ) . '" class="wponion-remove wponion-group-remove dashicons"></a></h4>';
			echo '<div class="wponion-accordion-content">';
			foreach ( $this->data( 'fields' ) as $field_id => $field ) {
				$this->render_single_field( $field );
			}
			echo $this->after_accordion();
			echo '</div>';
			echo '</div>';
		}

		/**
		 * After Accordion Callback
		 */
		protected function after_accordion() {
		}

		/**
		 * Renders Single Sub Field.
		 *
		 * @param $field
		 */
		protected function render_single_field( $field ) {
			echo $this->sub_field( $field, wponion_get_field_value( $field, $this->value() ), $this->name(), false );
		}

		/**
		 * Final HTML Output;
		 */
		protected function output() {
			echo $this->before();
			$this->render_fields();
			echo $this->after();
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'fields'   => array(),
				'heading'  => __( 'Accordion' ),
				'un_array' => false,
				'is_open'  => false,
			);
		}

		/**
		 * Loads the required plugins assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			wp_enqueue_script( 'jquery-ui-accordion' );
		}
	}
}
