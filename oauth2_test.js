// const r = new snoowrap({
//     userAgent: 'my agent Goradux',
//     clientId: "YeMQjOy7Vc-TTw",
//     clientSecret: '59264954-oug4JzWd8U1fbUxG4Ranz-D6Efw',
//     refreshToken: 'None'
//   });

var CLIENT_ID = "sdFYMdVeMGtguQ"
var CLIENT_SECRET = 'None'
var REDIRECT_URI = "http://localhost:8080/index.html"
var REDIRECT_URI2 = "http%3A%2F%2Flocalhost%3A8080"

function jsonToURI(json){ return encodeURIComponent(JSON.stringify(json)); }

var button = document.getElementById('authorize_button')
button.onclick = function(){
    //console.log(123);
    var state = 'blahbblahbsda'
    var params = {
        "client_id": CLIENT_ID,
        "response_type": "code",
        "state": state,
        "redirect_uri": REDIRECT_URI,
        "duration": "temporary",
        "scope": "identity"
    }
    var encoded = 'https://ssl.reddit.com/api/v1/authorize?'.concat("client_id=", CLIENT_ID, "&response_type=", "code", "&state=", state, "&redirect_uri=", REDIRECT_URI2, "&duration=temporary&scope=identity");
    console.log(encoded);
    console.log("https://ssl.reddit.com/api/v1/authorize?client_id=sdFYMdVeMGtguQ&response_type=code&state=9fd9a157-7338-44e8-a8eb-579c0a6fcd57&redirect_uri=http%3A%2F%2Flocalhost%3A65010%2Freddit_callback&duration=temporary&scope=identity");
    //console.log('https://ssl.reddit.com/api/v1/authorize?'.concat(jsonToURI(params)))
    //location.href = 'https://ssl.reddit.com/api/v1/authorize?'.concat(jsonToURI(params));
    location.href = encoded;
};


// const r = new snoowrap({
//     userAgent: 'my agent Goradux',
//     clientId: "sdFYMdVeMGtguQ",
//     clientSecret: '',
//     refreshToken: 'None'
// });

//   r.getHot().map(post => post.title).then(console.log);