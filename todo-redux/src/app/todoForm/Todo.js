import './Todo.css'
import { add } from '../todoReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


function Todo() {

     let [text, setText] = useState("");
     let operation = useDispatch();
     console.log(text,"todo")
     return (

          <div>
               <div className='todoAdd'>
                    <input type='text' className="form-control" onInput={(event) =>{ setText(event.target.value)}}></input>
                    <button className='addBtn btn btn-primary' onClick={()=>operation(add(text)) }   >Add</button>                                  
               </div>
               <hr className='horizontalHr'></hr>
          </div>
     )
}
export default Todo;