// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var savebtn = $(".saveBtn");
  savebtn.on('click', function (event) {
    var myparent = $(this.parentNode); 
    var parentid = myparent.attr('id');
    var textarea = myparent.children('.description');
    var userinput = textarea.val();
    localStorage.setItem(parentid, userinput);
  });

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
  var timeblocks = $(".time-block")
  timeblocks.each(function() {
  
    var timeblock = $(this);
    var timeblockid = timeblock.attr('id');
    var timeblockhour = timeblockid.split("-")[1];
    timeblockhour = parseInt(timeblockhour);
    var currenthour = dayjs().hour();

    if (timeblockhour < currenthour) {
      timeblock.addClass( "past" );
    } else if (timeblockhour > currenthour) {
      timeblock.addClass( "future" );
    } else if (timeblockhour === currenthour) {
      timeblock.addClass( "present" );
    }
  });
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  $.each(localStorage, function(parentid, userinput) {
    var timeblock = $("#" + parentid);
    var textarea = timeblock.children('.description');
    textarea.val(userinput);
  });


  // TODO: Add code to display the current date in the header of the page.
  setInterval (function() {
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));
  }, 1000)
  

});
