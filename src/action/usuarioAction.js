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

import clienteAxios from '../config/axios';

//Crear una nueva carta
export function crearNuevoUsuarioAction (usuario) {
    return (dispatch) => {
        dispatch(nuevoUsuario())

        //Insertar en la API
        clienteAxios.post('/', usuario)
            .then( respuesta => {
                console.log(respuesta);
                dispatch(agregarUsuarioExito(usuario))
            })
            .catch( error => {
                console.log(error);
                dispatch(agregarUsuarioError())
            })
    }
}


export const nuevoUsuario = () => ({
    type: AGREGAR_USUARIO
});

export const agregarUsuarioExito = carta => ({
    type: AGREGAR_USUARIO_EXITO,
    payload: carta
})

export const agregarUsuarioError = () => ({
    type: AGREGAR_USUARIO_ERROR
})


//Obtener Listado de Cartas (COnsultar API)
export function obtenerUsuarioAction() {
    return (dispatch) => {
        dispatch(obtenerUsuarioComienzo())

        //Consultar la API
        clienteAxios.get('/')
            .then( respuesta => {
                //console.log(respuesta);
                dispatch(descargaUsuarioExitosa(respuesta.data))
            })
            .catch( error => {
                console.log(error);
                dispatch(descargaUsuarioError())
            })
        
    }
}

export const obtenerUsuarioComienzo = () => ({
    type: COMENZAR_USUARIOS_CARTAS
})

export const descargaUsuarioExitosa = usuario => ({
    type:DESCARGA_USUARIOS_EXITOSA,
    payload: usuario
})

export const descargaUsuarioError =() => ({
    type:DESCARGA_USUARIOS_ERROR
})


//Funcion que elimina una carta en especifico 
export function borrarUsuarioAction (id) {
    return(dispatch) => {
        dispatch(obtenerUsuarioEliminar());

        //Eliminar en la API
        clienteAxios.patch(`/${id}`)
            .then(respuesta => {
                //console.log(respuesta);
                dispatch(eliminarUsuarioExito(id))
            })
            .catch(error => {
                dispatch(eliminarUsuarioError())
                console.log(error);
            })
    }
}

export const obtenerUsuarioEliminar = () => ({
    type: OBTENER_USUARIO_ELIMINAR
})

export const eliminarUsuarioExito = id => ({
    type: USUARIO_ELIMINADO_EXITO,
    payload: id
})

export const eliminarUsuarioError = () => ({
    type: USUARIO_ELIMINADO_ERROR
})


//Obtener la carta a editar
export function obtenerUsuarioEditarAction(id) {
    return (dispatch) => {
        dispatch(obtenerUnUsuarioAction());

        //Obtener producto de la api
        clienteAxios.get(`/${id}`)
            .then(respuesta => {
                // console.log(respuesta.data);
                dispatch( obtenerUsuarioEditarExito((respuesta.data)))
            })
            .catch(error => {
                console.log(error);
                dispatch(obtenerUsuarioEditarError())
            })
    }
}

export const obtenerUnUsuarioAction = () => ({
    type: OBTENER_USUARIO_EDITAR
})

export const obtenerUsuarioEditarExito = carta => ({
    type: USUARIO_EDITAR_EXITO,
    payload: carta
})

export const obtenerUsuarioEditarError = () => ({
    type: USUARIO_EDITAR_ERROR
})


//Modifica una Carta en la API y state
export function editarUsuarioAction (usuario, id) {
    return (dispatch) => {
        dispatch(comenzarEdicionUsuario())

        //Modificar el producto de la API
        clienteAxios.put(`/${id}`, usuario)
            .then( respuesta => {
                console.log(`/${id}`);
                console.log("respuesta");
                console.log(usuario);
                dispatch(editarUsuarioExito(usuario));
            })
            .catch(error => {
                console.log(error);
                dispatch(editarUsuarioError())
            })
    }
}

export const comenzarEdicionUsuario = () => ({
    type: COMENZAR_EDICION_USUARIO
})

export const editarUsuarioExito = usuario => ({
    type: USUARIO_EDITADO_EXITO,
    payload: usuario
})

export const editarUsuarioError = () => ({
    type: USUARIO_EDITADO_ERROR
})