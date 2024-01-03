import React, {useState} from "react";
import Task from "./Task";
import "../App.css"
import 'materialize-css/dist/css/materialize.min.css'

export default function AddTask(){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [listOfTask , addTask] = useState([])
    function addTaskToList() {
        addTask([...listOfTask, {
            id : listOfTask.length === 0 ? 1 : listOfTask[listOfTask.length - 1].id + 1,
            name,
            description,
            completion: false
        }])
    }

    function deleteTask(task) {
        addTask(listOfTask.filter( e => e.id !== task ))
    }

    function taskCompleted(id) {
        addTask(listOfTask.map(task => {
            if(task.id === id){
            return {...task, completion: true}
            } else {
                return task
            }
        }
        ))
    }

    return (
        <div className="auth-card">
            <div className="auth-card input-field">
                <h2 className="logo purple-text text-lighten-1">To - Do App </h2>
                <input
                    type="text"
                    placeholder="Task Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Task Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <button
                    className="btn waves-effect waves-light purple lighten-2"
                    onClick={() => addTaskToList()}
                >
                    Add Task
                </button>

                <div className="auth-card">
                    {listOfTask.map((task) => {
                        return(
                        <Task name={task.name}
                              id={task.id}
                              description={task.description}
                              completion={task.completion}
                              taskCompleted={taskCompleted}
                              deleteTask={deleteTask}/>
                        )})}
                </div>
            </div>
        </div>

    )
}