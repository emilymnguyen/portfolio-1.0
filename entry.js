/*
 * Name: entry.js
 * Description: Contains JavaScript for the portfolio entry pages.
 */
/*
 * Name: arrowOpacity
 * Parameters: 
        div - div containing swatches
        arrows - div containing arrows
 * Description: Lower the opacity of the left arrow if container is scrolled
 * to the very left and lower the opacity of the right arrow if container is
 * scrolled to the end.
 * Return: None
 */
function arrowOpacity(div, arrows) {
    var right = arrows.find('.right');
    var left = arrows.find('.left');
    var scrollLeft = div.scrollLeft();
    var offset = 15;
    // Check if left end is reached
    if (scrollLeft < offset) left.addClass('disable');
    else left.removeClass('disable');
    // Check if right end is reached
    var width = div.outerWidth();
    var scrollWidth = div[0].scrollWidth;
    if (scrollWidth - width <= scrollLeft + offset) right.addClass('disable');
    else right.removeClass('disable');
}
/*
 * Name: lScroll
 * Parameters:
        div - the div to scroll
        distance - the amount to scroll
        arrows - the arrows clicked 
 * Description: Scroll the container to the left.
 * Return: None
 */
function lScroll(div, distance, arrows) {
    var left = arrows.find('.left');
    // Return if arrow is disabled
    if (left.hasClass('disable')) {
        return;
    }
    // Calculate offset
    var scrollLeft = div.scrollLeft();
    var offset = scrollLeft - distance;
    if (offset < 0) offset = 0;
    div.animate({
        scrollLeft: offset
    }, 500);
    return false;
}
/*
 * Name: rScroll
 * Parameters: 
        div - the div to scroll
        distance - the amount to scroll
        arrows - the arrows clicked
 * Description: Scroll the container to the right.
 * Return: None
 */
function rScroll(div, distance, arrows) {
    var right = arrows.find('.right');
    // Return if arrow is disabled
    if (right.hasClass('disable')) {
        return;
    }
    // Calculate offset
    var scrollLeft = div.scrollLeft();
    var offset = scrollLeft + distance;
    var elemWidth = div.outerWidth();
    var scrollWidth = div[0].scrollWidth;
    var width = scrollWidth - elemWidth;
    if (offset >= width) offset = width;
    div.animate({
        scrollLeft: offset
    }, 500);
    return false;
}
/*
 * Name: scrollFunction
 * Parameters:
        div - div to add scrolling function to
   Description: Add scrolling functions to the given div.
   Return: None
 */
function scrollFunction(div) {
    var container = div.find('.container');
    var arrows = div.parent().find('.arrows');
    var right = arrows.find('.right');
    var left = arrows.find('.left');
    // Toggle visibility of arrows
    $(window).on('resize', function () {
        if ($(window).width() < container.width()) {
            div.css('cursor', 'ew-resize');
            arrows.removeClass('hidden');
        }
        else {
            div.css('cursor', 'auto');
            arrows.addClass('hidden');
        }
    }).resize();
    /* UPDATE OPACITY OF ARROWS */
    div.on('scroll', function () {
        arrowOpacity(div, arrows);
    }).scroll();
    $(window).on('resize', function () {
        arrowOpacity(div, arrows);
    }).resize();
    /* LEFT AND RIGHT SCROLL BUTTONS */
    left.click(function () {
        lScroll(div, 240, arrows);
    });
    right.click(function () {
        rScroll(div, 240, arrows);
    });
}
/*
 * Main function
 */
var main = function () {
    var swatches = $('.swatches .stretch');
    var type = $('.type .stretch');
    /* SWATCHES: TOGGLE DEFAULT/ARROW CURSOR AND SCROLL*/
    scrollFunction(swatches);
    scrollFunction(type);
}
$(document).ready(main);