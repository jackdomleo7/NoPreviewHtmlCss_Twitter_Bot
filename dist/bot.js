"use strict";

var _twit = _interopRequireDefault(require("twit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Twitter = new _twit["default"](require('./config'));
var noPreviewHtmlCssSearch = {
  q: '#nopreviewhtmlcss',
  count: 100,
  result_type: 'recent'
};

var engageLatest = function engageLatest() {
  Twitter.get('search/tweets', noPreviewHtmlCssSearch, function (error, data) {
    if (!error) {
      for (var i = 0; i <= data.statuses.length - 1; i++) {
        var tweetId = data.statuses[i].id_str;
        Twitter.post("statuses/retweet/".concat(tweetId), {}, function (error, response) {
          if (response) {
            console.log('Success! Check your bot, it should have retweeted something.');
          }

          if (error) {
            console.error('There was an error with Twitter:', error);
          }
        });
        Twitter.post('favorites/create', {
          id: tweetId
        }, function (error, response) {
          if (response) {
            console.log('Success! Check your bot, it should have liked something.');
          }

          if (error) {
            console.error('There was an error with Twitter:', error);
          }
        });
      }
    } else {
      console.log('There was an error with your hashtag search:', error);
    }
  });
};

engageLatest();
setInterval(engageLatest, 1000 * 60 * 10); // Runs every 10 minutes