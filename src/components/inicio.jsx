import React,{Fragment,useState,useEffect}from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { HombreInventario } from '../Inventario/HombreInventario';
import { useDispatch , useSelector} from 'react-redux'
import {agregarProductoCarrito} from '../redux/action/carritoAction'
import Checkbox from '@mui/material/Checkbox';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import {  BiMenu} from "react-icons/bi";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
{
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://imgs.search.brave.com/n6KELs3vsESnOsCqfh74zICpjzaE-IF6V8EROOhjyNk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vd3d3Lm9m/ZXJ0YXNhaG9yYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMDUvU09MTy1I/T1ktNDAtT0ZGLWVu/LWNhbHphZG8tcGFy/YS1kYW1hcy1jby10/dS1DUkVESVNJTUFO/LTA4bWF5MTUuanBn/P2ZpdD0xNTA3JTJD/MTg3NSZzc2w9MQ',
  },
  {
    label: 'Bird',
    imgPath:
      'https://imgs.search.brave.com/00IulPGwDE-F9_d7yBesAaHMnptjLj4HVhTAKDlZkRc/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9jYXph/b2ZlcnRhcy5jb20u/YXIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMDkvRGFmaXRp/LXRpZW5kYS1vbmxp/bmUtZGVzY3VlbnRv/cy1pbmR1bWVudGFy/aWEtY2FsemFkby1k/ZXBvcnRpdm8uanBn',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://imgs.search.brave.com/PIrwicCypavL8svCjodBvUjNIaR4s-0V5SwHCz6q4D0/rs:fit:680:680:1/g:ce/aHR0cHM6Ly9jYXph/b2ZlcnRhcy5jb20u/YXIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMDgvRGFmaXRp/LWRlc2N1ZW50b3Mt/Y2FsemFkby5wbmc',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://imgs.search.brave.com/j4LxNSAJQD7jkwknmkHhPBDSk-mcn1gGV65iczbIiDk/rs:fit:797:1181:1/g:ce/aHR0cHM6Ly9pMS53/cC5jb20vd3d3Lm9m/ZXJ0YXNhaG9yYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDYvWmFwYXRp/bGxhcy1kZXBvcnRp/dmFzLXBhcmEtREFN/QS1tYXJjYS1QVU1B/LTIwMjAuanBnP2Zp/dD03OTclMkMxMTgx/JnNzbD0x',
  },
];
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
const Inicio = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 5
    const dispatch = useDispatch()
    const { productosCarrito} = useSelector(state => state.carrito);
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  
    const [producto, setProducto] = useState([])
    useEffect(()=>{
            const productoDos = () =>{
                const productoDos = HombreInventario.filter(teniCasual => teniCasual.categoria === 2)
                while(productoDos.length != 4){
                    productoDos.pop()
                }
                setProducto(productoDos)
            }
            productoDos()
    },[])
    
    const productoUno = () =>{
        const productoUno = HombreInventario.filter(teniDeportivo => teniDeportivo.categoria === 1)
        while(productoUno.length != 4){
            productoUno.pop()
        }
        setProducto(productoUno)
    }
    const productoDos = () =>{
        const productoDos = HombreInventario.filter(teniCasual => teniCasual.categoria === 2)
        while(productoDos.length != 4){
            productoDos.pop()
        }
        setProducto(productoDos)
    }
    const productoTres = () =>{
        const productoTres = HombreInventario.filter(sandalia => sandalia.categoria === 3)
        while(productoTres.length != 4){
            productoTres.pop()
        }
        setProducto(productoTres)
    }
    const productoCuatro = () =>{
        const productoCuatro = HombreInventario.filter(formal => formal.categoria === 4)
        while(productoCuatro.length != 4){
            productoCuatro.pop()
        }
        setProducto(productoCuatro)
    }
    const productoCinco = () =>{
        const productoCinco = HombreInventario.filter(bota => bota.categoria === 5)
        while(productoCinco.length != 4){
            productoCinco.pop()
        }
        setProducto(productoCinco)
    }
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    }
    const calcular = (valor) =>{
        const descuento = (10 * valor)/100
        const resultado = valor - descuento
        return resultado
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    const alCarrito = (producto) =>{
        productosCarrito.push(producto)
        dispatch(agregarProductoCarrito(productosCarrito))
        setOpen(true);
    }
    const matches = useMediaQuery(theme.breakpoints.up('900'));
    return ( 
        <Fragment>
        {matches ?  <>   <Box sx={{ display:'flex', justifyContent:'center', marginTop:"50px"}} >
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
            <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
                <Box
                component="img"
                sx={{
                    height: 400,
                    maxWidth: 600,
                    width: '100%',
                    overflow: 'hidden',
                    marginLeft:'25%'
                }}
                src={step.imgPath}
                alt={step.label}

              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
        </Box>
      <Box sx={{ display:'flex', justifyContent:'center'}}>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        color="primary"
      />
            </Box> </>: null}
            <div className='titulo'> <h1> HOMBRE</h1></div>
        {matches ?<div className='vitrina'>
                <Grid container my={4} spacing={2} className='opciones'>
                    <Grid item xs={2} sm={2} md={2} lg={2}  >
                        <button className='opcion-button' onClick={productoDos}>TENIS CASUALES</button>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} >
                        <button className='opcion-button' onClick={productoTres}>SANDALIAS</button>

                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} >
                    
                        <button className='opcion-button' onClick={productoCuatro}>ZAPATOS FORMALES</button>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} >
                        <button className='opcion-button' onClick={productoCinco}>BOTAS</button>
                    
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} >
                        <button className='opcion-button'onClick={productoUno}>TENIS DEPORTIOS</button>
                    
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                </Grid>
            </div> :  <Box sx={{  transform: 'translateZ(0px)' , zIndex:2, position:'absolute',right:'0', }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        direction='down'
        icon={<BiMenu/>}
      >
          <SpeedDialAction
           tooltipTitle="CASUAL"
           tooltipOpen
           onClick={productoDos}
          />
          <SpeedDialAction
           tooltipTitle="SANDALIA"
           tooltipOpen
           onClick={productoTres}
          />
          <SpeedDialAction
           tooltipTitle="FORMAL"
           tooltipOpen
           onClick={productoCuatro}
          />
          <SpeedDialAction
           tooltipTitle="BOTAS"
           tooltipOpen
           onClick={productoCinco}
          />
          <SpeedDialAction
           tooltipTitle="DEPORTIVOS"
           tooltipOpen
           onClick={productoUno}
          />
      </SpeedDial>
    </Box>}    
            
            <div className='producto' >
            <Grid container  >{producto.map((producto)=>(
                    <Grid item xs={12} sm={6} md={4} lg={3} className="container-producto" >
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
                                <button className='boton-agregar' onClick={()=> alCarrito(producto)}>AGREGAR PRODUCTO</button>
                            </div>
                        </Box>
                    </Grid>
               
            ))} </Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Se agrego con exito!
        </Alert>
      </Snackbar>
            </div>
            <div className='titulo'> <h1> DAMA</h1></div>
            <div className='producto' >
            <Grid container  >{producto.map((producto)=>(
                    <Grid item xs={12} sm={6} md={4} lg={3} className="container-producto" >
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
                                <button className='boton-agregar' onClick={()=> alCarrito(producto)}>AGREGAR PRODUCTO</button>
                            </div>
                        </Box>
                    </Grid>
               
            ))} </Grid>
            </div>
        </Fragment>
     ); 
}
 
export default Inicio;