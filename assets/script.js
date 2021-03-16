

// document.ready
$(function() {
    console.log("ready!");



// Displays current date in header
var todayDate = moment();
$("#currentDay").text(todayDate.format("dddd MMM Do, YYYY"));

// Displays current time in header - need to refresh page for time to change
var todayTime = moment();
$("#currentTime").text(todayTime.format("LT"));




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



var saveBtn = document.getElementById("save");
var test1 = localStorage.getItem("textInfo")


saveBtn.addEventListener("click", function() {
    console.log("I just got clicked");
    localStorage.setItem("test", test1)
})






















// same code as above in JQuery to practice


// variables for the textArea of each time row
// var hour9AM = document.getElementById("hour9AM")
// var hour10AM = document.getElementById("hour10AM")
// var hour11AM = document.getElementById("hour11AM")
// var hour12PM = document.getElementById("hour12PM")
// var hour1PM = document.getElementById("hour1PM")
// var hour2PM = document.getElementById("hour2PM")
// var hour3PM = document.getElementById("hour3PM")
// var hour4PM = document.getElementById("hour4PM")
// var hour5PM = document.getElementById("hour5PM")


// var hour9AM = $("#hour9AM");
// var hour9AM = $("#hour10AM");
// var hour9AM = $("#hour11AM");
// var hour9AM = $("#hour12PM");
// var hour9AM = $("#hour1PM");
// var hour9AM = $("#hour2PM");
// var hour9AM = $("#hour3PM");
// var hour9AM = $("#hour4PM");
// var hour9AM = $("#hour4PM");
