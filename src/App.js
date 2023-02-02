
import { useState } from 'react';
import './App.css';
import AddForm from './components/AddForm';

import Todos from './components/Todos';

function App() {
const [todoapp , setTodoapp]= useState([])


const addNewUser = (Todo) => {
  console.log('aaa')
  setTodoapp([...todoapp,  Todo])
}
  return (
    <div className="App">
      <header>
      <h1>Bediako Todo List</h1>
      </header>
      <AddForm   addUser={addNewUser}/>
    <Todos todoData={todoapp}/>
 

    </div>
  );
}

export default App;
