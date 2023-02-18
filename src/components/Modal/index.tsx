import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/context";
import { BASE_URL } from "../../utils/request";

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

      axios.post(`${BASE_URL}/login`, {
        username,
        password
      })
        .then(response => {
          const user = response.data;
          sessionStorage.setItem("authenticatedUser", JSON.stringify(user));
          setUser(user);

          if (buttonCloseModal.current) {
            buttonCloseModal.current.click();
          }

          navigate("/dashboard");
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser }: any = useContext(UserContext);

  return (
    <div className="modal fade" id={id} tabIndex={1} aria-labelledby={id + "Label"} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3 text-white">
          <div className="modal-header">
            <h5 className="modal-title text-success w-100 text-center" id={id + "Label"}>Entrar</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={buttonCloseModal}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group mt-3">
                <label htmlFor="inputEmail3" className="mb-2 lead">Usuário</label>
                <input type="text" className="form-control border-0" id="inputEmail3" placeholder="devname" onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="inputPassword3" className="mb-2 lead">Senha</label>
                <input type="password" className="form-control border-0" id="inputPassword3" placeholder="secretcode" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="d-flex justify-content-between mt-4">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Manter conectado</label>
                </div>
                <a href="#" className="text-decoration-none text-white">Esqueceu a senha?</a>
              </div>
            </form>
          </div>
          <div className="modal-footer border-0 flex-column">
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
            <a href="#" className="mt-4 text-decoration-none text-white">Não possui conta? Crie agora!</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;