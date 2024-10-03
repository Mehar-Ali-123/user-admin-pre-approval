import React from 'react'
import InformationContainer from '../../Components/Information/InformationContainer'
import InformationTabs from '../../Components/Information/InformationTabs'
import InformationBar from '../../Components/Information/InformationBar'
import SaveButton from '../../Components/Common/SaveButton'
import UndoButton from '../../Components/Common/UndoButton'
 import DocumentUploadSummary from '../../Components/SummaryComponents/DocumentUploadSummary'

function DocUploadInformation(props) {
  return (
    <>
      <div className=" px-3 mb-5">
        <InformationContainer content="property" />
        <InformationTabs />
        <InformationBar headingBar="Document Upload"  />
     <DocumentUploadSummary/>
        <div className="d-flex justify-content-center gap-3 align-items-center my-5">
          <UndoButton />
          <SaveButton />
        </div>
      </div>
    </>
  )
}  
export default DocUploadInformation