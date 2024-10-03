import React from 'react'
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

function PreQualificationSummary() {
  return (
    
    <>
      <div className="ps-4 ">
          <div className="row d-flex flex-wrap ">
            <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
            <label htmlFor="username">Pre-Qualification Amount</label>
             <div className="  py-2 radius-card  border-gray ">
             <span className="px-2">
              <img src="/assets/icons/report-money.png" alt="Custom Icon" />
                <InputNumber className=" " placeholder="-"  locale="en-us"
                      minFractionDigits={2} />
              </span>
             </div>
            </div>
            <div className="col-md-3 px-1 d-flex justify-content-center flex-column ">
            <label htmlFor="username">Names of borrower</label>
            <div className="  py-2 radius-card  border-gray">
              <span className="px-2">
                <img src="/assets/icons/name.png" alt="Custom Icon" />
                             <InputText className=" ms-2    ps-0 py-2" placeholder="-" />
              </span>
              </div>
            </div>
            <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
            <label htmlFor="username">Names of borrower</label>
            <div className="  py-2 radius-card  border-gray">
            <span className="px-2">
                {/* <i className="pi pi-search" /> */}
                <img className="pi pi-search" src="/assets/icons/name.png" alt="" />
                <InputText className="  ps-0  ms-2 py-2" placeholder="-" />
              </span>
              </div>
            </div>
          </div> 
        </div>
    </>
  )
}

export default PreQualificationSummary