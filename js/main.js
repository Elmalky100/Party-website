///<reference path="../typings/globals/jquery/index.d.ts" />


$(".open span").click(function () {

    let left = $(".sidenav").css("left")
    if (left == "0px") {
        let width = $(".sidenav").outerWidth(true)
        $(".sidenav").animate({ left: `-${width}px` }, 500)
        $(".main").animate({ "margin-left": `0px` }, 500)
    }
    else {
        $(".sidenav").animate({ left: `0px` }, 500)
        $(".main").animate({ "margin-left": `${width}px` }, 500)
    }
})
    let width =  $(".sidenav").outerWidth(true)
    $(".sidenav").css( {left:`-${width}px`})


   $(".sidenav .close-x").click(function(){
    let width =  $(".sidenav").outerWidth(true)
    $(".sidenav").animate({ left: `-${width}px` }, 500)
    $(".main").animate({ "margin-left": `0px` }, 500)
   })

   
// ___________________________________________________________________


function details(){
     $("#singers .first").css("display","block");
    $("#singers h3").click(function(){
        $(this).next().slideToggle(500)
        $("#singers p").not($(this).next()).slideUp(500)
    })
}
details()



// __________________________________________________________________________________



var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id
$("#days").html(`${days} D`)
$("#hours").html(`${hours} h`)
$("#minutes").html(`${minutes} m`)
$("#seconds").html(`${seconds} s`)
  // If the count down is over
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);



// __________________________________________________________________________________


let max = 100;
$("textarea").keyup(function(){
    var length = $(this).val().length;
    var character = max - length;
    console.log(character)
    if (character <= 0) {
        $("#char").text("your available character finished");
    } else {
        $("#char").text(character);
    }
})