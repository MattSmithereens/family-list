$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = "";
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    blanks.forEach(function(blank) {
      userInput = $("input#" + blank).val();
      $("#thisIsMyList").append("<li>" + userInput + "</li>");
      console.log(userInput);
    });


    // $("#formOne").click(function() {
    //   $("ul#formOne").append("<li>")
    // }

    $("#story").show();

    event.preventDefault();
  });
});
