import React from 'react';
import { Link } from 'react-router-dom';

const ListTodo = ({todos, DeleteTodo}) => {

    return(
        <div>
            <ul className='list-group'>
            {
                todos.map(todo => (
                    <li key={todo._id} className='list-group-item'>
                        <h3>{todo.title}</h3>
                        <span>
                            {todo.description}
                        </span>
                        <div className='btn btn-danger btn-block' onClick={() => DeleteTodo(todo._id)}>Delete</div>
                        <Link 
                            className='btn btn-info btn-block'
                            to={`/todo-edit/${todo._id}`} 
                        >Edit</Link>

                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default ListTodo;