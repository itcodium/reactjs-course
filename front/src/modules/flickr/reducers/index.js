import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../../../App.exports';

const flickr = createSlice({
    name: 'flickr',
    initialState: {
        data: {},
        status: STATUS.IDLE,
        error: null
    },
    reducers: {
        init(state, action) {
            return Object.assign({}, state, {
                data: action.payload || {},
                error: null,
                status: STATUS.IDLE
            });
        },
        resetStatus(state) {
            return Object.assign({}, state, {
                status: STATUS.IDLE
            });
        },
        fetchPhotos(state) {
            console.log("fetchPhotos")
            return Object.assign({}, state, {
                status: STATUS.LOADING
            });
        },
        success(state, action) {
            console.log("STATUS.SUCCESS: ", action)
            return Object.assign({}, state, {
                data: action.payload,
                error: null,
                status: STATUS.SUCCESS
            });
        },
        error: (state, action) => {
            return Object.assign({}, state, {
                error: action.payload,
                status: STATUS.ERROR
            });
        },
    }
}) 

export const { init, resetStatus, error, fetchPhotos, success } = flickr.actions;
export const flickrState = (state) => state.flickr;
export default flickr.reducer; 