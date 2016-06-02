/*This file is for your custom js.  All yours*/
$(function () {
  $("form#celebrity-survey").submit(function(event) {
    event.preventDefault();
    debugger;
    var age = parseInt($("input#age").val());
    var gender = $("input#gender").val();
    var music = $("input[name=music]:checked").val();
    var food = $("input[name=food]:checked").val();

    if (age) {
      if (food === "soylent-green") {
        $("#charleton-heston").show();
      }

      else if (age >= 50 && gender === "male" || music === "country") {
        $("#dolly-parton").show();
      }

      else if (age <= 20 && gender === "female" && music === "pop" && food != "pizza") {
        $("#justin-bieber").show();
      }

      else {
        $("#no-celebrities").show();
      }
    }
  else {
    $(".age-error").addClass("has-error");
    $("span.help-block").show();
  }
  });
});
