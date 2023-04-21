
$(function () {
 
  var savebtn = $(".saveBtn");
  savebtn.on('click', function () {
    var myparent = $(this).parent(); 
    var parentid = myparent.attr('id');
    var textarea = myparent.children('.description');
    var userinput = textarea.val();
    localStorage.setItem(parentid, userinput);
  });

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
 
  $.each(localStorage, function(parentid, userinput) {
    var timeblock = $("#" + parentid);
    var textarea = timeblock.children('.description');
    textarea.val(userinput);
  });

  setInterval (function() {
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));
  }, 1000)
  

});
