import rootReducer from './reducer'
import { 
    createStore, 
    applyMiddleware, 
    compose
} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const saga = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(saga)
    )
)

saga.run(rootSaga);

export default store