import React from 'react';
import Split from 'react-split';
import styled from 'styled-components';

import RequestPane from './RequestPane';
import ResponsePane from './ResponsePane';

const Pane = () => {
  return (
    <Wrapper>
      <Split
        className="split"
        minSize={0}
        gutterSize={2}
        direction="vertical"
        sizes={[60, 40]}
      >
        <RequestPane />
        <ResponsePane />
      </Split>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .split {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .gutter {
    background-color: #888;
  }

  .gutter:hover {
    background-color: #555;
  }

  .gutter.gutter-vertical {
    cursor: row-resize;
  }
`;

export default Pane;
