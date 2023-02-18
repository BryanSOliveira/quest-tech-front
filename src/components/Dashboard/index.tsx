import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/context';
import './styles.css';

function Dashboard() {

  const { user, setUser }: any = useContext(UserContext);

  useEffect(() => {
    if (!user && (sessionStorage.getItem("authenticatedUser") || localStorage.getItem("authenticatedUser"))) {
      const userStorage = sessionStorage.getItem("authenticatedUser") || localStorage.getItem("authenticatedUser");
      setUser(userStorage);
    }
  }, []);

  return (
    <>
      <header id="dashboard">
        <nav className="navbar navbar-expand-lg navbar-light p-4">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item me-3">
                  <i className="bi bi-person-circle display-6"></i>
                </li>
                <li className="nav-item">
                  <div className="progress" style={{ width: "15rem" }}>
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

      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">
            {user && user.name &&
              <span>
                Olá, {user.name}!
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