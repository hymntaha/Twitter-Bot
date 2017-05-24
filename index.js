var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var params = {
    q: 'tahauygun',
    count: 100
}

T.get('search/tweets', params, gotData);
function gotData(err, data, response)
{
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++ ){
        console.log(tweets[i].text);
    }
};

var tweet = {
    status: 'my twitter bot'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
    if(err){
        console.log('something went wrong');
    }
    else{
        console.log('It worked!');
    }
}