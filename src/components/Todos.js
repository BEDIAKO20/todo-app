import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Todo from './Todo'


function Todos(props) {
  return (
    <>
    <Container>
        <Row>
            {
                props.todoData.map((todoapp,index) =>{
                    // console.log(props.todoData)
                    return <Todo  todoInfo={todoapp} key={index}/>
                   
                })
               
            }
            
        </Row>
    </Container>
    </>
  )
}

export default Todos