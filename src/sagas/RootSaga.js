import { all } from 'redux-saga/effects';
import { watchTokenRequest, watchGetTokenRequest } from './TokenSaga'

function* rootSaga() {

    yield all([
        watchTokenRequest(),
        watchGetTokenRequest()
    ])

}

export default rootSaga;