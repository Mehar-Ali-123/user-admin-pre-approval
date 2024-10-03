 import React from 'react'
import { Password } from 'primereact/password';
import { Link } from 'react-router-dom';

function ChangePasswordLogin() {
    return (
        <>
            <div>
                <div className="pt-4 ps-5 ms-5">
                    <img src="/assets/icons/logoDark.png" alt="" />
                </div>
                <div className="row  my-5">
                    <div className="col-md-9  mx-auto mb-5">
                        <h2 className='text-center fw-bold'>Welcome to the  <span className='txt-Secondary' > Admin Panel</span> of <span className='txt-Primary'> Resetting Your Password</span></h2>
                        <p className='text-center text-muted txt-18 fw-semibold'>If you've forgotten your password, don't worry. You can easily reset it here. Just follow a few simple steps to regain access to your account and continue managing your mortgage journey.</p>
                    </div>

                    <div className="col-md-5 mx-auto mt-3">
                        <div className="row d-flex flex-wrap ">
                            <div className="col-md-12 px-4 d-flex justify-content-center flex-column">
                                <label htmlFor="username" className='fw-bold py-1'>Create New Password</label>
                                <div className="  py-3 radius-card  box-shadow ">
                                    <span className="px-3">
                                        <img src="/assets/icons/lock.png" alt="Custom Icon" />
                                        <Password
                                            className="login-password  "
                                            placeholder="Create your password"
                                            useGrouping={false}
                                            feedback={false}
                                            toggleMask />
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-12 px-4 d-flex justify-content-center flex-column mt-4">
                                <label htmlFor="username" className='fw-bold py-1'>Confirm Password</label>
                                <div className="  py-3 radius-card  box-shadow">
                                    <span className="px-3">
                                        <img src="/assets/icons/lock.png" alt="Custom Icon" />
                                        <Password
                                            className=" login-password "
                                            placeholder="Confirm your password"
                                            useGrouping={false}
                                            feedback={false}
                                            toggleMask />
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-12 px-4  d-flex justify-content-center flex-column mt-4">
                                <Link to="/">
                                    <button className='bkg-drimary w-100 py-3 radius-card fw-semibold'>
                                        Change Password
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

export default ChangePasswordLogin