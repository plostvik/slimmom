import { createReducer } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';
import userActions from '../user/userActions';
const {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  refreshRequest,
  refreshSuccess,
  refreshError,
  clearError,
} = { ...authActions };

const {
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  getDailyRateRequest,
  getDailyRateSuccess,
  getDailyRateError,
  deleteEatenProductRequest,
  deleteEatenProductSuccess,
  deleteEatenProductError,
  addProductRequest,
  addProductSuccess,
  addProductError,
  getProductsRequest,
  getProductsSuccess,
  getProductsError,
  setCurrentDay,
  getDailyRateWithIdRequest,
  getDailyRateWithIdSuccess,
  getDailyRateWithIdError,
} = userActions;

const error = createReducer(null, {
  [loginError]: (state, { payload }) => payload.message,
  [loginRequest]: () => null,
  [registerError]: (state, { payload }) => payload.message,
  [registerRequest]: () => null,
  [logoutError]: (state, { payload }) => payload.message,
  [logoutRequest]: () => null,
  [refreshRequest]: (state, { payload }) => payload.message,
  [refreshError]: () => null,
  [getCurrentUserError]: (state, { payload }) => payload.message,
  [getCurrentUserRequest]: () => null,
  [getProductsError]: (state, { payload }) => payload.message,
  [getProductsRequest]: () => null,
  [getDailyRateError]: (state, { payload }) => payload.message,
  [getDailyRateRequest]: () => null,
  [getDailyRateWithIdError]: (state, { payload }) => payload.message,
  [getDailyRateWithIdRequest]: () => null,
  [addProductError]: (state, { payload }) => payload.message,
  [getProductsRequest]: () => null,
  [clearError]: () => null,
  [refreshError]: (state, { payload }) => payload.message,
});

const loading = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
  [refreshRequest]: () => true,
  [refreshSuccess]: () => false,
  [refreshError]: () => false,
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
  [getProductsRequest]: () => true,
  [getProductsSuccess]: () => false,
  [getProductsError]: () => false,
  [getDailyRateRequest]: () => true,
  [getDailyRateSuccess]: () => false,
  [getDailyRateError]: () => false,
  [getDailyRateWithIdRequest]: () => true,
  [getDailyRateWithIdSuccess]: () => false,
  [getDailyRateWithIdError]: () => false,
  [deleteEatenProductRequest]: () => true,
  [deleteEatenProductSuccess]: () => false,
  [deleteEatenProductError]: () => false,
  [addProductRequest]: () => true,
  [addProductSuccess]: () => false,
  [addProductError]: () => false,
  [setCurrentDay]: () => false,

  // [clearError]: () => false,
});

export { loading, error };
