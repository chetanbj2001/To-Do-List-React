import './App.css';
import React, { useState } from 'react';

function App() {

  // item{
  //   name: '',
  //   purchased: false
  // }
  const [todoList, settodoList] = useState([]);

  const addList = (event) => {
    event.preventDefault();
    let form = event.target;
    let forData = new FormData(form);
    let formDataObj = Object.fromEntries(forData.entries());
    formDataObj.completed = false;

    settodoList([...todoList, formDataObj]);

    // console.log(form);

  }

  const removeItm = (event) => {

    let removeIt = event.target.value;

    let newList = todoList.filter((item) => {
      if (removeIt === item.name) {
        return false;
      }
      else {
        return true;
      }
    })

    settodoList(newList);
  }

  const completeIt = (event) => {
    let markIt = event.target.value;

    todoList.map(function (val, index) {
      if (markIt === val.name) {
        val.completed = true;
      }
    })

    settodoList([...todoList]);

  }

  return (


    <div className="App">



      <h1>To-Do-List</h1>

      {/* <h1>dd</h1> */}




      <div className='card '>

        <form onSubmit={addList} className='flex-apart'>
          <input className='input' type="text" name="name" placeholder="Add item to list..." />
          <button type='submit' className='btn purple'>Add</button>
        </form>
      </div>
      {


        todoList.map(function (todo, index) {
          return (
            <div className={todo.completed ? 'card flex-apart green' : 'card flex-apart'} key={index}>
              <span> {todo.name}  </span>
              <span>
                <button className='btn pink' onClick={completeIt} value={todo.name}>
                  Done
                </button>
                <button className='btn' onClick={removeItm} value={todo.name}>x</button>
              </span>
            </div>

          );
        })

      }

    </div>
  );
}

export default App;
