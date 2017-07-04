#!/usr/bin/env node
'use strict';
const meow = require('meow');
const nircmd = require('.');

const cli = meow(`
	Example
	  $ nircmd killprocess firefox.exe
	  $ nircmd clipboard set github.com'
`);

if (cli.input.length === 0) {
	console.error('Input is required');
	process.exit(1);
}

nircmd(cli.input).then(console.log);
