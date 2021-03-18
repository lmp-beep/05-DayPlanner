
// document.ready
$(function() {
    console.log("ready!");


// Displays current date in header
var todayDate = moment();
$("#currentDay").text(todayDate.format("dddd MMM Do, YYYY"));

// Displays current time in header - need to refresh page for time to change
var todayTime = moment();
$("#currentTime").text(todayTime.format("LT"));

// function to change color of each time block based on current time
$("textarea").each(function () {
    // variable to set each rows "name"
    var name = parseInt($(this).attr("name"));
    // variable for "now" time
    var now = parseInt(moment().format("HH"));
    if (name < now) {
        $(this).addClass("past");
    } else if (name > now) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present")
    }
})

});


// variables for each time block
var $text9AM = $("#text9AM");
var $text10AM = $("#text10AM");
var $text11AM = $("#text11AM");
var $text12PM = $("#text12PM");
var $text1PM = $("#text1PM");
var $text2PM = $("#text2PM");
var $text3PM = $("#text3PM");
var $text4PM = $("#text4PM");
var $text5PM = $("#text5PM");

// setting local storage
$("button").on("click", function() {
    console.log("I just got clicked!");
    localStorage.setItem("9AM", ($text9AM.val()));
    localStorage.setItem("10AM", ($text10AM.val()));
    localStorage.setItem("11AM", ($text11AM.val()));
    localStorage.setItem("12PM", ($text12PM.val()));
    localStorage.setItem("1PM", ($text1PM.val()));
    localStorage.setItem("2PM", ($text2PM.val()));
    localStorage.setItem("3PM", ($text3PM.val()));
    localStorage.setItem("4PM", ($text4PM.val()));
    localStorage.setItem("5PM", ($text5PM.val()));
    });

    //recovering localstorage
    $("#text9AM").append(localStorage.getItem("9AM"));
    $("#text10AM").append(localStorage.getItem("10AM"));
    $("#text11AM").append(localStorage.getItem("11AM"));
    $("#text12PM").append(localStorage.getItem("12PM"));
    $("#text1PM").append(localStorage.getItem("1PM"));
    $("#text2PM").append(localStorage.getItem("2PM"));
    $("#text3PM").append(localStorage.getItem("3PM"));
    $("#text4PM").append(localStorage.getItem("4PM"));
    $("#text5PM").append(localStorage.getItem("5PM"));
