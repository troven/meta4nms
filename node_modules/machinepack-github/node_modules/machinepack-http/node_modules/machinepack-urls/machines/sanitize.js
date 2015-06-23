module.exports = {
  friendlyName: 'Sanitize URL',
  description: 'Build a sanitized version of the provided URL (i.e. with "http://")',
  extendedDescription: 'Given a URL or URL segment, returns the fully-qualified version including the protocol (e.g. "http://").  If a valid protocol is provided, the returned URL will be identical to what was passed in.  If the provided URL has a URL of "//", it will be replaced with "http://".',
  sync: true,
  inputs: {
    url: {
      friendlyName: 'URL',
      example: 'www.example.com/search',
      description: 'The URL to sanitize, with or without the protocol prefix (e.g. "http://")',
      required: true
    }
  },
  defaultExit: 'success',
  exits: {
    error: {
      description: 'Unexpected error occurred.'
    },
    success: {
      description: 'URL resolved successfully.',
      example: 'http://www.example.com/search'
    },
    invalid: {
      description: 'The provided URL is not valid.'
    }
  },
  fn: function(inputs, exits) {

    var validateUrl = require('machine').build(require('./validate'));

    // Build our best attempt at a fully-qualified URL.
    var fullyQualifiedUrl = (function (){
      // If a protocol is already included in URL, leave it alone
      if (inputs.url.match(/^(https?:\/\/|ftp:\/\/)/)) {
        return inputs.url;
      }
      // If protocol is invalid, but sort of makes sense ("//"), change it to `http`
      else if (inputs.url.match(/^(\/\/)/)){
        return inputs.url.replace(/^\/\//, 'http://');
      }
      // Otherwise default to "http://" and prefix the provided URL w/ that
      else {
        return 'http://'+inputs.url;
      }
    })();

    // Now check that what we ended up with is actually valid.
    // (will throw if it's not)
    validateUrl({string: fullyQualifiedUrl}).execSync();

    return exits.success(fullyQualifiedUrl);
  },

};
