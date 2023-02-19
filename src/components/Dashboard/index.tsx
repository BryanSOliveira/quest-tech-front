import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/context';

import iconArea from '../../assets/images/area-1.svg';

import './styles.css';

function Dashboard() {

  const { user, setUser }: any = useContext(UserContext);

  useEffect(() => {
    if (!user && (sessionStorage.getItem("authenticatedUser") || localStorage.getItem("authenticatedUser"))) {
      const userStorage = JSON.parse(sessionStorage.getItem("authenticatedUser") || localStorage.getItem("authenticatedUser") || "");
      setUser(userStorage);
    }
  }, []);

  return (
    <>
      <header id="dashboard">
        <nav className="navbar navbar-expand-lg navbar-light p-4">
          <div className="container">
            <div className="d-flex flex-grow-1 justify-content-between" id="navbarNav">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item me-3">
                  <i className="bi bi-person-circle display-6"></i>
                </li>
                <li className="nav-item position-relative p-4">
                  {user && user.player && user.player.level &&
                    <span className="position-absolute top-0 text-white">
                      Nível {user.player.level}
                    </span>
                  }
                  <div className="progress mt-2" style={{ width: "15rem" }}>
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                  <span className="bi bi-list display-6" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{ cursor: 'pointer' }}>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="container p-4 d-flex flex-wrap justify-content-center">
        <div className="card m-4" style={{ width: "30rem" }}>
          <img src={iconArea} className="card-img-top img-thumbnail" alt="Imagem ilustrativa da área" />
          <div className="card-body d-flex justify-content-between align-items-center p-4">
            <h5 className="card-title fw-bold">Programação</h5>
            <a href="#" className="btn btn-secondary">JOGAR</a>
          </div>
        </div>
        <div className="card m-4" style={{ width: "30rem" }}>
          <img src={iconArea} className="card-img-top img-thumbnail" alt="Imagem ilustrativa da área" />
          <div className="card-body d-flex justify-content-between align-items-center p-4">
            <h5 className="card-title fw-bold">Segurança da informação</h5>
            <a href="#" className="btn btn-secondary">JOGAR</a>
          </div>
        </div>
        <div className="card m-4" style={{ width: "30rem" }}>
          <img src={iconArea} className="card-img-top img-thumbnail" alt="Imagem ilustrativa da área" />
          <div className="card-body d-flex justify-content-between align-items-center p-4">
            <h5 className="card-title fw-bold">Banco de Dados</h5>
            <a href="#" className="btn btn-secondary">JOGAR</a>
          </div>
        </div>
        <div className="card m-4" style={{ width: "30rem" }}>
          <img src={iconArea} className="card-img-top img-thumbnail" alt="Imagem ilustrativa da área" />
          <div className="card-body d-flex justify-content-between align-items-center p-4">
            <h5 className="card-title fw-bold">Redes</h5>
            <a href="#" className="btn btn-secondary">JOGAR</a>
          </div>
        </div>
      </section>

      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">
            {user && user.name &&
              <span>
                {user.name}
              </span>
            }
          </h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">

        </div>
      </div>

    </>
  )
}

export default Dashboard;