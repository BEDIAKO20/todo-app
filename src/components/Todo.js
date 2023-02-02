import React, { useState,useEffect } from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import './Stodo.css'
import { AiTwotoneEdit,AiFillDelete } from "react-icons/ai";
// import './App.css';

function Todo(props) {

 const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
      <Container>
        <Row>
        <Card className='card-todo'  style={{ width: '50rem' }}>
        <p className='todo-time'>{time}</p>
      <Card.Header className='todo-header'>
        <h5>
          {props.todoInfo} 
          <AiTwotoneEdit className='todo-edit'/>{'   '}
          <AiFillDelete className='todo-delete' />

          </h5>
        
         
          
     
        </Card.Header>
    </Card>
        </Row>
      </Container>
      
    </>
  )
}

export default Todo