import React, { useState } from 'react';   
 
const CheckBoxLine = ({ isYesChecked, isNoChecked, onCheckChange }) => {
  return (
    <div className="checkbox-line d-flex justify-content-center">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label className='mx-4 d-flex gap-1 align-items-center' >
          <input
            className="custom-checkbox"
            type="checkbox"
            checked={isYesChecked}
            onChange={() => onCheckChange(true, false)}
          />
          Yes
        </label>
        <label className='mx-2 d-flex gap-1 align-items-center'>
          <input
            className="custom-checkbox"
            type="checkbox"
            checked={isNoChecked}
            onChange={() => onCheckChange(false, true)}
          />
          No
        </label>
      </div>
    </div>
  );
};

const QuestionsSet = ({ questions , heading }) => {
  const [checkBoxes, setCheckBoxes] = useState(questions);

  const handleLineCheckChange = (index, isYesChecked, isNoChecked) => {
    const updatedCheckBoxes = [...checkBoxes];
    updatedCheckBoxes[index].isYesChecked = isYesChecked;
    updatedCheckBoxes[index].isNoChecked = isNoChecked;
    setCheckBoxes(updatedCheckBoxes);
  };

  const handleSetAllYes = () => {
    const updatedCheckBoxes = checkBoxes.map((box) => ({
      ...box,
      isYesChecked: true,
      isNoChecked: false,
    }));
    setCheckBoxes(updatedCheckBoxes);
  };

  const handleSetAllNo = () => {
    const updatedCheckBoxes = checkBoxes.map((box) => ({
      ...box,
      isYesChecked: false,
      isNoChecked: true,
    }));
    setCheckBoxes(updatedCheckBoxes);
  };

  return (
    <div className="checkbox-group px-4 mt-5">
      <div className="row  my-3">
        <div className="col-md-7">
          <h5 className='txt-24    txt-Secondary my-0'>
            <i>{heading}</i>
          </h5>
        </div>
        <div className="col-md-5 d-flex justify-content-end">
          <div className="global-checkboxes">
            <label>
              <input
                className="custom-checkbox"
                type="checkbox"
                checked={checkBoxes.every(box => box.isYesChecked)}
                onChange={handleSetAllYes}
              />
              <span className='px-1'>
                Select all as Yes
              </span>
            </label>
            <label className='mx-2'>
              <input
                className="custom-checkbox"
                type="checkbox"
                checked={checkBoxes.every(box => box.isNoChecked)}
                onChange={handleSetAllNo}
              />
              <span className='px-2'>
                Select all as No
              </span>
            </label>
          </div>
        </div>
      </div>
      {checkBoxes.map((box, index) => (
        <div key={index} className="row d-flex justify-content-between align-items-center">
          <div className="col-md-10">
            <p className={`my-2 ${box.labelNo === "A.1" ? 'sub-label' : ''}`}>
              <span className='fw-bold'>{box.labelNo}</span>{box.label}
            </p>
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <CheckBoxLine
              key={index}
              isYesChecked={box.isYesChecked}
              isNoChecked={box.isNoChecked}
              onCheckChange={(isYesChecked, isNoChecked) =>
                handleLineCheckChange(index, isYesChecked, isNoChecked)
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const DeclarationsLoanAmountSummary = () => {
  const questionsSet1 = [ 
    { labelNo: "A.", label: 'Will you occupy the property as your primary residence?', subLabel: 'Sublabel for the first row', isYesChecked: false, isNoChecked: false },
    { labelNo: "A.1", subLabelNo: "A.1", label: 'Have you had an ownership interest in another property in the last three years?', isYesChecked: false, isNoChecked: false },
    { labelNo: "B.", label: 'If this is a Purchase Transaction: Do you have a family relationship or business affiliation with the seller or the property', isYesChecked: false, isNoChecked: false },
    { labelNo: "C.", label: 'Are you borrowing any money for this real estate transaction (e.g., money for your closing costs or down payment) or obtaining any money from another party, such as the seller or realtor, that you have not disclosed on this loan application?', isYesChecked: false, isNoChecked: false },
    { labelNo: "D.1", label: 'Have you or will you be applying for a mortgage loan on another property (not the property securing this loan) on or before closing of this transaction that is not disclosed on this loan application?', isYesChecked: false, isNoChecked: false },
    { labelNo: "D.2", label: 'Have you or will you be applying for any new credit (e.g. installment loan, credit card, etc.) on or before closing of this loan that is not disclosed on this application?', isYesChecked: false, isNoChecked: false },
    { labelNo: "E.", label: 'Will this property be subject to a lien that could take priority over the first mortgage lien, such as a clean energy lien paid through your property taxes (e.g. the Property Assessed Clean Energy Program)?', isYesChecked: false, isNoChecked: false },

  ];

  const questionsSet2 = [

    { labelNo: " F.", label: 'Are you a co-signer or guarantor on any debt or loan that is not disclosed on this application?', isYesChecked: false, isNoChecked: false },
    { labelNo: "G.", label: 'Are there any outstanding judgments against you?', isYesChecked: false, isNoChecked: false },
    { labelNo: "H.", label: 'Are you presently delinquent or in default on any Federal debt?', isYesChecked: false, isNoChecked: false },
    { labelNo: "I.", label: 'Are you a party to a lawsuit in which you potentially have any personal financial liability?', isYesChecked: false, isNoChecked: false },
    { labelNo: "J.", label: 'Have you conveyed title to any property in lieu of foreclosure in the past 7 years?', isYesChecked: false, isNoChecked: false },
    { labelNo: "K.", label: 'Within the past 7 years, have you completed a pre-foreclosure sale or short sale, whereby the property was sold to a third party and the Lender agreed to accept less than the outstanding mortgage balance due?', isYesChecked: false, isNoChecked: false },
    { labelNo: "L.", label: 'Have you had property foreclosed upon in the last 7 years?', isYesChecked: false, isNoChecked: false },
    { labelNo: "M.", label: 'Have you declared bankruptcy within the past 7 years?', isYesChecked: false, isNoChecked: false },

  ];
  const questionsSet3 = [

    { label: 'Homeownership Education and Housing Counseling', isYesChecked: false, isNoChecked: false },
    { label: 'Has the Borrower(s) completed homeownership education (group or web-based classes) within the last 12 months?', isYesChecked: false, isNoChecked: false },
    { label: 'Has the Borrower(s) completed housing counseling (customized counselor-to-client services) within the last 12 months?', isYesChecked: false, isNoChecked: false }
  ];
  return (
    <div>
      <QuestionsSet questions={questionsSet1} heading="About this Property & Your Money for this Loan"/>
      <QuestionsSet questions={questionsSet2} heading="About Your Finances"/>
      <QuestionsSet questions={questionsSet3} heading="Your Supplemental Consumer Information"/>  
    </div>
  );
};

export default DeclarationsLoanAmountSummary;