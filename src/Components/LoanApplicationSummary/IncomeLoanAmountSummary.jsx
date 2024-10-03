import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import InformationBar from '../Information/InformationBar';
import RadioButtonForm from '../RadioButton/RadioButtonForm';
import EthnicityCheckBox from '../SingleCheckBox/EthnicityCheckBox'
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';

function IncomeLoanAmountSummary() {
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
            <InformationBar headingBar="Employment Income" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Employment Income" clickFunction={handleAdd} />
            <div>
                <div>
                    {allIncomeSources.length === 0 ? (
                        <p className='px-3'>No information added by borrower</p>
                    ) : (
                        allIncomeSources.map((incomeSource, index) => (
                            <div key={index} className="my-2">
                                <div className="d-flex justify-content-between px-3 align-items-center  my-3">
                                    <h5 className='txt-24    txt-Secondary my-0'><i>Employment Income
                                    </i></h5>
                                    <div>
                                        <img src="/assets/icons/circle-remove.png" alt="" />
                                        <button type="button" className='bg-transparent fw-semibold txt-sharp-red' onClick={() => handleRemove(index, incomeSource.id)}>Remove</button>
                                    </div>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="row d-flex flex-wrap">
                                        <div className="col-md-7 d-flex justify-content-center align-items-center px-0 ps-1 ">
                                            <div className="col-md-5   mb-3 pe-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Employer Name</label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/profile.png" alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="w-75 ms-2 ps-0 py-2"
                                                            placeholder='-'
                                                            />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-7 py-0 mb-3  px-1  d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Employer Address</label>

                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/current-location.png" alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="ms-2 ps-0 py-2"
                                                            placeholder="-"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 d-flex px-0">
                                            <div className="col-md-6 mb-3 px-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Phone</label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/phone.png " alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="ms-2 px-0 py-2  w-75"
                                                            placeholder="-"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3 px-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Industry</label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/briefcase.png" alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="ms-2 px-0 py-2  w-75"
                                                            placeholder="-"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex flex-wrap align-items-start mt-1">
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Position/Title</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/certificate.png " alt="" />
                                                    <InputText
                                                        type="text"
                                                        className="ms-2 px-0 py-2  w-75"
                                                        placeholder="-"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Current Job Start Date</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/calender.png" alt="" />
                                                    <Calendar
                                                        className="ms-2 px-0 py-0  w-75"
                                                        placeholder="-"
                                                        style={{ width: "100%" }}
                                                        name="current_date_user"
                                                    /> 
                                                </span>
                                            </div>
                                            <span className='text-primary ps-2'>                                        <EthnicityCheckBox initialCheckboxes={[{ id: 1, label: "Current Position    ", checked: false },]} columnClass="col-md-12" />
</span>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>End Date</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/calender.png" alt="" />
                                                    <Calendar
                                                        className="ms-2 px-0 py-0  w-75"
                                                        placeholder="-"
                                                        style={{ width: "100%" }}
                                                        name="current_date_user"
                                                    /> 
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 px-1 d-flex justify-content-center   align-items-center mt-3">
                                            <EthnicityCheckBox initialCheckboxes={[{ id: 1, label: " Employed by a family member, property seller, real estate agent, or other party to the transaction.", checked: false },]} columnClass="col-md-12" />
                                        </div>
                                    </div>
                                    <div className="row d-flex flex-wrap">
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Base Income</label>
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
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Overtime</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/dollar-circle.png" alt="" />
                                                    <InputText
                                                        type="text"
                                                        className="ms-2 px-0 py-2  w-75"
                                                        placeholder="-"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Bonus</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/dollar-circle.png" alt="" />
                                                    <InputText
                                                        type="text"
                                                        className="ms-2 px-0 py-2  w-75"
                                                        placeholder="-"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Comission</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/dollar-circle.png" alt="" />
                                                    <InputText
                                                        type="text"
                                                        className="ms-2 px-0 py-2  w-75"
                                                        placeholder="-"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Other</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/dollar-circle.png" alt="" />
                                                    <InputText
                                                        type="text"
                                                        className="ms-2 px-0 py-2  w-75"
                                                        placeholder="-"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`} className='text-primary'>Total Monthly Income</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/dollar-circle.png" alt="" />
                                                    <InputText
                                                        type="text"
                                                        className="ms-2 px-0 py-2  w-75"
                                                        placeholder="-"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <InformationBar headingBar="Self-Employment Income" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Add Self-Employment Income" clickFunction={handleAdd} />
            <div>
                <div>
                    {allIncomeSources.length === 0 ? (
                        <p className='px-3'>No information added by borrower</p>
                    ) : (
                        allIncomeSources.map((incomeSource, index) => (
                            <div key={index} className="my-2">
                                <div className="d-flex justify-content-between px-3 align-items-center  my-3">
                                    <h5 className='txt-24    txt-Secondary my-0'><i>Self-Employment Income
                                    </i></h5>
                                    <div>
                                        <img src="/assets/icons/circle-remove.png" alt="" />
                                        <button type="button" className='bg-transparent fw-semibold txt-sharp-red' onClick={() => handleRemove(index, incomeSource.id)}>Remove</button>
                                    </div>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="row d-flex flex-wrap">
                                        <div className="col-md-7 d-flex justify-content-center align-items-center px-0 ps-1 ">
                                            <div className="col-md-5   mb-3 pe-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Employer Name</label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/profile.png" alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="w-75 ms-2 ps-0 py-2"
                                                        // placeholder="Enter Property Address" 
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-7 py-0 mb-3  px-1  d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Employer Address</label>

                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/current-location.png" alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="ms-2 ps-0 py-2"
                                                            placeholder="-"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 d-flex px-0">
                                            <div className="col-md-6 mb-3 px-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Phone</label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/phone.png " alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="ms-2 px-0 py-2  w-75"
                                                            placeholder="-"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3 px-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Industry Expenses </label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/briefcase.png" alt="" />
                                                        <InputText
                                                            type="text"
                                                            className="ms-2 px-0 py-2  w-75"
                                                            placeholder="-"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex flex-wrap">
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Position/Title</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/certificate.png " alt="" />
                                                    <InputText
                                                        type="text"
                                                        className="ms-2 px-0 py-2  w-75"
                                                        placeholder="-"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Current Job Start Date</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/calender.png" alt="" />
                                                    <Calendar
                                                        className="ms-2 px-0 py-0  w-75"
                                                        placeholder="-"
                                                        style={{ width: "100%" }}
                                                        name="current_date_user"
                                                    /> 
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>End Date </label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/calender.png" alt="" />
                                                    <Calendar
                                                        className="ms-2 px-0 py-0  w-75"
                                                        placeholder="-"
                                                        style={{ width: "100%" }}
                                                        name="current_date_user"
                                                    /> 
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`} className='text-primary'>Total Monthly Income</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/dollar-circle.png" alt="" />
                                                    <InputText
                                                        type="text"
                                                        className="ms-2 px-0 py-2  w-75"
                                                        placeholder="-"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <RadioButtonForm radioHeading="I have an ownership share of 25% or more" />
                                        </div>
                                        <div className="col-md-5">
                                            <RadioButtonForm radioHeading="I have an ownership share of less than 25% " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </div>
            <InformationBar headingBar="Un-Employment" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Add Un-Employment" clickFunction={handleAdd} />
            <div>
                <div>
                    {allIncomeSources.length === 0 ? (
                        <p className='px-3'>No information added by borrower</p>
                    ) : (
                        allIncomeSources.map((incomeSource, index) => (
                            <div key={index} className="my-2">
                                <div className="d-flex justify-content-between px-3 align-items-center  my-3">
                                    <h5 className='txt-24    txt-Secondary my-0'><i>Un-Employment </i></h5>
                                    <div>
                                        <img src="/assets/icons/circle-remove.png" alt="" />
                                        <button type="button" className='bg-transparent fw-semibold txt-sharp-red' onClick={() => handleRemove(index, incomeSource.id)}>Remove</button>
                                    </div>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="row d-flex flex-wrap">
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Start Date</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/calender.png " alt="" />
                                                    <Calendar
                                                        className="ms-2 px-0 py-0  w-75"
                                                        placeholder="-"
                                                        style={{ width: "100%" }} 
                                                    /> 
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>End Date</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/calender.png" alt="" />
                                                    <Calendar
                                                        className="ms-2 px-0 py-0  w-75"
                                                        placeholder="-"
                                                        style={{ width: "100%" }} 
                                                    /> 
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <InformationBar headingBar="Other" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Add Other Income" clickFunction={handleAdd} />
            <div>
                <div>
                    {allIncomeSources.length === 0 ? (
                        <p className='px-3'>No information added by borrower</p>
                    ) : (
                        allIncomeSources.map((incomeSource, index) => (
                            <div key={index} className="my-2">
                                <div className="d-flex justify-content-between px-3 align-items-center  my-3">
                                    <h5 className='txt-24    txt-Secondary my-0'><i>Other
                                    </i></h5>
                                    <div>
                                        <img src="/assets/icons/circle-remove.png" alt="" />
                                        <button type="button" className='bg-transparent fw-semibold txt-sharp-red' onClick={() => handleRemove(index, incomeSource.id)}>Remove</button>
                                    </div>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="row d-flex flex-wrap align-items-start">
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Start Date</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/calender.png " alt="" />
                                                    <Calendar
                                                        className="ms-2 px-0 py-0  w-75"
                                                        placeholder="-"
                                                        style={{ width: "100%" }}
                                                        name="current_date_user"
                                                    /> 
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>End Date</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/calender.png" alt="" />
                                                    <Calendar
                                                        className="ms-2 px-0 py-0  w-75"
                                                        placeholder="-"
                                                        style={{ width: "100%" }}
                                                        name="current_date_user"
                                                    /> 
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Total Monthly Income or loss</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/dollar-circle.png" alt="" />
                                                    <InputText
                                                        type="text"
                                                        className="ms-2 px-0 py-2  w-75"
                                                        placeholder="-"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Description</label>
                                            <div className="py-2 radius-card border-gray d-flex">
                                                <div className='d-flex align-items-start'>
                                                    <span className="px-2">
                                                        <img className='' src="/assets/icons/writing.png" alt="" />
                                                    </span>
                                                </div>
                                                <InputTextarea
                                                    className="ms-2 px-0 my-0 py-0  w-75 pe-4 bg-transparent text-primary"
                                                    placeholder="Enter Description"
                                                    rows={3}
                                                    cols={20}
                                                />

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <InformationBar headingBar="Additional Income" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Add Additional Income" clickFunction={handleAdd} />
            <div>
                <div>
                    {allIncomeSources.length === 0 ? (
                        <p className='px-3'>No information added by borrower</p>
                    ) : (
                        allIncomeSources.map((incomeSource, index) => (
                            <div key={index} className="my-2">
                                <div className="d-flex justify-content-between px-3 align-items-center  my-3">
                                    <h5 className='txt-24    txt-Secondary my-0'><i>Additional Income

                                    </i></h5>
                                    <div>
                                        <img src="/assets/icons/circle-remove.png" alt="" />
                                        <button type="button" className='bg-transparent fw-semibold txt-sharp-red' onClick={() => handleRemove(index, incomeSource.id)}>Remove</button>
                                    </div>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="row d-flex flex-wrap">
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Type of Income</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/file-dollar.png " alt="" />
                                                    <InputText
                                                        type="text"
                                                        className="ms-2 px-0 py-2  w-75"
                                                        placeholder='-'

                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Monthly Income Amount</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/income.png" alt="" />
                                                    <InputText
                                                        type="text"
                                                        className="ms-2 px-0 py-2  w-75"
                                                        placeholder='-'
                                                    />
                                                </span>
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

export default IncomeLoanAmountSummary