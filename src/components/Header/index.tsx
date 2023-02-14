import './styles.css';
import icon from '../../assets/images/icon.svg';

function Header() {
  return (
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
              <a href="#" className="text-light-green">Entrar/Cadastrar</a>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  )
}

export default Header;