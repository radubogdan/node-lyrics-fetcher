var lyrics = require('../lib/index.js');

lyrics.fetch('Sting', 'Shape of my heart', function(err, lyrics) {
    console.log(err || lyrics);
});
