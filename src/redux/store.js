import {createStore} from 'redux'

import rootReducer from './reducers'

function configureStore(rootReducer) {
    return createStore(rootReducer, undefined, undefined)
}

export const store = configureStore(rootReducer)
