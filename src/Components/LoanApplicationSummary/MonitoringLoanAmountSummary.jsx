import React, { useState } from 'react';
import SingleCheckBox from '../SingleCheckBox/SingleCheckBox';
import InformationBar from '../Information/InformationBar';
import { InputText } from 'primereact/inputtext';
import EthnicityCheckBox from '../SingleCheckBox/EthnicityCheckBox';

const CheckBoxLine = ({ isYesChecked, isNoChecked, onCheckChange }) => {
  return (
    <div className="checkbox-line d-flex justify-content-center">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label className='mx-4 d-flex gap-1 align-items-center'>
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

const QuestionsSet = ({ questions, heading }) => {
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
        <div className="col-md-7 ">
          <h5 className='txt-24 txt-Secondary my-0'>
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
const MonitoringLoanAmountSummary = () => {
  const questionsSet1 = [
    { label: ' Was the ethnicity of the Borrower collected on the basis of visual observation or surname?', subLabel: 'Sublabel for the first row', isYesChecked: false, isNoChecked: false },
    { label: ' Was the sex of the Borrower collected on the basis of visual observation or surname?', isYesChecked: false, isNoChecked: false },
    { label: ' Was the race of the Borrower collected on the basis of visual observation or surname?', isYesChecked: false, isNoChecked: false },
  ];

  const initialCheckboxes = [
    { id: 1, label: "Hispanic or Latino", checked: false },
    { id: 2, label: "Puerto Rican", checked: false },
    { id: 3, label: "Mexican", checked: false },
    { id: 4, label: "Cuban", checked: false },
    { id: 5, label: "Other Hispanic or Latino - Enter origin:", checked: false },
  ];

  const initialCheckboxes1 = [
    { id: 1, label: "Not Hispanic or Latino", checked: false },
    { id: 2, label: "I do not wish to provide this information", checked: false },
  ];
  const initialCheckboxesGender = [
    { id: 1, label: "Female", checked: false },
    { id: 2, label: "Male", checked: false },
    { id: 3, label: "I do not wish to provide this information", checked: false },
  ];
  const asianCheckBox = [
    { id: 1, label: "Asian Indian", checked: false },
    { id: 2, label: "Chinese", checked: false },
    { id: 3, label: "Filipino", checked: false },
    { id: 4, label: "Japanese", checked: false },
    { id: 5, label: "Korean", checked: false },
    { id: 6, label: "Vietnamese", checked: false },
    { id: 7, label: "Other Asian Race - Enter race:", checked: false },
  ]
  const otherPublicCheckBox = [
    { id: 1, label: "Native Hawaiian", checked: false },
    { id: 2, label: "Guamanian or Chamorro", checked: false },
    { id: 3, label: "Samoan", checked: false },

  ]

  return (
    <div>

      <QuestionsSet questions={questionsSet1} heading="About this Property & Your Money for this Loan" />

      <div className='my-4 mt-5 px-4'>
        <h5 className='txt-24 txt-Secondary my-4'>
          <i>The Demographic Information was provided through:</i>
        </h5>
        <SingleCheckBox />
      </div>
      <InformationBar headingBar="Monitory Tab" />
      {/* ETHNICITY  */}
      <div className='my-2   px-4'>
        <div className="row">
          <h5 className='txt-24 txt-Secondary my-4'>
            <i>Ethnicity</i>
          </h5>
          <div className="col-md-9">
            <div>
              <p className='fw-semibold'>What is your ethnicity?</p>
              <EthnicityCheckBox initialCheckboxes={initialCheckboxes} columnClass="col-md-6" />
            </div>
            <div className="row">
              <div className="col-md-12 ">
                <div className="col-md-8 pt-3 d-flex justify-content-center flex-column ">
                  <div className="  py-2 radius-card  border-gray ">
                    <span className="px-2   mt-0 mb-5">
                      <img src="/assets/icons/name.png" className='mb-1' alt="Custom Icon" />
                      <InputText className="ms-2 fs-5 text-dark  ps-0 py-1 " placeholder="-" />
                    </span>
                  </div>
                  <p className='py-t'><i>For example: Argentinean, Colombian, Dominican, Nicaraguan, Salvadoran, Spaniard, and so on.</i></p>            </div>
                <div className="col-md-4 ">
                </div>
              </div>
            </div>
            <div>
              <EthnicityCheckBox initialCheckboxes={initialCheckboxes1} columnClass="col-md-6" />
            </div>
          </div>
        </div>
      </div>

      {/* GENDER  */}
      <div className='my-2   px-4'>
        <div className="row">
          <h5 className='txt-24 txt-Secondary my-4'>
            <i>Gender</i>
          </h5>
          <div className="col-md-8  ">
            <div>
              <p className='fw-semibold'>What is your gender?</p>
              <EthnicityCheckBox initialCheckboxes={initialCheckboxesGender} columnClass="col-md-6" />
            </div>

          </div>
        </div>
      </div>
      {/* RACE  */}
      <div className='my-2   px-4'>
        <div className="row">
          <h5 className='txt-24 txt-Secondary my-4'>
            <i>Race</i>
          </h5>
          <div className="col-md-9">
            <div className=''>
              <p className='fw-semibold'>What is your race?</p>
              <EthnicityCheckBox columnClass="col-md-12" initialCheckboxes={[{ id: 1, label: "American Indian or Alaska Native - Enter name of enrolled or principal tribe:", checked: false }]} />
            </div>
            <div className="row   mb-3">
              <div className="col-md-12  d-flex gap-2">
                <div className="col-md-8 pt-3 d-flex justify-content-center flex-column">
                  <div className="  py-2 radius-card  border-gray ">
                    <span className="px-2   mt-0 mb-5">
                      <img src="/assets/icons/name.png" className='mb-1' alt="Custom Icon" />
                      <InputText className="ms-2 fs-5 text-dark  ps-0 py-1 " placeholder="-" />
                    </span>
                  </div>
                </div>
                <div className="col-md-4 pt-3">
                  <EthnicityCheckBox columnClass="col-md-12" initialCheckboxes={[{ id: 1, label: "American Indian  ", checked: false }]} />
                  <EthnicityCheckBox columnClass="col-md-12" initialCheckboxes={[{ id: 1, label: "American Indian or A tribe:", checked: false }]} />

                </div>
              </div>
            </div>
            <div>
              <EthnicityCheckBox initialCheckboxes={[{ id: 1, label: "Asian", checked: false }]} />
              <div className='ms-4 mt-2'>
                <EthnicityCheckBox initialCheckboxes={asianCheckBox} columnClass="col-md-4" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12  d-flex gap-2">
                <div className="col-md-8 pt-3 d-flex justify-content-center flex-column ">
                  <div className="  py-2 radius-card  border-gray ">
                    <span className="px-2   mt-0 mb-5">
                      <img src="/assets/icons/name.png" className='mb-1' alt="Custom Icon" />
                      <InputText className="ms-2 fs-5 text-dark  ps-0 py-1 " placeholder="-" />
                    </span>
                  </div>
                  <p className='py-t'><i>For example: Hmong, Laotian, Thai, Pakistani, Cambodian, and so on.</i></p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <EthnicityCheckBox initialCheckboxes={[{ id: 1, label: "Black or African American", checked: false }]} />
                <EthnicityCheckBox initialCheckboxes={[{ id: 1, label: "Native Hawaiian or Other Pacific Islander", checked: false }]} />
                <div className='ms-4 mt-2'> 
                <EthnicityCheckBox initialCheckboxes={otherPublicCheckBox} columnClass="col-md-4" />
                <EthnicityCheckBox initialCheckboxes={[{ id: 4, label: "Other Pacific Islander - Enter race:", checked: false },]} columnClass="col-md-6" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex gap-2">
                <div className="col-md-8 pt-3 d-flex justify-content-center flex-column ">
                  <div className="  py-2 radius-card  border-gray ">
                    <span className="px-2   mt-0 mb-5">
                      <img src="/assets/icons/name.png" className='mb-1' alt="Custom Icon" />
                      <InputText className="ms-2 fs-5 text-dark  ps-0 py-1 " placeholder="-" />
                    </span>
                  </div>
                  <p className='py-t'><i>For example: Fijian, Tongan, and so on.</i></p>
                </div>
              </div>
            </div>
            <EthnicityCheckBox initialCheckboxes={[{ id: 1, label: "White", checked: false }]} />
                <EthnicityCheckBox initialCheckboxes={[{ id: 1, label: "I do not wish to provide this information", checked: false }]} />
          </div>
        </div>
      </div>
    </div>
    </div >
  );
};

export default MonitoringLoanAmountSummary