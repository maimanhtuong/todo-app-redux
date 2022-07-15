import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import {  todoRemainingSelector } from '../../redux/selector'
import  { addNewTodo } from './todosSlice'

import {Formik, Form } from 'formik'
import { TextField, SelectField } from './textField';
import * as Yup from 'yup';


export default function TodoList() {
const [todoName,setTodoName] = useState("")
const [priority,setPriority] = useState("Medium")

const todoList = useSelector(todoRemainingSelector)
// const todoList1= useSelector(state => state.todoList.todos)
// console.log({todoList1})


const dispatch = useDispatch()

const validationSchema = Yup.object({
  todoName: Yup.string()
  .min(3, 'Todo name must be at least 3 characters')
  .required('Todo name is required'),
  priority: Yup.string()
  .required('Priority is required')

})
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => <Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed}/>)}
      </Col>

      <Formik 
        initialValues={{
          todoName:'',
          priority:''
        }}
        validationSchema={validationSchema}
        onSubmit={values =>{
          // dispatch(
          //   todoListSlice.actions.addTodo({
          //   id:uuidv4(),
          //   name:values.todoName,
          //   priority:values.priority,
          //   completed:false
          // }))

          // dispatch(addTodos(
          //   {
          //         id:uuidv4(),
          //         name:values.todoName,
          //         priority:values.priority,
          //         completed:false
          //   }
          // ))
          dispatch(addNewTodo({
                  id:uuidv4(),
                  name:values.todoName,
                  priority:values.priority,
                  completed:false
        }))
        setTodoName('')
        setPriority('Medium')
          
        }}
      >
        {formik =>(
          <Form>
          <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          {/* <TextField value={todoName}  onChange={handleInputChange} label='Input Add' name='addInput' placeholder="Input Add"/> */}
          <TextField   label='Input Add' name='todoName' placeholder="Input Add"/>
          
          <SelectField  name='priority'>
            
            <option value='' label='Choose Priority'>
              <Tag >Choose Priority</Tag>
            </option>
            <option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </option>
            <option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </option>
            <option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </option>
          </SelectField>
          {/* <Button type='submit' onClick={handleAddButtonClick}>Add</Button> */}
          <button className="btn btn-dark mt-3" type='submit' >
            Add
          </button>
        </Input.Group>
      </Col>
          </Form>
      
        )}

      </Formik>
    </Row>
  );
}
