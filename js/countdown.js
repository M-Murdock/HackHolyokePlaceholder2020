/*
  Runs the countdown timer
*/
$(document).ready(function() {
  var x = setInterval(function() {
    var curDate = new Date()
    var hackDate = new Date('November 6, 2020');
    var timeLeft = hackDate.getTime() - curDate.getTime();

    var seconds = Math.floor((timeLeft / 1000) % 60);
    var minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    var hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    var days = Math.floor((timeLeft / (1000 * 60 * 60 * 24)));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    $("#countdown").text(days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds");

    if(timeLeft < 0) {
      clearInterval(x);
    }
  }, 1000);
});
