import test from 'ava';
import m from './';

test('clipboard', async () => {
	await m('clipboard set "hey everybody"');
});

test('screensaver', async () => {
	await m('screensaver');
});

test('screensaver using spawn', t => {
	const cp = m.spawn('screensaver');

	cp.on('exit', code => {
		t.true(code === 0);
	});
});
