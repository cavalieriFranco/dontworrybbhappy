import '../bootstrap/css/bootstrap.min.css';
import { Icon } from 'semantic-ui-react';
import './NavBar.css';

const NavBar = () => {
    return (
        
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdW2TPES2a7-uQLhgiyKvntWb1MUzTGYDiJg&usqp=CAU" className='imagenInicio'alt="logo" />
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="index.html">Todo para tu Bebe</a>
              <a className="nav-link" href="index.html">Para MaPadres</a>
              <a className="nav-link" href="index.html">Nosotros</a>
            </div>
          </div>
        </div>
        <Icon name='cart arrow down' size='huge'/>
      </nav>
    );
  }

export default NavBar;