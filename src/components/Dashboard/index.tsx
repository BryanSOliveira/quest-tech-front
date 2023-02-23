import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/context';

import iconArea from '../../assets/images/area-1.svg';

import './styles.css';
import { sendGetGameModes } from '../../Requests/gameModeRequest';
import { gameMode } from '../../models/gameMode';

function Dashboard() {

  const [gameModes, setGameModes] = useState<gameMode[]>([]);
  const { user, setUser }: any = useContext(UserContext);

  useEffect(() => {
    if (!user && (sessionStorage.getItem("authenticatedUser") || localStorage.getItem("authenticatedUser"))) {
      const userStorage = JSON.parse(sessionStorage.getItem("authenticatedUser") || localStorage.getItem("authenticatedUser") || "");
      setUser(userStorage);
    }

    if (gameModes.length === 0) {
      sendGetGameModes().then(response => {
        if (response && response.status === 200) {
          setGameModes(response.data);
        }
      });
    }
  }, []);

  return (
    <>
      <section className="container">
        <h2 className="text-white my-4">
          <span className="text-secondary">|</span> Quizzes
        </h2>
        <div className="d-flex flex-wrap justify-content-lg-between justify-content-center row">
          {
            gameModes.map(mode => {
              return (
                <div key={mode.id} className="col-md-4">
                  <div className="card m-2">
                    <div className="p-3">
                      <h5 className="card-title fw-bold">{mode.name}</h5>
                    </div>
                    <img src={iconArea} className="card-img-top img-fluid" alt="Imagem ilustrativa da área" />
                    <div className="card-body d-flex justify-content-center p-4">
                      <a href="#" type="button" className="text-decoration-none text-secondary">JOGAR</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
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