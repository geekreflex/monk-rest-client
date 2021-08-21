import React from 'react';
import styled from 'styled-components';

const TabContent = () => {
  return (
    <Wrapper>
      <div className="tabcontent" id="Params">
        <div>Params Content</div>
      </div>
      <div className="tabcontent" id="Headers">
        <div>Headers Content</div>
      </div>
      <div className="tabcontent" id="Json">
        <div>Json Content</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .tabcontent {
    display: none;
  }
`;

export default TabContent;
