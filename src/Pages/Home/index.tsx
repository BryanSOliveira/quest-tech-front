import computer from '../../assets/images/computer.svg';
import brandGame from '../../assets/images/brand-game.svg';

import './styles.css';
import Modal from '../../components/AccountModal';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/context';
import { Link } from 'react-router-dom';

function Home() {

  const { user }: any = useContext(UserContext);

  return (
    <>
      <main>
        <section className="container d-flex justify-content-around p-5 mt-5">
          <img src={computer} alt="Computer" className="w-25 flex-fill img-fluid" />
          <div className="d-flex flex-column align-items-center flex-fill justify-content-between">
            <h1>
              <img src={brandGame} alt="Brand Game" className="img-fluid" />
            </h1>
            <p className="text-center lead my-5 text-white">
              Venha testar e exercitar seu conhecimento <br /> fazendo nossos quizzes da área de tecnologia
            </p>
            {user ? (
              <Link to="/dashboard" className="btn btn-success">
                JOGAR AGORA
              </Link>
            ) : (
              <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#user-account">
                JOGAR AGORA
              </button>
            )}
          </div>
        </section>
      </main>
      <Modal id="user-account" />
    </>
  )
}

export default Home;