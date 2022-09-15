import { useState, useEffect} from 'react';
import css from './MyTodo.module.css'


export default function MyTodo({value, onTakeBoole}) {
    const [visibleToDoes, setVisibleToDoes] = useState([]);
    const [viewByComplited, setViewByComplited] = useState('all');
  
    useEffect(() => {
      setVisibleToDoes(
        value.filter(toDo => {
          switch (viewByComplited) {
            case 'complited':
              return toDo.completed;
            case 'notComplited':
              return !toDo.completed;
            default:
              return true;
          }
        })
      );
    }, [value, viewByComplited]);
  
    return (
      <div>
        <div className={css.myTodoComplited}>
          <p
            onClick={() => setViewByComplited('all')}
            className={css.myTodoComplitedItem}
          >
            Все /
          </p>
          <p
            onClick={() => setViewByComplited('complited')}
            className={css.myTodoComplitedItem}
          >
            Выполнены /
          </p>
          <p
            onClick={() => setViewByComplited('notComplited')}
            className={css.myTodoComplitedItem}
          >
            Не выполнены
          </p>
        </div>
        <ul className={css.myTodoList}>
        {visibleToDoes.map(item => (
            <li key={item.id} className={css.item}>{item.title} 
            <div className={item.completed ? css.onButton : css.offButton}>
            <input type='checkbox' onClick={() => onTakeBoole(item)} className={css.checkbox}/></div></li>
            
        ))}
        </ul>
     </div>
    )
}



{/* <div>
<div className={css.myTodoComplited}>
<p onClick={()=>onClickFillter('All')} className={css.myTodoComplitedItem}>Все /</p>
<p onClick={()=>onClickFillter('Done')} className={css.myTodoComplitedItem}>Выполнены /</p>
<p onClick={()=>onClickFillter('False')} className={css.myTodoComplitedItem}>Не выполнены</p>
</div> */}