import React from 'react'
import InformationLoanContainer from '../../../Components/Information/InformationLoanContainer'; 
import SaveButton from '../../../Components/Common/SaveButton';
import UndoButton from '../../../Components/Common/UndoButton';
import InformationTabsLoanAmount from '../../../Components/Information/InformationTabLoanAmount';
import DeclarationsLoanAmountSummary from '../../../Components/LoanApplicationSummary/DeclarationsLoanAmountSummary';
import InformationBar from '../../../Components/Information/InformationBar';

function DeclarationLoanInformation() {
  return (
    <>
      <div className=" px-3 mb-5">
      <InformationLoanContainer content="property" />
        <InformationTabsLoanAmount />
        <InformationBar headingBar="Declarations"   /> 
        <DeclarationsLoanAmountSummary />
        <div className="d-flex justify-content-center gap-3 align-items-center my-5">
          <UndoButton />
          <SaveButton />
        </div>
      </div>
    </>
  )
}
export default DeclarationLoanInformation 