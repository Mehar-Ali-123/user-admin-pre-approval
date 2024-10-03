import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import InformationBar from '../Information/InformationBar';
import { Dropdown } from 'primereact/dropdown';

function AssetsLoanAmountSummary() {
    const [allIncomeSources, setAllIncomeSources] = useState([]);
    const [statusType, setStatusType] = useState(null);

    const statusTypeOtions = [
        { label: 'Money Market Fund', value: 'Money Market Fund' },
        { label: 'Checking Account', value: 'Money Market Fund' },
        { label: 'Certificate of Deposit', value: 'Certificate of Deposit' },
        { label: 'Mutual Fund', value: 'Mutual Fund' },
        { label: 'Stocks', value: 'Stocks' },
        { label: 'Saving Account', value: 'Saving Account' },
        { label: 'Stock Options', value: 'Stock Options' },
        { label: 'Bonds', value: 'Bonds' },
        { label: 'Retirement Fund (eg 401K, IRA)', value: 'Retirement Fund' },
        { label: 'Bridge Loan Proceeds', value: 'Bridge Loan Proceeds' },
        { label: 'Cash Value of Life Insurance (used for this transaction)', value: 'Cash Value of Life Insurance' },
        { label: 'Secured Borrowed Funds', value: 'Secured Borrowed Funds' },
        { label: 'Unsecured Borrowed Funds', value: 'Unsecured Borrowed Funds' },
        { label: 'Individual Development Account', value: 'Individual Development Account' },
        { label: 'Trust Account', value: 'Trust Account' },
        { label: 'Other Liquid Asset', value: 'Other Liquid Asset' },
        { label: 'Other Non-Liquid Asset', value: 'Other Non-Liquid Asset' },
        { label: 'Cash On Hand Proceeds from Sale of Non-Real Estate Asset', value: 'Cash On Hand Proceeds from Sale of Non-Real Estate Asset' },
        { label: 'Proceeds from Real Estate to be Sold on or Before Closing', value: 'Proceeds from Real Estate to be Sold on or Before Closing' },
        { label: 'Proceeds from sale of Non-Real Estate Asset', value: 'Proceeds from sale of Non-Real Estate Asset' },
        { label: 'Relocation Funds', value: 'Relocation Funds' },
        { label: 'Deposit/Earnest Money', value: 'Deposit/Earnest Money' },
        { label: 'Employer Assistance', value: 'Employer Assistance' },
        { label: 'Lot Equity', value: 'Lot Equity' },
        { label: 'Rent Credit', value: 'Rent Credit' },
        { label: 'Sweat Credit', value: 'Sweat Credit' },
        { label: 'Trade Equity', value: 'Trade Equity' },
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
        <> 
            <InformationBar headingBar="Assets" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Add New Assets" clickFunction={handleAdd} />
            <div>
                <div>
                    {allIncomeSources.length === 0 ? (
                        <p className='px-3'>No information added by borrower</p>
                    ) : (
                        allIncomeSources.map((incomeSource, index) => (
                            <div key={index} className="mt-5">
                                <div className="d-flex justify-content-between px-3 align-items-center  my-3">
                                    <h5 className='txt-24    txt-Secondary my-0'><i>Assets
                                    </i></h5>
                                    <div>
                                        <img src="/assets/icons/circle-remove.png" alt="" />
                                        <button type="button" className='bg-transparent fw-semibold txt-sharp-red' onClick={() => handleRemove(index, incomeSource.id)}>Remove</button>
                                    </div>
                                </div>
                                <div className="px-4 py-3">
                                   
                                    <div className="row d-flex flex-wrap"> 
                                            <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Asset Type </label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        {/* <img src="/assets/icons/phone.png " alt="" /> */}
                                                        <Dropdown
                                                        className='primary-dropDown   mx-0 border-0 outline-none'
                                                        value={statusType}
                                                        options={statusTypeOtions} 
                                                        onChange={(e) => setStatusType(e.target.value)}
                                                        placeholder="select"
                                                    />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Account Name</label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/name.png" alt="" />
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
                                            <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                                <label htmlFor={`property_address_${index}`}>Total Value</label>
                                                <div className="py-2 radius-card border-gray">
                                                    <span className="px-2">
                                                        <img src="/assets/icons/businessplan.png" alt="" />
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
                                            <h5 className='text-primary py-0 my-0'>Total Amount: $100</h5> 
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
export default AssetsLoanAmountSummary