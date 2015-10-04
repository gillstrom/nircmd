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

module.exports = function (input, opts, cb) {
	opts = opts || {};

	if (process.platform !== 'win32') {
		throw new Error('Only Windows systems are supported');
	}

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	execFile(path.join(__dirname, 'nircmd.exe'), checkInput(input), opts, function (err, res) {
		// NirCmd exits with this weird code even though it worked
		if (err && err.code !== 4207175) {
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
