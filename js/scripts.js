$(document).ready(function () {
    $(".clickable").click(function () {
        $("#DESIGN").toggle();
    })
    $(".clickable-dev").click(function () {
        $("#dev").toggle();
    })
    $(".clickable-pro").click(function () {
        $("#pro").toggle();
    })

    $("#DESIGN").click(function () {
        $(".clickable").toggle();
    })
    $("#dev").click(function () {
        $(".clickable-dev").toggle();
    })
    $("#pro").click(function () {
        $(".clickable-pro").toggle();
    })

    $("#image1").hover(function () {
        $(".text1").toggle();
    })
    $("#image2").hover(function () {
        $(".text2").toggle();
    })
    $("#image3").hover(function () {
        $(".text3").toggle();
    })
    $("#image4").hover(function () {
        $(".text4").toggle();
    })
    $("#image5").hover(function () {
        $(".text5").toggle();
    })
    $("#image6").hover(function () {
        $(".text6").toggle();
    })
    $("#image7").hover(function () {
        $(".text7").toggle();
    })
    $("#image8").hover(function () {
        $(".text8").toggle();
    })

});

function feedback() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementsByName('message').value;

    if (name == "" || email == "" || comment == "") {
        alert("No message received")

    } else {
        alert(name + " We have received your message. Thankyou for reaching to us");

    }
}

