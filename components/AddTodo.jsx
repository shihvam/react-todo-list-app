import styles from './TodoItem.module.css'
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState, useRef, useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';

function AddTodo() {

  // let [todoName, setTodoName] = useState('');

  // let[dueDate, setDueDate] = useState('');

  const {addNewItem} = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // }

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`Number of updates ${noOfUpdates.current}`);
  // }

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value ="";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  
    // setTodoName('');
    // setDueDate('');
  }

  return ( 
  <div className="container text-center">

  <form action='' className={`${styles["kg-row"]} row`}

  onSubmit={handleAddButtonClicked}
  >

  <div className="col-6">
      <input type="text" placeholder='Enter todo here'
      ref={todoNameElement}

      />
    </div>

    <div className="col-4">
      <input type="date" 
      ref={dueDateElement}

      // onChange={handleDateChange}
      />
    </div>

    <div className="col-2">
      <button 
      type='submit' 
      className=  {`${styles["kg-button"]} btn btn-success` }
      >
         <IoMdAddCircleOutline /> 
      </button>
    </div>

  </form>

  </div>
  );
}

export default AddTodo;