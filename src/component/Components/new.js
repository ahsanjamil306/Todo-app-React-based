import React , { useState } from 'react'

function Mytodo() {


  const [todoText, setTodoText] = useState('')
  const [todoList, setTodoList] = useState([])

  
// add todo 
const addTodoItem = () => {
    const list = [...todoList] //in order to change the reference
    list.push(todoText)
    setTodoList(list)
  }

  // update todo text
  const updateTodoText = (e) => {
    setTodoText(e.target.value)
  }
// for delete 
    const deleteItem = (index) => {
    const list = [...todoList] //in order to change the reference
    list.splice(index, 1)
    setTodoList(list)
  }

  // for update
 const updateItem = (index) => {
     const list = [...todoList]
     list.splice(index, 1)
     list.push(prompt("Enter updates"))
     setTodoList(list)
 }
    return(

        <div>
            <h1>Todo App</h1>
            <input type="text" placeholder="Enter Todo" onChange={updateTodoText} />
            <button onClick={() => setTodoList([])}>DELETE ALL</button>
            <button onClick={addTodoItem}>ADD TODOS</button>

            <ol>
                {todoList.map((item, index) => {
                   return <li key={index}>{item}
                   <button onClick={() => updateItem(index)}>EDIT</button>
                   <button onClick={() => deleteItem(index)}>DELETE</button></li>
                })}
            </ol>

        </div>


    );

}

export default Mytodo;