import React,{useState} from "react";
import Form from "react-bootstrap/Form";
const Profile = () => {
  const [statusState, setStatusState] = useState(false);
  console.log(statusState)
  return (
    <>
      <section className="paytoall_content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="paytoall_prepaid_contact">
                <h4>General Details</h4>
                <hr />
                <div className="row">
                  <div className="col-md-4  col-6">
                    <p>Display Name </p>
                  </div>
                  <div className="col-md-6 col-6">
                    <p >Nilesh Sutariya</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4  col-6">
                    <p>User Name </p>
                  </div>
                  <div className="col-md-6 col-6">
                    <p >paytoall</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4  col-6">
                    <p>Address </p>
                  </div>
                  <div className="col-md-6 col-6">
                    <p >Surat</p>
                  </div>
                </div>
                <hr />
                <h4>Contact Details</h4>
                <hr />
                <div className="row">
                  <div className="col-md-4  col-6">
                    <p>Email </p>
                  </div>
                  <div className="col-md-6 col-6">
                    <p ></p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4  col-6">
                    <p>Contact No</p>
                  </div>
                  <div className="col-md-6 col-6">
                    <p > 9426680383</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="paytoall_contact_right">
                <h4>Login Details</h4>
                <hr />
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-6">
                    <p>Moblie APP Login </p>
                  </div>
                  <div className="col-md-8 col-sm-8 col-6">
                    <p >
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        onChange={() =>
                          setStatusState((prevCheck) => !prevCheck)
                        }
                        value={statusState}
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4 col-sm-4  col-6">
                    <p>Login ID</p>
                  </div>
                  <div className="col-md-8 col-sm-8 col-6">
                    <p > </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-6">
                    <p>Old Password</p>
                  </div>
                  <div className="col-md-8 col-sm-8 col-6">
                    <p >
                      <input
                        type="text"
                        name="oldpin"
                        placeholder="Your Old Pin"
                        // value={oldpin}
                        className="paytoall_transaction_input"
                        // onChange={(e) => setOldpin(e.target.value)}
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-6">
                    <p>New Password</p>
                  </div>
                  <div className="col-md-8 col-sm-8 col-6">
                    <p >
                      <input
                        type="text"
                        name="oldpin"
                        placeholder="Your new Pin"
                        // value={oldpin}
                        className="paytoall_transaction_input"
                        // onChange={(e) => setOldpin(e.target.value)}
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-6">
                    <p>Retype Password</p>
                  </div>
                  <div className="col-md-8 col-sm-8 col-6">
                    <p >
                      <input
                        type="text"
                        name="oldpin"
                        placeholder="Your retype Pin"
                        // value={oldpin}
                        className="paytoall_transaction_input"
                        // onChange={(e) => setOldpin(e.target.value)}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
