'use strict';
var test = require('ava');
var nircmd = require('./');

test('clipboard', function (t) {
	t.plan(1);

	nircmd('clipboard set "hey everybody"', function (err) {
		t.assert(!err, err);
	});
});

test('screensaver', function (t) {
	t.plan(1);

	nircmd('screensaver', function (err) {
		t.assert(!err, err);
	});
});

test('screensaver using spawn', function (t) {
	t.plan(1);

	var cp = nircmd.spawn('screensaver');

	cp.on('exit', function (code) {
		t.assert(code === 0);
	});
});
