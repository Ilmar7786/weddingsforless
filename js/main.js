$(document).ready(function () {

    $('#carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
    });

    $( function() {
        $("#tabs").tabs();
    });

    $("#accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });

});