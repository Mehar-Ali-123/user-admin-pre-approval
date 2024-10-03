import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import InformationBar from '../Information/InformationBar';
import EthnicityCheckBox from '../SingleCheckBox/EthnicityCheckBox';

function ReoLoanAmountSummary() {
    const [allIncomeSources, setAllIncomeSources] = useState([]);

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
            <InformationBar headingBar="Real Estate Portfolio" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Add REO" clickFunction={handleAdd} />
            <div>
                <div>
                    {allIncomeSources.length === 0 ? (
                        <p className='px-3'>No information added by borrower</p>
                    ) : (
                        allIncomeSources.map((incomeSource, index) => (
                            <div key={index} className="my-2">
                                <div className="d-flex justify-content-between px-3 align-items-center  my-3">
                                    <h5 className='txt-24    txt-Secondary my-0'><i>Real Estate Owned
                                    </i></h5>
                                    <div>
                                        <img src="/assets/icons/circle-remove.png" alt="" />
                                        <button type="button" className='bg-transparent fw-semibold txt-sharp-red' onClick={() => handleRemove(index, incomeSource.id)}>Remove</button>
                                    </div>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="row d-flex flex-wrap">
                                        <div className="col-md-7 d-flex justify-content-center align-items-center px-0 ps-1 ">
                                        <div className="col-md-7 py-0 mb-3  px-1  d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Property Address</label>

                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                    <img src="/assets/icons/current-location.png" alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="ms-2 ps-0 py-2"
                                                            // placeholder="Enter Property Address"
                                                            id={`property_address_${index}`}
                                                            value={incomeSource.property_address}
                                                            onChange={(e) => handleInputChange(index, 'property_address', e.target.value)}
                                                        />
                                                    </span>
                                                </div>
                                            </div> 
                                            <div className="col-md-5   mb-3 pe-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Ownership </label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/profile.png" alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="w-75 ms-2 ps-0 py-2"
                                                            // placeholder="Enter Property Address"
                                                            id={`property_address_${index}`}
                                                            value={incomeSource.property_address}
                                                            onChange={(e) => handleInputChange(index, 'property_address', e.target.value)}
                                                        />
                                                    </span>
                                                </div>
                                            </div>  
                                        </div>
                                        <div className="col-md-5 d-flex px-0">
                                            <div className="col-md-6 mb-3 px-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Owned By</label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/phone.png " alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="ms-2 px-0 py-2  w-75"
                                                            // placeholder="Enter Property Address"
                                                            id={`property_address_${index}`}
                                                            value={incomeSource.property_address}
                                                            onChange={(e) => handleInputChange(index, 'property_address', e.target.value)}
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3 px-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Intended Occupancy  </label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/current-location.png" alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="ms-2 px-0 py-2  w-75"
                                                            // placeholder="Enter Property Address"
                                                            id={`property_address_${index}`}
                                                            value={incomeSource.property_address}
                                                            onChange={(e) => handleInputChange(index, 'property_address', e.target.value)}
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex flex-wrap"> 
                                            <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Property Type</label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/phone.png " alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="ms-2 px-0 py-2  w-75"
                                                            // placeholder="Enter Property Address"
                                                            id={`property_address_${index}`}
                                                            value={incomeSource.property_address}
                                                            onChange={(e) => handleInputChange(index, 'property_address', e.target.value)}
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Monthly Rental IncomeExpenses </label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/current-location.png" alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="ms-2 px-0 py-2  w-75"
                                                            placeholder="Enter Property Address"
                                                            id={`property_address_${index}`}
                                                            value={incomeSource.property_address}
                                                            onChange={(e) => handleInputChange(index, 'property_address', e.target.value)}
                                                        />
                                                    </span>
                                                </div>
                                            </div>  
                                            <div className="col-md-3 px-1 d-flex justify-content-center   align-items-center mt-0">
                                            <EthnicityCheckBox initialCheckboxes={valueCheckBox} columnClass="col-md-12" /> 
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

export default ReoLoanAmountSummary