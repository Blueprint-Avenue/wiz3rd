$(function() {
    $(".carousel").carousel( { interval: 6500 } );
    $("#nbaCarouselIndicators").click(function(){
        if ($("#nbaCarouselIndicators").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#nbaCarouselIndicators").children("i").removeClass("fa-pause");
            $("#nbaCarouselIndicators").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#nbaCarouselIndicators").children("i").removeClass("fa-play");
            $("#nbaCarouselIndicators").children("i").addClass("fa-pause");
        }
    });})
