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

//=================== volt buttons ==================
if (!voltonoff) {
  document.querySelector(".volton").style.display = "none";
} else {
  document.querySelector(".voltoff").style.display = "none";
}
document.querySelector(".volton").addEventListener("click", function () {
  voltonoff = false;
  document.querySelector(".volton").style.display = "none";
  document.querySelector(".voltoff").style.display = "block";
});
document.querySelector(".voltoff").addEventListener("click", function () {
  onoff = true;
  document.querySelector(".volton").style.display = "block";
  document.querySelector(".voltoff").style.display = "none";
});

//========= USB buttons========================
if (!usbonoff) {
  document.querySelector(".usbon").style.display = "none";
} else {
  document.querySelector(".usboff").style.display = "none";
}
document.querySelector(".usbon").addEventListener("click", function () {
  usbonoff = false;
  document.querySelector(".usbon").style.display = "none";
  document.querySelector(".usboff").style.display = "block";
});
document.querySelector(".usboff").addEventListener("click", function () {
  usbonoff = true;
  document.querySelector(".usbon").style.display = "block";
  document.querySelector(".usboff").style.display = "none";
});
 //=============== AC buttons 

 if (!aconoff) {
  document.querySelector(".acon").style.display = "none";
} else {
  document.querySelector(".acoff").style.display = "none";
}
document.querySelector(".acon").addEventListener("click", function () {
  aconoff = false;
  document.querySelector(".acon").style.display = "none";
  document.querySelector(".acoff").style.display = "block";
});
document.querySelector(".acoff").addEventListener("click", function () {
  aconoff = true;
  document.querySelector(".acon").style.display = "block";
  document.querySelector(".acoff").style.display = "none";
});