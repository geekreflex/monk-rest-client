import styled from 'styled-components';
import {
  IoDocumentOutline,
  IoSettingsOutline,
  IoTimerOutline,
} from 'react-icons/io5';

const SideNav = () => {
  return (
    <Wrapper>
      <div className="side-nav-inner">
        <div className="top">
          <div className="icon">
            <IoDocumentOutline />
          </div>
          <div className="icon">
            <IoDocumentOutline />
          </div>
          <div className="icon">
            <IoTimerOutline />
          </div>
        </div>
        <div className="bottom">
          <div className="icon">
            <IoSettingsOutline />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 55px;
  background-color: ${({ theme }) => theme.color1};

  .side-nav-inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    font-size: 25px;
    cursor: pointer;
  }
`;

export default SideNav;
