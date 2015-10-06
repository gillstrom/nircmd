#!/usr/bin/env node
'use strict';
var meow = require('meow');
var nircmd = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ nircmd killprocess firefox.exe',
		'  $ nircmd clipboard set github.com'
	]
});

if (!cli.input.length) {
	console.error('Input is required');
	process.exit(1);
}

nircmd(cli.input).then(console.log);
