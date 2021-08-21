import React from 'react';
import SideNav from './SideNav';
import Pane from './Pane';

import styled from 'styled-components';

const DocWrap = () => {
  return (
    <Wrapper>
      <SideNav />
      <Pane />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 40px);
`;

export default DocWrap;
