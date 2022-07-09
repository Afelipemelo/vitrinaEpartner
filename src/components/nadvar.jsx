import React, { useState } from "react";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { BiHomeSmile } from "react-icons/bi";
import { useDispatch,useSelector } from 'react-redux';
import { AiOutlineMan ,AiOutlineWoman} from "react-icons/ai";
import { BsCart} from "react-icons/bs";
function Navbar() {
  const { productosCarrito} = useSelector(state => state.carrito);
  const [click, setClick] = useState(false);
  const cantidad = productosCarrito.length

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            ePartner
            <i className="fas fa-code"></i>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <BiHomeSmile size={35} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/hombre"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <AiOutlineMan size={35}/>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/mujer"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <AiOutlineWoman size={35}/>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/carrito"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                  <Badge badgeContent={cantidad} color="primary">
                    <BsCart size={35}/>
                  </Badge>
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;