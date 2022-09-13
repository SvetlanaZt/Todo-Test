// import { useState} from 'react';
import css from './MyTodo.module.css'


export default function MyTodo({value, onTakeBoole}) {
    return(
        <div>
             <div className={css.myTodoComplited}>
            {/* <p onClick={()=>allTodo(contacts)} className={css.myTodoComplitedItem}>Все /</p> */}
             {/* <p onClick={()=>value.map(item=>console.log(item.completed))} className={css.myTodoComplitedItem}>Выполнены /</p> */}
             {/* <p onClick={()=>value.filter(item=>item.completed)} className={css.myTodoComplitedItem}>Не выполнены</p> */}
             </div>

        <ul className={css.myTodoList}>
        {value.map(item => (
            <li key={item.id} className={css.item}>{item.title} 
            <div className={item.completed ? css.onButton : css.offButton}>
            <input type='checkbox' onClick={() => onTakeBoole(item)} className={css.checkbox}/></div></li>
            
        ))}
        </ul>
     </div>
    )
}