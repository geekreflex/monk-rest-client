import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <div>Hello</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.mainBg};
  border-bottom: 1px solid #413f3c;
`;

export default Header;
