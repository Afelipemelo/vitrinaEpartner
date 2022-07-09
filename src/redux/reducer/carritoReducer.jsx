import {AGREGA_CARRITO,ELIMINAR_PRODUCTO_CARRITO,ELIMINAR_TODOS_PRODUCTO_CARRITO,LIMPIAR_CARRITO} from '../types/index'

export const initialState = {
    productosCarrito:[]
}
export default (state = initialState, action) =>{
    switch (action.type) {
        case AGREGA_CARRITO:{
            return{
                ...state,
                productosCarrito: action.payload
            }
        }
        case ELIMINAR_PRODUCTO_CARRITO:{
            return{
                ...state,
                productosCarrito: action.payload
            }
        }
        case LIMPIAR_CARRITO:{
            return{
                ...state,
                productosCarrito: []
            }
        }
        default:
            return state
    }
}