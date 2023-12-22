import { useState } from 'react';

import styled from 'styled-components';

type Todo = {
  id: number;
  name: string;
  complete: boolean;
  createdAt: Date;
}

type ToDoFooter = {
  todos: Todo[];
  onClearAll: () => void;
}

const Footer = (props: ToDoFooter) => {


  return (
    <Container>
      <Line />
      <Info>
        <TaskCompleted>
          {props.todos.reduce((count, todo) => todo.complete ? count + 1 : count, 0)} Tasks Completed
        </TaskCompleted>
        <ClearAll onClick={props.onClearAll} >Clear All</ClearAll>
      </Info>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
  width: 600px;
  position: fixed;
  bottom: 60px;
  height: 42px;
  flex-shrink: 0;

  @media (max-width: 800px) {
    width: 360px;
    height: 39px;
    flex-shrink: 0;
    bottom: 20px;
    display: center;
    padding-left: 15px;
  }
`;

const Line = styled.div`
  width: 600px;
  height: 1px;
  background: #EEE;

  @media (max-width: 800px) {
    width: 360px;
    height: 1px;
  }
`;

const Info = styled.div`
  display:flex;
  padding-top:10px;
  flex-direction: row;
  gap: 385px;
  white-space: nowrap;
  
  @media (max-width: 800px) {
    gap: 150px;
  }
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
  cursor: pointer;
`;