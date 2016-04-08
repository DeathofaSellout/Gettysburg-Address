$(document).ready(function() {

    //1
    $("body").fadeIn();

    //2
    var $p = $("p");

    $p.on("mouseenter", function() {
        $(this).css("background-color", "yellow");
    });

    $p.on("mouseleave", function() {
        $(this).removeAttr("style");
    });

    //3
    $("h2").on("click", function() {
        $(this).animate({
            "opacity": "0.25",
            "margin-left": "20px"
        }, 400, "swing", function() {
            $(".speech").animate({
                "opacity": "0.5"
            });
        });
    });

    //4
    $("#switcher-default").on("click", function() {
        $("body").css("font-size", "62.5%");
    });

    $("#switcher-large").on("click", function() {
        $("body").css("font-size", "80%");
    });

    $("#switcher-small").on("click", function() {
        $("body").css("font-size", "50%");
    });

    //5
    $(document).on("keydown", function(event) {
        if (event.which === 37) {
            $("#switcher").animate({
                "margin-left": "-=20px"
            });
        } else if (event.which === 38) {
            $("#switcher").animate({
                "margin-top": "-=20px"
            });
        } else if (event.which === 39) {
            $("#switcher").animate({
                "margin-left": "+=20px"
            });
        } else if (event.which === 40) {
            $("#switcher").animate({
                "margin-top": "+=20px"
            });
        }
    });

});
