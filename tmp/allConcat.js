var Journal = require('./../js/journal.js').Journal;

$(document).ready(function() {
  $('#journal-entry').submit(function(event) {
    event.preventDefault();

    var titleInput = $('#title').val();
    var inputEntry = $('#entry').val();
    var newJournal = new Journal(titleInput, inputEntry);
    $('#entries').prepend("<div><h3>" +
                         newJournal.title + "</h3>" + "<p>" +
                          newJournal.body + "</p>" + "<p>" + "Word Count: " +
                          newJournal.wordCount() + "   ||   " + newJournal.time + "</p></div>");
  });
});
