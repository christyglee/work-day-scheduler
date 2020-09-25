
// function getCurrentTime () { //annonyous function bc we're not passing any values into it
// var currentTime = 
// console.log(currentTime);


// }

//jQuery document ready function
$(document).ready(function(){
    // Display current date and time in the header
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

});

