import React from 'react' 
import InformationLoanContainer from '../../../Components/Information/InformationLoanContainer';
import InformationTabLoanAmount from '../../../Components/Information/InformationTabLoanAmount';
import InformationBar from '../../../Components/Information/InformationBar';
import SaveButton from '../../../Components/Common/SaveButton';
import UndoButton from '../../../Components/Common/UndoButton';
import GeneralLoanAmountSummary from '../../../Components/LoanApplicationSummary/GeneralLoanAmountSummary';

 function GeneralLoanInformation( ) {
  return (
    <>
      <div className=" px-3 mb-5">
        <InformationLoanContainer content="property" />
        <InformationTabLoanAmount />
        <InformationBar headingBar="Borrower Information"  />
        <GeneralLoanAmountSummary/>
        <div className="d-flex justify-content-center gap-3 align-items-center my-5">
          <UndoButton />
          <SaveButton />
        </div>
      </div>
    </>
  )
}
 
export default GeneralLoanInformation