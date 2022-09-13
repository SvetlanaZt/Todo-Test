import { useState, useEffect} from 'react';
import {fetchData} from '../API/API';
import AddTodo from '../AddTodo/AddTodo';
import MyTodo from '../MyTodo/MyTodo';
import Fillter from '../Fillter/Fillter';
import { nanoid } from 'nanoid';

export default function Todo() {
    const [data, setData] = useState([]);
    const [newTodo, setNewTodos] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const savedSettings = localStorage.getItem("settings");
        const parsedSettings = JSON.parse(savedSettings);
        fetchData().then(data => setData([...data.filter(a=>!a.completed), 
            ...data.filter(a=>a.completed)]))
      }, [])
    
      const takeName = (contacts)=> {
        console.log(contacts)
        localStorage.setItem("settings", JSON.stringify({id: nanoid(), title: contacts, completed: false }));
        const savedSettings = localStorage.getItem("settings");
        const parsedSettings = JSON.parse(savedSettings);
        setData(prevState => [parsedSettings, ...prevState])
      }
    
//   const changeInput = (evt) => { 
//     setFilter(evt.currentTarget.value)
//   }

    return(
        <>
        <AddTodo onClick={takeName}/>
        <Fillter />
        </>
    )
}