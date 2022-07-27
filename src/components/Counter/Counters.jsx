import React from "react"
import classes from './counter.module.css'

export default function Counter({tasks}){

    return(
        <div className={classes.counters}>
            <div className={classes.created}>
                <h2>{tasks.length}</h2>
                <p>Created tasks</p>
            </div>

            <div className={classes.completed}>
                <h2>{tasks.filter(task => task.success).length}</h2>
                <p>Completed tasks</p>
            </div>
        </div>
    )
}
