$(document).ready(function() {

    var currentIndex = 0,
        items = $('#slider .slide'),
        itemAmt = items.length;

    function cycleItems() {
        var item = $('#slider .slide').eq(currentIndex);
        items.hide();
        item.css('display','inline-block');

        // $('#slider').css('height', 'auto');
    }

    var autoSlide = setInterval(function() {
        currentIndex += 1;
        if (currentIndex > itemAmt - 1) {
            currentIndex = 0;
        }
        // cycleItems();
    }, 3000);

    $('.next').click(function() {
        clearInterval(autoSlide);
        currentIndex += 1;
        if (currentIndex > itemAmt - 1) {
            currentIndex = 0;
        }
        cycleItems();
    });

    $('.prev').click(function() {
        clearInterval(autoSlide);
        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = itemAmt - 1;
        }
        cycleItems();
    });
});