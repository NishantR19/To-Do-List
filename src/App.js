import './App.css';
import Header from './My Components/Header';
import Footer from './My Components/Footer';
import Todo from './My Components/TodoItem';
import Todos from './My Components/Todos';
import Addtodo from './My Components/Addtodo';
import React, {useState,useEffect} from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
initTodo=[];
  }
  
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  
  const onDelete=(todo)=>{
console.log("On Deleted ",todo)

setTodos(todos.filter((e)=>{
  return e!==todo;

} ));
localStorage.setItem("todos",JSON.stringify(todos));
}

const addTodo=(title,desc)=>{
  console.log("I am adding this todo", title,desc);
  let sno;
  if(todos.length===0){
    sno=0;
  }
  else{
    let sno=todos[todos.length-1].sno +1;
  }
  const myTodo={
   sno:sno,
   title:title,
   desc:desc,
  }
  setTodos([...todos,myTodo]);
  

}

  const [todos, setTodos] = useState(initTodo);
  

  useEffect(() => {
    
    localStorage.setItem("todos",JSON.stringify(todos));
}, [todos])


  return (
    <>
  
<Header title="To-Do List"/>
  <Addtodo addTodo={addTodo}/>
<Todos todos={todos} onDelete={onDelete}/>
<Footer/>

    </>

  );
}

export default App;
