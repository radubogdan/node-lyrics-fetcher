// Dependencies
var request = require('request'),
    cheerio = require('cheerio');

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

        var service = "http://lyricsmania.com", // search for lyrics here
            regex = new RegExp(/(?!\s+$)\s+/g), // regex for matching all whitespace
            query = artist.replace(regex, '+') + '+' + song.replace(regex, '+'); // replace regex with +

        request(service + '/searchnew.php?k=' + query, function (err, res, body) {
            if (!err && res.statusCode === 200) {
                var $ = cheerio.load(body),
                    path = $('.elenco a')[0].attribs.href, // grab first link
                    link = service + path; // new link where next request goes

                request(link, function (err, res, body) {
                    var $ = cheerio.load(body),
                        lyrics_container = $('.lyrics-body').text(),
                        start = lyrics_container.indexOf('Lyrics'), // Search pos of Lyrics word
                        lyrics = lyrics_container.slice(start).replace(/\t/g, '');

                    callback(null, lyrics);
                });
            } else {
                callback(err, null);
            }
        });
    }
};

module.exports = LyricsFetcher;
