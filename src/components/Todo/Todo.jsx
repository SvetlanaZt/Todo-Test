import { useState, useEffect} from 'react';
import {fetchData} from '../API/API';
import AddTodo from '../AddTodo/AddTodo';
import MyTodo from '../MyTodo/MyTodo';
import Fillter from '../Fillter/Fillter';
import { nanoid } from 'nanoid';
import css from './Todo.module.css'

export default function Todo() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');
    const [dataLocal] = useState([]);
    console.log(dataLocal)

    useEffect(() => {
        const savedSettings = localStorage.getItem("settings");
        const parsedSettings = JSON.parse(savedSettings);
    
        fetchData().then(data => setData([...parsedSettings || [], ...data.filter(a=>!a.completed), 
            ...data.filter(a=>a.completed)]))
      }, [])

      const takeName = (contacts)=> {
        const savedSettings = localStorage.getItem("settings");
        const parsedSettings = JSON.parse(savedSettings) || [];
        const newItem = {id: nanoid(), title: contacts, completed: false };
        const updatedData = [newItem,...parsedSettings];

        localStorage.setItem("settings", JSON.stringify(updatedData));        
        setData(prevState => [newItem, ...prevState])
      }
    
  const changeInput = (evt) => { 
    setFilter(evt.currentTarget.value)
  }

  const chanheBoole = (task) => {
    // const updatedData = contacts.map(item => {
    //   return item.id === task.id ? {
    //     ...item,
    //     completed: !item.completed
    //   } : {
    //     ...item
    //   }
    // });
    // setContacts(updatedData)
  }

  const onChangeInput = data && data.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()));
  // const tfbfbg = onChangeInput.filter(item => item.completed)


    return(
 <section className={css.section}>
    <div className={css.headerTodo}></div>
    <h1 className={css.titleTodo}>Todo App</h1>
    <div className={css.sectionTodo}>
    <section className={css.sectionTo}>


    <AddTodo onClick={takeName}/> 
    </section>
    <section className={css.sectionMyTodo}>
    <Fillter value={filter} onChange={changeInput} />
    <MyTodo value={onChangeInput} onTakeBoole={chanheBoole}/>
    
    </section>
    </div>
   </section>

    )
}
