var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
  // save button click listener 
  $(".saveBtn").on("click", function () {
    
      var text = $(this).siblings(".event").val();
      var time = $(this).parent().attr("id");

      // Saves input text in local storage
      localStorage.setItem(time, text);
  })
 
  function timeTracker() {
      //get current number of hours.
      var timeNow = moment().hour();

      // loops time blocks
      $(".timeBlock").each(function () {
          var blockTime = parseInt($(this).attr("id").split("hour")[1]);

          // checks time and adds classes for background color indicators
          if (blockTime < timeNow) {
              $(this).removeClass("future");
              $(this).removeClass("present");
              $(this).addClass("past");
          }
          else if (blockTime === timeNow) {
              $(this).removeClass("past");
              $(this).removeClass("future");
              $(this).addClass("present");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");

          }
      })
  }

  // gets item from local storage
  $("#hour8 .event").val(localStorage.getItem("hour8"));
  $("#hour9 .event").val(localStorage.getItem("hour9"));
  $("#hour10 .event").val(localStorage.getItem("hour10"));
  $("#hour11 .event").val(localStorage.getItem("hour11"));
  $("#hour12 .event").val(localStorage.getItem("hour12"));
  $("#hour13 .event").val(localStorage.getItem("hour13"));
  $("#hour14 .event").val(localStorage.getItem("hour14"));
  $("#hour15 .event").val(localStorage.getItem("hour15"));
  $("#hour16 .event").val(localStorage.getItem("hour16"));
  $("#hour17 .event").val(localStorage.getItem("hour17"));

  timeTracker();
})