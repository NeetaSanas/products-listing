import { createAction, props } from "@ngrx/store";
import { User } from "./user.model";

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login Success';
export const LOGIN_FAIL = '[auth page] login Fail';

export const SIGNUP_START = '[auth page] signup start';
export const SIGNUP_SUCCESS = '[auth page] signup Success';
export const UPDATE_USER_ACTION = '[signup page] update user';

export const UPDATE_SUCCESS = '[auth page] update Success';

export const loginStart = createAction(
    LOGIN_START,
    props<{ email: string; password: string }>()
  );
  export const loginSuccess = createAction(
    LOGIN_SUCCESS,
    props<{ user: User; redirect: boolean }>()
  );
  
export const signupStart = createAction(
  SIGNUP_START,
  props<{ 
    firstname: string; 
    lastname: string; 
    contact: string; 
    email: string; 
    password: string;
    retype_password: string; 
  }>()
);

export const updateUser = createAction(UPDATE_USER_ACTION, props<{user:User}>());

export const signupSuccess = createAction(
  SIGNUP_SUCCESS,
  props<{ user: User }>()
);

export const updateUserSuccess = createAction(
  UPDATE_SUCCESS,
  props<{ user: User }>()
);
  