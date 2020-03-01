import React, {useEffect, useState} from 'react';
import axios from 'axios';

import FormAddTodo from '../../components/FormAddTodo'
import ListTodo from '../../components/ListTodo'

const Home = () => {

    const [todos, setTodos] = useState([]);
    const [getTodosRequest, setGetTodosRequest] = useState(false);

    useEffect(() => {
        const getTodos = async () => {
            const res = await axios.get('http://127.0.0.1:4001/api/todo');
            setTodos(res.data);
            setGetTodosRequest(false)
        }
        getTodos();
    }, [getTodosRequest])

    const DeleteTodo = async id => {
        await axios.delete('http://127.0.0.1:4001/api/todo-remove', { data: { id }});
        setGetTodosRequest(true)
    }

    return(
        <div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-lg'>
                        <FormAddTodo 
                            setGetTodosRequest={setGetTodosRequest}
                        />
                    </div>
                    <div className='col-lg'>
                        <ListTodo 
                            todos={todos}
                            DeleteTodo= {DeleteTodo}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;