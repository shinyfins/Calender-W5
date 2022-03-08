$(document).ready(function () {// essentially tells engine to load 1)html & 2)css first.
    //display current day & time.


$(".saveBtn").on("click", function () {

    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

    $("#NineAm .description").val(localStorage.getItem("NineAm"));

    $("#TenAm .description").val(localStorage.getItem("TenAm"));

    $("#ElevenAm .description").val(localStorage.getItem("ElevenAm"));

    $("#TwelveAm .description").val(localStorage.getItem("TwelveAm"));

    $("#OnePm .description").val(localStorage.getItem("OnePm"));

    $("#TwoPm .description").val(localStorage.getItem("TwoPm"));

    $("#ThreePm .description").val(localStorage.getItem("ThreePm"));

    $("#FourPm .description").val(localStorage.getItem("FourPm"));

    $("#FivePm .description").val(localStorage.getItem("FivePm"));

});