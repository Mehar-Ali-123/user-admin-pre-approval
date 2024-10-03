import React, { useState } from 'react';

function EthnicityCheckBox(props) {
    const [checkboxes, setCheckboxes] = useState(props.initialCheckboxes);

    const handleCheckClick = (checkboxId) => {
        const updatedCheckboxes = checkboxes.map((checkbox) => {
            if (checkbox.id === checkboxId) {
                return { ...checkbox, checked: !checkbox.checked };
            }
            return checkbox;
        });

        setCheckboxes(updatedCheckboxes);
    };

    return (
        <div className="row">
            {checkboxes.map((checkbox) => (
                <div className={props.columnClass} key={checkbox.id}>
                    <label className='d-flex gap-1'>
                        <input
                        className='custom-checkbox'
                            type="checkbox"
                            checked={checkbox.checked}
                            onChange={() => handleCheckClick(checkbox.id)}
                        />
                        {checkbox.label}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default EthnicityCheckBox;
