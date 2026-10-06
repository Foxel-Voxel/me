/**
 * simple-portfolio7z – customizer.js
 * Live preview for WordPress Customizer changes
 */
(function ($) {
    'use strict';

    // Footer text.
    wp.customize('simple_portfolio7z_footer_text', function (value) {
        value.bind(function (newval) {
            const el = document.querySelector('.site-info');
            if (el) {
                el.innerHTML = newval;
            }
        });
    });

})(jQuery);
