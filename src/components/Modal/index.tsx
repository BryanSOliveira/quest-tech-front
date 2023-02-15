import './styles.css';
import closeModal from '../../assets/images/close-modal.svg';

type Props = {
  isShow: boolean;
}

function Model({ isShow } : Props) {
  if(isShow) {
    return (
      <div className="modal">
        <div className="modal-content">
          <header>
            <h2>Entrar</h2>
          </header>
          <hr />
          <section>
            <div>
              <h3>Usuário</h3>
              <input type="text" placeholder="username"/>
            </div>
            <div>
              <h3>Senha</h3>
              <input type="password" placeholder="password"/>
            </div>
            <div className="options">
              <div>
                <input type="checkbox" /> Lembrar de mim
              </div>
              <div>
                <a href="#">Esqueceu a senha?</a>
              </div>
            </div>
          </section>
          <footer>
            <div>
              <button>JOGAR AGORA</button>
            </div>
            <div>
              <p>Não possui conta? Crie agora!</p>
            </div>
          </footer>
        </div>
      </div> 
    )
  } else {
    return null;
  }
}

export default Model;