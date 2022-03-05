$(document).ready(function () {
    $(window).scroll(function (e) {
        //Getting the quantity of scrolled pixels:
        let s = $(this).scrollTop();
        let w = $(this).outerWidth();
        //h - content's height:
        let h = $('.content').outerHeight();
        //height of upper block:
        let h_b = $('.parallax').outerHeight();
        //Let's count % of scrolled content part:
        let p = s / h * 100;
        //Let's count % of scrolled content' upper-part:
        let p_b = s / h_b * 100;
        //opacity % :
        let o = 1 - 1 / 100 * p_b;

        let zoom_1 = 1 + (w / 10000 * p_b);
        $('.parallax__fog').css('transform', 'scale(' + zoom_1 + ')');
        //changing the opacity of fog:
        $('.parallax__fog').css('opacity', o);

        //bg-mountain is growing while scrolling:
        let zoom_2 = 1 + (w / 5000000 * p);
        $('.parallax__mountain_1').css('transform', 'scale(' + zoom_2 + ')');

        //right-mountain is moving while scrolling:
        let hr = w / 2000 * p_b;
        let zoom_3 = 1 + (w * 0.000005 * p_b);
        $('.parallax__mountain_2').css('transform', 'translateZ(' + hr + 'px) scale(' + zoom_3 + ')');

        //left-mountain is moving while scrolling:
        let hr_left = w / 1500 * p_b;
        let zoom_4 = 1 + (w * 0.00001 * p_b);
        $('.parallax__mountain_3').css('transform', 'translateZ(' + hr_left + 'px) scale(' + zoom_4 + ')');
    })
})