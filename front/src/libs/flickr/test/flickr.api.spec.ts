import { assert, expect } from "chai";
import { FlickerApi } from "../src/flickr.api";
import { IApiKey } from "../src/interfaces/oauth";

const FLICKR: IApiKey = {
   key: "4f7edeceada41893126c11c5a616f969",
   secret: "23ce8628416f7165",
};

describe("Flicker Api", () => {
   FlickerApi.setApiKey(FLICKR);
   it("Should set Api Key", () => {
      assert.equal(FlickerApi.getApiKey(), FLICKR);
   });
   it("Should get Request Token", () => {
      const result = FlickerApi.getRequestToken("https://www.example.com");
      expect(result).to.be.a('string');
   });
   it("Should get user authorization URL", () => {
      const input = "oauth_callback_confirmed=true&oauth_token=72157720888216411-2b7e58e22becc552&oauth_token_secret=70ccf3b762bed338";
      const result = FlickerApi.getAuthorizationUrl(input);
      expect(result).to.be.a('string');
   });
   it("Should get Access Token", () => {
      const input = "https://www.example.com/?oauth_token=72157720888216411-2b7e58e22becc552&oauth_verifier=837aa2faba0c6e67";
      const result = FlickerApi.getAccessToken(input);
      expect(result).to.be.a('string');
   });
   it("Should get Access Token", () => {
      const access_token = "fullname=&oauth_token=72157720879119870-8bb736cabd4ee5e1&oauth_token_secret=518b249cee38effb&user_nsid=7549336%40N05&username=jmil77";
      FlickerApi.exchangeRequestForAccessToken(access_token);
      expect(access_token).to.be.a('string');
   });

   it("Should check Token", () => {
      const result = FlickerApi.checkToken();
      expect(result).to.be.a('string');
   });
   it("Should Test login", () => {
      const result = FlickerApi.testLogin();
      expect(result).to.be.a('string');
   });
   it("Should Test getPhotoSetsList", () => {
      const result = FlickerApi.getPhotoSetsList(() => { });
      expect(result).to.be.a('string');
   });
  it("Should Test getPhotoSetById", () => {
      const result = FlickerApi.getPhotoSetById(() => { }, "72177720308239588");
      expect(result).to.be.a('string');
   });
   it("Should Test getPhotoSetPager", () => {
      const result = FlickerApi.getPhotoSetPager(() => { }, "72177720308239588", "5", "1");
      expect(result).to.be.a('string');
   });
 
   it("Should Test getPhotoInfo", () => {
      const result = FlickerApi.getPhotoInfo(() => { }, "8448080870");
      expect(result).to.be.a('string');
   });

   it("Should Test photoSearch", () => {
      const result = FlickerApi.photoSearch(() => { }, "7549336@N05");
      expect(result).to.be.a('string');
   });
   
   /*it("Should Test photosetsCreate POST", () => {
      const result = FlickerApi.photosetsCreate(() => { }, "Title test", "description test", "8448080870");
      console.log("photosetsCreate => ", result)
      expect(result).to.be.a('string');
   });

   it("Should Test photosetsEditMeta POST", () => {
      const result = FlickerApi.photosetsEditMeta(() => { }, "Title test", "description test", "8448080870");
      console.log("photosetsEditMeta => ", result)
      expect(result).to.be.a('string');
   });
   
   */
   
});

