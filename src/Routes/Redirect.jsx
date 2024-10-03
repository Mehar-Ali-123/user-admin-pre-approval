import React, { useLayoutEffect } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import DashboardLayout from '../Components/Layout/DashboardLayout';
import GeneralInformation from '../pages/AdminDashboard/GeneralInformation';
import IncomeInformation from '../pages/AdminDashboard/IncomeInformation';
import PrimaryHouseInformation from '../pages/AdminDashboard/PrimaryHouseInformation';
import LiabilityInformation from '../pages/AdminDashboard/LiabilityInformation';
import PreQualificationInformation from '../pages/AdminDashboard/PreQualificationInformation';
import DocUploadInformation from '../pages/AdminDashboard/DocUploadInformation';
import ViewUploadInformation from '../pages/AdminDashboard/ViewUploadInformation';
import StatusInformation from '../pages/AdminDashboard/StatusInformation';
import Dashboard from '../pages/MainDashboard/Dashboard';
import SubjQueryInformation from '../pages/AdminDashboard/SubjQueryInformation';
import AssetsInformation from '../pages/AdminDashboard/AssetsInformation';
import ConditionInformation from '../pages/ConditionInformation/ConditionInformation';
import PreApprovalInformation from '../pages/PreApprovalInformation/PreApprovalInformation';
import LoginPage from '../pages/AdminLoginPages/LoginPage';
import ChangePasswordLogin from '../pages/AdminLoginPages/ChangePasswordLogin';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useDispatch } from 'react-redux';
import { authActions, currentUser, getCompany } from '../Features/authSlice';
import { useSelector } from 'react-redux';
import ForgetPassword from '../pages/AdminLoginPages/ForgetPassword';

// LOAN AMMOUNT IMPORTS 
import GeneralLoanInformation from '../pages/LoanAmountInformation/ApplicationInformation/GeneralLoanInformation'
import AddressLoanInformation from '../pages/LoanAmountInformation/ApplicationInformation/AddressLoanInformation'
import ReoLoanInformation from '../pages/LoanAmountInformation/ApplicationInformation/ReoLoanInformation'
import AssetsLoanInformation from '../pages/LoanAmountInformation/ApplicationInformation/AssetsLoanInformation'
import IncomeLoanInformation from '../pages/LoanAmountInformation/ApplicationInformation/IncomeLoanInformation'
import LiabilitiesLoanInformation from '../pages/LoanAmountInformation/ApplicationInformation/LiabilitiesLoanInformation'
import MonitoringLoanInformation from '../pages/LoanAmountInformation/ApplicationInformation/MonitoringLoanInformation'
import DeclarationLoanInformation from '../pages/LoanAmountInformation/ApplicationInformation/DeclarationLoanInformation'

function Redirect() {
  const location = useLocation();
  const token = localStorage.getItem("accessToken");
  const ui = localStorage.getItem("ui");
  const dispatch = useDispatch();
  const { user, loading, company } = useSelector((state) => state.auth);
  var currentURL = 'https://portal.oqvesthomeloans.com/login';
  // var currentURL = window.location.href;
  var url = new URL(currentURL);
  var hostname = url.hostname;

  useLayoutEffect(() => {
    if (!company) {
      dispatch(getCompany(hostname))
    }
    if (!user) {
      if (token) {
        dispatch(currentUser(ui));
      } else {
        dispatch(authActions.logout());
      }
    } else {
      if (!token) {
        dispatch(authActions.logout());
      }
    }
  }, [dispatch, ui, token, location]);
  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex' }} className='flex align-items-center justify-content-center flex-column gap-4'>
        <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" />
        <h6>Loading...</h6>
      </div>
    )
  } else {
    return (<>
      <Routes>
        {
          user && token ? (
            <Route
              path='*'
              element={
                <Routes>

                  <Route path='/' element={<DashboardLayout />}>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/application/general' element={<GeneralInformation />} />
                    <Route path='/application/general-information' element={<GeneralInformation />} />
                    <Route path='/application/income-information' element={<IncomeInformation />} />
                    <Route path='/application/primary-information' element={<PrimaryHouseInformation />} />
                    <Route path='/application/subj-query-information' element={<SubjQueryInformation />} />
                    <Route path='/application/assets-information' element={<AssetsInformation />} />
                    <Route path='/application/liability-information' element={<LiabilityInformation />} />
                    <Route path='/application/pre-qualification-information' element={<PreQualificationInformation />} />
                    <Route path='/application/upload-information' element={<DocUploadInformation />} />
                    <Route path='/application/view-doc-information' element={<ViewUploadInformation />} />
                    <Route path='/application/status-information' element={<StatusInformation />} />
                    {/* CONSITION INFORMATION */}
                    <Route path='/application/condition-application' element={<ConditionInformation />} />
                    {/* PRE_APPROVAL_INFORMATION */}
                    <Route path='/application/pre-approval-application' element={<PreApprovalInformation />} />
                    {/* LOAN APPLICATION  */}

        <Route path='/loan-application/general-loan' element={<GeneralLoanInformation />} />
        <Route path='/loan-application/address-loan' element={<AddressLoanInformation />} />
        <Route path='/loan-application/income-loan' element={<IncomeLoanInformation />} />
        <Route path='/loan-application/reo-loan' element={<ReoLoanInformation />} />
        <Route path='/loan-application/liabilities-loan' element={<LiabilitiesLoanInformation />} />
        <Route path='/loan-application/decalaration-loan' element={<DeclarationLoanInformation />} />
        <Route path='/loan-application/assets-loan' element={<AssetsLoanInformation />} />  
        <Route path='/loan-application/monitoring-loan' element={< MonitoringLoanInformation/>} />  

                  </Route>
                  <Route exact path="/login" element={<Navigate to="/" />} />
                  <Route exact path="*" element={<Navigate to="/" />} />
                </Routes>
              }
            />
          ) : (<>
            <Route
              path='*'
              element={
                <Routes>
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/forget-password' element={<ForgetPassword />} />
                  <Route path='/change-password' element={<ChangePasswordLogin />} />
                  <Route
                    exact
                    path="*"
                    element={token ? <Outlet /> : <Navigate to="/login" />}
                  />
                </Routes>
              }
            />
          </>)
        }
      </Routes>
    </>)
  }
}

export default Redirect;