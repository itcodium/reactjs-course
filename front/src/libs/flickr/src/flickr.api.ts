
import { IApiKey, IUserAuthorization, IParameter, IService } from './interfaces/oauth';
import { Parameters } from './authentication.ts';
import { queryStringToJSON } from './utils.ts';
import CryptoJS from "crypto-js";

const FLICKR_URLS = {
    request_token: { url: "https://www.flickr.com/services/oauth/request_token", method: "GET" },
    user_authorize: { url: "https://www.flickr.com/services/oauth/authorize", method: "GET" },
    access_token: { url: "https://www.flickr.com/services/oauth/access_token", method: 'GET' },
    rest_api: { url: "https://www.flickr.com/services/rest", method: 'GET' },
    upload: { url: "https://up.flickr.com/services/upload/", method: 'POST' },
}
export const FlickerApi = (function () {
    let apiKey: IApiKey;
    let userAuthorization: IUserAuthorization;
    const setApiKey = (param: IApiKey) => {
        apiKey = param;
    };

    const getApiKey = () => apiKey;
    const getSignature = (message: string) => {
        const key = apiKey.secret + "&" + (userAuthorization?.oauth_token_secret || '');
        const hash = CryptoJS.HmacSHA1(message, key);
        return encodeURIComponent(hash.toString(CryptoJS.enc.Base64));
    }
    const getRequestToken = (callback: string) => {
        const p = new Parameters();
        p.add("oauth_callback", encodeURIComponent(callback));
        p.add("oauth_consumer_key", apiKey.key);
        const baseUrlResult = p.getBaseUrl(FLICKR_URLS.request_token);
        p.add("oauth_signature", getSignature(baseUrlResult));
        return FLICKR_URLS.request_token.url + "?" + p.getUrlParameters();
    }
    const getAuthorizationUrl = (params: string) => {
        userAuthorization = queryStringToJSON(params) as IUserAuthorization;
        return FLICKR_URLS.user_authorize.url + "?oauth_token=" + userAuthorization.oauth_token;
    }
    const getAccessToken = (input: string) => {
        const new_oauth_token = queryStringToJSON(input.split("?")[1]);
        const old_oauth_token = userAuthorization.oauth_token;

        const p = new Parameters();
        p.add("oauth_consumer_key", apiKey.key);
        p.add("oauth_verifier", new_oauth_token.oauth_verifier);
        p.add("oauth_token", old_oauth_token);

        const baseUrlResult = p.getBaseUrl(FLICKR_URLS.access_token);
        p.add("oauth_signature", getSignature(baseUrlResult));
        return FLICKR_URLS.access_token.url + "?" + p.getUrlParameters();
    }

    const setToken = (params: string) => {
        userAuthorization = queryStringToJSON(params) as IUserAuthorization;
    }
    const getToken = () => {
        return userAuthorization; 
    }
    const checkToken = () => {
        const params: IParameter[] = [{
            name: "method",
            value: 'flickr.auth.oauth.checkToken'
        }];
        return call(params);
    }
    const testLogin = () => {
        const params: IParameter[] = [{
            name: "method",
            value: 'flickr.test.login'
        }];
        return call(params);
    }

    const getPhotoSetById = ( photosetId: string) => {
        const params = [{ name: "method", value: 'flickr.photosets.getPhotos' },
        { name: "photoset_id", value: photosetId }];
        return call(params);
    }

    const getPhotoSetsList = (callback: any) => {
        const params = [
            { name: "method", value: 'flickr.photosets.getList' }];
        return call(params);
    }

    const getPhotoSetPager = ( idPhotoset: string, perPage: string, page: string) => {
        const params = [
            { name: "method", value: 'flickr.photosets.getPhotos' },
            { name: "photoset_id", value: idPhotoset },
            { name: "per_page", value: perPage },
            { name: "page", value: page }
        ];
        return call(params);
    }

    const getPhotoInfo = ( idPhoto: string) => {
        const params = [
            { name: "method", value: 'flickr.photos.getInfo' },
            { name: "photo_id", value: idPhoto }];
        return call(params);
    }

    const photoSearch = ( user_id: string) => {
        const params = [{ name: "method", value: 'flickr.photos.search' },
        { name: "user_id", value: user_id },
        { name: "extras", value: 'original_format' }];
        return call(params);
    }
    const getPhotos = (user_id: string) => {
        const params = [{ name: "method", value: 'flickr.people.getPhotos' },
        { name: "user_id", value: user_id }];
        return call(params);
    }


    const photosetsCreate = ( title: string, description: string, primary_photo_id: string) => {
        // POST
        const params = [{ name: "method", value: 'flickr.photosets.create' },
        { name: "title", value: title },
        { name: "description", value: description },
        { name: "primary_photo_id", value: primary_photo_id }];
        return call(params);
    }

    const photosetsEditMeta = ( title: string, description: string, photoset_id: string) => {
        // POST
        const params = [{ name: "method", value: 'flickr.photosets.editMeta' },
        { name: "photoset_id", value: photoset_id },
        { name: "title", value: title },
        { name: "description", value: description },
        ];
        return call(params);
    }

    const upload = function () {
        return call([], FLICKR_URLS.upload);
        // return this.getSignedUrlPost();
    }
    const call = (params: IParameter[], service: IService = FLICKR_URLS.rest_api) => {
        const p = new Parameters();
        p.add("nojsoncallback", "1");
        p.add("format", "json");
        params.forEach((item: IParameter) => {
            p.add(item.name, item.value);
        });
        p.add("oauth_consumer_key", apiKey.key);
        p.add("oauth_token", userAuthorization.oauth_token);
        const baseUrlResult = p.getBaseUrl(service);
        p.add("oauth_signature", getSignature(baseUrlResult));
        return service.url + "?" + p.getUrlParameters();


        /*const url = this.getSignedUrl();
        fetch(url)
            .then((response) => response.json())
            .then(callback); */
    }
    /*
    const baseCall = (url, method) => {
        if ( method!= 'POST') {
            this.addParameter("nojsoncallback", '1');
            this.addParameter("format", 'json');
        }
        // this.addParameter("oauth_token", token);
    }*/
    // Public
    return {
        setApiKey: (param: IApiKey) => setApiKey(param),
        getApiKey: () => getApiKey(),
        getRequestToken: (url: string) => getRequestToken(url),
        getAuthorizationUrl: (param: string) => getAuthorizationUrl(param),
        getAccessToken: (url: string) => getAccessToken(url),
        setToken: (param: string) => setToken(param),
        checkToken: () => checkToken(),
        testLogin: () => testLogin(),
        photoSearch: ( user_id: string) => photoSearch( user_id),
        getPhotoSetById: ( photosetId: string) => getPhotoSetById( photosetId),
        getPhotoSetsList: (callback: any) => getPhotoSetsList(callback),
        getPhotoSetPager: ( idPhotoset: string, perPage: string, page: string) => getPhotoSetPager( idPhotoset, perPage, page),
        getPhotoInfo: ( idPhoto: string) => getPhotoInfo( idPhoto),
        photosetsCreate: ( title: string, description: string, primary_photo_id: string) => photosetsCreate( title, description, primary_photo_id),
        photosetsEditMeta: ( title: string, description: string, primary_photo_id: string) => photosetsEditMeta( title, description, primary_photo_id),
        upload: () => upload(),
        getPhotos: (user_id: string) => getPhotos(user_id),
        getToken: () => getToken(),
    };
})();

