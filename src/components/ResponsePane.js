import React from 'react';
import styled from 'styled-components';

const ResponsePane = () => {
  return (
    <Wrapper>
      <div>Response</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.mainBg};
`;

export default ResponsePane;
