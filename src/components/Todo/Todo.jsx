import React, {useState} from "react";
import classes from './todo.module.css'
import Counters from '../Counter/Counters'
import Form from "../Form/Form";
import Taskslist from "../Tasklist/Tasklist";

export default function Todo() {

    const [tasks, setTasks] = useState([])

    const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id))

    const addTask = (obj) => setTasks([...tasks, obj])

    const setTaskState = (id) => setTasks(tasks.map(task => {
        if(id === task.id) return {...task, success: !task.success}
        else return task
    }))

    return (
        <div className={classes.window}>
            <h1 className={classes.title}>To Do</h1>

            <Counters tasks={tasks}/>

            <Taskslist tasks={tasks} del={deleteTask} success={setTaskState}/>

            <Form add={addTask}/>
        </div>
    )
}