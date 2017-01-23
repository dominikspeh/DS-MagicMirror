var Feed = require('rss-to-json');

exports.index = (req,res) => {

  // LOAD SPORT1 FEED
  Feed.load('http://www.sport1.de/fussball/news.rss', function(err, rss){
    var data = {
      logo: "img/sport1_logo.png",
      feed: rss
    };
    res.json(data);  });
}

exports.vfbFeed = (req, res) => {

  Feed.load('http://www.stuttgarter-nachrichten.de/vfb.rss.feed', function(err, rss){
    var data = {
      logo: "img/stn-logo.png",
      feed: rss
    };
    res.json(data);
  });

  // http://www.sportschau.de//sportschauindex100~_type-rss.feed
  // http://www.spox.com/pub/rss/sport.xml
  // http://www.spox.com/pub/rss/fussball.xml
  // http://rss.kicker.de/news/aktuell
  // http://www.nfl.com/rss/rsslanding?searchString=team&abbr=DEN
};
