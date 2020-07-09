import Twit, { Response } from 'twit';

const Twitter = new Twit(require('./config'));

const noPreviewHtmlCssSearch: Twit.Params = {
  q: '#nopreviewhtmlcss',
  count: 10,
  result_type: 'recent',
};

const engageLatest = (): void => {
  Twitter.get('search/tweets', noPreviewHtmlCssSearch, (error: Error, data: any) => {
    if (!error) {
      for (let i: number = 0; i <= data.statuses.length - 1; i++) {
        const tweetId: string = data.statuses[i].id_str;
        Twitter.post(`statuses/retweet/${tweetId}`, {}, (error: Error, response: Response) => {
          if (response) {
            console.log(`Success! Retweeted: ${tweetId}`);
          }
          if (error) {
            console.error('There was an error with Twitter:', error);
          }
        });
        Twitter.post('favorites/create', { id: tweetId }, (error: Error, response: Response) => {
          if (response) {
            console.log(`Success! Liked: ${tweetId}`);
          }
          if (error) {
            console.error('There was an error with Twitter:', error);
          }
        });
      }
    } else {
      console.error('There was an error with your hashtag search:', error);
    }
  });
};

engageLatest();
setInterval(engageLatest, 1000 * 60 * 60 * 2); // Runs every 2 hours
