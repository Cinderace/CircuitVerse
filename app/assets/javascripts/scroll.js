window.onscroll = () => {
    if ($(document).scrollTop() > 70) {
        $('nav').addClass('affix');
    } else {
        $('nav').removeClass('affix');
    }
};
