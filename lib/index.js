// Dependencies
var request = require('request');

/**
 *  LyricsFetcher Object
 *  node-lyrics-fetcher is a simple interface that provides lyrics from lyricsmania.com
 *
 */
var LyricsFetcher = {

    /**
     *  LyricsFetcher#fetch(artist, song, callback)
     *  Run a request providing the @artist and @song.
     *  After the response comes the @callback function will be called.
     *
     *  Arguments
     *    - artist: String representing the name of the artist.
     *    - song: String representing the name of the song.
     *    - callback: the callback function.
     *
     *  Returns the created request.
     *
     */
    fetch: function (artist, song, callback) {
        "use strict";

        var service = "https://makeitpersonal.co/lyrics?";

        request(service + 'artist=' + artist + '&title=' + song, function (err, res, body) {
            callback(null, body);
        });
    }
};

module.exports = LyricsFetcher;
