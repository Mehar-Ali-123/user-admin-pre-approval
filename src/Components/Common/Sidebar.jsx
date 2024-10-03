import React, { useEffect, useState } from 'react';
import styles from '../../styles/sidebar.module.css';
import logoLight from '../../../public/assets/icons/logoLight.png';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Get the current location


  const [activeNav, setActiveNav] = useState(false)
  const [activeApp, setActiveApp] = useState(false)
  const [dashboardSidebar, setDashboardSidebar] = useState(false)
  const [loanApplicationActive, setLoanApplicationActive] = useState(false)
  const [loanApplicationNavlinkActive, setLoanApplicationNavlinkActive] = useState(false)
  useEffect(() => {
    const pathname = location.pathname;
    const activeApplicationNavlink = ['-information', "general"].some(path =>
      pathname.includes(path) || pathname === '-information'
    );
    setActiveApp(activeApplicationNavlink);
    const mainDashboard = ["/dashboard/"].some(path =>
      pathname.includes(path) || pathname === '/'
    );
    setDashboardSidebar(mainDashboard);

    const loanApplicationActive = ["/loan-application/"].some(path =>
      pathname.includes(path) || pathname === '/loan'
    );
    setLoanApplicationActive(loanApplicationActive);

    const activeloan = ["-loan"].some(path =>
      pathname.includes(path) || pathname === '-loan'
    );
    setLoanApplicationNavlinkActive(activeloan);

  }, [location.pathname]);


  return (
    <div className={styles.sidebar}>
      <div>
        {loanApplicationActive ? <div id='sidebar-scroll' className={`${styles.sidebarItems} mt-7`}>
          <li className={styles.links}>
            <NavLink
              to=''
              activeClassName={styles.activeLink}
              className={activeNav && styles.bg_green}
            >
              <div className={`d-flex gap-2 align-items-center fw-semibold txt-16  ${styles.txt_center} ${styles.hover_navlink}`}>
                <img src="/assets/icons/exclamation-mark.png" alt="" />
                Message              </div>
            </NavLink>
          </li>

          <li className={styles.links}>
            <NavLink
              to='/loan-application/general-loan'
              activeClassName={styles.activeLink}
              className={loanApplicationNavlinkActive && styles.bg_green}
            >
              <div className={`d-flex gap-2 align-items-center fw-semibold txt-16 ${styles.txt_center} ${styles.hover_navlink}`}>
                <img src="/assets/icons/smart-home.png" alt="" />
                Application <span className=" d-flex justify-content-center align-items-center application-badge">3</span>
              </div>
            </NavLink>
          </li>
        </div>
          :
          <div>
            <div className='text-start my-0 mb-4 w-100  d-flex justify-content-center px-auto'>
              <a className="mx-auto    " href="/">
                <img className='block h-12 mx-auto ' src={logoLight} alt="Your Image" />

              </a>
            </div>
            {dashboardSidebar
              ?
              <div id='sidebar-scroll' className={`${styles.sidebarItems} mt-7`}>
                <li className={styles.links}>
                  <NavLink
                    to='/'
                    activeClassName={styles.activeLink}
                    className={activeNav && styles.bg_green}
                  >
                    <div className={`d-flex gap-2 align-items-center fw-semibold txt-16 ${styles.txt_center} ${styles.hover_navlink}`}>
                      <img src="/assets/icons/smart-home.png" alt="" />
                      Pipeline
                    </div>
                  </NavLink>
                </li>


                <li className={styles.links}>
                  <NavLink
                    to='/dashboard/active-loan'
                    activeClassName={styles.activeLink}
                    className={activeNav && styles.bg_green}
                  >
                    <div className={`d-flex gap-2 align-items-center fw-semibold txt-16 ${styles.txt_center} ${styles.hover_navlink}`}>
                      <img src="/assets/icons/smart-home.png" alt="" />
                      Active Loans
                    </div>
                  </NavLink>
                </li>
                <li className={styles.links}>
                  <NavLink
                    to='/dashboard/closed-loan'
                    activeClassName={styles.activeLink}
                    className={activeNav && styles.bg_green}
                  >
                    <div className={`d-flex gap-2 align-items-center fw-semibold txt-16  ${styles.txt_center} ${styles.hover_navlink}`}>
                      <img src="/assets/icons/exclamation-mark.png" alt="" />
                      Closed Loans
                    </div>
                  </NavLink>
                </li>
                <li className={styles.links}>
                  <NavLink
                    to='/dashboard/declined-loan'
                    activeClassName={styles.activeLink}
                    className={activeNav && styles.bg_green}
                  >
                    <div className={`d-flex gap-2 align-items-center fw-semibold txt-16 ${styles.txt_center} ${styles.hover_navlink}`}>
                      <img src="/assets/icons/file-certificate.png" alt="" />
                      Declined
                    </div>
                  </NavLink>
                </li>
                <li className={styles.links}>
                  <NavLink
                    to='/dashboard/canceled-withdrawn'
                    activeClassName={styles.activeLink}
                    className={activeNav && styles.bg_green}
                  >
                    <div className={`d-flex gap-2 align-items-center fw-semibold txt-16 ${styles.txt_center} ${styles.hover_navlink}`}>
                      <img src="/assets/icons/file-certificate.png" alt="" />
                      Canceled/WIthdrawn
                    </div>
                  </NavLink>
                </li>
                <li className={styles.links}>
                  <NavLink
                    to='/dashboard/on-hold'
                    activeClassName={styles.activeLink}
                    className={activeNav && styles.bg_green}
                  >
                    <div className={`d-flex gap-2 align-items-center fw-semibold txt-16 ${styles.txt_center} ${styles.hover_navlink}`}>
                      <img src="/assets/icons/file-certificate.png" alt="" />
                      On Hold
                    </div>
                  </NavLink>
                </li>
              </div>
              :
              <div id='sidebar-scroll' className={`${styles.sidebarItems} mt-7`}>
                <li className={styles.links}>
                  <NavLink
                    to='/application/general-information'
                    activeClassName={styles.activeLink}
                    className={activeApp && styles.bg_green}
                  >
                    <div className={`d-flex gap-2 align-items-center fw-semibold txt-16 ${styles.txt_center} ${styles.hover_navlink}`}>
                      <img src="/assets/icons/smart-home.png" alt="" />
                      Application
                    </div>
                  </NavLink>
                </li>
                <li className={styles.links}>
                  <NavLink
                    to='/application/condition-application'
                    activeClassName={styles.activeLink}
                    className={activeNav && styles.bg_green}
                  >
                    <div className={`d-flex gap-2 align-items-center fw-semibold txt-16  ${styles.txt_center} ${styles.hover_navlink}`}>
                      <img src="/assets/icons/exclamation-mark.png" alt="" />
                      Conditions
                    </div>
                  </NavLink>
                </li>
                <li className={styles.links}>
                  <NavLink
                    to='/application/pre-approval-application'
                    activeClassName={styles.activeLink}
                    className={activeNav && styles.bg_green}
                  >
                    <div className={`d-flex gap-2 align-items-center fw-semibold txt-16 ${styles.txt_center} ${styles.hover_navlink}`}>
                      <img src="/assets/icons/file-certificate.png" alt="" />
                      Pre-Approval
                    </div>
                  </NavLink>
                </li>
              </div>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Sidebar;