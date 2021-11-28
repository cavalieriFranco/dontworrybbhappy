import '../bootstrap/css/bootstrap.min.css';
import { Icon } from 'semantic-ui-react';
import './NavBar.css';

import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdW2TPES2a7-uQLhgiyKvntWb1MUzTGYDiJg&usqp=CAU" className='imagenInicio'alt="logo" />
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link" >Todo para tu Bebe</Link>
              <Link to="detail" className="nav-link" >Detalle</Link>
              <Link to="/about" className="nav-link">Nosotros</Link>
            </div>
          </div>
        </div>
        <Icon name='cart arrow down' size='huge'/>
      </nav>
    );
  }

export default NavBar;