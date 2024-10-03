import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'; 
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';

        
function ConditionSummary() {
    
    const [conditionType, setConditionType] = useState(null);

    // Options for Occupancy Type and Property Type
    const conditionTypeOtions = [
        { label: 'Documents Require', value: 'Documents Require' },
        { label: 'Pdf Require', value: 'Pdf Require' },
    ];
    const valueTextArea = ()=>{ 
           return ( "Seems like you have forgot to upload W2 Paystub for year 2022. We need that document to generate your pre-approval. Please upload the doc on your portal. In case of any query, contact me on oqvestllc@gmail.com"
           ) ;
    }
  
    
    return (
        <>
            <div className="px-4">
                <div className="row d-flex flex-wrap mt-5">
                    <div className="col-md-6 px-1 d-flex justify-content-start flex-column">
                        <label htmlFor="username">Conditions on Pre-Approval</label>
                        <div className="py-2 radius-card border-gray">
                            <span className="px-2"> 
                                 <Dropdown
                                                    className='drop-down-condition  mx-0  border-0 outline-none'
                                                    value={conditionType}
                                                    options={conditionTypeOtions}
                                                    //   onChange={(e) => setStatusType( e.value)}
                                                    onChange={(e) => setConditionType(e.target.value)} 
                                                    placeholder="Select - (No-Condition)"
                                                />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6 px-1 d-flex justify-content-center flex-column">
                        <label htmlFor="username">Explain Conditions to borrower</label>
                        <div className="py-2 radius-card border-gray">
                            <span className="px-2">
                                <InputTextarea
                                    className="w-100 pe-4 bg-transparent text-primary"
                                    value={valueTextArea()}
                                    placeholder="Start writing here..."
                                    rows={5}
                                    cols={30}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ConditionSummary;