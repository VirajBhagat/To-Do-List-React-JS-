import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect,useState } from 'react';
import Moment from 'moment';

function App() {

  const [title,setTitle] = useState('')
  const [todoList, setTodoList] = useState([])

  const show=()=>{
    console.log("TodoList: " + JSON.stringify(todoList))
  }

  const addTask = ()=>{
    if(title!==""){
      if(todoList.length!==0){
        setTodoList([...todoList,{id:todoList[todoList.length-1].id+1,title:title,date:Moment().format('DD-MM-YYYY'),status:false}])
      }else{
        setTodoList([...todoList,{id:1,title:title,date:Moment().format('DD-MM-YYYY'),status:false}])
      }
    }

    setTitle('')
  }

  const taskComplete = (id) =>{
    for(var i=0; i<todoList.length; i++){
      if(todoList[i].id===id){
        todoList[i].status=true;
      }
    }
    setActive(!isActive);
  }

  const taskIncomplete = (id) =>{
    setTodoList(current => current.filter(task => {
      return task.id !== id;
    }))
  }

  const [isActive, setActive] = useState("false");


  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="#">My To Do List</a>
        </nav>
      </header>

      <main>

        <div className="card bg-light w-50 mb-3 mt-5">
          <h4 className="card-header">Add Your Task</h4>
          <div className="card-body d-flex justify-content-center">
            <input className="form-control w-55" type="text" name='todoTask' onChange={(e) => {
                        setTitle(e.target.value)
                      }} placeholder='Title' value={title}/>
            <button onClick={addTask} type="button" className="btn btn-success ml-3">+</button>
            {/* <button onClick={show} type="button" className="btn btn-success ml-3">show</button> */}
          </div>
        </div>

        <table className="w-50 table table-striped justify-content-center">
          <tbody className=''> 
          {
            todoList.map((e) => {
              return(
                // <div className='CompleteTasks' key={e.id}>
                <tr className='CompleteTasks my-2' key={e.id}>
                  {
                    e.title==="" ? '' : 
                    // <div className='bg-success text-white'>
                    <div className={e.status===true ? 'bg-success text-white' : ''}>
                      <td><h5 className='mt-1'>{e.title}</h5></td>
                      <td><h6 className='mt-2'>{e.date}</h6></td>
                      <td><button className='btn btn-secondary' onClick={() => taskComplete(e.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg></button></td>
                      <td><button className='btn btn-secondary' onClick={() => taskIncomplete(e.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button></td>
                    </div>
                  }
                </tr>
              );
            })
          }
          </tbody>
        </table>
        
          
      </main>
    </div>
  );
}

export default App;
