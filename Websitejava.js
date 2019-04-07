
// Submission button - ok redirects you and cancel keeps you on the page

$("button").click(function (event) {
  var isGood = confirm('Are you sure you wish to submit?');
  if (isGood === false) {
    event.preventDefault();
  }
});
