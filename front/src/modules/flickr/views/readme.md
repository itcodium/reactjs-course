- getRequestToken

const result = FlickerApi.getRequestToken("https://www.example.com");

- getAuthorizationUrl

const authorizationUrl = "oauth_callback_confirmed=true&oauth_token=72157720888579664-8d260d6a58130e50&oauth_token_secret=2483b2769f4aa74f";
FlickerApi.setToken(authorizationUrl)
const result = FlickerApi.getAuthorizationUrl(authorizationUrl);

- getAccessToken

const aToken = "https://www.example.com/?oauth_token=72157720888579664-8d260d6a58130e50&oauth_verifier=13bc406cf6826daf";
FlickerApi.setToken(authorizationUrl)
const result = FlickerApi.getAccessToken(aToken);

- checkToken        

const access_token = "fullname=&oauth_token=72157720888603368-73406a4cdb9f2656&oauth_token_secret=473d959a71a61986&user_nsid=32054006%40N08&username=jmill77";
FlickerApi.setToken(access_token);
const result = FlickerApi.checkToken(); 