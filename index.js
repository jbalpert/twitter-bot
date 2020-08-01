const Twit = require('twit');
const config = require('./config');
const oneLinerJoke = require('one-liner-joke');

var T = new Twit(config);

setInterval(twitterBot, 1000*20);

function twitterBot(){
    // let randomNum = Math.floor(Math.random()*100);
    // tweet = createTweet("my favorite number is: " + randomNum + "! What's is your favorite?");
    // postTweet(tweet);
    
    var getRandomJoke = oneLinerJoke.getRandomJoke();
    let text = getRandomJoke.body;
    console.log('text');

    let tweet = {
        status: text
    }
    
    postTweet(tweet);

    function postTweet(tweet){
        T.post('statuses/update', tweet, function(err, data, response) {
            console.log(tweet.status + " has been posted");
        });
    }
}

