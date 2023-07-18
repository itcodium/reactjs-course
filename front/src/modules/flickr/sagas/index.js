import { takeLatest } from 'redux-saga/effects';
import {
    fetchPhotos,
    success,
    error,
} from '../reducers/index';
import SagaCall from '../../saga.call';
import { FlickerApi } from '../../../libs/flickr/index';
const saga = "flickr";

console.log("FlickerApi", FlickerApi)
FlickerApi.setApiKey({
    key: "adca6c55b13c4ee2e7600beb0d6ecc67",
    secret: "533826e94c381883"
});

const access_token = "fullname=&oauth_token=72157720888603368-73406a4cdb9f2656&oauth_token_secret=473d959a71a61986&user_nsid=32054006%40N08&username=jmill77";
FlickerApi.setToken(access_token);

function* sGetPhotos() {
    const URL = FlickerApi.getPhotos(FlickerApi.getToken().user_nsid);
    console.log("FlickerApi.getToken(): ", FlickerApi.getToken().user_nsid)
    yield SagaCall(
        { saga, success: success.type, error }, URL, "GET");
}

export function* flickr() {
    console.log("SAGA flickr");
    yield takeLatest(fetchPhotos, sGetPhotos);

}