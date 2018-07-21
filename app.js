var  Twit = require('twit')
 var T = new Twit({
  consumer_key: '. . . '
  , consumer_secret: '. . . '
  , access_token: ' . . .'
  , access_token_secret: '. . .'
  , timeout_ms: 60 * 1000,
    strictSSL:  true,
    app_only_auth: true,
})
debug = false
var  users = ['. . .']
var stream = T.stream('statuses/filter', {follow: users}) 
stream.on('tweet', function (tweet){
    if (users.indexOf(tweet.user.id_str) > -1){
        console.log(tweet.user.name + ": " + tweet.text)
        T.post('statuses/retweet/:id', { id: . . .}, function (err, data, response) {
            console.log(data)
        })
    } else {
      console.log('check the for loop structure')
    }
})

