import {
    AGREGAR_USUARIO,
    AGREGAR_USUARIO_EXITO,
    AGREGAR_USUARIO_ERROR,
    COMENZAR_USUARIOS_CARTAS,
    DESCARGA_USUARIOS_EXITOSA,
    DESCARGA_USUARIOS_ERROR,
    OBTENER_USUARIO_ELIMINAR,
    USUARIO_ELIMINADO_EXITO,
    USUARIO_ELIMINADO_ERROR,
    OBTENER_USUARIO_EDITAR,
    USUARIO_EDITAR_EXITO,
    USUARIO_EDITAR_ERROR,
    COMENZAR_EDICION_USUARIO,
    USUARIO_EDITADO_EXITO,
    USUARIO_EDITADO_ERROR

} from '../types'

//cada reducer tiene su propio state
const initialState = {
    usuarios: [],
    error: null,
    loading: false,
    usuario: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        
        case AGREGAR_USUARIO:
            return {
                ...state,
                error: null
            }

        case AGREGAR_USUARIO_EXITO:
            return {
                ...state,
                error: null,
                usuarios: [...state.usuarios, action.payload]
            }

        case AGREGAR_USUARIO_ERROR:
            return {
                ...state,
                error: true
            }

        case COMENZAR_USUARIOS_CARTAS:
            return {
                ...state,
                loading: true,
                usuario: {}
            }

        case DESCARGA_USUARIOS_EXITOSA:
            return {
                ...state,
                usuarios: action.payload,
                loading: false,
                error: false,
                usuario: {}

            }

        case DESCARGA_USUARIOS_ERROR:
            return {
                ...state,
                usuarios: [],
                loading: false,
                error: true
            }

        case OBTENER_USUARIO_ELIMINAR:
            return {
                ...state,
                error: null
            }

        case USUARIO_ELIMINADO_EXITO:
            return {
                ...state,
                error: null,
                usuarios: state.usuarios.filter( usuario => usuario.idUsuarios !== action.payload)
            }
        case USUARIO_ELIMINADO_ERROR:
            return {
                ...state,
                error: true
            }
            
        case OBTENER_USUARIO_EDITAR:
            return {
                ...state,
                error: null
            }
        
        case USUARIO_EDITAR_EXITO:
            return {
                ...state,
                error: null,
                usuario: action.payload
            }

        case USUARIO_EDITAR_ERROR:
            return {
                ...state,
                error: true
            }

        case COMENZAR_EDICION_USUARIO:
            return {
                ...state,
                error: null
            }

        case USUARIO_EDITADO_EXITO:
            return { 
                ...state,
                error: null,
                cartas: state.cartas.map( carta => carta.idCartas === action.payload.idCartas ? carta =action.payload : carta)
            }
        
        case USUARIO_EDITADO_ERROR:
            return {
                ...state,
                error: true
            }
        
        default:
            return state;
        
            
    }
}