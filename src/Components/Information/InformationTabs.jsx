import React, { useState, useEffect } from 'react';
import { tabsData } from '../../utils/data';
import { useNavigate, useLocation } from 'react-router-dom';

function InformationTabs() {
  const [activeTab, setActiveTab] = useState(tabsData.length > 0 ? tabsData[0].id : null);
  const [activeImgTab, setActiveImgTab] = useState(tabsData.length > 0 ? tabsData[0].id : null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const matchingTab = tabsData.find((tab) => tab.path === currentPath);
    if (matchingTab) {
      setActiveTab(matchingTab.id);
      setActiveImgTab(matchingTab.id);
    } else {
      setActiveTab(null);
    }
  }, [location.pathname]);

  return (
    <>
      <div>
        <div className='row ps-3'>
          <div className=" my-4   row d-flex justify-content-between">
            {tabsData.map((tab) => (
              <div
                key={tab.id}
                className={`tabs d-flex   px-0 mx-1  col-md-1 flex-column justify-content-start mx-0 align-items-center ${activeTab === tab.id ? 'active-tab' : ''
                  }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setActiveImgTab(tab.id);
                  navigate(tab.path);
                }}
                onMouseEnter={() => {
                  setActiveImgTab(tab.id);
                }}
                onMouseLeave={() => {
                  setActiveImgTab(activeTab);  
                }}
              >
                <div
                  className={`py-3 mb-2 px-4 radius-button tabs-hover ${activeTab === tab.id ? `box-shadow txt-drimary` : ''
                    }`}
                >
                  <img
                    height="25"
                    width="25"
                    src={activeImgTab === tab.id ? tab.tabActiveImg : tab.tabImg}
                    alt={tab.tabName}
                  />
                </div>
                <p className={`text-center px-0 mx-0 txt-18 fw-400px  ${activeTab === tab.id ? `txt-Primary` : ''
                  }`} >{tab.tabName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
 

export default InformationTabs;