$(document).ready(function() {

  console.log('THE DOCUMENT IS READY!')

  $('.box').hover(function() {
    moveDiv();
  });
});

function moveDiv() {
    var $span = $(".box");

    // $span.fadeOut(10, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))

        $span.css({ left: leftPos, top: topPos });

};
