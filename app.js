const Twit = require('twit')
const  T = new Twit(require('./config.js'))

/* const stream = T.stream('statuses/filter', {follow: users})  
stream.on('tweet', function (tweet){
    if(users.indexOf(tweet.user.id_str) > -1){
        console.log(tweet.user.name + ':' + tweet.text)
        T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response){
            console.log(data)
        })
   }
})*/
const user = ['79543151835113089']
const stream = T.stream('statuses/filter', {follow: user})
stream.on('tweet', function (tweet){
    if(user.indexOf(tweet.user.id_str) > -1){
        console.log(tweet.user.name + ':' + tweet.text)
    } T.post('statuses/retweeted_retweet/:id', { id: 'tweet.id_str'}, function(err, data, response){
        console.log(data)
})

retweetLatest()
setInterval(retweetLatest, 100 * 60 * 12)})