import React, { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const Carrito = () => {
    const { productosCarrito} = useSelector(state => state.carrito);          
    const [poductosCarritos,setPoductosCarritos] = useState([])
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    }
    const calcular = (valor) =>{
        const descuento = (10 * valor)/100
        const resultado = valor - descuento
        return resultado
    }
    useEffect(()=>{
        setPoductosCarritos((JSON.parse(localStorage.getItem('carrito'))))
    },[])

    return ( 
        <>
        { poductosCarritos ?   
        <div className='producto' >
            <h1 className='titulo'> carrito</h1>
        <Grid container  >{poductosCarritos.map((producto)=>(
                <Grid item xs={6} sm={6} md={4} lg={3} className="container-producto" >
                    <Box key={producto.titulo} className="container-box" >
                        <div className="container-card-imagen">
                            <img src={producto.img} width={300} height={240} className="imagen-producto"/>
                            {producto.nuevo ? <h4 className="etiqueta-nuevo-descuento">nuevo</h4> : <h4 className="etiqueta-nuevo-descuento">-10%</h4>}
                            <span className="etiqueta-favoritos" > <Checkbox  onChange={handleChange} icon={<AiOutlineStar size={30}/>} checkedIcon={<AiFillStar size={30} color='yellow'/>}/></span>
                        </div>
                        <div className='talla'> 
                            <h3>TALLA</h3>
                            <h4 className='tallas'>{producto.talla}</h4>
                        </div>
                        <div className="container-card-descripcion">
                            <h3>{producto.titulo}</h3>
                            <h5>{producto.genero}</h5>
                            {producto.nuevo ? <h3> $ {producto.precio}</h3> :<> <h5 className='descuento'>$ {producto.precio}</h5> <h3>$ {calcular(producto.precio)}</h3></> }
                        </div>
                        <div className='contenedor-boton'>
                            <button className='boton-agregar' >AGREGAR PRODUCTO</button>
                        </div>
                    </Box>
                </Grid>
           
        ))} </Grid>
      
        </div> : <h1 className='titulo'>Aun no agrega produtos a su carrito</h1>}
      
        </>
     );
}
 
export default Carrito;