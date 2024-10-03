import React from 'react'
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

function PreApprovalSummary() {
  return (

    <>
      <div className="ps-4 ">
        <div className="row d-flex flex-wrap ">
          <div className="col-md-6 px-1 d-flex justify-content-center flex-column">
            <label htmlFor="username">Enter the Amount for which borrower has been pre-approved</label>
            <div className="  py-2 radius-card  border-gray ">
              <span className="px-2">
                <img src="/assets/icons/report-money.png" alt="Custom Icon" />
                <InputNumber
                  className=" w-75 "
                  locale="en-us"
                  minFractionDigits={2}
                  placeholder="Selected-Money" />
              </span>
            </div>
          </div>
          <div className="col-md-6 px-1 d-flex justify-content-center flex-column">
            <label htmlFor="username">Enter the the name of the borrower</label>
            <div className="  py-2 radius-card  border-gray ">
              <span className="px-2">
                <img src="/assets/icons/profile.png" alt="Custom Icon" />
                <InputText className="ms-2 w-75  ps-0 py-2" placeholder="Enter Name" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PreApprovalSummary