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
      <Form>
        <Input placeholder="Add new Item" value={name} onChange={e => setName(e.target.value)}>
        </Input>
        <Button onClick={submitForm}>Add</Button>
      </Form>
    </Container>
  )
}

export default TodoForm;

const Container = styled.div`
  width: 600px;
  height: 58px;
  display: flex;
  border: 1px solid var(--stroke, #EEE);
  border-radius: 4px;
  padding: 10px;
  border-radius: 5px;
  margin-top: 32px;

  @media (max-width: 800px) {
    width: 360px;
    height: 58px;
    margin-left:10px;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  width: 500px;
  height: 58px;
  flex-shrink: 0;
  fill: var(--FFFFFF, #FFF);
  stroke-width: 1px;
  stroke: #EEE;
  border: none;
  outline: none;
  
  font-feature-settings: 'liga' off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 17.6px */
  letter-spacing: 0.16px;

  @media (max-width: 800px) {
    width: 280px;
    height: 58px;
    flex-shrink: 0;
    fill: var(--FFFFFF, #FFF);
    stroke-width: 1px;
    stroke: #EEE;
  }
`;

const Button = styled.button`
  display: flex;
  width: 84px;
  heigth: 44px;
  display: inline-flex;
  padding: 15px 24px;
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

  @media (max-width: 800px) {
    display: flex;
    width: 84px;
    padding: 12px 24px;
    align-items: flex-start;
    gap: 8px;
    border-radius: 4px;
    border: 1px solid var(--Mavi, #2D70FD);
    background: #2D70FD;
  }
`;