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
        highlight()
    }
  }

  document.getElementById("reset").addEventListener("click", function() {
    console.log("reset");
    document.getElementById("textarea").value = "";
    document.getElementById("timer").innerHTML = "1:00";
    document.getElementById("count").innerHTML = "0";
    clearInterval(timer);
  });

  function highlight() {
    var articleElement = document.getElementById("article");
    var articleText = articleElement.textContent;
    console.log(articleText);
    var compareText = document.getElementById("textarea").value;
    console.log(compareText);
    var text = "";
    articleText
      .split("")
      .forEach(function(value, index) {
        if (value != compareText.charAt(index))
          text += "<span class='wrong-text'>" + value + "</span>";
        else text += value;
      });
      document.getElementById("article").innerHTML = text;
  }
};
