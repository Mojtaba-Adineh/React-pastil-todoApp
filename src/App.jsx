import React,{ useState } from 'react'
import './App.scss'
import Card from './components/card/Card';

function App() {

  return (
    <div className='myContainer'>
      <h1>Todo List</h1>
      <Card/>
    </div>
  )
}

export default App
