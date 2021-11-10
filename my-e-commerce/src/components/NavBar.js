import '../bootstrap/css/bootstrap.min.css';

function NavBar() {
    return (
        
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdW2TPES2a7-uQLhgiyKvntWb1MUzTGYDiJg&usqp=CAU" alt="logo" />
        <div class="container-fluid">
          <a class="navbar-brand" href="">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="">Todo para tu Bebe</a>
              <a class="nav-link" href="">Para MaPadres</a>
              <a class="nav-link" href="">Nosotros</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }

export default NavBar;