import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/context";
import { gameArea } from "../../models/gameArea";
import { sendGetGameAreas } from "../../requests/gameAreaRequest.js";

import iconArea from '../../assets/images/area-1.svg';
import { Link, useLocation } from "react-router-dom";

function GameAreas() {
  const { user }: any = useContext(UserContext);
  const { state } = useLocation();
  const gameMode = state?.gameMode;

  const [gameAreas, setGameAreas] = useState<gameArea[]>([]);

  useEffect(() => {
    if (gameAreas.length === 0) {
      sendGetGameAreas().then((response: any) => {
        if (response && response.status === 200) {
          setGameAreas(response.data);
        }
      });
    }
  }, []);

  return (
    <section className="container">
      <h2 className="text-white my-4">
        <span className="text-secondary">
          |&nbsp;
          <Link to="/dashboard" className="text-decoration-none text-secondary">
            Quizzes
          </Link>
          &nbsp;&gt;
        </span>
        {gameMode && gameMode.name &&
          <> {gameMode.name} </>
        }
      </h2>
      <div className="d-flex flex-wrap justify-content-lg-between justify-content-center row">
        {
          gameAreas.map(area => {
            return (
              <div key={area.id} className="col-md-5">
                <div className="card m-4">
                  <img src={iconArea} className="card-img-top img-fluid" alt="Imagem ilustrativa da área" />
                  <div className="card-body d-flex justify-content-between align-items-center p-4">
                    <h5 className="fw-bold">{area.name}</h5>
                    <button type="button" className="btn btn-secondary">JOGAR</button>
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

export default GameAreas;