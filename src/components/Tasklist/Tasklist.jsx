import React from 'react'
import classes from './tasks.module.css'
import Task from '../Task/Task'

export default function Tasks({tasks, del, success}){

    return(
        <div className={classes.tasks}>
            {tasks.map(task => <Task data={task} key={task.id} del={del} setTaskState={success}/>)}
        </div>
    )
}