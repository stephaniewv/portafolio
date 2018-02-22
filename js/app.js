$(document).ready(function () {
  $("#typed").typed({
    strings: ["STEPHANIE WONG"],
    typeSpeed: 50,
    backDelay: 500,
    loop: false,
    loopCount: false,
    callback: function () { foo(); }
  });
  function foo() { console.log("Callback"); }

  $("#typedsecond").typed({
    strings: ["UX Designer"],
    typeSpeed: 50,
    backDelay: 500,
    loop: false,
    loopCount: false,
    callback: function () { foo(); }
  });
  function foo() { console.log("Callback");}


});