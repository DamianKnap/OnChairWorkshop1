$(function () {
    // Drop Down Menu
    var firstMenuElements = $(".firstLevel li");
    var secondMenuElements = $(".secondLevel li");
    secondMenuElements.hide();

    firstMenuElements.click(function () {
        var mySecondLevel = $(this).find(".secondLevel li")
        if (mySecondLevel.is(':visible')) {
            secondMenuElements.hide();
        }
        else {
            secondMenuElements.hide();
            mySecondLevel.show();
        }
    });


    // slider krzese³

    var images = $(".frontGaleryPicture img");
    var visibleImage = 0;
    images.eq(visibleImage + 1 ).hide();
    images.eq(images.length - 1).hide();



    $(".arrowleft").click(function () {
        images.eq(visibleImage).hide();
        visibleImage--;
        if (visibleImage < 0) {
            visibleImage = images.length -1;
        }
        images.eq(visibleImage).show(0);
    });

    $(".arrowright").click(function () {
        images.eq(visibleImage).hide(0);
        visibleImage++;
        if (visibleImage >= images.length) {
            visibleImage = 0;
        }
        images.eq(visibleImage).show(0);
    });

//////////////////////////////////////////////////////////



});