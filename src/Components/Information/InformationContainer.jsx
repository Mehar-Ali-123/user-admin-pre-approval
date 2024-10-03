import React from 'react'

function InformationContainer(props) {
  return (
    <>
      <div className=" p-3 m-3 box-shadow radius-card ">
        <div className="row mt-0  ">
          <div className="col-md-6">
            <div className="row  data-container">
              <div className="col-md-4  p-2">
              <div className="information-card radius-card  h-100  w-100  bkg-cyan d-flex justify-content-center align-items-center">
                <img     src="../assets/icons/homeLogo.png" alt="" />
                </div>
              </div>
              <div className="col-md-8 py-2">
                <div>
                   <p className="px-0 py-1 m-0"><img src="../assets/icons/home-2.png" alt="" /> <span className="fw-semibold"  > Property Type: </span><span>{props.content}</span></p>
                   <p className="px-0 py-1 m-0"><img src="../assets/icons/businessplan.png" alt="" /> <span className="fw-semibold"  >AnnualProperty Tax:</span><span>{props.content}</span></p>
                   <p className="px-0 py-1 m-0"><img src="../assets/icons/dollar-circle.png" alt="" /> <span className="fw-semibold"  >Annual HOI: </span><span>{props.content}</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6  ">
            <div className="row  data-container">
              <div className="col-md-4  p-2"><div className="information-card radius-card   h-100  w-100   bkg-cyan d-flex justify-content-center align-items-center"><img      src="../assets/icons/dollarLogo.png" alt="" /></div></div>
              <div className="col-md-8 py-2">
                <div>
                   <p className="px-0 py-1 m-0"><img src="../assets/icons/dollar.png" alt="" /> <span className="fw-semibold">Est. Purchase Price: </span><span>{props.content}</span></p>
                   <p className="px-0 py-1 m-0"><img src="../assets/icons/%.png" alt="" /> <span className="fw-semibold">Down Payment: </span><span>{props.content}</span></p>
                   <p className="px-0 py-1 m-0"><img src="../assets/icons/home-2.png" alt="" /> <span className="fw-semibold">Occupancy Type: </span><span>{props.content}</span></p>
                </div>
              </div>
            </div>
          </div> 
        </div> 
        <div className="row mt-3 ">
        <div className="col-md-6  ">
            <div className="row  data-container">
              <div className="col-md-4 p-2"><div className="  information-card radius-card  h-100  w-100  bkg-cyan d-flex justify-content-center align-items-center"><img     src="../assets/icons/profileLogo.png" alt="" /></div></div>
              <div className="col-md-8 py-2">
                <div>
                   <p className="px-0 py-1 m-0"><img src="../assets/icons/profile.png" alt="" /> <span className="fw-semibold"> </span><span>{props.content}</span></p>
                   <p className="px-0 py-1 m-0"><img src="../assets/icons/phone.png" alt="" /> <span className="fw-semibold"> </span><span>{props.content}</span></p>
                   <p className="px-0 py-1 m-0 " ><img src="../assets/icons/mail-opened.png" alt="" /> <span className="fw-semibold"> </span><span>{props.content}</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6  ">
            <div className="row  data-container">
              <div className="col-md-4 p-2"><div className="  information-card radius-card  h-100  w-100  bkg-cyan d-flex justify-content-center align-items-center"><img     src="../assets/icons/noteBookLogo.png" alt="" /></div></div>
              <div className="col-md-8 py-2">
                <div>
                <p className="px-0 py-1 m-0"><img src="../assets/icons/report-money.png" alt="" /> <span className="fw-semibold">Loan# A1B2C3</span></p>
                   <p className="px-0 py-1 m-0"><img src="../assets/icons/eye.png" alt="" /> <span className="fw-semibold">Status:  </span><span>{props.content}</span></p>
                   <p className="px-0 py-1 m-0"><img src="../assets/icons/license.png" alt="" /> <span className="fw-semibold">Backend DTI:  </span><span>{props.content}</span></p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        </div> 
    </>
  )
}

export default InformationContainer