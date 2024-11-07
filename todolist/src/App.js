import React, { useState } from 'react';
import './App.css';
import InputArea from "./components/InputArea";
import ToDoitem from './components/ToDoitem';

function App() {
  const[items,setItems]=useState([]);
   const addItems=(inputText)=>{
       setItems((prevItems)=>{
        return [...prevItems,inputText]
       });
   };
   const deleteItem=(id)=>
   {
    setItems((prevItems)=>{
      return prevItems.filter((_item,index)=>{
        return index!==id;
      });
    });
   };
   console.log(items);
  return (
    <div className="container">
      <div className="heading">

      <h1>TO DO LIST</h1>
    </div>
    <InputArea additems={addItems}/>
    <div>
      <ul>
        {
              items.map((item, index) => (
                <ToDoitem key={index} text={item} deleteItem={deleteItem}  id ={index}/>
            
  ))}
        
      </ul>
    </div>
    </div>
  );
}

export default App;
