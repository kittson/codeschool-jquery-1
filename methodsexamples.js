


$(document).ready(function() {
  $('button').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $(this).closest('div').parent().append(message);
    $(this).remove();
  });
});


/* you can make an element a click, doesn't have to be a button
$(document).ready(function() {
  $('.tour').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $(this).append(message);
    $(this).find('button').remove();
  });
});
*/
/* weirdly enough to get a string to cat with a var you put plusses inside
the quotes.  how crazy making is that?  esp since the plusses are on the
outside in javascript.  


$(document).ready(function() {
  $('button').on('click', function() {
    var discount = $(this).closest('.tour').data('discount');
    var message = $('<span>Call 1-555-jquery-air for a $'+discount+' discount.</span>');
    $(this).closest('.tour').append(message);
    $(this).remove();
  });
});
*/

/* these two are the same thing, second one is preferred

$(document).ready(function() {
  $('button').on('click', function() {
    var discount = $(this).closest('.tour').data('discount');
    var message = $('<span>Call 1-555-jquery-air for a $discount discount.</span>');
    $(this).closest('.tour').append(message);
    $(this).remove();
  });
});


$(document).ready(function() {
  $('button').on('click', function() {
    var tour = $(this).closest('.tour');
    var discount = tour.data('discount');
    var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
    tour.append(message);
    $(this).remove();
  });
});
*/