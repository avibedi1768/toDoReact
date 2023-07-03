import './App.css';
import Header from './MyComponents/Header'
import { AddTodo } from './MyComponents/AddTodo'
import { Todos } from './MyComponents/Todos'
import { Footer } from './MyComponents/Footer'
import { About } from './MyComponents/About'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }


  const onDelete = (todo) => {
    console.log('I am onDelete of todo ', todo)
    // this method of deleting does not work in react
    // let index=todos.indexOf(todo)
    // todos.slice(index, 1)

    setTodos(todos.filter((e) => {
      return e !== todo
    }))
  }

  const addTodo = (title, desc) => {
    console.log('I am adding todo', title, desc)
    let sno
    if (todos.length === 0) {
      sno = 1
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
    console.log(myTodo)
  }

  //setTodos is a functon that will update todos
  const [todos, setTodos] = useState(initTodo)

  //agar koi change aya todos ch, local vich edit hojega
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])

  return (
      <BrowserRouter>
        <Header title='My Todos List' searchbar={false} />
        {/* Routes sara check krda te corresponding matching wale component nu render kr denda*/}

        <Routes>
          <Route exact path="/" element={
              <div>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </div>
          }/>
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter >

  );
}

export default App;
