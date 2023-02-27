import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/context";
import sendPostLogin from "../../requests/loginRequest";
import sendPostRegister from "../../requests/registerRequest";

import './styles.css';

type Props = {
  id: string;
};

function Modal({ id }: Props) {

  const buttonCloseModal = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate();

  const login = (username: string, password: string) => {
    if (username && password) {
      setLoading(true);

      sendPostLogin(username, password).then((response: any) => {
        if (response && response.status === 200) {
          const user = response?.data;
          setUser(user);

          if (keepConnected) {
            localStorage.setItem("authenticatedUser", JSON.stringify(user));
          } else {
            sessionStorage.setItem("authenticatedUser", JSON.stringify(user));
          }

          if (buttonCloseModal.current) {
            buttonCloseModal.current.click();
          }

          navigate("/dashboard");
        }
      })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const register = (personName: string, userEmail: string, username: string, password: string) => {
    setLoading(true);

    sendPostRegister(personName, userEmail, username, password).then((response: any) => {
      if (response && response.status === 201) {
        login(username, password);
      }
    });
  };

  const [personName, setPersonName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [keepConnected, setKeepConnected] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loginMode, setLoginMode] = useState(true);

  const { setUser }: any = useContext(UserContext);

  return (
    <div className="modal fade" id={id} tabIndex={1} aria-labelledby={id + "Label"} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3 text-white">
          <div className="modal-header">
            <h5 className="modal-title text-success w-100 text-center" id={id + "Label"}>
              {loginMode ? (
                'Entrar'
              ) : (
                'Cadastrar'
              )}
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={buttonCloseModal}></button>
          </div>
          <div className="modal-body">
            {loginMode ? (
              <form>
                <div className="form-group mt-3">
                  <label htmlFor="username" className="mb-2 lead">Usuário</label>
                  <input type="text" className="form-control border-0" id="username" placeholder="devname" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="password" className="mb-2 lead">Senha</label>
                  <input type="password" className="form-control border-0" id="password" placeholder="secretcode" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="keepConnected" onChange={(e) => setKeepConnected(e.target.checked)} />
                    <label className="form-check-label" htmlFor="keepConnected">Manter conectado</label>
                  </div>
                  <a href="#" className="text-decoration-none text-white">Esqueceu a senha?</a>
                </div>
              </form>

            ) : (
              <form>
                <div className="form-group mt-3">
                  <label htmlFor="name" className="mb-2 lead">Nome</label>
                  <input type="text" className="form-control border-0" id="name" placeholder="Quest Tech" onChange={(e) => setPersonName(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="email" className="mb-2 lead">Email</label>
                  <input type="email" className="form-control border-0" id="email" placeholder="questtech@dev.com" onChange={(e) => setUserEmail(e.target.value)} />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="username" className="mb-2 lead">Usuário</label>
                  <input type="text" className="form-control border-0" id="username" placeholder="questtech" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="password" className="mb-2 lead">Senha</label>
                  <input type="password" className="form-control border-0" id="password" placeholder="secretcode" onChange={(e) => setPassword(e.target.value)} />
                </div>
              </form>
            )}

          </div>
          <div className="modal-footer border-0 flex-column">
            {loginMode ? (
              <>
                <button type="button" className="btn btn-success mt-2" onClick={() => login(username, password)}>
                  JOGAR AGORA
                  {loading &&
                    <span>
                      &nbsp;
                      <div className="spinner-border spinner-border-sm text-center" role="status">
                      </div>
                    </span>
                  }
                </button>
                <a type="button" className="mt-4 text-decoration-none text-white" onClick={() => setLoginMode(false)}>
                  Não possui conta? Crie agora!
                </a>
              </>
            ) : (
              <>
                <button type="button" className="btn btn-success mt-2" onClick={() => register(personName, userEmail, username, password)}>
                  CRIAR CONTA
                  {loading &&
                    <span>
                      &nbsp;
                      <div className="spinner-border spinner-border-sm text-center" role="status">
                      </div>
                    </span>
                  }
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;