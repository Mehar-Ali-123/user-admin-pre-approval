import React from 'react'
import StartPreApprovalButton from '../../Components/StartButton/StartPreApprovalButton'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <>
            <div className='px-4'>
                <div>
                    <h2 className="mb-0  fw-semibold txt-32">
                        Welcome, Ali Hussnain Jamil!
                    </h2>
                    <p className="mt-0 pt-0 ">Your centralized hub to optimize your loan management experience begins with this panel.</p>
                </div>
                <div className="row mt-5 d-flex flex-wrap justify-content-center align-items-center">
                    <div className="col-md-5 ">
                        <div className="py-4 px-3 radius-15  dashboard-card">
                            <div>
                                <img height='55' src="./assets/icons/moneyHome.png" alt="" />
                            </div>
                            <div className='my-4 '>
                                <h5 className="fw-semibold mt-3">Create a Pre-Approval Application</h5>
                                <p className=' '>Not sure about how much you can qualify for? Get pre-approved now.</p>
                            </div>
                            <Link to="/application/general">
                            <button  className="bkg-drimary py-2 text-white radius-button mt-2 d-flex justify-content-center align-items-center px-4">
                                <img width="18" src="./assets/icons/phone-1.svg" alt="" /> <p className='px-2 py-0 my-0 pb-1 txt-16'>
                                    <StartPreApprovalButton  />
                                    </p>
                            </button>
                            </Link> 
                        </div>
                    </div>
                    <div className="col-md-5 ">
                        <div className="py-4 px-3 radius-15  dashboard-card">
                            <div>
                                <img height='55' src="./assets/icons/fileHome.png" alt="" />
                            </div>
                            <div className='my-4'>
                                <h5 className="fw-semibold mt-3">Create a new Loan Application</h5>
                                <p>Do you already have property? Submit a loan application and sort through thousand of options. </p>
                            </div>
                            <Link to='/loan-application/general-loan'>
                            <button className="bkg-drimary py-2 text-white radius-button mt-2 d-flex justify-content-center align-items-center px-4">
                                <img width="25" src="./assets/icons/arrow-up-right-circle.svg" alt="" /> <p className='px-2 py-0 my-0 pb-1 txt-16'>Apply Now</p>
                            </button></Link>
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard