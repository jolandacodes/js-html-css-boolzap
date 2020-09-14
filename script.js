$(document).ready(function(){

// How to add user input to the MSG screen

$(".submit-button").click(function() {
    // When the submit button is clicked a function is called 

    var userInput = $('.message').val();

    var blankMessage = $('#template .msgsent').clone().addClass('msgsent-style');

    // Current Time
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    blankMessage.find(".testo").text(userInput + " " + time);

    $('.message-screen').append(blankMessage);

    $(".message").val("");


// How to have the comp respond



    })
});