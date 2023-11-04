import { useState } from 'react';

import styled from 'styled-components';

type Todo = {
  id: number;
  name: string;
  complete: boolean;
  createdAt: Date;
}

type ToDoListProps = {
  todos: Todo[];
  onClick: (id: number) => void;
}

const TodoList = (props: ToDoListProps) => {

  const handleListClicked = (id: number) => {
    props.onClick(id);
  }

  const sortMap = props.todos.slice().sort((a,b) => {
    if(a.complete !== b.complete) return a.complete ? -1 : 1;

    return new Date(a.createdAt) - new Date(b.createdAt);
  })

  return (
    <Container>
      {sortMap.map(todo => (
        <Row
          key={todo.id}
          onClick={() => handleListClicked(todo.id)}
        >
          <Elipse>
            <circle
              cx="16"
              cy="16"
              r="15.5"
              stroke={todo.complete ? '#00D8A7' : '#2D70FD'}
              fill={todo.complete ? '#00D8A7' : 'none'}
            />
            {/* {clicked === todo.id ? ''} */}
          </Elipse>
          <Text
          >
            {todo.name}
          </Text>
        </Row>
      ))}
    </Container>
  )
}

export default TodoList;

const Container = styled.div`
  width: 212px;
  height: 144px;
  flex-shrink: 0;
  margin-top: 26px;
  gap: 24px;
`;

const Row = styled.div`
  width: 207px;
  height: 32px;
  flex-shrink: 0;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-items:center;
  padding-top: 24px;
  gap: 15px;
`;

const Text = styled.span`
  color: #001747;
  font-feature-settings: 'liga' off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 17.6px */
  letter-spacing: 0.16px;
  transition: color 0.3s ease;


  &:hover {
    color: #2D70FD;
    font-feature-settings: 'liga' off;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 17.6px */
    letter-spacing: 0.16px;
  }
`;

const Elipse = styled.svg`
  width: 32px;
  height: 32px;
  fill: none;
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: #EEE;
`;
