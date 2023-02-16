import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/request";

type Props = {
  id: string;
};

function login(username: string, password: string) {
  if(username && password) {
    axios.post(`${BASE_URL}/login`, {
      username,
      password
    })
    .then(response => {
      alert("Login successfully!")
    })
    .catch(error => {
      console.log(error);
    });
  }
}

function Modal({ id }: Props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(username, password);
  }, [username, password]);

  return (
    <div className="modal fade" id={id} tabIndex={1} aria-labelledby={id + "Label"} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-success text-center" id={id + "Label"}>Entrar</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">

            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" onChange={(e) => setUsername(e.target.value)} />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={() => login(username, password)}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;