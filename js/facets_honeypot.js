/**
 * @file
 * JavaScript add honeypot checkbox.
 */

(function ($) {
  $(document).ready(function () {

    if ($('.form-checkboxes').length > 0) {
      $('.form-checkboxes').prepend('<div aria-hidden="true" class="js-form-item form-item honey"><input type="checkbox" value="1" class="form-checkbox form-item__textfield" id="edit-field-not-an-option" data-drupal-selector="edit-field-not-an-option" name="field_not-an-option-65461"><label for="edit-field-not-an-option" class="option form-item__label">Not an option (36)</label></div>');
    }

  });
}(jQuery));

Drupal.behaviors.addHoneypot = {
  attach: function (context, settings) {

    once('js-facets-checkbox-links', '.js-facets-checkbox-links', context).forEach(button => {
      // if 'js-facets-checkbox-links' exists, add honeypot checkbox to it.
      if ($('.js-facets-checkbox-links').length > 0) {
        var honeypot_id = 65461;
        $('.js-facets-checkbox-links').each(function () {

          if ($(this).find('.honeypot-checkbox').length === 0) {
            honeypot_id++;
            $(this).prepend('<li aria-hidden="true" class="facet-item list-none honey"><input type="checkbox" class="facets-checkbox honeypot-checkbox" id="edit-field-not-an-option-' + honeypot_id + '"><label for="edit-field-not-an-option-' + honeypot_id + '"><span class="facet-item__value ps-2">Not an option </span><span class="facet-item__count">(21)</span></label></li><a href="?field_not-an-option-65461=1" rel="nofollow" data-drupal-facet-item-id="not-an-option" data-drupal-facet-item-value="not_an_option" data-drupal-facet-item-count="21" style="display: none;"><span class="facet-item__value ps-2">Not an option</span><span class="facet-item__count">(21)</span></a>');
          }

        });

        $(document).on('change', '.honeypot-checkbox', function () {
          if ($(this).is(':checked')) {
            $(this).parent().next('a')[0].click();
          }
        });
      }
    });

  }
}
