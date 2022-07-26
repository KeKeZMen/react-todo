import React, {useState} from 'react'
import classes from './form.module.css'

export default function Form({add}) {

    const [input, setInput] = useState('')
    
    const addTask = e => {
        e.preventDefault()
        if (input == '') return false
        add({id: Date.now(), text: input, success: false})
        setInput('')
    }

    return (
        <form onSubmit={e => addTask(e)} className={classes.add__task}>
            <input
                onChange={e => setInput(e.target.value)}
                value={input}
                className={classes.text__input}
                placeholder="Task name..."/>
            <button className={classes.btn__add}></button>
        </form>
    )
}
