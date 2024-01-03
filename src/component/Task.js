import React from "react";

export default function Task(task){
    return (
        <div
            style={{backgroundColor: task.completion ? "Green" : "whitesmoke"}}
        >
            <h2>{task.name}</h2>
            <h5>{task.description}</h5>
            <button
                className="btn waves-effect waves-light purple lighten-2"
                onClick={() => task.deleteTask(task.id)}
            >
                Delete Task
            </button>
            <button
                className="btn waves-effect waves-light purple lighten-2"
                onClick={() => task.taskCompleted(task.id)}
            >
                Task Completed
            </button>
        </div>
    )
}