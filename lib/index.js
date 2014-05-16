// Dependencies
var request = require('request')
  , cheerio = require('cheerio')
  ;

var LyricsFetcher = {

    fetch: function(artist, song, callback) {
        var service = 'http://lyricsmania.com'
          , regex = new RegExp(/(?!\s+$)\s+/g)
          , query = artist.replace(regex, '+') + '+' + song.replace(regex, '+')
          ;

        request(service + '/searchnew.php?k=' + query, function(err, res, body) {
            if(!err && res.statusCode == 200) {
                var $ = cheerio.load(body)
                  , path = $('.elenco a')[0].attribs.href
                  , link = service + path
                  ;

                request(link, function(err, res, body) {
                    var $ = cheerio.load(body)
                      , lyrics = $('.lyrics-body').text()
                      ;

                    callback(null, lyrics);
                });

            } else {
                callback(err, null);
            }
        });
    }
};

module.exports = LyricsFetcher;
