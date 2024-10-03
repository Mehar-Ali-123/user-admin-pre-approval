import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import InformationBar from '../Information/InformationBar';
import RadioButtonForm from '../RadioButton/RadioButtonForm';
import { Dropdown } from 'primereact/dropdown';

function GeneralLoanAmountSummary() {
    const [allIncomeSources, setAllIncomeSources] = useState([]);


    // date Birth 
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);

    const months = [
        { label: 'January', value: 'January' },
        { label: 'February', value: 'February' },
        { label: 'March', value: 'March' },
        { label: 'April', value: 'April' },
        { label: 'May', value: 'May' },
        { label: 'June', value: 'June' },
        { label: 'July', value: 'July' },
        { label: 'August', value: 'August' },
        { label: 'September', value: 'September' },
        { label: 'October', value: 'October' },
        { label: 'November', value: 'November' },
        { label: 'December', value: 'December' },
    ];

    const handleMonthChange = (e) => {
        setSelectedMonth(e.value);
    };

    const daysOfMonth = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' },
        { label: '11', value: '11' },
        { label: '12', value: '12' },
        { label: '13', value: '13' },
        { label: '14', value: '14' },
        { label: '15', value: '15' },
        { label: '16', value: '16' },
        { label: '17', value: '17' },
        { label: '18', value: '18' },
        { label: '19', value: '19' },
        { label: '20', value: '20' },
        { label: '21', value: '21' },
        { label: '22', value: '22' },
        { label: '23', value: '23' },
        { label: '24', value: '24' },
        { label: '25', value: '25' },
        { label: '26', value: '26' },
        { label: '27', value: '27' },
        { label: '28', value: '28' },
        { label: '29', value: '29' },
        { label: '30', value: '30' },
        { label: '31', value: '31' },
    ];
    const handleDaysChange = (e) => {
        setSelectedDay(e.value);
    };

    const currentYear = new Date().getFullYear();
    const years = [];

    for (let i = currentYear; i >= currentYear - 100; i--) {
        years.push({ label: i.toString(), value: i.toString() });
    }

    const [selectedYear, setSelectedYear] = useState(years[0].value);

    const handleYearChange = (e) => {
        setSelectedYear(e.value);
    };
    // date birth end 

    // password show hide 
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    let holdTimer;
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleMouseDown = () => { 
      holdTimer = setTimeout(() => {
        setShowPassword(true);
      }, 200);  
    };
  
    const stopHoldTimer = () => { 
      clearTimeout(holdTimer);
      setShowPassword(false);
    }; 


    const handleInputChange = (index, field, value) => {
        const updatedIncomeSources = [...allIncomeSources];
        updatedIncomeSources[index][field] = value;
        setAllIncomeSources(updatedIncomeSources);
    };

    const handleRemove = (index) => {
        const updatedIncomeSources = [...allIncomeSources];
        updatedIncomeSources.splice(index, 1);
        setAllIncomeSources(updatedIncomeSources);
    };

    const handleAdd = () => {
        setAllIncomeSources([...allIncomeSources, {}]);
    };
    return (
        <>
            <div className="px-4 py-3">
                <div className="row d-flex flex-wrap ">
                    <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
                        <label className="txt-16" htmlFor="username">First Name</label>
                        <div className="  py-2 radius-card  border-gray ">
                            <span className="px-2">
                                <img src="/assets/icons/profile.png" alt="Custom Icon" />
                                <InputText className="ms-2  ps-0 py-2" placeholder="-"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 px-1 d-flex justify-content-center flex-column ">
                        <label className="txt-16" htmlFor="username">Middle Name</label>
                        <div className="  py-2 radius-card  border-gray">
                            <span className="px-2">
                                <img src="/assets/icons/profile.png" alt="Custom Icon" />
                                <InputText className=" ms-2    ps-0 py-2" placeholder="-" />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
                        <label className="txt-16" htmlFor="username">Last Name</label>
                        <div className="  py-2 radius-card  border-gray">
                            <span className="px-2">
                                {/* <i className="pi pi-search" /> */}
                                <img className="pi pi-search" src="/assets/icons/profile.png" alt="" />
                                <InputText className="  ps-0  ms-2 py-2" placeholder="-"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
                        <label className="txt-16" htmlFor="username">Name Suffix</label>
                        <div className="  py-2 radius-card  border-gray">
                            <span className="px-2">
                                {/* <i className="pi pi-search" /> */}
                                <img className="pi pi-search" src="/assets/icons/profile.png" alt="" />
                                <InputText className="  ps-0  ms-2 py-2" placeholder="-"
                                />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 d-flex flex-wrap">
                    <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
                        <label className="txt-16" htmlFor="username">Phone Primary</label>
                        <div className="  py-2 radius-card  border-gray">
                            <span className="px-2">
                                <img className="pi pi-search" src="/assets/icons/phone.png" alt="" />
                                <InputText className="input-text  ps-0  ms-2 py-2" placeholder="-" />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
                        <label className="txt-16" htmlFor="username">Cell Phone</label>
                        <div className="  py-2 radius-card  border-gray">
                            <span className="px-2">
                                <img className="pi pi-search" src="/assets/icons/phone.png" alt="" />
                                <InputText className="  ps-0  ms-2 py-2" placeholder="-" />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
                        <label className="txt-16" htmlFor="username">Work Phone</label>
                        <div className="  py-2 radius-card  border-gray">
                            <span className="px-2">
                                <img className="pi pi-search" src="/assets/icons/phone.png" alt="" />
                                <InputText className="  ps-0  ms-2 py-2" placeholder="-"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
                        <label className="txt-16" htmlFor="username">Borrowers Email</label>
                        <div className="  py-2 radius-card  border-gray">
                            <span className="px-2">
                                <img className="pi pi-search" src="/assets/icons/mail-opened.png" alt="" />
                                <InputText className="  ps-0  ms-2 py-2" placeholder="-"
                                />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 d-flex flex-wrap">
                    <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
                        <label className="txt-16" htmlFor="username">Martial Status</label>
                        <div className="  py-2 radius-card  border-gray">
                            <span className="px-2">
                                <img className="pi pi-search" src="/assets/icons/married.png" alt="" />
                                <InputText className="input-text  w-75 ps-0  ms-2 py-2" placeholder="-"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
                        <label className="txt-16" htmlFor="username">Married to
                            Label</label>
                        <div className="  py-2 radius-card  border-gray">
                            <span className="px-2">
                                <img className="pi pi-search" src="/assets/icons/heartLove.png" alt="" />
                                <InputText className="w-75  ps-0  ms-0 py-2" placeholder="-"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
                        <label className="txt-16" htmlFor="username">Apply Jointly With</label>
                        <div className="  py-2 radius-card  border-gray">
                            <span className="px-2">
                                <img className="pi pi-search" src="/assets/icons/user-plus.png" alt="" />
                                <InputText className="  ps-0  ms-2 py-2" placeholder="-"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
                        <label className="txt-16" htmlFor="username">Citizenship</label>
                        <div className="  py-2 radius-card  border-gray">
                            <span className="px-2">
                                <img className="pi pi-search" src="/assets/icons/flag.png" alt="" />
                                <InputText className="  ps-0  ms-2 py-2" placeholder="-"
                                />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 d-flex flex-wrap">
                    <p className='py-0 my-0 ps-0 '> Social Security Number</p>
                    <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
      <label
        className={`password-toggle txt-16 text-primary cursor-pointer ${
          showPassword ? 'active' : ''
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={stopHoldTimer}
        onMouseLeave={stopHoldTimer}
        htmlFor="username"
      >
        {showPassword ? 'Leave to Hide' : 'Hold to Show'}
      </label>
      <div className="  py-2 radius-card border-gray">
        <span className="px-2">
          <img className="pi pi-search" src="/assets/icons/idCard.png" alt="" />
          <InputText
            type={showPassword ? 'text' : 'password'} // Toggle between text and password type
            className="ps-0 ms-2 py-2"
            value={password}
            onChange={handlePasswordChange}
            placeholder="-"
          />
        </span>
      </div>
    </div>
                    <div className="col-md-2 px-1 d-flex justify-content-center flex-column">
                        <label className="txt-16" htmlFor="username">Date of Birth</label>
                        <div className="  py-2 radius-card  border-gray">
                            <span className="px-2">
                                <Dropdown
                                    className='drop-down mx-0 border-0 outline-none '
                                    id="birthMonth"
                                    value={selectedMonth}
                                    options={months}
                                    onChange={handleMonthChange}
                                    placeholder="select"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="row">
                            <div className=" col-md-2 px-1 mx-0 d-flex justify-content-center flex-column">
                                <label className="txt-16" htmlFor="username">date</label>
                                <div className="  py-2 radius-card  border-gray">
                                    <span className="px-0 ">
                                        <Dropdown
                                            className='w-100 mx-0 border-0  px-0 outline-none '
                                            id="birthMonth"
                                            value={selectedDay}
                                            options={daysOfMonth}
                                            onChange={handleDaysChange}
                                            placeholder="-"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-4 col-xl-3 px-1 mx-0 px-1 d-flex justify-content-center flex-column">
                                <label className="txt-16" htmlFor="username">year</label>
                                <div className="  py-2 radius-card  border-gray">
                                    <span className="px-0">
                                        <Dropdown
                                            className='w-100 mx-0 border-0 px-0 outline-none '
                                            id="year"
                                            value={selectedYear}
                                            options={years}
                                            onChange={handleYearChange}
                                            placeholder="-"

                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InformationBar headingBar="Additional Information" />
            <div className="px-4 py-3">
                <div className="row d-flex flex-wrap ">
                    <div className="col-md-3 px-1 d-flex justify-content-center flex-column">
                        <label className="txt-16" htmlFor="username">Tax Name</label>
                        <div className="  py-2 radius-card  border-gray ">
                            <span className="px-2">
                                <img src="/assets/icons/profile.png" alt="Custom Icon" />
                                <InputText className="ms-2  ps-0 py-2" placeholder="-"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 px-1 d-flex justify-content-center flex-column ">
                        <label className="txt-16" htmlFor="username">Tax EIN <span className='pb-0 text-primary'>Show</span></label>
                        <div className="  py-2 radius-card  border-gray">
                            <span className="px-2">
                                <img src="/assets/icons/receip.png" alt="Custom Icon" />
                                <InputText className=" ms-2    ps-0 py-2" placeholder="-" />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-5 px-1 d-flex justify-content-center flex-column">
                        <label className="txt-16" htmlFor="username">Tax Address</label>
                        <div className="  py-2 radius-card  border-gray">
                            <span className="px-2">
                                {/* <i className="pi pi-search" /> */}
                                <img className="pi pi-search" src="/assets/icons/current-location.png" alt="" />
                                <InputText className="  ps-0  ms-2 py-2" placeholder="-"
                                />
                            </span>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-4">
                        <RadioButtonForm radioHeading="POA" radioHeadingImg={<img height={20} width={20} src='/assets/icons/info-circle.svg' />} />
                    </div>
                    <div className="col-md-4">
                        <RadioButtonForm radioHeading="Is VA Eligible?" />
                    </div>
                </div>
            </div>
            <InformationBar headingBar="Dependents" imgBar={<img src="/assets/icons/circle-plus.png" alt="" />} contentBar="Add Dependents" clickFunction={handleAdd} />
            <div>
                <div>
                    {allIncomeSources.length === 0 ? (
                        <p className='px-3'>No information added by borrower</p>
                    ) : (
                        allIncomeSources.map((incomeSource, index) => (
                            <div key={index} className="my-4">
                                <div className="d-flex justify-content-between px-3 align-items-center  my-3">
                                    <h5 className='txt-24    txt-Secondary my-0'><i>Dependents

                                    </i></h5>
                                    <div>
                                        <img src="/assets/icons/circle-remove.png" alt="" />
                                        <button type="button" className='bg-transparent fw-semibold txt-sharp-red' onClick={() => handleRemove(index, incomeSource.id)}>Remove</button>
                                    </div>
                                </div>
                                <div className="px-4">
                                    <div className="row d-flex flex-wrap">
                                        <div className="col-md-3 mb-3 px-1 d-flex justify-content-center flex-column">
                                            <label htmlFor={`property_address_${index}`}>Age</label>
                                            <div className="py-2 radius-card border-gray">
                                                <span className="px-2">
                                                    <img src="/assets/icons/old.png" alt="" />
                                                    <InputText
                                                        type="text"
                                                        className="ms-2 ps-0 py-2"
                                                        placeholder="-"
                                                        id={`property_address_${index}`}
                                                        value={incomeSource.property_address}
                                                        onChange={(e) => handleInputChange(index, 'property_address', e.target.value)}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default GeneralLoanAmountSummary