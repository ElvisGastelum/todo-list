import React from 'react';
import { Form, Button, Input } from './styled';

const TodoForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Title" />
      <Input type="text" placeholder="Description" />
      <Button type="submit">Add Task</Button>
    </Form>
  );
};

export default TodoForm;
