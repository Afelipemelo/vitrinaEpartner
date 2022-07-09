import {AGREGA_CARRITO,ELIMINAR_PRODUCTO_CARRITO,LIMPIAR_CARRITO} from '../types/index'

export function agregarProductoCarrito(data){
     return (dispatch) => {
          localStorage.setItem("carrito", JSON.stringify(data))  
          dispatch(agregarProducto(data))          
     }
     
}

const agregarProducto = data => ({
     type : AGREGA_CARRITO,
     payload : data
})
const eliminarProducto = data => ({
     type : ELIMINAR_PRODUCTO_CARRITO,
     payload : data
})

const limpiarCarrito = () => ({
     type : LIMPIAR_CARRITO
})