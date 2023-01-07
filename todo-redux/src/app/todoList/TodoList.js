
import './todoList.css'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {update,delet} from '../todoReducer';


function TodoList() {

     let data = useSelector((state) => state.todo.value);
     let [updatBtn, setUpdate] = useState(false);
     let [Ltext, setLtext] = useState("");
     let [ind,setindex]=useState(-1);

     let dispatch = useDispatch();

     console.log(updatBtn,ind, "todolist")

     return (
          <div className='todoListParent'>

               <div className='valueHadding'>
                    <li>Value</li>
                    
                    <li className='updaetDelte'>Update &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delete</li>
               </div>

               <div className='datalist'>
                    {data.map((d, i) =>

                         <>

                              <div className='valueHadding'>

                                   <div className='textShow'>{ d}</div>
                                   <div className='listBtn'>

                                        {!updatBtn  && <li className='btn btn-warning' onClick={() => { setLtext(d); setUpdate(true);setindex(i) }}>Update</li>}
                                        {updatBtn  && <li className='btn btn-warning' 
                                        onClick={() => { dispatch(update({"text":Ltext,"index":i}));  setindex(i);setUpdate(false) }}>Save</li>}

                                        <li className='btn btn-danger' onClick={()=>{dispatch(delet(i))}}>Delete</li>
                                   </div>

                              </div>

                              {updatBtn && ind===i && <input type='text' onInput={(e) => { setLtext(e.target.value) }} className='form-control listInput' value={Ltext}></input>}


                         </>

                    )}
               </div>

          </div>
     );
}

export default TodoList;