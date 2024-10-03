import React from 'react'
import InformationContainer from '../../Components/Information/InformationContainer'
import InformationBar from '../../Components/Information/InformationBar'
import SaveButton from '../../Components/Common/SaveButton'
import UndoButton from '../../Components/Common/UndoButton'
import ConditionSummary from '../../Components/SummaryComponents/ConditionSummary'

function ConditionInformation() {
  return (
    <>
      <div className=" px-3 mb-5">
        <div className='mb-5'>
          <InformationContainer content="property" />
        </div>
        {/* <InformationTabs /> */}
        <InformationBar headingBar="Conditions" />
        <ConditionSummary />
        <div className="d-flex justify-content-center gap-3 align-items-center my-5">
          <UndoButton />
          <SaveButton />
        </div>
      </div>
    </>
  )
}

export default ConditionInformation