import React from 'react'
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";

const Modallogin = (props) => {
  return (
    <>
      <Modal
        show={props.logshow}
        onHide={props.parentcall}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="Login_modal_body">
          <h4 className="login_header">Login</h4>
          <p className="login_p">We are glad to see you again!</p>
          <input type="text" placeholder="Mobile" />
          <input type="text" placeholder="password" />

          <div className="handle_login_forgor">
            <Link to="/login" className="forgorpas">
              Forgot Password ?
            </Link>
          </div>

          <button
            type="button"
            className="main-btn_login"
            onClick={props.parentCallback}
          >
            Login
          </button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Modallogin