window.onscroll = function() {myScrolled()};

function myScrolled(){
  var scrolled = document.documentElement.scrollTop || document.body.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var percentage = (scrolled / height) *100;

  document.getElementById("progress-bar").style.width = percentage + "%";
  console.log("percentage : " + percentage)
  console.log("scrolled :" + scrolled);
  console.log("height : " + height);
}