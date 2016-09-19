# nircmd

> Perform tasks using the nircmd.exe utility

*Examples and documentation can be found [here.](http://www.nirsoft.net/utils/nircmd2.html)*


## Install

```
$ npm install --save nircmd
```


## Usage

```js
const nircmd = require('nircmd');

nircmd('clipboard set "hey everybody"').then(() => {
	console.log('Copied to clipboard')
});
```


## CLI

```
$ npm install --global nircmd
```

```
$ nircmd --help

	Examples
	  $ nircmd killprocess firefox.exe
	  $ nircmd clipboard set github.com
```


## API

### nircmd(input, [options])

Returns a Promise that resolves *usually* nothing.

#### input

Type: `string` `Array`

Either a string with the command or an array with the command (one argument per value).

#### options

Type: `Object`

Options to be passed on to [`execa`](https://github.com/sindresorhus/execa#execafile-arguments-options).

### nircmd.spawn(input, [options])

#### input

Type: `string` `Array`

Either a string with the command or an array with the command (one argument per value).

#### options

Type: `Object`

Options to be passed on to [`execa`](https://github.com/sindresorhus/execa#execafile-arguments-options).


## License

MIT © [Andreas Gillström](https://github.com/gillstrom)
