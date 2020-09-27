//jQuery document ready function to have page ready to go
$(document).ready(function(){
    // Display current date and time in the header
    $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

    var timeBlock = $(".hour").html();
    var hour = $(".hour");
    var textHour = $(".textHour");
    // console.log(hour);
    // console.log(textHour);
    
    //
    for (var i = 0; i < hour.length; i++) {
        timeBlock = hour[i].innerHTML;

        var textHourBlock = textHour[i];
        // var currentTime = moment().format('HH'); 

    // console.log(currentTime);

        // variable to get AM or PM for if/else statements to correspond with military time
        var AMPM = (timeBlock.slice(-2));
        var currentHour = parseInt(timeBlock.slice(0, timeBlock.length - 2));

        if(AMPM === "AM"){
            // console.log(currentHour);
            // console.log(AMPM);
        }
        else {
            if(currentHour >= 1 && currentHour <= 11){
            currentHour += 12;
            console.log(currentHour);
            // console.log(AMPM);
            }
        }

        var realTime = moment().hours(currentHour).minutes(0).seconds(0);
        var timeDiff = (realTime.diff(moment(),"minutes"));
        // console.log(timeDiff);
        // console.log(realTime);

        if(timeDiff < -60) { // future time color/class
            $(textHourBlock).addClass("past");

        } 
        else if(timeDiff > 0) { // future time color/class
            $(textHourBlock).addClass("future");
        } 
        else { // present time color/class
            $(textHourBlock).addClass("present");
        } //Present time - need to edit colors in css
        // console.log(textHour);
    }
       
    // Local storage
    var textarea = $(".textHour");
    
    var saveBtn = $(".saveBtn");

    saveBtn.on("click", function(){
        var textInput = $(this).prev().val();
        var storageKey = $(this).parent().find(".hour").text();

        localStorage.setItem(storageKey,textInput);
    });

    $("textarea").each(function(){
        var storageKey = $(this).prev().text();

        var retrieveItem = localStorage.getItem(storageKey);

        $(this).val(retrieveItem);

    });

    });



    // var textHour = $(".textHour");
    // textHour = hour
    // console.log(textHour);

// Local storage - need to work on click and edit function
    // $(".textHour").text(localStorage.getItem("notes"));
    // $(".saveBtn").click(function() {
    //     localStorage.setItem("notes", $("input").val());
    //     $(".textHour").text($("input").val());

    // })

// Setting array for planner times

// var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// for (var i = 0; i < hours.length; i++) {
//     $(".container").append("<div class='time-block'>");
// }



//  For loop for
// for (var i = 0; i < hours.length; i++) {
//     if(hours[i] < currentTime) {
//     }
//     else if(hours[i] > currentTime) {
//     }
//     else {
//     }
// }




// var hour = 9;
// var minutes = ":00am";

// var timeBlock = [];
// var storedTime = "Stored Time";

// function backgroundColor ($div, currentTime, textTime) {
//     var timeCurrent = currentTime.split("");
//     var timeText = textTime.split("");
// if(timeCurrent[timeCurrent.length - 2] > timeText[timeText.length -2])
// }