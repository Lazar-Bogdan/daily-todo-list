import { useState } from 'react';

import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Line />
      <Info>
        <TaskCompleted>1 task completed</TaskCompleted>
        <ClearAll>Clear All</ClearAll>
      </Info>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
  width: 600px;
  height: 42px;
  flex-shrink: 0;
`;

const Line = styled.div`
  width: 600px;
  height: 1px;
  background: #EEE;
`;

const Info = styled.div`
  display:flex;
  flex-direction: row;
  padding-top: 10px;
  gap: 400px;
`;

const TaskCompleted = styled.span`
  color: #B1BACB;
  font-feature-settings: 'liga' off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 17.6px */
  letter-spacing: 0.16px;
`;

const ClearAll = styled.span`
  color: #B1BACB;
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 17.6px */
  letter-spacing: 0.16px;
`;