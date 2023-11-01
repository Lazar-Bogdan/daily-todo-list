import { useState } from 'react';

import styled from 'styled-components';

type Props = {
  onSubmit: (name: string) => void;
};

const TodoForm = (props: Props) => {
  const [name, setName] = useState('');
  const submitForm = () => {
    props.onSubmit(name);
    setName('');
  };

  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" width="600" height="58" viewBox="0 0 600 58" fill="none">
        <path d="M0.5 8C0.5 3.85787 3.85786 0.5 8 0.5H592C596.142 0.5 599.5 3.85787 599.5 8V50C599.5 54.1421 596.142 57.5 592 57.5H7.99999C3.85786 57.5 0.5 54.1421 0.5 50V8Z" fill="white" stroke="#EEEEEE" />
      </svg>
      <Input placeholder="Add new Item" value={name} onChange={e => setName(e.target.value)} />
      <Button onClick={submitForm}>Add</Button>
    </Container>
  )
}

export default TodoForm;

const Container = styled.div`
  width: 600px;
  height: 58px;
  flex-shrink: 0;
  display: flex;
  padding-top: 20px;
`;

const Input = styled.input`
  width: 600px;
  height: 58px;
  flex-shrink: 0;
  fill: var(--FFFFFF, #FFF);
  stroke-width: 1px;
  stroke: #EEE;
  color: #B1BACB;
  font-feature-settings: 'liga' off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 17.6px */
  letter-spacing: 0.16px;
`;

const Button = styled.button`
  display: inline-flex;
  padding: 12px 24px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid var(--Mavi, #2D70FD);
  background: #2D70FD;
  color: #FFF;
  text-align: center;
  font-feature-settings: 'liga' off;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 19.8px */
  letter-spacing: 0.18px;
`;