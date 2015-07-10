# nircmd

> Perform tasks using the nircmd.exe utility.


*Examples and documentation can be found [here.](http://www.nirsoft.net/utils/nircmd2.html)*


## Install

```
$ npm install --save nircmd
```


## Usage

```js
var nircmd = require('nircmd');

nircmd('clipboard set "hey everybody"', function (err) {
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

### nircmd(input, callback)

#### input

*Required*  
Type: `string` or `array`

Either a string with the command or an array with the command (one argument per value).

#### callback(err, res)

Type: `function`

Callback that *usually* returns nothing but a possible exception.


## License

MIT © [gillstrom](http://github.com/gillstrom)
