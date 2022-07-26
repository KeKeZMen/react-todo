import React, {useState} from "react";
import classes from './todo.module.css'
import Counters from '../Counter/Counters'
import Form from "../Form/Form";
import Tasks from "../Tasks/Tasks";

export default function Todo() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: '1 task',
            success: false
        }, 
        {
            id: 2,
            text: '2 task',
            success: false
        }, 
        {
            id: 3,
            text: '3 task',
            success: false
        }
    ])

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

            <Tasks tasks={tasks} del={deleteTask} success={setTaskState}/>

            <Form add={addTask}/>
        </div>
    )
}