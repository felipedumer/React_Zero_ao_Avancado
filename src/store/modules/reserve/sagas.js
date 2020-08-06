import {call, put, all, takeLatest} from 'redux-saga/effects';

import api from '../../../services/api'
import {addReserveSuccess} from "./actions";

function* addToReserve (object) {
    console.log(object.id);
    const response = yield call(api.get, `trips/${object.id}`);

    yield put(addReserveSuccess(response.data));
}

export default all ([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
]);