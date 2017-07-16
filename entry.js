/*
 * Name: entry.js
 * Description: Contains JavaScript for the portfolio entry pages.
 */
/*
 * Name: arrowOpacity
 * Parameters: swatches - div containing swatches
 * Description: Lower the opacity of the left arrow if swatches are scrolled
 * to the very left and lower the opacity of the right arrow if swatches are
 * scrolled to the end.
 * Return: None
 */
function arrowOpacity(swatches) {
    var scrollLeft = swatches.scrollLeft();
    var offset = 15;
    // Check if left end is reached
    if (scrollLeft < offset) $('.arrows .left').addClass('disable');
    else $('.arrows .left').removeClass('disable');
    // Check if right end is reached
    var width = swatches.outerWidth();
    var scrollWidth = swatches[0].scrollWidth;
    if (scrollWidth - width <= scrollLeft + offset) $('.arrows .right').addClass('disable');
    else $('.arrows .right').removeClass('disable');
}
/*
 * Name: lScroll
 * Parameters: distance - the amount to scroll
 * Description: Scroll the swatches container to the left.
 * Return: None
 */
function lScroll(distance) {
    var swatches = $('.swatches .stretch');
    // Return if arrow is disabled
    if ($('.arrows .left').hasClass('disable')) {
        return;
    }
    // Calculate offset
    var scrollLeft = swatches.scrollLeft();
    var offset = scrollLeft - distance;
    if (offset < 0) offset = 0;
    swatches.animate({
        scrollLeft: offset
    }, 500);
    return false;
}
/*
 * Name: rScroll
 * Parameters: distance - the amount to scroll
 * Description: Scroll the swatches container to the right.
 * Return: None
 */
function rScroll(distance) {
    var swatches = $('.swatches .stretch');
    // Return if arrow is disabled
    if ($('.arrows .right').hasClass('disable')) {
        return;
    }
    // Calculate offset
    var scrollLeft = swatches.scrollLeft();
    var offset = scrollLeft + distance;
    var elemWidth = swatches.outerWidth();
    var scrollWidth = swatches[0].scrollWidth;
    var width = scrollWidth - elemWidth;
    if (offset >= width) offset = width;
    swatches.animate({
        scrollLeft: offset
    }, 500);
    return false;
}

function leftScroll(distance) {}
/*
 * Main function
 */
var main = function () {
    var swatches = $('.swatches .stretch');
    /* SWATCHES: TOGGLE DEFAULT/ARROW CURSOR */
    $(window).on('resize', function () {
        if ($(window).width() < $('.container').width()) {
            swatches.css('cursor', 'ew-resize');
            $('.arrows').removeClass('hidden');
        }
        else {
            swatches.css('cursor', 'auto');
            $('.arrows').addClass('hidden');
        }
    }).resize();
    /* UPDATE OPACITY OF ARROWS */
    swatches.on('scroll', function () {
        arrowOpacity(swatches);
    }).scroll();
    $(window).on('resize', function () {
        arrowOpacity(swatches);
    }).resize();
    /* LEFT AND RIGHT SCROLL BUTTONS */
    $('.arrows .left').click(function () {
        lScroll(240);
    });
    $('.arrows .right').click(function () {
        rScroll(240);
    });
}
$(document).ready(main);