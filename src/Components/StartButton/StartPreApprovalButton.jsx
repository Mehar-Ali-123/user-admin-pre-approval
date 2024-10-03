import React, { useEffect, useState } from "react";
import "@fontsource/poppins";
import axios from "axios";
// import { useSelector, useDispatch } from 'react-redux';
// import { setActivePreApprovalDashboard } from './DataSlice';
import { useNavigate } from "react-router-dom";

const StartPreApprovalButton = (props) => {
    //   const { user } = useSelector((state) => state.auth);
    //   const { activePreApprovalDashboard } = useSelector((state) => state.data); 
    //   const dispatch = useDispatch();
    // const navigate = useNavigate(); 
    // const createRandomLoanNumber = async () => {
    //     try {
    //         const response = await axios.put(
    //             "https://api.oqvesthomeloans.com/api/v1/preapproval/summary",
    //             {
    //                 user_id: "1",
    //                 //   user_id: user.user_id,
    //             }
    //         );
    //         if (response?.status === 200) {
    //             const loan_number = response?.data?.loanNumber;
    //             localStorage.setItem("loan_No_By_Admin.", loan_number);
    //             // setNavigateTo("/application/general")
    //             // navigate(props.pathTo);
    //             navigate("/application/general")
    //         }
    //     } catch (error) {
    //         console.log(
    //             "🚀 ~ file: veryfy Start PreApproval Page .jsx:32 ~ onSubmit:async ~ error:",
    //             error
    //         );
    //     }
    // };
    return (
        <>
            <button className="bg-transparent text-light px-2 ps-0  py-0 my-0  txt-16" 
            type="button" 
            // onClick={createRandomLoanNumber}
            >
            Get Pre-Approved
            </button>
        </>
    );
};

export default StartPreApprovalButton