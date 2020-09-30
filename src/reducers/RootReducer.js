  
import { combineReducers } from 'redux'
import TokenReducer from './TokenReducer'

const allReducers = combineReducers({

    TokenReducer: TokenReducer,

})

const rootReducer = (state,action) => {

    return allReducers(state,action);

}

export default rootReducer;