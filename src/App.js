import React, { Component } from 'react';
import styled from 'styled-components';
import Progress from './Progress.js';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Progress />
      </Wrapper>
    );
  }
}

export default App;
