Lyrics-fetcher
===================

Lyrics-fetcher is a simple interface that provides lyrics from http://makeitpersonal.co/ 
directly into your js file or terminal.

### Instalation

```sh
$ sudo npm install -g lyrics-fetcher
```

### Usage

#### Directly from the terminal

```sh
$ lyr 'Sting' 'Shape of my heart'
```

#### Javascript file

```js
var lyr = require('lyrics-fetcher');

lyr.fetch('Sting', 'Shape of my heart', function (err, lyrics) {
    console.log(err || lyrics);
});
```

### Methods

#### `fetch (artist, song, callback)`
  - artist: String representing the name of the artist.
  - song: String representing the name of the song.
  - callback: the callback function.

## Test

```sh
$ npm test
```

## Changelog

  - `0.0.1`
    - First release
  - `0.0.0`
    - First working version

## License
See the [LICENSE](https://raw.githubusercontent.com/radubogdan/node-lyrics-fetcher/master/LICENSE) file.
