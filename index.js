'use strict';
var execFile = require('child_process').execFile;
var spawn = require('child_process').spawn;
var path = require('path');
var multiTypeof = require('multi-typeof');

function checkInput(input) {
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

	return input;
}

module.exports = function (input, cb) {
	if (process.platform !== 'win32') {
		throw new Error('Only Windows systems are supported');
	}

	execFile(path.join(__dirname, 'nircmd.exe'), checkInput(input), function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, res);
	});
};

module.exports.spawn = function (input, opts) {
	opts = opts || {};

	if (process.platform !== 'win32') {
		throw new Error('Only Windows systems are supported');
	}

	return spawn(path.join(__dirname, 'nircmd.exe'), checkInput(input), opts);
};
