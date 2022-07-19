var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);

var saveBtn = $(".saveBtn");

$(document).ready(function () {
  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    var time = $(this).siblings(".hour").text();
    var input = $(this).siblings(".input").val();

    localStorage.setItem(time, input);
  });

  function timeTracker() {
    var hour = moment().hours();

    $(".time-block").each(function () {
      var currHour = parseInt($(this).attr("id"));

      if (currHour > hour) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      } else if (currHour === hour) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
      } else {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }
    });
  }
  $("#8 .input").val(localStorage.getItem("8AM"));
  $("#9 .input").val(localStorage.getItem("9AM"));
  $("#10 .input").val(localStorage.getItem("10AM"));
  $("#11 .input").val(localStorage.getItem("11AM"));
  $("#12 .input").val(localStorage.getItem("12PM"));
  $("#13 .input").val(localStorage.getItem("1PM"));
  $("#14 .input").val(localStorage.getItem("2PM"));
  $("#15 .input").val(localStorage.getItem("3PM"));
  $("#16 .input").val(localStorage.getItem("4PM"));
  $("#17 .input").val(localStorage.getItem("5PM"));
  timeTracker();
});

function usePlanner() {
  $(".hour").each(function () {
    var currHour = $(this).text();
    var currPlan = localStorage.getItem(currHour);

    if (currPlan !== null) {
      $($this).siblings(".input").val(currPlan);
    }
  });
}