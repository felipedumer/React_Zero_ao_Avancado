import {select, call, put, all, takeLatest} from 'redux-saga/effects';

import api from '../../../services/api'
import {addReserveSuccess, updateAmountSuccess, updateReserveAmount} from "./actions";

import historia from "../../../services/history";

function* addToReserve (object) {
    const tripExists = yield select(
      state => state.reserve.find(trip => trip.id === object.id)
    );

    const myStock = yield call(api.get, `/stock/${object.id}`);

    const stockAmount = myStock.data.amount;

    const currentStock = tripExists ? tripExists.amount : 0;

    const amount = currentStock + 1;

    if (amount > stockAmount) {
        alert('Quantidade máxima ating.');
        return;
    }

    if (tripExists) {

        yield put(updateAmountSuccess(object.id, amount));
    } else {
        const response = yield call(api.get, `trips/${object.id}`);
        const data = {
            ...response.data,
            amount: 1
        }
        yield put(addReserveSuccess(data));

        historia.push('/reservas');
    }

}

function* updateAmount({id, amount}) {
    if(amount <= 0) return;

    const myStock = yield call(api.get, `/stock/${id}`);

    const stockAmount = myStock.data.amount;

    if (amount > stockAmount) {
        alert('Quantidade máxima atingida.');
        return;
    }

    yield put(updateAmountSuccess(id, amount));
}

export default all ([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve),
    takeLatest('UPDATE_RESERVE_REQUEST', updateAmount)
]);