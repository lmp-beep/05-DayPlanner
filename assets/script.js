
// document.ready
$(document).ready(function() {
    console.log("ready!");



// Displays current date in header
var todayDate = moment();
$("#currentDay").text(todayDate.format("dddd MMM Do, YYYY"));

// Displays current time in header - need to refresh page for time to change
var todayTime = moment();
$("#currentTime").text(todayTime.format("LT"));

// function to change color of each time block based on current time
$("textarea").each(function () {
    // variable to set each textearea's name from the HTML
    var hour = parseInt($(this).attr("name"));
    // variable for current time - HH didplays time as a two digit whole number 00 01 02 . . . 22 23 24
    var nowTime = parseInt(moment().format("HH"));
    if (hour < nowTime) {
        $(this).addClass("past");
    } else if (hour > nowTime) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present")
    }
})



// variables for each time block
var text9 = $(".9text");
var text10 = $(".10text");
var text11 = $(".11text");
var text12 = $(".12text");
var text13 = $(".13text");
var text14 = $(".14text");
var text15 = $(".15text");
var text16 = $(".16text");
var text17 = $(".17text");

// setting local storage
$("button").on("click", function() {
    console.log("I just got clicked")
    localStorage.setItem("9AM", (text9.val()));
    localStorage.setItem("10AM", (text10.val()));
    localStorage.setItem("11AM", (text11.val()));
    localStorage.setItem("12PM", (text12.val()));
    localStorage.setItem("1PM", (text13.val()));
    localStorage.setItem("2PM", (text14.val()));
    localStorage.setItem("3PM", (text15.val()));
    localStorage.setItem("4PM", (text16.val()));
    localStorage.setItem("5PM", (text17.val()));
})

    //recovering localstorage
    $("#9AM .9text").val(localStorage.getItem("9AM"));
    $("#10AM .10text").append(localStorage.getItem("10AM"));
    $("#11AM .11text").append(localStorage.getItem("11AM"));
    $("#12PM .12text").append(localStorage.getItem("12PM"));
    $("#1PM .13text").append(localStorage.getItem("1PM"));
    $("#2PM .14text").append(localStorage.getItem("2PM"));
    $("#3PM .15text").append(localStorage.getItem("3PM"));
    $("#4PM .16text").append(localStorage.getItem("4PM"));
    $("#5PM .17text").append(localStorage.getItem("5PM"));


});


// trying another way of saving to local storage
// couldn't get it to work

// $("saveBtn").on("click", function() {
    //     console.log("I just got clicked!");
    //     var storage = $(this).siblings(".text").val();
    //     var data = $(this).parent().attr("id");
    //     localStorage.setItem(data, storage);

    // $("#9AM .9text").val(localStorage.getItem("9AM")); 
    // $("#10AM .10text").val(localStorage.getItem("10AM")); 
    // $("#11AM .11text").val(localStorage.getItem("11AM")); 
    // $("#12AM .12text").val(localStorage.getItem("12PM")); 
    // $("#1PM .13text").val(localStorage.getItem("1PM")); 
    // $("#2PM .14text").val(localStorage.getItem("2PM")); 
    // $("#3PM .15text").val(localStorage.getItem("3PM")); 
    // $("#4PM .16text").val(localStorage.getItem("4PM")); 
    // $("#5PM .17text").val(localStorage.getItem("5PM")); 



    