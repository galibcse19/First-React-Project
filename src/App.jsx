import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singers from './Singers'

const actorsName=['a','b','c','d'];
const singers=[
  {name: 'a', age:12},
  {name: 'b', age:20},
  {name: 'c', age:30}
]

function App() {
  return (
    <>
      <h1>Vite + React</h1> 
      <Person></Person>
      <Developer></Developer>
      <Result year="10" marks="90"></Result>
      <Result year="11" marks="92"></Result>
      <Result year="13" marks="95"></Result>
      <Man id="190" year="19-20"></Man>
      <Man id={150}  ></Man>
      <Todo relation='bow'></Todo>
      <Todo relation='betterHalf' isDone={true}></Todo>
      <Actor name="Manna"></Actor>
      {
        actorsName.map(actor =><Actor name={actor}></Actor>)
      }
      {
        singers.map(sing =><Singers singer={sing}></Singers>)
      }
    </>
  )
}
const styleCommon={
    border:'1px solid red',
    marginTop:'10px',
    padding:'10px'
  }
// const {id,year}={id:'190', year:'19-20'};
function Man({id=0,year=0}){
  return(
    <div style={styleCommon}>
      <p>ID: {id} and Year: {year}</p>
    </div>
  )
}
function Result(props){
  return(
    <div style={styleCommon}>
      <p>i'm student in class {props.year} and my final marks is {props.marks}</p>
    </div>
  )
}

function Person(){
  const name='galib';  
  return(
  <div className='student'>
    <h1>i am {name}</h1>
  </div>
  )
}
function Developer(){
  const DevStyle={
    border:'1px Solid white',
    marginTop: '10px'
  }
  return(
    <div style={DevStyle}>
      <p>Galib</p>
      <h2>CSE</h2>
    </div>
  )
}

export default App
