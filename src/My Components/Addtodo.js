import React, {useState} from 'react';
const Addtodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) =>{
 e.preventDefault();
 if(!title||!desc){
   alert("Title or Description cannot be blank");
 }
 else{
  addTodo(title,desc);
  setTitle("");
  setDesc("");
 }
  }
  return (
    <div className="container my-3">
   <h3>Add a Task</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
    
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
           Description of Todo
          </label>
          <input
            type="text" 
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
            id="desc"
          />
        </div>
    
        <button type="Add a Todo" className="btn btn-sn btn-success">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Addtodo;
