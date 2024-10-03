import React from 'react' 
import InformationLoanContainer from '../../../Components/Information/InformationLoanContainer'; 
import InformationTabLoanAmount from '../../../Components/Information/InformationTabLoanAmount';
 import SaveButton from '../../../Components/Common/SaveButton';
import UndoButton from '../../../Components/Common/UndoButton'; 
import AddressLoanAmountSummary from '../../../Components/LoanApplicationSummary/AddressLoanAmountSummary';

 function AddressLoanInformation( ) {
  return (
    <>
      <div className=" px-3 mb-5">
      <InformationLoanContainer content="property" />
        <InformationTabLoanAmount /> 
        <AddressLoanAmountSummary/>
        <div className="d-flex justify-content-center gap-3 align-items-center my-5">
          <UndoButton />
          <SaveButton />
        </div>
      </div>
    </>
  )
}
  
export default AddressLoanInformation