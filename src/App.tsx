import {useState} from 'react';

import Layout from './components/Layout';
import TodoForm from './components/TodoForm';

import 'normalize.css'

type Todo = {
  name: string;
  complete: boolean;
  createdAt: Date;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log('todos', todos);

  const createTodo = (name: string) => {
    const newTodo = {
      name: name,
      complete: false,
      createAt: new Date()
    };
    setTodos([...todos, newTodo]);
  }
  
  return (
    <Layout>
      Daily To Do List
      <TodoForm onSubmit={createTodo} />
    </Layout>
  )
}