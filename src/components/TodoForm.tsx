import {useState} from 'react';

import styled from 'styled-components';

type Props = {
  onSubmit: (name: string) => void;
};

const TodoForm = (props: Props) => {
  const [name, setName] = useState('');
  const submitForm = () => {
    props.onSubmit(name);
  }
  
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={submitForm}>Add</button>
    </div>
  )
}

export default TodoForm;