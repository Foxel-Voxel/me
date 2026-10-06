/**
 * simple-portfolio7z – main.js
 * Animations and tab-style navigation
 */

(function () {
    'use strict';

    /* --------------------------------------------------
       ACTIVE MENU ITEM
       -------------------------------------------------- */
    const navLinks = document.querySelectorAll('.main-navigation a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.forEach(function (l) {
                l.parentElement.classList.remove('current-menu-item');
            });
            this.parentElement.classList.add('current-menu-item');
        });
    });

    /* --------------------------------------------------
       KEEP FINAL OPACITY AFTER ANIMATION
       -------------------------------------------------- */
    const animated = document.querySelectorAll('.site-header, .main-navigation, .glass-panel');
    animated.forEach(function (el) {
        el.addEventListener('animationend', function () {
            this.style.opacity = '1';
        });
    });

})();
