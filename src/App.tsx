import { useState } from 'react';

import Layout from './components/Layout';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

import styled from 'styled-components';
import 'normalize.css'

type Todo = {
  id: number;
  name: string;
  complete: boolean;
  createdAt: Date;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log('todos', todos);

  const createTodo = (name: string) => {
    const newTodo = {
      id: Date.now(),
      name: name,
      complete: false,
      createAt: new Date()
    };
    setTodos([...todos, newTodo]);
  }

  const completeTodo = (id: number) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) return;

    const newTodos = [...todos];
    const todo = newTodos[index];
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  return (
    <Layout>
      <Title>Daily To Do List</Title>
      <TodoForm onSubmit={createTodo} />
      <TodoList todos={todos} />
      <Footer />
    </Layout>
  )
}

const Title = styled.span`
  color: #11175E;
  font-family: Rubik;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
`;