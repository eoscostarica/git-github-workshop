;(function ($, Handlebars) {
  var attendandsUrl = 'data/attendants.json'
  var mentorTemplate = Handlebars.compile($('#attendant-template').html())

  $.getJSON(attendandsUrl)
    .then(function (attendands) {
      displayAttendants(attendands)
    }, handleError)

  function handleError (err) {
    $('#attendands-container').html('this is really emabarring! something went wrong, we are not able to load the attedants list at this time, try reloading, if it doesn\'t work please contact us')
    console.error('cannot obtain organizers and attendands data \n', err)
  }

  function displayAttendants (organizersAndMentors) {
    var html = ''
    $.each(organizersAndMentors, function (person, personData) {
      html += mentorTemplate(personData)
    })
    $('#attendants-container').html(html)
  }
})(window.jQuery, window.Handlebars)
