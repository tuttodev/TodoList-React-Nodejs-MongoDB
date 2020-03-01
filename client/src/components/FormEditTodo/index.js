import React, {useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';


const FormEditTodo = () => {

    const {id: idTodo} = useParams();
    const history = useHistory();

    const initialData = {
        id: idTodo,
        title: '',
        description: ''
    }
    
    const [data, setData] = useState(initialData);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://127.0.0.1:4001/api/todo-edit`, data)
            .then((res) => {
                if(res.data.success){
                    history.push('/')
                }
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Edit Todo</h1>
            <div className='form-group'>
                <input 
                    type='text' 
                    placeholder='todo name' 
                    className='form-control'
                    value={data.title}
                    onChange={(element) => setData({...data, title: element.target.value})}
                />
            </div>
            <div className='form-group'>
                <textarea
                    placeholder='todo description'
                    className='form-control'
                    value={data.description}
                    onChange={(element) => setData({...data, description: element.target.value})}
                ></textarea>
            </div>
            <div className='form-group'>
                <button 
                    type='submit' 
                    className='btn btn-dark btn-block'
                >Edit Todo</button>
            </div>
        </form>
    )
}

export default FormEditTodo;