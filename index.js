const Twit = require('twit');
const config = require('./config');
var giveMeAJoke = require('give-me-a-joke');

var T = new Twit(config);
twitterBot();
setInterval(twitterBot, 1000*5);

function twitterBot(){
    giveMeAJoke.getRandomDadJoke (function(joke) {
        let tweet = {
            status: joke
        }
        
        postTweet(tweet);

        function postTweet(tweet){
            T.post('statuses/update', tweet, function(err, data, response) {
                console.log(tweet.status + " has been posted");
            });
        }
    }); 
}

