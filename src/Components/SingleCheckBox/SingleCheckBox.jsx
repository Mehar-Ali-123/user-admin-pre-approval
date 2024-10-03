import React, { useState } from 'react';

function SingleCheckBox( ) {

    const initialCheckboxes = [
        { id: 1, label: "Face-to-Face Interview", checked: false },
        { id: 2, label: "Telephone Interview", checked: false },
        { id: 3, label: "Fax or Mail", checked: false },
        { id: 4, label: "Email or Internet", checked: false },
    ];

    const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

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
        <div>
            <div className='d-flex justify-content-start align-items-center   gap-5 '>
                {checkboxes.map((checkbox) => (

                    <div key={checkbox.id}>
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
        </div>

    );
}

export default SingleCheckBox