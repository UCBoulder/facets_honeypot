/**
 * @file
 * JavaScript add honeypot checkbox.
 */

(function ($) {
  $(document).ready(function () {

    $('.form-checkboxes').prepend('<div aria-hidden="true" class="js-form-item form-item honey"><input type="checkbox" value="1" class="form-checkbox form-item__textfield" id="edit-field-not-an-option" data-drupal-selector="edit-field-not-an-option" name="field_not-an-option-65461"><label for="edit-field-bing" class="option form-item__label">Not an option (36)</label></div>');

  });
}(jQuery));
