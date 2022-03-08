$(document).ready(function () {// essentially tells engine to load 1)html & 2)css first.
    //display current day & time.


$(".saveBtn").on("click", function () {

    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

    $("#NineAm .description").val(localStorage.getItem("NineAm"));


});