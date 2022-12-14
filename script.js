//setting a timer for 1.5 hour from current time
currDate = new Date();
var countDownDate = currDate.getTime() + 5400000; 
// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result 
  document.getElementById("timer1").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  document.getElementById("timer2").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    // reset the timer 
  if (distance < 0) {
    countDownDate = currDate.getTime() + 5400000;
  }
}, 1000);
