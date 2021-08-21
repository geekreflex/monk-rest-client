import React from 'react';
import styled from 'styled-components';
import RequestForm from './RequestForm';
import RequestTab from './RequestTab';

const RequestPane = () => {
  return (
    <Wrapper>
      <RequestForm />
      <RequestTab />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.mainBg};
`;

export default RequestPane;
