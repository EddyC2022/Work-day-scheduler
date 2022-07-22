//displays the current date 
var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);

var saveBtn = $(".saveBtn");

$(document).ready(function () {
  // saveBtn click listener saves to localStorage
  $(".saveBtn").click(function () {
    var time = $(this).siblings(".hour").text();
    var input = $(this).siblings(".input").val();

    localStorage.setItem(time, input);
  });
// tracks current hour of the day which works with css to color code the sections
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
  // pulls each plan from local storage and is placed into proper textarea
  $('.hour').each(function() {
    var currentHour = $(this).text();
    var currentPlan = localStorage.getItem(currentHour);

    if (currentPlan !== null) {
      $(this).siblings('.input').val(currentPlan);
    }
  })

  timeTracker();
});

