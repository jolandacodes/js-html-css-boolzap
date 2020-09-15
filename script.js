$(document).ready(function () {
  // How to add user input to the MSG screen

  $(".submit-button").click(function () {
    // When the submit button is clicked a function is called

    var userInput = $(".message").val();

    var blankMessage = $("#template .msgsent")
      .clone()
      .addClass("msgsent-style");

    // Current Time
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    blankMessage.find(".testo").text(userInput + " " + time);

    $(".message-screen.my_active").append(blankMessage);

    $(".message").val("");

    // How to have the comp respond

    setTimeout(response, 1000);

    function response() {
      var msgReply = "ok";

      var compBlankMessage = $("#template .msgsent")
        .clone()
        .addClass("msgrecieved-style");

      compBlankMessage.find(".testo").text(msgReply + " " + time);

      $(".message-screen.my_active").append(compBlankMessage);
    }
  });

  // Searching contacts in the search bar

  $("#contacts-filter").keyup(function (event) {
    var userSearch = $(this).val().toLowerCase();

    $(".contact").each(function () {
      var contactNames = $(this).find(".name").text().toLowerCase();

      if (contactNames.includes(userSearch)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  // Function to delete a message

  $(document).on("click", ".msgsent", function (event) {
    var elem = $(this);
    elem.find(".drop-mex").toggle();

    elem.find(".drop-mex .drop-mex-x").click(function () {
      var myElemen = elem.find(".msgsent");
      $(this).parents(".msgsent").remove();
    });
  });

  $(".contact").click(function () {
    var clicked = $(this).attr("data-ref");
    $(".message-screen.my_active").removeClass("my_active").addClass('displayNone');
    $(".message-screen[data-ref=" + clicked + "]").removeClass("displayNone").addClass("my_active");

      elem = $(this);
      
    var nameTop = elem.find(".contact-name span:first-child").text();
    var imgTop = elem.find(".contact-info img").attr("src");
    console.log(nameTop);
    console.log(imgTop);
    $("#active-contact-name").text(nameTop);
    $("#active-image-profile").attr("src", imgTop);
  });
});
