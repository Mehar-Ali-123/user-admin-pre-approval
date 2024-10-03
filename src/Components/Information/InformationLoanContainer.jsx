import React from 'react'

function InformationLoanContainer(props) {
    return (
        <>
            <div className=" p-3 m-3 box-shadow radius-card ">
                <div className="row mt-0  ">
                    <div className="col-md-6">
                        <div className="row  data-container">
                            <div className="col-md-4  p-2">
                                <div className="information-card radius-card  h-100  w-100  bkg-cyan d-flex justify-content-center align-items-center">
                                    <img src="../assets/icons/homeLogo.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-8 py-2 d-flex align-items-center">
                                <div>
                                    <p className="px-0 py-1 m-0"><img src="../assets/icons/home.png" alt="" /> <span className="fw-semibold"  > Address:</span><span>{props.content}</span></p>
                                    <p className="px-0 py-1 m-0"><img src="../assets/icons/home-2.png" alt="" /> <span className="fw-semibold"  >Occupancy:</span><span>{props.content}</span></p>
                                    <p className="px-0 py-1 m-0"><img src="../assets/icons/fileSimle.png" alt="" /> <span className="fw-semibold"  >Purchase</span><span>{props.content}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  ">
                        <div className="row  data-container">
                            <div className="col-md-4  p-2"><div className="information-card radius-card   h-100  w-100   bkg-cyan d-flex justify-content-center align-items-center"><img src="../assets/icons/dollarLogo.png" alt="" /></div></div>
                            <div className="col-md-8 py-2 d-flex align-items-center  pe-0 me-0">
                                <div className="row w-100 d-flex align-items-center justify-content-between flex-wrap  pe-0 me-0">
                                    <div className="w-auto">
                                        <div>
                                            <p className="px-0 py-1 m-0"><img src="../assets/icons/report-money.png" alt="" /> <span className="fw-semibold">Loan# </span>
                                                <span>
                                                    A1B2C3
                                                    {/* {props.content} */}
                                                </span>
                                            </p>
                                            <p className="px-0 py-1 m-0"><img src="../assets/icons/income.png" alt="" /> <span className="fw-semibold">Loan: </span>
                                                <span>
                                                    $0.000
                                                    {/* {props.content} */}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div>
                                            <p className="px-0 py-1 m-0"><img src="../assets/icons/fileTxt.png" alt="" /> <span className="fw-semibold">Program: </span>
                                                <span>
                                                    Conventional
                                                    {/* {props.content} */}
                                                </span>
                                            </p>
                                            <p className="px-0 py-1 m-0"><img src="../assets/icons/building-bank.png" alt="" /> <span className="fw-semibold">Lender: </span>
                                                <span>
                                                    n/a
                                                    {/* {props.content} */}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 ">
                    <div className="col-md-6 ">
                        <div className="row  data-container">
                            <div className="col-md-4 p-2"><div className="  information-card radius-card  h-100  w-100  bkg-cyan d-flex justify-content-center align-items-center"><img src="../assets/icons/profileLogo.png" alt="" /></div></div>
                            <div className="col-md-8 py-2 d-flex align-items-center   pe-0 me-0">
                                <div className="row  d-flex justify-content-between pe-0 ps-2 me-0">
                                    <div className="w-auto  px-0 pe-2">
                                        <div>
                                            <p className="px-0 py-1 m-0"><img src="../assets/icons/profile.png" alt="" /> <span className="fw-semibold">John Doe </span>
                                                {/* <span>{props.content}</span> */}
                                            </p>
                                            <p className="px-0 py-1 m-0"><img src="../assets/icons/businessplan.png" alt="" /> <span className="fw-semibold"> FICO: </span>
                                                <span>
                                                    0.000
                                                    {/* {props.content} */}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className=" w-auto px-0 pe-2">
                                        <div>
                                            <p className="px-0 py-1 m-0"><img src="../assets/icons/l.png" alt="" /> <span className="fw-semibold">LTV:</span>
                                                <span>
                                                    99.999%
                                                    {/* {props.content} */}
                                                </span>
                                            </p>
                                            <p className="px-0 py-1 m-0"><img src="../assets/icons/c.png" alt="" />  <span className="fw-semibold">CLTV: </span>
                                                <span>
                                                    99.999%
                                                    {/* {props.content} */}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-auto px-0">
                                        <div>
                                            <p className="px-0 py-1 m-0"><img src="../assets/icons/h.png" alt="" /> <span className="fw-semibold">HLTV: </span>
                                                <span>
                                                    99.999%
                                                    {/* {props.content} */}
                                                </span></p>
                                            <p className="px-0 py-1 m-0"><img src="../assets/icons/%.png" alt="" /> <span className="fw-semibold">APR:</span>
                                                <span>
                                                    0.000%
                                                    {/* {props.content} */}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  ">
                        <div className="row  data-container">
                            <div className="col-md-4 p-2"><div className="  information-card radius-card  h-100  w-100  bkg-cyan d-flex justify-content-center align-items-center"><img src="../assets/icons/noteBookLogo.png" alt="" /></div></div>
                            <div className="col-md-8 py-2 d-flex align-items-center">
                                <div>
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

export default InformationLoanContainer