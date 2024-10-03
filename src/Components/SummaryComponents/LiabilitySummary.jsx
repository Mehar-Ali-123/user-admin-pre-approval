import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import InformationBar from '../Information/InformationBar';

function LiabilitySummary() {

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
            {/* ASSETS  */}
            <div>
                <InformationBar headingBar="Liabilities
" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Add New Liability
"  clickFunction={handleAdd} />
                <div>
                    {allIncomeSources.length === 0 ? (
                        <p className='px-3'>No information added by borrower</p>
                    ) : (
                        allIncomeSources.map((incomeSource, index) => (
                            <div key={index} className="my-4">
                                <div className="d-flex justify-content-between px-3 align-items-center  my-3">
                                    <h5 className='txt-24    txt-Secondary my-0'><i>Liability
                                    </i></h5>
                                    <div>
                                        <img src="/assets/icons/circle-remove.png" alt="" />
                                        <button type="button" className='bg-transparent fw-semibold txt-sharp-red' onClick={() => handleRemove(index)}>Remove</button>
                                    </div>
                                </div>
                                <div className="px-4">
                                    <div className="row d-flex flex-wrap">
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Liability Type  </label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    {/* <img src="/assets/icons/current-location.png" alt="" /> */}
                                                    <Dropdown
                                                        className='primary-dropDown   mx-0 border-0 outline-none'
                                                        value={statusType}
                                                        options={statusTypeOtions}
                                                        //   onChange={(e) => setStatusType( e.value)}
                                                        onChange={(e) => setStatusType(e.target.value)}
                                                        placeholder="select"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_status_${index}`}>Open  Balance</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                <img src="/assets/icons/businessplan.png" alt="" />
                                                    <InputText
                                                        type="text"
                                                        className="ms-2 ps-0 py-2"
                                                        placeholder="-"
                                                        id={`property_address_${index}`}
                                                        value={incomeSource.property_address}
                                                        onChange={(e) => handleInputChange(index, 'property_address', e.target.value)}
                                                    />

                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`net_monthly_expenses_${index}`}>Lenders Name</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/name.png" alt="" />

                                                    <InputNumber
                                                        type="text"
                                                        className=""
                                                        placeholder="-"
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
                                            <label htmlFor={`net_monthly_expenses_${index}`}>Monthly Payment</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/dollar-circle.png" alt="" />
                                                    <InputNumber
                                                        type="text"
                                                        className=""
                                                        placeholder="-"
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
                        ))
                    )}
                </div>
            </div>
            {/* ASSETS ADD END  */}

        </div>
    );
}
 
export default LiabilitySummary;
 