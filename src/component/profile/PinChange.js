import React , {useState} from 'react'

const PinChange = () => {
  const [oldpin, setOldpin] = useState('')
  const [newpin, setNewpin] = useState('')
  const [newpinCon, setNewpinCon] = useState('')
  return (
    <>
       <section className="paytoall_content">
        <div className="container">
          <div className="paytoall_prepaid">
          <h4 className="paytoall_h4">DMR Transaction</h4>
            <div className="row m-0">
              
              <div className="col-md-6 col-lg-4 col-sm-6  paytoall_tebscr">
                <input
                  type="text"
                  name="oldpin"
                  placeholder='Your Old Pin'
                  value={oldpin}
                  className="paytoall_transaction_input"
                  onChange={(e) => setOldpin(e.target.value)}
                />
              </div>
              <div className="col-md-6 col-lg-4 col-sm-6  paytoall_tebscr">
                <input
                  type="text"
                  name="newpin"
                  placeholder='New Pin'
                  value={newpin}
                  className="paytoall_transaction_input"
                  onChange={(e) => setNewpin(e.target.value)}
                />
              </div>
              <div className="col-md-6 col-lg-4 col-sm-6  paytoall_tebscr">
              <input
                  type="text"
                  name="newpinCon"
                  placeholder='Cofirem New Pin'
                  value={newpinCon}
                  className="paytoall_transaction_input"
                  onChange={(e) => setNewpinCon(e.target.value)}
                />
              </div>
              <div className="col-md-6 col-lg-4 col-sm-6  paytoall_tebscr paytoall_changepin">
                <button type="button" className="main-btn">
                  Change Pin
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PinChange