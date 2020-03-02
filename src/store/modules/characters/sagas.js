import { call, put, all, takeLatest } from 'redux-saga/effects';

import md5 from 'js-md5';

import { charactersSuccess, charactersFailure } from './actions';

import api from '../../../services/api';
import history from '../../../services/history';

export function* getCharacters({ payload }) {
    try {
        const { privateKey, publicKey, offset } = payload;

        console.log('offset', offset);

        const timestamp = Number(new Date());
        const hash = md5.create();
        hash.update(timestamp + privateKey + publicKey);

        const response = yield call(api, {
            method: 'get',
            url: `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&limit=5&offset=${offset}&hash=${hash.hex()}`,
        });

        const auth = {
            hash: hash.hex(),
            timestamp,
            publicKey,
            privateKey,
        };

        yield put(charactersSuccess(response.data.data, auth, offset));
        history.push('/main');
    } catch (err) {
        yield put(charactersFailure());
    }
}

export default all([takeLatest('@characters/REQUEST', getCharacters)]);
