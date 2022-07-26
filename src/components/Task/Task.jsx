import React from 'react'
import classes from './task.module.css';
import swal from "sweetalert"

const Task = ({data, del, setTaskState}) => {

    return (
        <div
            className={data.success
                ? classes.task__success
                : classes.task__unsuccess}>
            <button
                onClick={() => setTaskState(data.id)}
                className={classes.btn__unsuccess}></button>

            <p className={classes.task__text}>{data.text}</p>

            <button
                onClick={() => swal({title: 'Are you sure?', text: 'Confirm deletion', buttons: true, dangerMode: true}).then(answer => {if (answer) del(data.id)})}
                className={classes.btn__delete}>
            </button>
        </div>
    )
}

export default Task