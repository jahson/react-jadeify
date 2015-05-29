// Generated by CoffeeScript 1.9.2
'use strict';
var jade, through;

through = require('through');

jade = require('react-jade');

module.exports = function(file, opt) {
  var end, input, write;
  if (!/\.rjade$/i.test(file)) {
    return through();
  }
  input = '';
  write = function(chunk) {
    return input += chunk;
  };
  end = function() {
    var err, output, template;
    try {
      template = jade.compile(input, {
        filename: file
      });
    } catch (_error) {
      err = _error;
      err.stack = '';
      this.emit('error', err);
      return;
    }
    output = "var React = require('react');\nmodule.exports = " + (template.toString()) + ";\nmodule.exports.locals = " + (template.locals.toString()) + ";";
    this.queue(output);
    return this.queue(null);
  };
  return through(write, end);
};
