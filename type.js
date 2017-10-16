window.onload = function here() {
  var textarea = document.getElementById("textarea");
  var demo = document.getElementById("demo");
  var timer;
  var seconds = 1000 * 60;
  var messageLength;

  textarea.addEventListener("keypress", startTimer);
  function startTimer() {
    if (seconds == 60000) {
      timer = setInterval(startTimer, 1000);
    }
    seconds -= 1000;
    textarea.removeEventListener("keypress", startTimer);
    document.getElementById("timer").innerHTML = "0:" + seconds / 1000;
    str = document.getElementById("textarea").value;
    messageLength = textarea.value.length;
    document.getElementById("count").innerHTML = messageLength;
    if (seconds == 0) {
      clearInterval(timer);
      document.getElementById("result").innerHTML =
        "You type" + " " + messageLength + " " + "chars/min";
    }
  }

  document.getElementById("reset").addEventListener("click", function() {
    console.log("reset");
    document.getElementById("textarea").value = "";
    document.getElementById("timer").innerHTML = "1:00";
    document.getElementById("count").innerHTML = "0";
    clearInterval(timer);
  });
};
