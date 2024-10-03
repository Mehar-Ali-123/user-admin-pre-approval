import React from 'react' 
import InformationLoanContainer from '../../../Components/Information/InformationLoanContainer'; 
import SaveButton from '../../../Components/Common/SaveButton';
import UndoButton from '../../../Components/Common/UndoButton'; 
 import InformationTabsLoanAmount from '../../../Components/Information/InformationTabLoanAmount';
import LiabilitiesLoanAmountSummary from '../../../Components/LoanApplicationSummary/LiabilitiesLoanAmountSummary';
 
 function LiabilitiesLoanInformation( ) {
  return (
    <>
      <div className=" px-3 mb-5">
      <InformationLoanContainer content="property" />
        <InformationTabsLoanAmount />  
        <LiabilitiesLoanAmountSummary/>
        <div className="d-flex justify-content-center gap-3 align-items-center my-5">
          <UndoButton />
          <SaveButton />
        </div>
      </div>
    </>
  )
}    
export default LiabilitiesLoanInformation