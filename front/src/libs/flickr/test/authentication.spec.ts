
import { assert } from "chai";
import { Parameters } from "../src/authentication";
import { IApiKey } from "../src/interfaces/oauth";
import CryptoJS from "crypto-js";

const FLICKR: IApiKey = {
   key: "4f7edeceada41893126c11c5a616f969",
   secret: "23ce8628416f7165",
};

describe("Flicker Authentication", () => {

   it("should match Get Url Parameters", () => {
      const p = new Parameters();
      p.add("zorro", "animal");
      p.add("test", "444");
      assert.equal(p.getUrlParameters(), "test=444&zorro=animal");
   });

   it("should match Get Base Url", () => {
      const SERVICE = {
         url: "https://www.flickr.com/services/oauth/request_token",
         method: 'GET'
      }
      const params = {
         oauth_consumer_key: '4f7edeceada41893126c11c5a616f969',
         oauth_nonce: 'Z7rpE0v9l2kPCE0RKa6vA0w4e6ptHzNI',
         oauth_timestamp: '1681402874',
      }
      const p = new Parameters();
      p.add("oauth_callback", encodeURIComponent("https://www.example.com"));
      p.add("oauth_consumer_key", "4f7edeceada41893126c11c5a616f969");

      const baseUrlResult = p.getBaseUrl(SERVICE, params);
      const BASE_URL_TEST = 'GET&https%3A%2F%2Fwww.flickr.com%2Fservices%2Foauth%2Frequest_token&oauth_callback%3Dhttps%253A%252F%252Fwww.example.com%26oauth_consumer_key%3D4f7edeceada41893126c11c5a616f969%26oauth_nonce%3DZ7rpE0v9l2kPCE0RKa6vA0w4e6ptHzNI%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1681402874%26oauth_version%3D1.0'
      assert.equal(baseUrlResult, BASE_URL_TEST);
   });

   it("should Sign Request", () => {
      const SERVICE = {
         url: "https://www.flickr.com/services/oauth/request_token",
         method: 'GET'
      }
      const params = {
         oauth_nonce: 'gfy4VzLl9GzoNf6cJJxlFDRd4ZnAI9xF',
         oauth_timestamp: '1681243320',
         oauth_consumer_key: FLICKR.key
      }
      const p = new Parameters();
      p.add("oauth_callback", encodeURIComponent('https://www.test.com'));
      
      const baseUrlResult = p.getBaseUrl(SERVICE, params);
      var hash = CryptoJS.HmacSHA1(baseUrlResult, FLICKR.secret + "&");
      const oauth_signature = encodeURIComponent(hash.toString(CryptoJS.enc.Base64));
      p.add("oauth_signature", oauth_signature);
      assert.equal("M6xWvtk%2B1XyNFTewmkTJaH%2BlVtE%3D", oauth_signature);
   });
   it("should Sign access token", () => {
      const SERVICE = {
         url: "https://www.flickr.com/services/oauth/access_token",
         method: 'GET'
      }
      const params = {
         oauth_consumer_key: FLICKR.key,
         oauth_nonce: 'NLvrQnhkAIN',
         oauth_timestamp: '1681519087',
      }
      const oauth_token_secret = '34af5e7dea1135be';

      const p = new Parameters();
      p.add("oauth_verifier", 'fcca0aa67201db4');
      p.add("oauth_token", '72157720879191169-d6b26f2ceb5a599c');
      const baseUrlResult = p.getBaseUrl(SERVICE, params);
      var hash = CryptoJS.HmacSHA1(baseUrlResult, FLICKR.secret + "&" +oauth_token_secret);
      
      const oauth_signature = encodeURIComponent(hash.toString(CryptoJS.enc.Base64));
      p.add("oauth_signature", oauth_signature);
      assert.equal("svzfdbPxpH8IFaKJxL5FmRekVg4%3D", oauth_signature);
   });
});