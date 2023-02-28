import { useEffect, useState } from 'react';

import iconArea from '../../assets/images/area-1.svg';

import './styles.css';
import { sendGetGameModes } from '../../Requests/gameModeRequest';
import { gameMode } from '../../models/gameMode';
import { Link } from 'react-router-dom';

function Dashboard() {

  const [gameModes, setGameModes] = useState<gameMode[]>([]);

  useEffect(() => {
    if (gameModes.length === 0) {
      sendGetGameModes().then((response: any) => {
        if (response && response.status === 200) {
          setGameModes(response.data);
        }
      });
    }
  }, []);

  return (
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
                    {mode.singleplayer ? (
                      <Link to="/singleplayer" state={{gameMode: mode}}  className="text-decoration-none text-secondary">
                        JOGAR (is singleplayer)
                      </Link>
                    ) : (
                      <a href="#" type="button" className="text-decoration-none text-secondary">JOGAR</a>
                    )}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Dashboard;