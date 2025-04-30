import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware(); 
//https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ? composeWithDevTools(applyMiddleware(sagaMiddleware)) : applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;


// // Cria o middleware do Saga
// const sagaMiddleware = createSagaMiddleware();

// // Aplica middlewares com suporte ao DevTools
// const middlewares = [sagaMiddleware];

// const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

// // Cria a store
// const store = createStore(rootReducer, enhancer);

// // Executa a root saga
// sagaMiddleware.run(rootSaga);

// export default store;