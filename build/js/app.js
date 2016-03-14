(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Journal = function(title, body) {
  this.title = title;
  this.body = body;
};

exports.Journal.prototype.wordCount = function(){
  this.bodyCount = this.body.split(" ").length;
  return this.bodyCount;
};

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal.js').Journal;

$(document).ready(function() {
  $('#journal-entry').submit(function(event) {
    event.preventDefault();

    var titleInput = $('#title').val();
    var inputEntry = $('#entry').val();
    var newJournal = new Journal(titleInput, inputEntry);
    $('#entries').prepend("<div><h3>" +
                         newJournal.title + "</h3>" + "<p>" +
                          newJournal.body + "</p>" + "<p>" + newJournal.wordCount() + "</p></div>");
  });
});

},{"./../js/journal.js":1}]},{},[2]);
