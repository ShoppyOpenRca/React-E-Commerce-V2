import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Arrivals } from './arrivals';
import { Products } from './products';
import { Categories } from './categories';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            arrivals: Arrivals,
            products: Products,
            categories: Categories
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}