import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, updateItem } from '../../actions/listAction';

import TodoForm from '../../components/TodoForm';

const TodoList = ({ items, addItem, removeItem, updateItem }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const [titleInput, descriptionInput] = event.target;

    const newItem = {
      title: titleInput.value,
      description: descriptionInput.value,
    };

    if (titleInput.value === '') {
      alert('Title is required');
      return;
    }
    addItem(newItem);
    titleInput.value = '';
    descriptionInput.value = '';
  };

  const handleDeleteItem = (id) => {
    if (window.confirm('sure?')) {
      removeItem(id);
    }
  };

  return (
    <section className="todo">
      <TodoForm handleSubmit={handleSubmit} />
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <span>Estado: </span>
              <input
                type="checkbox"
                onChange={() => updateItem(item.id)}
                checked={item.check}
              />
              <p>Descripcion: {item.description}</p>
              <button onClick={() => handleDeleteItem(item.id)}>
                Eliminar Tarea
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { items: state.todoList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (id) => dispatch(removeItem(id)),
    updateItem: (id) => dispatch(updateItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
