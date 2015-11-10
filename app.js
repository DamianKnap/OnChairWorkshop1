$(function () {
    /////////////////////// Drop Down Menu////////////////////////////
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


    /////////////////// SLIDER///////////////////////////////

    var images = $(".frontGaleryPicture img");
    var visibleImage = 0;
    images.eq(visibleImage + 1).hide();
    images.eq(images.length - 1).hide();


    $(".arrowleft").click(function () {
        images.eq(visibleImage).hide();
        visibleImage--;
        if (visibleImage < 0) {
            visibleImage = images.length - 1;
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

////////////////////////COMPOSE SECTION/////////////////////////////////
//////drop down menu///////
    var greenArrow = $(".greenArrow");
    var listElementCompose = $(".composeDropdown li");
    var empty = 0;
    $("#chairPrice").text(empty);
    $("#colorPrice").text(empty);
    $("#fabricPrice").text(empty);


    greenArrow.on("click", function (event) {

        $(this).parent().parent().find("dd").slideToggle(200);

    });

//////wpisywanie danych do tabeli obok////////////////////

    listElementCompose.on("click", function (event) {

        var chairChoice = $(this).data("chair");
        var colorChoice = $(this).data("color");
        var fabricChoice = $(this).data("fabric");
        var chairPrice = $(this).data("chairPrice");
        var colorPrice = $(this).data("colorPrice");
        var fabricPrice = $(this).data("fabricPrice");

        $(this).parents().find("#chairName").text(chairChoice);
        $(this).parents().find("#chairPrice").text(chairPrice);
        $(this).parents().find("#chairColor").text(colorChoice);
        $(this).parents().find("#colorPrice").text(colorPrice);
        $(this).parents().find("#chairFabric").text(fabricChoice);
        $(this).parents().find("#fabricPrice").text(fabricPrice);

        $(this).parent().parent().parent().find("dt span").text($(this).text());

        $(this).parent().parent().slideUp(300);

        $(this).parents().find("#chairSum").text(( parseInt($(this).parents().find("#chairPrice").text()) )
            + ( parseInt($(this).parents().find("#transportPrice").text()) )
            + ( parseInt($(this).parents().find("#colorPrice").text()) )
            + ( parseInt($(this).parents().find("#fabricPrice").text()) )
            + " zł");


    });

    var transportCheckbox = $('#transport');

    transportCheckbox.click(function () {
        if (transportCheckbox.is(':checked')) {
            console.log("test");
            $(this).parents().find("#transportPrice").text("200");
        }
        else {
            console.log("test2");
            $(this).parents().find("#transportPrice").text("0");
        }
        $(this).parents().find("#chairSum").text(( parseInt($(this).parents().find("#chairPrice").text()) )
            + ( parseInt($(this).parents().find("#transportPrice").text()) )
            + ( parseInt($(this).parents().find("#colorPrice").text()) )
            + ( parseInt($(this).parents().find("#fabricPrice").text()) )
            + " zł");
    });

});