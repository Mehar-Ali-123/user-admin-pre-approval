import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import InformationBar from '../Information/InformationBar'; 

function AddressLoanAmountSummary() {
    const [allIncomeSources, setAllIncomeSources] = useState([]);


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

            <InformationBar headingBar="Primary & Mailing Address" />
            <div className="px-4 py-3">
                <div className="row d-flex flex-wrap">
                    <div className="col-md-8 d-flex justify-content-center align-items-center px-0 ps-1 ">
                        <div className="col-md-6   mb-3 pe-1 d-flex justify-content-center flex-column">
                            <label htmlFor="former">Present Address</label>
                            <div className="py-2 radius-card border-gray">
                                <span className="px-2">
                                    <img src="/assets/icons/current-location.png" alt="" />
                                    <InputText
                                        type="text"
                                        className="w-75 ms-2 ps-0 py-2 w-75 "
                                        placeholder="-"
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="col-md-3 py-0 mb-3  px-1  d-flex justify-content-center flex-column">
                            <label htmlFor="">Time at Address</label>
                            <div className="py-2 radius-card border-gray position-relative px-0 mx-0 overflow-hidden">
                                <InputText
                                    type="text"
                                    className="w-50 ms-2 ps-0 py-2  "
                                />
                                <span className="txt-14 inpt-time px-2 fw-400">
                                    Year(s)    </span>
                            </div>
                        </div>
                        <div className="col-md-3 border-primary  py-0 px-1 pt-2  d-flex justify-content-center flex-column">
                            <div className="py-2 radius-card border-gray position-relative px-0 mx-0 overflow-hidden">
                                <InputText
                                    type="text"
                                    className="w-50 ms-2 ps-0 py-2  "
                                />
                                <span className="txt-14 inpt-time px-3 fw-400">
                                    Month(s)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex px-0">
                        <div className="col-md-12 mb-3 px-1 d-flex justify-content-center flex-column">
                            <label htmlFor="">Ownership (Present) </label>
                            <div className="py-2 radius-card border-gray">
                                <span className="px-2">
                                    <img src="/assets/icons/home.png" alt="" />
                                    <InputText
                                        type="text"
                                        className="ms-2 px-0 py-2 w-75 "
                                        placeholder="-"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex px-0">
                        <div className="col-md-12 mb-3 px-1 d-flex justify-content-center flex-column">
                            <label htmlFor="">Mailing Address <span className='text-primary'>Copy</span></label>
                            <div className="py-2 radius-card border-gray">
                                <span className="px-2">
                                    <img src="/assets/icons/current-location.png" alt="" />
                                    <InputText
                                        type="text"
                                        className="ms-2 px-0 py-2 w-75"
                                        placeholder="-"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InformationBar headingBar="Former Address" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Former Address" clickFunction={handleAdd} />
            <div>
                <div>
                    {allIncomeSources.length === 0 ? (
                        <p className='px-3'>No information added by borrower</p>
                    ) : (
                        allIncomeSources.map((incomeSource, index) => (
                            <div key={index} className="my-4">
                                <div className="d-flex justify-content-between px-3 align-items-center  my-3">
                                    <h5 className='txt-24    txt-Secondary my-0'><i>Former Address
                                    </i></h5>
                                    <div>
                                        <img src="/assets/icons/circle-remove.png" alt="" />
                                        <button type="button" className='bg-transparent fw-semibold txt-sharp-red' onClick={() => handleRemove(index, incomeSource.id)}>Remove</button>
                                    </div>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="row d-flex flex-wrap">
                                        <div className="col-md-7 d-flex justify-content-center align-items-center px-0 ps-1 ">
                                            <div className="col-md-6   mb-3 pe-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Former Address</label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/current-location.png" alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="w-75 ms-2 ps-0 py-2"
                                                            placeholder="-"
                                                            id={`property_address_${index}`} 
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-3 py-0 mb-3  px-1  d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Time at Address</label>
                                                <div className="py-2 radius-card border-gray position-relative px-0 mx-0 overflow-hidden">
                                                    <InputText
                                                        type="text"
                                                        className="w-50 ms-2 ps-0 py-2  " 
                                                    />
                                                    <span className="txt-14 inpt-time px-3 fw-400">
                                                    Year(s)                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-3 border-primary  py-0 px-1 pt-2  d-flex justify-content-center flex-column">
                                            <div className="py-2 radius-card border-gray position-relative px-0 mx-0 overflow-hidden">
                                                    <InputText
                                                        type="text"
                                                        className="w-50 ms-2 ps-0 py-2  "
                                                        id={`property_address_${index}`} 
                                                    />
                                                    <span className="txt-14 inpt-time px-3 fw-400">
                                                        Month(s)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 d-flex px-0">
                                            <div className="col-md-6 mb-3 px-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Ownership </label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/home.png" alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="ms-2 px-0 py-2  "
                                                            placeholder="-"
                                                            id={`property_address_${index}`}
                                                            value={incomeSource.property_address}
                                                            onChange={(e) => handleInputChange(index, 'property_address', e.target.value)}
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3 px-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Total Monthly Expenses </label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/dollar-circle.png" alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="ms-2 px-0 py-2  "
                                                            placeholder="-" 
                                                        />
                                                    </span>
                                                </div>
                                            </div>
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

export default AddressLoanAmountSummary