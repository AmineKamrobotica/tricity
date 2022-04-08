window.randomize = function (rand) {
  var x = document.querySelector(".progress-circle-prog");
  x.style.strokeDasharray = rand * 3.1 + " 999";
  var el = document.querySelector(".progress-text");
  var from = $(".progress-text").data("progress");
  document.querySelector(".progress-text").innerHTML = rand;
  var start = new Date().getTime();
  console.log(document.querySelector(".progress-text").value);
  setTimeout(function () {
    var now = new Date().getTime() - start;
    var progress = now / 700;
    result =
      rand > from
        ? Math.floor((rand - from) * progress + from)
        : Math.floor(from - (from - rand) * progress);
    el.innerHTML = progress < 1 ? result + "%" : rand + "%";
    if (progress < 1) setTimeout(arguments.callee, 10);
  }, 10);
};

setTimeout(window.randomize(50), 100);
document.querySelector(".progress").click(window.randomize(50));
var slideval = document.getElementById("slideval").value;
document.getElementById("values").innerHTML =
  document.getElementById("slideval").value;
console.log(slideval);
function test() {
  var slideval = document.getElementById("slideval").value;
  document.getElementById("values").innerHTML =
    document.getElementById("slideval").value;
  console.log(slideval);
}
/* 
var onoff = false;
var usbonoff = false;
var aconoff = false;
var voltonoff = false;

if (!onoff) {
  document.getElementById("on").style.display = "none";
} else {
  document.getElementById("off").style.display = "none";
}
document.getElementById("on").addEventListener("click", function () {
  onoff = false;
  document.getElementById("on").style.display = "none";
  document.getElementById("off").style.display = "block";
});
document.getElementById("off").addEventListener("click", function () {
  onoff = true;
  document.getElementById("on").style.display = "block";
  document.getElementById("off").style.display = "none";
});
 */