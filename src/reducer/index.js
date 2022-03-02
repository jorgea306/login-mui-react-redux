import { combineReducers } from 'redux';

import validacionReducer from './validacionReducer';
import usuarioReducer from './usuarioReducer';

export default combineReducers ({
    usuarios: usuarioReducer,
    error: validacionReducer 
});