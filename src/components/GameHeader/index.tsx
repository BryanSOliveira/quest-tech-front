import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/context";

function Header() {
  const { user, setUser }: any = useContext(UserContext);

  useEffect(() => {
    if (!user && (sessionStorage.getItem("authenticatedUser") || localStorage.getItem("authenticatedUser"))) {
      const userStorage = JSON.parse(sessionStorage.getItem("authenticatedUser") || localStorage.getItem("authenticatedUser") || "");
      setUser(userStorage);
    }
  }, []);

  return (
    <header id="dashboard">
      <nav className="navbar navbar-expand-lg navbar-light p-4">
        <div className="container">
          <div className="d-flex flex-grow-1 justify-content-between" id="navbarNav">
            <ul className="navbar-nav align-items-center position-relative">
              <li className="nav-item p-4 me-3 d-flex flex-column align-items-center">
                <i className="bi bi-person-circle display-6"></i>
                {user && user.username &&
                  <span className="position-absolute bottom-0 text-white">
                    {user.username}
                  </span>
                }
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
  )
}

export default Header;