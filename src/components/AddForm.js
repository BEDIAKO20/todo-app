import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'



function AddForm(props) {

const [todo, setTodo ]= useState([])
const [todo_value, setValue] = useState()
console.log(todo_value);

const handleSubmit=(e)=>{
  e.preventDefault()
  props.addUser(todo_value)

}

// console.log(todo);

  return (
    <div>

      <Form className='alltood' onSubmit={handleSubmit}>
        <Form.Group className="mb-10  todoForm" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Todo " value={todo_value} name="todo" onChange={(e)=>{
            setValue(e.target.value)
          }} />
        </Form.Group>
        <Button variant="danger" className='btn-Todo' type='submit'>Submit</Button>
      </Form>

    </div>
  )
}

export default AddForm