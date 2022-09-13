import css from './Fillter.module.css'

export default function Filter({ value, onChange }) { 
    return(<>
        <h2 className={css.myTodoTitle}>My Todo</h2>
 <input type="text" value={value} onChange={ onChange} placeholder="Search" className={css.myTodoFillter}></input>
 </>
)
}