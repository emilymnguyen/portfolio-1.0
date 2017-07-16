/*
 * Name: main.js
 * Description: Contains JavaScript for the overall website.
 */
/*
 * Main function
 */
var main = function () {
    $('#filters .item').click(function () {
        // Return if filter clicked is already active
        if ($(this).hasClass('active')) return;
        // Switch active class
        $('#filters .active').removeClass("active");
        $(this).addClass("active");
        // Hide/show appropriate elements
        if ($(this).hasClass('all')) {
            $('#gallery .ux').show();
            $('#gallery .gd').show();
        }
        else if ($(this).hasClass('ux')) {
            $('#gallery .ux').show();
            $('#gallery .gd').hide();
        }
        else if ($(this).hasClass('gd')) {
            $('#gallery .gd').show();
            $('#gallery .ux').hide();
        }
    });
    /*
        $('#projects a').hover(function () {
            $(this).closest('.item').animate({
                opacity: 0.9
            }, 200);
        }, function () {
            $(this).closest('.item').animate({
                opacity: 1
            }, 200);
        }); */
}
$(document).ready(main);