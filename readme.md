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

### nircmd(input, [options], callback)

#### input

*Required*  
Type: `string` or `array`

Either a string with the command or an array with the command (one argument per value).

#### options

Type: `object`

Options to be passed on to [`child_process.execFile()`](https://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback).

#### callback(err, res)

Type: `function`

Callback that *usually* returns nothing but a possible exception.

### nircmd.spawn(input, options)

#### input

*Required*  
Type: `string` or `array`

Either a string with the command or an array with the command (one argument per value).

#### options

Type: `object`

Options to be passed on to [`child_process.spawn()`](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options).


## License

MIT © [gillstrom](http://github.com/gillstrom)
