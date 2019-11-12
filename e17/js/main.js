$(document).ready(function() {

  console.log('THE DOCUMENT IS READY!')

  $('.title').click(function() {
    $('.n1').toggleClass('font-size');
    });
    $('.first').click(function() {
      $('.Final08').toggleClass('align');
  });
    $('.second').click(function() {
      $('.PSG').toggleClass('align2');
    });
    $('.third').click(function() {
      $('.Final98').toggleClass('align3');
    });
});
