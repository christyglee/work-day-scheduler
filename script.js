
// function getCurrentTime () { //annonyous function bc we're not passing any values into it
// var currentTime = 
// console.log(currentTime);
// }

//jQuery document ready function to have page ready to go
$(document).ready(function(){
    // Display current date and time in the header
    $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

    var timeBlock = $(".hour").html();
    var hour = $(".hour");
    
    for (var i = 0; i < hour.length; i++) {
    timeBlock = hour[i].innerHTML;
    // console.log(timeBlock);

    var currentTime = moment().format('HH'); 
    //  moment().hours(currentHour).minutes(0).seconds(0)

    // console.log(currentTime);

    var currentHour = parseInt(timeBlock.slice(0, timeBlock.length - 2));
    if(currentHour >= 1 && currentHour <= 5){
    currentHour += 12;
    }
    }
    // if(currentHour < currentTime) {
    // } //Past current time - need to edit colors in css
    // else if(currentHour > currentTime) {
    // } //Future current time - need to edit colors in css
    // else {
    // } //Present time - need to edit colors in css
    // console.log(currentHour);

// Need to somehow link the time to middle textarea column to correspond with current time
    var textHour = $(".textHour");
    // console.log(textHour.val(currentHour));
    // console.log(textHour);
    var realTime = moment().hours(currentHour).minutes(0).seconds(0);
    
    var timeDiff = (realTime.diff(moment(),"minutes"));
    console.log(timeDiff);
    if(textHour  >= 1 && textHour <= 5){
        textHour += 12;
        }

    $.each(textHour,function(){
        if(timeDiff < -60) {
            textHour.css("background-color", "#d3d3d3");

        } //Past current time - need to edit colors in css
        else if(timeDiff > 0) {
            textHour.css("background-color", "#77dd77");
        } //Future current time - need to edit colors in css
        else {
            textHour.css("background-color", "#ff6961");
        } //Present time - need to edit colors in css
        // console.log(textHour);
    });
    

    

    // }
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

    })



    });

    //
    


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