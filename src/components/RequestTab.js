import React, { useEffect } from 'react';
import styled from 'styled-components';
import TabContent from './TabContent';

const RequestTab = () => {
  const createTab = () => {
    let i, tabcontent, tablinks;

    tabcontent = document.querySelectorAll('tabcontent');
    console.log(tabcontent);
  };

  return (
    <div>
      <div className="container">
        <Tabs className="tabs">
          <div className="tablinks" onClick={(e) => createTab(e, 'Params')}>
            <div className="tab-text-wrap active">
              <span>Params</span>
            </div>
          </div>
          <div className="tablinks">
            <div className="tab-text-wrap">
              <span>Headers</span>
            </div>
          </div>
          <div className="tablinks">
            <div className="tab-text-wrap">
              <span>Json</span>
            </div>
          </div>
        </Tabs>
        <TabContent />
      </div>
    </div>
  );
};

const Tabs = styled.div`
  display: inline-flex;
  flex: 0 0 auto;

  .tablinks {
    flex: 0 0 auto;
    font-size: 14px;
    cursor: pointer;
  }

  .tab-text-wrap {
    margin: 0 12px;
    padding: 8px 0;
    position: relative;
  }

  .tab-text-wrap.active::before {
    content: '';
    width: 100%;
    height: 2px;
    background-color: green;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export default RequestTab;
