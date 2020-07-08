import Twit, { Response } from 'twit';

const Twitter = new Twit(require('./config'));

const noPreviewHtmlCssSearch: Twit.Params = {
  q: '#nopreviewhtmlcss',
  count: 100,
  result_type: 'recent',
};

const engageLatest = () => {
  Twitter.get('search/tweets', noPreviewHtmlCssSearch, (error: Error, data: any) => {
    if (!error) {
      for (let i: number = 0; i <= data.statuses.length - 1; i++) {
        const tweetId: string = data.statuses[i].id_str;
        Twitter.post(`statuses/retweet/${tweetId}`, {}, (error: Error, response: Response) => {
          if (response) {
            console.log('Success! Check your bot, it should have retweeted something.');
          }
          if (error) {
            console.error('There was an error with Twitter:', error);
          }
        });
        Twitter.post('favorites/create', { id: tweetId }, (error: Error, response: Response) => {
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
