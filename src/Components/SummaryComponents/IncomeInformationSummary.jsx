import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import InformationBar from '../Information/InformationBar';

function IncomeInformationSummary() {
    const [allIncomeSources, setAllIncomeSources] = useState([]);
    const [statusType, setStatusType] = useState(null);

    const statusTypeOtions = [
        { label: 'Owned', value: 'owned' },
        { label: 'Rent', value: 'rent' },
    ];

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
        <div>

            {/* EMPLOYMENT ADD  */}
            <div>
                <InformationBar headingBar="Employment Income" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Add New Employment Income" clickFunction={handleAdd}/>
                <div>
                {allIncomeSources.length === 0 ? (
            <p className='px-3'>No information added by borrower</p>
          ) : (
                    allIncomeSources.map((incomeSource, index) => (
                        <div key={index} className="my-4">
                            <div className="d-flex justify-content-between px-3 align-items-center  my-2">
                                <h5 className='txt-24    txt-Secondary my-0'><i>Employment Income
                                </i></h5>
                                <div>
                                    <img src="/assets/icons/circle-remove.png" alt="" />
                                    <button type="button" className='bg-transparent fw-semibold txt-sharp-red' onClick={() => handleRemove(index, incomeSource.id)}>Remove</button>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="row d-flex flex-wrap">
                                    <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`property_address_${index}`}>Income in year 2021</label>
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/income-inp.png" alt="" />
                                                <InputText
                                                    type="text"
                                                    className="ms-2 ps-0 py-2"
                                                    placeholder="Enter Property Address"
                                                    id={`property_address_${index}`}
                                                    value={incomeSource.property_address}
                                                    onChange={(e) => handleInputChange(index, 'property_address', e.target.value)}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`property_status_${index}`}>Income in year 2022</label>
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/income-inp.png" alt="" />
                                                <InputText
                                            type="text"
                                            className="ms-2 ps-0 py-2"
                                            placeholder="Enter Property Status"
                                            id={`property_status_${index}`}
                                            value={incomeSource.property_status}
                                            onChange={(e) => handleInputChange(index, 'property_status', e.target.value)}
                                        />
                                                
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`net_monthly_expenses_${index}`}>Year to date (YTD)</label>
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/income-inp.png" alt="" />
                                                <InputNumber
                                                    type="text"
                                                    className=""
                                                    placeholder="Enter Total Monthly Expenses"
                                                    id={`net_monthly_expenses_${index}`}
                                                    value={incomeSource.net_monthly_expenses}
                                                    onChange={(e) => handleInputChange(index, 'net_monthly_expenses', e.target.value)}
                                                    locale="en-us"
                                                    minFractionDigits={2}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`net_monthly_expenses_${index}`}>Date of year to date paystub</label>
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/calender.png" alt="" />
                                                <InputNumber
                                                    type="text"
                                                    className=""
                                                    placeholder="Enter Total Monthly Expenses"
                                                    id={`net_monthly_expenses_${index}`}
                                                    value={incomeSource.net_monthly_expenses}
                                                    onChange={(e) => handleInputChange(index, 'net_monthly_expenses', e.target.value)}
                                                    locale="en-us"
                                                    minFractionDigits={2}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`net_monthly_expenses_${index}`}>Current Job Start Date</label>
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/calender.png" alt="" />
                                                <InputNumber
                                                    type="text"
                                                    className=""
                                                    placeholder="Enter Total Monthly Expenses"
                                                    id={`net_monthly_expenses_${index}`}
                                                    value={incomeSource.net_monthly_expenses}
                                                    onChange={(e) => handleInputChange(index, 'net_monthly_expenses', e.target.value)}
                                                    locale="en-us"
                                                    minFractionDigits={2}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`net_monthly_expenses_${index}`}>Monthly Income <a href="" className='text-primary txt-14'>(Calculate Monthly Income)</a></label>
                                       <div className="row">
                                        <div className="col-md-7">
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/dollar-circle.png" alt="" />
                                                <InputNumber
                                                    type="text"
                                                    className="px-0 mx-0 "
                                                    placeholder="Enter Total Monthly Expenses"
                                                    id={`net_monthly_expenses_${index}`}
                                                    value={incomeSource.net_monthly_expenses}
                                                    onChange={(e) => handleInputChange(index, 'net_monthly_expenses', e.target.value)}
                                                    locale="en-us"
                                                    minFractionDigits={2}
                                                />
                                            </span>
                                        </div>
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
            {/* EMPLIYMENT ADD END  */}

            {/* BUSINESS ADD START  */}
            <div>
                <InformationBar headingBar="Business Income" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Add New Employment Income" clickFunction={handleAdd}/>
                <div>
                {allIncomeSources.length === 0 ? (
            <p className='px-3'>No information added by borrower</p>
          ) : (
                    allIncomeSources.map((incomeSource, index) => (
                        <div key={index} className="my-4">
                            <div className="d-flex justify-content-between px-3 align-items-center  my-2">
                            <h5 className='txt-24    txt-Secondary my-0'><i>Business Income

                                </i></h5>
                                <div>
                                    <img src="/assets/icons/circle-remove.png" alt="" />
                                    <button type="button" className='bg-transparent fw-semibold txt-sharp-red' onClick={() => handleRemove(index, incomeSource.id)}>Remove</button>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="row d-flex flex-wrap">
                                    <div className="col-md-4 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`property_address_${index}`}>Net Profit in year 2021</label>
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/current-location.png" alt="" />
                                                <InputText
                                                    type="text"
                                                    className="ms-2 ps-0 py-2"
                                                    placeholder="Enter Property Address"
                                                    id={`property_address_${index}`}
                                                    value={incomeSource.property_address}
                                                    onChange={(e) => handleInputChange(index, 'property_address', e.target.value)}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`property_status_${index}`}>Net Profit in year 2022</label>
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/dollar-circle.png" alt="" />
                                                <InputText
                                            type="text"
                                            className="ms-2 ps-0 py-2"
                                            placeholder="Enter Property Status"
                                            id={`property_status_${index}`}
                                            value={incomeSource.property_status}
                                            onChange={(e) => handleInputChange(index, 'property_status', e.target.value)}
                                        />
                                                {/* <Dropdown
                                                    className='primary-dropDown   mx-0 border-0 outline-none'
                                                    value={statusType}
                                                    options={statusTypeOtions}
                                                    //   onChange={(e) => setStatusType( e.value)}
                                                    onChange={(e) => setStatusType(e.target.value)}

                                                    placeholder="Select"
                                                /> */}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`net_monthly_expenses_${index}`}>Monthly Income <a href="" className='text-primary txt-14'>(Calculate Monthly Income)</a></label>
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/home.png" alt="" />
                                                <InputNumber
                                                    type="text"
                                                    className=""
                                                    placeholder="Enter Total Monthly Expenses"
                                                    id={`net_monthly_expenses_${index}`}
                                                    value={incomeSource.net_monthly_expenses}
                                                    onChange={(e) => handleInputChange(index, 'net_monthly_expenses', e.target.value)}
                                                    locale="en-us"
                                                    minFractionDigits={2}
                                                />
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Add more columns and inputs here */}
                        </div>
                        ))
                        )}
                </div>
            </div>
            {/* BUSINESS ADD END  */}

            {/* RENTAL ADD START  */}
            <div>
                <InformationBar headingBar="Rental Income" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Add New Employment Income" clickFunction={handleAdd}/>
                <div>
                {allIncomeSources.length === 0 ? (
            <p className='px-3'>No information added by borrower</p>
          ) : (
                    allIncomeSources.map((incomeSource, index) => (
                        <div key={index} className="my-4">
                            <div className="d-flex justify-content-between px-3 align-items-center  my-2">
                            <h5 className='txt-24     txt-Secondary my-0'><i>Rental Income

                                </i></h5>
                                <div>
                                    <img src="/assets/icons/circle-remove.png" alt="" />
                                    <button type="button" className='bg-transparent fw-semibold txt-sharp-red' onClick={() => handleRemove(index, incomeSource.id)}>Remove</button>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="row d-flex flex-wrap">
                                    <div className="col-md-4 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`property_address_${index}`}>Property Address</label>
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/current-location.png" alt="" />
                                                <InputText
                                                    type="text"
                                                    className="ms-2 ps-0 py-2"
                                                    placeholder="Enter Property Address"
                                                    id={`property_address_${index}`}
                                                    value={incomeSource.property_address}
                                                    onChange={(e) => handleInputChange(index, 'property_address', e.target.value)}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`property_status_${index}`}>Home Value</label>
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/home.png" alt="" />
                                                <InputText
                                            type="text"
                                            className="ms-2 ps-0 py-2"
                                            placeholder="Enter Property Status"
                                            id={`property_status_${index}`}
                                            value={incomeSource.property_status}
                                            onChange={(e) => handleInputChange(index, 'property_status', e.target.value)}
                                        /> 
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`net_monthly_expenses_${index}`}>Monthly Rental Income <a href="" className='text-primary txt-14'>(Calculate Monthly Income)</a></label>
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/dollar-circle.png" alt="" />
                                                <InputNumber
                                                    type="text"
                                                    className=""
                                                    placeholder="Enter Total Monthly Expenses"
                                                    id={`net_monthly_expenses_${index}`}
                                                    value={incomeSource.net_monthly_expenses}
                                                    onChange={(e) => handleInputChange(index, 'net_monthly_expenses', e.target.value)}
                                                    locale="en-us"
                                                    minFractionDigits={2}
                                                />
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Add more columns and inputs here */}
                        </div>
                    ))
                    )}

                </div>
            </div>
            {/* RENTAL ADD END  */}

            {/* OTHER INCOME START  */}
            <div>
                <InformationBar headingBar="Other Income" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Add New Employment Income" clickFunction={handleAdd} />
                <div>
                     {allIncomeSources.length === 0 ? (
            <p className='px-3'>No information added by borrower</p>
          ) : (
                 allIncomeSources.map((incomeSource, index) => (
                        <div key={index} className="my-4">
                            <div className="d-flex justify-content-between px-3 align-items-center  my-2">
                            <h5 className='txt-24    txt-Secondary my-0'><i>Other Income

                                </i></h5>
                                <div>
                                    <img src="/assets/icons/circle-remove.png" alt="" />
                                    <button type="button" className='bg-transparent fw-semibold txt-sharp-red' onClick={() => handleRemove(index, incomeSource.id)}>Remove</button>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="row d-flex flex-wrap">
                                    <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`property_address_${index}`}>Name of the income source</label>
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/name.png" alt="" />
                                                <InputText
                                                    type="text"
                                                    className="ms-2 ps-0 py-2"
                                                    placeholder="Enter Property Address"
                                                    id={`property_address_${index}`}
                                                    value={incomeSource.property_address}
                                                    onChange={(e) => handleInputChange(index, 'property_address', e.target.value)}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`property_status_${index}`}>Earnings  in year 2021</label>
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/income-inp.png" alt="" />
                                                {/* <InputText
                                            type="text"
                                            className="ms-2 ps-0 py-2"
                                            placeholder="Enter Property Status"
                                            id={`property_status_${index}`}
                                            value={incomeSource.property_status}
                                            onChange={(e) => handleInputChange(index, 'property_status', e.target.value)}
                                        /> */}
                                                <Dropdown
                                                    className='primary-dropDown   mx-0 border-0 outline-none'
                                                    value={statusType}
                                                    options={statusTypeOtions}
                                                    //   onChange={(e) => setStatusType( e.value)}
                                                    onChange={(e) => setStatusType(e.target.value)}

                                                    placeholder="Select"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`net_monthly_expenses_${index}`}>Earnings in year 2022</label>
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/income-inp.png" alt="" />
                                                <InputNumber
                                                    type="text"
                                                    className=""
                                                    placeholder="Enter Total Monthly Expenses"
                                                    id={`net_monthly_expenses_${index}`}
                                                    value={incomeSource.net_monthly_expenses}
                                                    onChange={(e) => handleInputChange(index, 'net_monthly_expenses', e.target.value)}
                                                    locale="en-us"
                                                    minFractionDigits={2}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                        <label htmlFor={`net_monthly_expenses_${index}`}>Monthly Income <a href="" className='text-primary txt-14'>(Calculate Monthly Income)</a></label>
                                        <div className="py-2 radius-card border-gray">
                                            <span className="px-2">
                                                <img src="/assets/icons/dollar-circle.png" alt="" />
                                                <InputNumber
                                                    type="text"
                                                    className=""
                                                    placeholder="Enter Total Monthly Expenses"
                                                    id={`net_monthly_expenses_${index}`}
                                                    value={incomeSource.net_monthly_expenses}
                                                    onChange={(e) => handleInputChange(index, 'net_monthly_expenses', e.target.value)}
                                                    locale="en-us"
                                                    minFractionDigits={2}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Add more columns and inputs here */}
                        </div>
                    ))
                    )}
                </div>
            </div>
            {/* OTHER INCOME ADD END  */}

        </div>
    );
}

export default IncomeInformationSummary