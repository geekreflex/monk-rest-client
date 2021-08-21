import React from 'react';
import styled from 'styled-components';

const RequestForm = () => {
  return (
    <FormWrap>
      <form>
        <Container>
          <SIWrap>
            <SWrap className="select-wrap">
              <select defaultValue="GET">
                <option defaultValue="GET">GET</option>
                <option defaultValue="POST">POST</option>
                <option defaultValue="PUT">PUT</option>
                <option defaultValue="PATCH">PATCH</option>
                <option defaultValue="DELETE">DELETE</option>
              </select>
            </SWrap>

            <InputWrap>
              <input type="text" placeholder="Enter request URL" />
            </InputWrap>
          </SIWrap>

          <BtnWrap>
            <button>Send</button>
          </BtnWrap>
        </Container>
      </form>
    </FormWrap>
  );
};

const FormWrap = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
`;

const SIWrap = styled.div`
  display: flex;
  flex: 1;
`;

const SWrap = styled.div`
  display: flex;
  select {
    width: 100px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border: none;
    outline: none;
    padding: 0 20px;
    background-color: #eee;
    border-right: 1px solid #ccc;
  }
`;

const InputWrap = styled.div`
  display: flex;
  flex: 1;
  background-color: #eee;
  input {
    width: 100%;
    outline: none;
    border: none;
    padding: 0 20px;
    background-color: transparent;
  }
`;

const BtnWrap = styled.div`
  margin-left: 10px;
  display: flex;

  button {
    padding: 0 30px;
    border-radius: 3px;
    border: none;
    outline: none;
    background-color: green;
    color: white;
  }
`;

export default RequestForm;
