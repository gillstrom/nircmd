'use strict';
var execFile = require('child_process').execFile;
var path = require('path');
var multiTypeof = require('multi-typeof');

module.exports = function (input, cb) {
	if (process.platform !== 'win32') {
		throw new Error('Only Windows systems are supported');
	}

	if (!multiTypeof(input, ['string', 'array'])) {
		throw new TypeError('Expected a string or an array as input');
	}

	if (!Array.isArray(input)) {
		var reg = new RegExp(/[^\s"']+|"([^"]*)"|'([^']*)'/g);
		input = input.match(reg);

		input.forEach(function (el) {
			input[input.indexOf(el)] = el.replace(/"/g, '');
		});
	}

	execFile(path.join(__dirname, 'nircmd.exe'), input, function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, res);
	});
};
