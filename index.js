'use strict';
const path = require('path');
const execa = require('execa');
const multiTypeof = require('multi-typeof');

const checkInput = input => {
	if (!multiTypeof(input, ['string', 'array'])) {
		throw new TypeError('Expected a string or an array as input');
	}

	if (!Array.isArray(input)) {
		const reg = /[^\s"']+|"([^"]*)"|'([^']*)'/g;

		input = input.match(reg);

		for (const x of input) {
			input[input.indexOf(x)] = x.replace(/"/g, '');
		}
	}

	return input;
};

module.exports = (input, opts) => {
	if (process.platform !== 'win32') {
		return Promise.reject(new Error('Only Windows systems are supported'));
	}

	return execa.stdout(path.join(__dirname, 'nircmd.exe'), checkInput(input), opts).catch(err => {
		if (err && err.code !== 4207175) {
			throw err;
		}
	});
};

module.exports.spawn = (input, opts) => {
	if (process.platform !== 'win32') {
		throw new Error('Only Windows systems are supported');
	}

	return execa.spawn(path.join(__dirname, 'nircmd.exe'), checkInput(input), opts);
};
