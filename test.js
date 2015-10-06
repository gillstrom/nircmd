import test from 'ava';
import fn from './';

test('clipboard', async t => {
	await fn('clipboard set "hey everybody"');
});

test('screensaver', async t => {
	await fn('screensaver');
});

test('screensaver using spawn', t => {
	t.plan(1);

	const cp = fn.spawn('screensaver');

	cp.on('exit', function (code) {
		t.true(code === 0);
	});
});
