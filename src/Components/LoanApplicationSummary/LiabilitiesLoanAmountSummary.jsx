import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import InformationBar from '../Information/InformationBar';
import EthnicityCheckBox from '../SingleCheckBox/EthnicityCheckBox';
import { Dropdown } from 'primereact/dropdown';

function LiabilitiesLoanAmountSummary() {
  const [allIncomeSources, setAllIncomeSources] = useState([]);
  const [statusType, setStatusType] = useState(null);

  const statusTypeOtions = [
    { label: 'Resolving (e.g.,credit cards', value: 'Resolving (e.g.,credit cards' },
    { label: 'Lease(not real estate)', value: 'Lease(not real estate)' },
    { label: 'HELOC', value: 'HELOC' },
    { label: 'Alimony', value: 'Alimony' },
    { label: 'Seperate Maintenance', value: 'Seperate Maintenance' },
    { label: 'Job Related Expense', value: 'Job Related Expense' },
    { label: 'Open 30-Day(balance paid monthly)', value: 'Open 30-Day(balance paid monthly)' },
    { label: 'Other Liability', value: 'Other Liability' },
    { label: 'Installment(eg., car , student)', value: 'Installment(eg., car , student)' },
    { label: 'Mortgage', value: 'Mortgage' },
    { label: 'Child Support', value: 'Child Support' },
    { label: 'Child Care', value: 'Child Care' },
    { label: 'Taxes', value: 'Taxes' },
    { label: 'Collection Judgement or Lien', value: 'Collection Judgement or Lien' },
  ];

  const valueCheckBox = [
    { id: 1, label: "Pay Off", checked: false },
    { id: 2, label: "Omit", checked: false },
    { id: 3, label: "Resub.", checked: false },
  ]

  const handleInputChange = (index, field, value) => {
    const updatedIncomeSources = [...allIncomeSources];
    updatedIncomeSources[index][field] = value;
    setAllIncomeSources(updatedIncomeSources);
  };

  const handleRemove = (index) => {
    const updatedIncomeSources = [...allIncomeSources];
    updatedIncomeSources.splice(index, 1);
    setAllIncomeSources(updatedIncomeSources);
  };

  const handleAdd = () => {
    setAllIncomeSources([...allIncomeSources, {}]);
  };
  return (
    <>
      <InformationBar headingBar="Liabilities" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Add New Liability" clickFunction={handleAdd} />
      <div>
        <div>
          {allIncomeSources.length === 0 ? (
            <p className='px-3'>No information added by borrower</p>
          ) : (
            allIncomeSources.map((incomeSource, index) => (
              <div key={index} className="mt-5">
                <div className="d-flex justify-content-between px-3 align-items-center  my-3">
                  <h5 className='txt-24    txt-Secondary my-0'><i>Liability
                  </i></h5>
                  <div>
                    <img src="/assets/icons/circle-remove.png" alt="" />
                    <button type="button" className='bg-transparent fw-semibold txt-sharp-red' onClick={() => handleRemove(index, incomeSource.id)}>Remove</button>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="row d-flex  ">
                    <div className="col-md-10  ">
                      <div className="row">
                        <div className="col-md-3   mb-3 pe-1 d-flex justify-content-center flex-column">
                          <label htmlFor={`property_address_${index}`}>Liability Type </label>
                          <div className="py-2 radius-card border-gray">
                            <span className="px-2">
                              <img src="/assets/icons/profile.png" alt="" />
                              <Dropdown
                                className='primary-dropDown w-75  mx-0 border-0 outline-none' 
                                placeholder="select"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                          <label htmlFor={`property_address_${index}`}>Open  Balance</label>
                          <div className="py-2 radius-card border-gray">
                            <span className="px-2">
                              <img src="/assets/icons/businessplan.png " alt="" />
                              <InputText
                                type="text"
                                className="ms-2 px-0 py-2  w-75"
                                placeholder="-"    />
                            </span>
                          </div>
                        </div>
                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                          <label htmlFor={`property_address_${index}`}>Lenders Name</label>
                          <div className="py-2 radius-card border-gray">
                            <span className="px-2">
                              <img src="/assets/icons/name.png" alt="" />
                              <InputText
                                type="text"
                                className="ms-2 px-0 py-2  w-75"
                                placeholder="-"       />
                            </span>
                          </div>
                        </div>
                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                          <label htmlFor={`property_address_${index}`}>Monthly Payment</label>
                          <div className="py-2 radius-card border-gray">
                            <span className="px-2">
                              <img src="/assets/icons/dollar-circle.png " alt="" />
                              <InputText
                                type="text"
                                className="ms-2 px-0 py-2  w-75"
                                placeholder="-" 
                              />
                            </span>
                          </div>
                        </div>
                        <h5 className='text-primary py-0 my-0'>Total Amount: $100</h5>

                      </div>
                    </div>
                    <div className="col-md-2 px-2 d-flex justify-content-center   align-items-center mt-0 pb-5">
                      <EthnicityCheckBox initialCheckboxes={valueCheckBox} columnClass="col-md-12 " />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default LiabilitiesLoanAmountSummary