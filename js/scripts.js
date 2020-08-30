$(document).ready(function () {
    $("#clickable").click(function () {
        $("#DESIGN").toggle();
    })
    $("#clickable-dev").click(function () {
        $("#dev").toggle();
    })
    $("#clickable-pro").click(function () {
        $("#pro").toggle();
    })

    $(".text").hide();
    $(".main-photo").animate({
        opacity: 1
    });
    $(".main-photo").hover(function () {
        $(this).stop().animate({ opacity: 4 }, 200);
        $(".text").fadeIn();
    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500)
        $(".text").fadeOut();
    })
})
