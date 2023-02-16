import icon from '../../assets/images/icon.svg';

import './styles.css';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container p-2">
          <a className="navbar-brand" href="#">
            <img src={icon} alt="Game Icon" width="75%" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item m-4">
                <a className="nav-link active text-white" href="#">Sobre</a>
              </li>
              <li className="nav-item m-4">
                <a className="nav-link text-white" href="#">Instruções</a>
              </li>
              <li className="nav-item m-4">
                <a className="nav-link text-success" data-bs-toggle="modal" data-bs-target="#user-account">
                  Entrar/Cadastrar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;