'use strict';
var execFile = require('child_process').execFile;

module.exports = function (input, cb) {
	if (process.platform !== 'win32') {
		throw new Error('Only Windows systems are supported');
	}

	if (!Array.isArray(input) && typeof input !== 'string') {
		throw new TypeError('Expected a string or array as input');
	}

	if (!Array.isArray(input)) {
		var reg = new RegExp(/[^\s"']+|"([^"]*)"|'([^']*)'/g);
		input = input.match(reg);

		input.forEach(function (el) {
			input[input.indexOf(el)] = el.replace(/"/g, '');
		});
	}

	execFile('./nircmd.exe', input, function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, res);
	});
};
