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

var stream = T.stream('user');

stream.on('follow', followed);

function followed(eventMsg){
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    tweetIt('.@' + screenName + ' thank you for following me. Answered by Taha AI.');
}

function tweetIt(txt){

    var tweet = {
        status: txt
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

}
