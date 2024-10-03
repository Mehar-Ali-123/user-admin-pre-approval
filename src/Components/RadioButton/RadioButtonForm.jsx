import React, { useState } from 'react';
import { RadioButton } from 'primereact/radiobutton';

function RadioButtonForm({radioHeading,radioHeadingImg}) {
  const [option, setOption] = useState('yes');

  const handleOptionChange = (e) => {
    setOption(e.value);
  };

  return (
    <div className="radio-button-container">
      <p className='my-2  txt-18 d-flex align-items-center gap-1'>{radioHeading}{radioHeadingImg}</p>
      <div className="d-flex flex-column gap-2">
        <div className='custom-radio'>
          <RadioButton
            inputId="0ption1"
            name="yes"
            value="yes"
            onChange={handleOptionChange}
            checked={option === 'yes'}
          />
          <label htmlFor="option1" className="ms-2">
            Yes
          </label>
        </div>
        <div className="flex align-items-center custom-radio">
          <RadioButton
            inputId="option2"
            name="yes"
            value="no"
            onChange={handleOptionChange}
            checked={option === 'no'}
          />
          <label htmlFor="option2" className="ms-2">
No          </label>
        </div> 
      </div>
    </div>
  );
}

export default RadioButtonForm;
