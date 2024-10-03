import { InputText } from 'primereact/inputtext';
import React from 'react'
 import { Link } from 'react-router-dom';

function ForgetPassword() {
    return (
        <>
            <div>
                <div className="pt-4 ps-5 ms-5">
                    <img src="/assets/icons/logoDark.png" alt="" />
                </div>
                <div className="row  my-5">
                    <div className="col-md-9  mx-auto mb-5">
                        <h2 className='text-center fw-bold'>Regain  with a <span className='txt-Secondary' > Access to Your Account</span> of <span className='txt-Primary'> Password Reset </span></h2>
                        <p className='text-center text-muted txt-18 fw-semibold'>Access, monitor, and manage loan applications, delve into borrower insights, and initiate new applications seamlessly from this admin portal.</p>
                    </div>

                    <div className="col-md-5 mx-auto mt-3">
                        <div className="row d-flex flex-wrap ">
                            <div className="col-md-12 px-4 d-flex justify-content-center flex-column">
                                <label htmlFor="username" className='fw-bold py-1'>Email</label>
                                <div className="  py-3 radius-card  box-shadow ">
                                    <span className="px-3 ">
                                        <img src="/assets/icons/mail.png" alt="Custom Icon" />
                                        <InputText className="  w-75  "
                                            placeholder="Enter your email"
                                            keyfilter="email"
                                            locale="en-us"
                                            minFractionDigits={2} />
                                    </span>
                                </div>
                            </div> 
                            <div className="col-md-12 px-4  d-flex justify-content-center flex-column mt-4">
                                <Link to="/">
                                    <button className='bkg-drimary w-100 py-3 radius-card fw-semibold'>
                                    Send me the Password Rest link
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ForgetPassword