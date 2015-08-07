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

  // 6. Get all divs inside the container that are not row divs and are not the secret box div.  Set the width of the divs to 2 pixels.

  $(".row .box").not("#secretBox").css("width", "2px");

// 1. Add an on click handler to the container div.  Console log the x and y position of the click.
  $("#container").on("click", function(event){
    console.log(event.pageX);
    console.log(event.pageY);
  });

// 2. Add links inside all red box divs that take the user to galvanize.  Then add an on click handler that alerts the user that you can never leave the page.  Make sure the user won't leave the page after the alert!
  $(".boxType1").append("<a href='http://www.galvanize.com/'>Galvanize</a>");
  $(".boxType1 a").on("click", function(event){
    event.preventDefault();
    alert("You will never leave this page!");
    // return false;
  });

// 3. For all box divs, add a click handler that adds an image of a cute puppy to the box.  If the image is clicked again, remove the cute puppy.
  $(".box").on("click", function(event){
    $(".box").append('<img src="http://www.emoticonswallpapers.com/avatar/animals/Puppy-7.jpg">');
    $(".box img").on("click", function(event){
      event.stopPropagation();
      $(this).remove();
    });
  });
// 4. Write a click handler __on the conatainer div__.  The click handler should turn the container background to black and the background of the original div that was clicked to white.  If the user original div that was clicked happened to be the container div, change the background of the container div to lime green.  You __should not__ use any selectors for this exercise.  You can do it completely with what is given to you in the event callback.
  $("#container").on("click", function(event) {
    if ($(event.target).hasClass("box")){
      // console.log("test");
      $(this).css("background", "black");
      $(event.target).css("background", "white");
    } else {
      $(this).css("background", "#32cd32");
    }
  });
});
//closing doc ready;
