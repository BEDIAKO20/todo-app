
import './App.css';
import Form from './components/Form';
import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
      <header>
      <h1>Bediako Todo List</h1>
      </header>
  <Todo/>
  <Form/>
    </div>
  );
}

export default App;
