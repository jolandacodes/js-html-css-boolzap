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

    setTimeout(response, 1000);

    function response(){

        var msgReply = 'ok';

        var compBlankMessage = $('#template .msgsent').clone().addClass('msgrecieved-style');

        compBlankMessage.find('.testo').text(msgReply + " " + time)

        $('.message-screen').append(compBlankMessage);
    }

    })
});

// Searching contacts in the search bar

$('#contacts-filter').keyup(function(event){

    var userSearch = $(this).val().toLowerCase();

    $('.contact').each(function(){
        var contactNames = $(this).find('.name').text().toLowerCase();
  
        if (contactNames.includes(userSearch)){
          $(this).show();
        } else {
          $(this).hide();
        }
      })

});