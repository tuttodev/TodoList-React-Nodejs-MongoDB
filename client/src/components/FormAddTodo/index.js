import React, {useState} from 'react';
import axios from 'axios';

import Alert from '../Alert';


const FormAddTodo = ({setGetTodosRequest}) => {

    const initialData = {
        title: '',
        description: ''
    }

    const [data, setData] = useState(initialData);
    const [sendDataSuccess, setSendDataSuccess] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:4001/api/todo-save', data)
            .then((res) => {
                if(res.data.success){
                    setSendDataSuccess(true)
                    setTimeout(() => setSendDataSuccess(false), 2000)
                    setGetTodosRequest(true)
                    setData(initialData)
                }
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Todo</h1>
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
                >Send Todo</button>
            </div>
            {sendDataSuccess && <Alert msg='Todo Saved' type='success' />}
        </form>
    )
}

export default FormAddTodo;