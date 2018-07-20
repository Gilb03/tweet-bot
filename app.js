const Twit = require('twit')
const T = new Twit(require('./config'))
const Express = require('express')
const users = ['795431518353113089']
const stream = T.stream('statuses/filter', {follow: users})
debug = false;

stream.on('tweet', function (tweet) {
    if (users.indexOf(tweet.user.id_str) > -1) {
        console.log(tweet.user.name + ": " + tweet.text);
        T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
            console.log(data)
        })
    } else {
      console.log('error dude')
    }
})

/* function retweetLatest () {
  T.get('search/tweets', hashtagSearch, function (error, data, response){
    var tweets = data.statuses
    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text)
    } if (!error) {
        var retweetId = data.statuses[0].id_str
        T.post('statuses/retweet/: id' + retweetId, {}, tweeted)
} else {
   if (debug) {
     console.log('There was an error with your hashtag search:', error)
   }
 }
})
}
function tweeted (err, tweeted){
  if(err !== undefined){
    console.log(err)
  } else {
    console.log('Tweeted: ' + retweet)
  }
function retweetLatest()
{
setInterval(retweetLatest, 1000 * 60 * 12)
 }}  */
