$(document).ready(function(){
  console.log("Ready for DOM manipulation");
  // 1. Find the secretBox on the page. Set the background color to white.  Add an h1 tag that says, "secret box!" FINISHED
  $('#secretBox').css({ "background-color": "white"}).html("<h1>secret box</h1>").css("color", "green");

  // 2. Find all child divs of the first row.  Set the class for each div to boxType3. FINISHED
  $('#row1 .box').attr('class' ,'boxType3 box');

  // 3. Make the last box in the last row disappear. (Hint, look into the dispaly style.  Also, you should only get back one element from your selector.).
  $('.box:last').hide();

  // 4. Change all red boxes to white. FINISHED
  $(".boxType1:even").css("background-color", "white");

  // 5. Get the first two divs in the second row.  Take away all styling from the divs.
  $("#row2 :lt(2)").css("visibility", "hidden");

//closing doc ready
});
