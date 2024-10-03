import React from 'react'
import InformationContainer from '../../Components/Information/InformationContainer'
import InformationTabs from '../../Components/Information/InformationTabs'
import InformationBar from '../../Components/Information/InformationBar'
import SaveButton from '../../Components/Common/SaveButton'
import UndoButton from '../../Components/Common/UndoButton'
import { InputText } from 'primereact/inputtext';
import LiabilitySummary from '../../Components/SummaryComponents/LiabilitySummary'

function LiabilityInformation(props) {
  return (
    <>
      <div className=" px-3 mb-5">
        <InformationContainer content="property" />
        <InformationTabs />
        {/* <InformationBar headingBar="Liabilities" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Add New Liability" /> */}
        <div className="ps-4 d-none">
          <div className="row d-flex flex-wrap ">
            <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
              <label htmlFor="username">First Name</label>
              <div className="  py-2 radius-card  border-gray ">
                <span className="px-2">
                  <img src="/assets/icons/profile.png" alt="Custom Icon" />
                  <InputText className="ms-2  ps-0 py-2" placeholder="Enter Name" />
                </span>
              </div>
            </div>
            <div className="col-md-3 px-1 d-flex justify-content-center flex-column ">
              <label htmlFor="username">Middle Name</label>
              <div className="  py-2 radius-card  border-gray">
                <span className="px-2">
                  <img src="/assets/icons/profile.png" alt="Custom Icon" />
                  <InputText className=" ms-2    ps-0 py-2" placeholder="-" />
                </span>
              </div>
            </div>
            <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
              <label htmlFor="username">Last Name</label>
              <div className="  py-2 radius-card  border-gray">
                <span className="px-2">
                  {/* <i className="pi pi-search" /> */}
                  <img className="pi pi-search" src="/assets/icons/profile.png" alt="" />
                  <InputText className="  ps-0  ms-2 py-2" placeholder="Enter Last Name" />
                </span>
              </div>
            </div>
          </div>
          <div className="row mt-3 d-flex flex-wrap">
            <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
              <label htmlFor="username">Phone Primary</label>
              <div className="  py-2 radius-card  border-gray">
                <span className="px-2">
                  {/* <i className="pi pi-search" /> */}
                  <img className="pi pi-search" src="/assets/icons/profile.png" alt="" />
                  <InputText className="input-text  ps-0  ms-2 py-2" placeholder="Enter Phone Number" />
                </span>
              </div>
            </div>
            <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
              <label htmlFor="username">Borrowers Email</label>
              <div className="  py-2 radius-card  border-gray">
                <span className="px-2">
                  {/* <i className="pi pi-search" /> */}
                  <img className="pi pi-search" src="/assets/icons/profile.png" alt="" />
                  <InputText className="  ps-0  ms-2 py-2" placeholder="Enter Email" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <LiabilitySummary />
        <div className="d-flex justify-content-center gap-3 align-items-center my-5">
          <UndoButton />
          <SaveButton />
        </div>
      </div>
    </>
  )
}


export default LiabilityInformation