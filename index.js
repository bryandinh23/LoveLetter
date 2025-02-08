$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
        mySound.play();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    // function close() {
    //     envelope.addClass("close")
    //         .removeClass("open");
    // }
    window.addEventListener("click", function () {
        var audio = document.getElementById("DWAS");
        audio.play();
        audio.volume = 0.2;
    });
})

