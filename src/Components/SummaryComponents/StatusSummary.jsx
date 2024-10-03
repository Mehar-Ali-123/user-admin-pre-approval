import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';  
import { Dropdown } from 'primereact/dropdown';

function StatusSummary() {
  const [statusSummaryType, setStatusSummaryType] = useState(null);

  // Options for Occupancy Type and Property Type
  const statusSummaryTypeOtions = [
      { label: 'Under Review', value: 'Under Review' },
      { label: 'In Progress', value: 'In Progress' },
      { label: 'Pre-Qualified', value: 'Pre-Qualified' },
  ];
  return (
    
    <>
      <div className="ps-4 ">
          <div className="row d-flex flex-wrap ">
            <div className="col-md-6 px-1 d-flex justify-content-center flex-column">
            <label htmlFor="username">Status</label>
             <div className="  py-2 radius-card  border-gray ">
             <span className="px-2">
              <img src="/assets/icons/profile.png" alt="Custom Icon" />
                <Dropdown
                 className=" drop-down ms-2  ps-0   "
                  placeholder="Select -"
                  value={statusSummaryType}
                  options={statusSummaryTypeOtions} 
                  onChange={(e) => setStatusSummaryType(e.target.value)} 
                  />
              </span>
             </div>
            </div> 
          </div> 
        </div>
    </>
  )
}
 
export default StatusSummary