import { useState} from 'react';
import css from './AddTodo.module.css'

export default function AddTodo({onClick}) {
    const [contacts, setContacts] = useState('');
    
const onChange = (e) =>{
    setContacts(e.target.value)
}
const addTodo =()=>{
    onClick(contacts);
    reset()
}
const reset =()=>{
    setContacts('')
}
    return(
        <div className={css.sectionAddTodo}>
        <h2 className={css.addTodoTitle}>Add Todo</h2>
        <div className={css.addTodoWrappen}>
        <input className={css.addTodoInput}
   onChange={onChange}
  type="text"
  name="name"
  value={contacts}
  placeholder='Todo name'
    />
   <button type='button' onClick={addTodo} className={css.addTodoButton}>+</button>
        </div></div>
    )
 }