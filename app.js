const Twit = require('twit'),
T = new Twit(require('./config')),
hashtagSearch = { q: '#producer', count: 5, result_type: 'recent'},
debug = false;

function retweetLatest () {
  T.get('search/statuses', hashtagSearch, function (error, data) {
    var tweets = data.statuses
    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text)
    } if (!error) {
        var retweetId = data.statuses[0].id_str
        T.post('statuses/retweet/' + retweetId, {}, tweeted)
} else {
   if (debug) {
     console.log('There was an error with your hashtag search:', error)
   }
 }
})}
function tweeted (err, tweeted){
  if(err !== undefined){
    console.log(err)
  } else {
    console.log('Tweeted: ' + retweet)
  }
function retweetLatest(){
setInterval(retweetLatest, 1000 * 60 * 12)
}
