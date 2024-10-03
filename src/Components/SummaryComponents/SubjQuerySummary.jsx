import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';

function SubjQuerySummary() {
  const [occupancyType, setOccupancyType] = useState(null);
  const [propertyType, setPropertyType] = useState(null);

  // Options for Occupancy Type and Property Type
  const occupancyOptions = [
    { label: 'Primary Home', value: 'Primary Home' },
    { label: 'Secondary Home  ', value: 'Secondary Home' },
    { label: 'Rental Property ', value: 'Rental Property ' },
  ];

  const propertyOptions = [
    { label: 'Single Family Home ', value: 'Single Family Home' },
    { label: 'Condominium ', value: 'Condominium' },
    { label: 'Townhome ', value: 'Townhome' },
    { label: 'Multi-Family Home ', value: 'Multi-Family Home' },
    { label: 'Manufactured or Mobile Home ', value: 'Manufactured or Mobile Home ' },
  ];
  return (

    <>
      <div className="px-1">
        <div className="row d-flex flex-wrap ">
          <div className="col-md-6 px-4 d-flex justify-content-center flex-column">
            <label htmlFor="username">Purchase Price</label>
            <div className="  py-2 radius-card  border-gray ">
              <span className="px-2">
                <img src="/assets/icons/dollar.png" alt="Custom Icon" />
                <InputNumber className="  w-75  "
                  placeholder="-"
                  locale="en-us"
                  minFractionDigits={2} />
              </span>
            </div>
          </div>
          <div className="col-md-6 px-4 d-flex justify-content-center flex-column ">
            <label htmlFor="username">Loan Amount</label>
            <div className="  py-2 radius-card  border-gray">
              <span className="px-2">
                <img src="/assets/icons/dollar.png" alt="Custom Icon" />
                <InputNumber className=" w-75  "
                  locale="en-us"
                  minFractionDigits={2}
                  placeholder="-" />
              </span>
            </div>
          </div>
        </div>
        <div className="row mt-3 d-flex flex-wrap">
          <div className="col-md-6 px-4 d-flex justify-content-center flex-column">
            <label htmlFor="username">Down Payment</label>
            <div className="  py-2 radius-card  border-gray">
              <span className="px-2">
                {/* <i className="pi pi-search" /> */}
                <img className="pi pi-search" src="/assets/icons/%.png" alt="" />
                <InputText className=" w-75  ps-0  ms-2 py-2" placeholder="-" />
              </span>
            </div>
          </div>
          <div className="col-md-6 px-4 d-flex justify-content-center flex-column">
            <label htmlFor="username">Occupancy Type</label>
            <div className="  py-2 radius-card  border-gray">
              <span className="px-2">
                {/* <i className="pi pi-search" /> */}
                <img className="pi pi-search " src="/assets/icons/home-2.png" alt="" />
                <Dropdown
                  className='drop-down border-0 outline-none'
                  value={occupancyType}
                  options={occupancyOptions}
                  onChange={(e) => setOccupancyType(e.value)}
                  placeholder="Select"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="row mt-3 d-flex flex-wrap">
          <div className="col-md-6 px-4 d-flex justify-content-center flex-column">
            <label htmlFor="username">Property Type</label>
            <div className="  py-2 radius-card  border-gray">
              <span className="px-2">
                {/* <i className="pi pi-search" /> */}
                <img className="pi pi-search" src="/assets/icons/home.png" alt="" />
                <Dropdown
                  className='drop-down border-0 outline-none'
                  value={propertyType}
                  options={propertyOptions}
                  onChange={(e) => setPropertyType(e.value)}
                  placeholder="Select"
                />                </span>
            </div>
          </div>
          <div className="col-md-6 px-4 d-flex justify-content-center flex-column">
            <label htmlFor="username">Annual Property Tax</label>
            <div className="  py-2 radius-card  border-gray">
              <span className="px-2">
                {/* <i className="pi pi-search" /> */}
                <img className="pi pi-search" src="/assets/icons/receip.png" alt="" />
                <InputNumber 
                className="  w-75  " 
                placeholder="-"
                locale="en-us"
                minFractionDigits={2} />
              </span>
            </div>
          </div>
        </div>
        <div className="row mt-3 d-flex flex-wrap">
          <div className="col-md-6 px-4 d-flex justify-content-center flex-column">
            <label htmlFor="username">Annual HOI</label>
            <div className="  py-2 radius-card  border-gray">
              <span className="px-2">
                {/* <i className="pi pi-search" /> */}
                <img className="pi pi-search" src="/assets/icons/shield.png" alt="" />
                <InputNumber className=" input-text   w-75"
                 placeholder="-"
                 locale="en-us"
                 minFractionDigits={2}
                  />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubjQuerySummary