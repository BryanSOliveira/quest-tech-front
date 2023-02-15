import { useEffect, useState } from 'react';

import LinkModal from '../LinkModal';
import Modal from '../Modal';

import './styles.css';
import icon from '../../assets/images/icon.svg';


function Header() {
  const [showModal, changeShowModal] = useState(false);

  useEffect(() => {
    console.log(showModal);
  }, [showModal, changeShowModal]);

  return (
    <>
      <Modal isShow={showModal} />
      <header>
        <nav>
          <ul className="main-menu">
            <li className="menu-item">
              <a href="#" aria-current="page">
                <img src={icon} />
              </a>
            </li>
            <ul className="menu">
              <li className="menu-item">
                <a href="#" className="text-white">Sobre</a>
              </li>
              <li className="menu-item">
                <a href="#" className="text-white">Instruções</a>
              </li>
              <li className="menu-item">             
                <LinkModal classNames="text-light-green" 
                           text="Entrar/Cadastrar" 
                           onClick={() => changeShowModal(true)} />
              </li>
            </ul>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;