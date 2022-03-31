window.randomize = function (rand) {
  var x = document.querySelector(".progress-circle-prog");
  x.style.strokeDasharray = rand * 4.65 + " 999";
  var el = document.querySelector(".progress-text");
  var from = $(".progress-text").data("progress");
  $(".progress-text").data("progress", rand);
  var start = new Date().getTime();

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

setTimeout(window.randomize(50), 200);
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
