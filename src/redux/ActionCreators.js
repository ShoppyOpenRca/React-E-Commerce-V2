import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const arrivalsLoading = () => ({
    type: ActionTypes.ARRIVALS_LOADING
});

export const addArrivals = (arrivals) => ({
    type: ActionTypes.ADD_ARRIVALS,
    payload: arrivals
});

export const fetchArrivals = () => (dispatch) => {
    dispatch(arrivalsLoading(true));

    return fetch(baseUrl + 'arrivals')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(arrivals => dispatch(addArrivals(arrivals)))
        .catch(error => dispatch(arrivalsLoading(error.message)));
}


export const categoriesLoading = () => ({
    type: ActionTypes.CATEGORIES_LOADING
});

export const addCategories = (categories) => ({
    type: ActionTypes.ADD_CATEGORIES,
    payload: categories
});

export const fetchCategories = () => (dispatch) => {
    dispatch(categoriesLoading(true));

    return fetch(baseUrl + 'categories')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(categories => dispatch(addCategories(categories)))
        .catch(error => dispatch(categoriesLoading(error.message)));
}


export const productsLoading = () => ({
    type: ActionTypes.PRODUCTS_LOADING
});

export const addProducts = (products) => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
});

export const fetchProducts = () => (dispatch) => {
    dispatch(productsLoading(true));

    return fetch(baseUrl + 'products')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(products => dispatch(addProducts(products)))
        .catch(error => dispatch(productsLoading(error.message)));
}