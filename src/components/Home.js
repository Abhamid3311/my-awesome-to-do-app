import React from 'react';
import { useState } from 'react';
/* import { v4 as uuidv4 } from 'uuid';
{ id: uuidv4(),} */

import AddTodo from './AddTodo';
import Todos from './Todos';

const Home = () => {
    const [todos, setTodos] = useState([])
    const addNewTodo = todo => {
        setTodos((prevTodo => {
            return [...prevTodo, todo]
        }));
    };
    // console.log(todos);

    return (
        <div className='bg-gray-800 pt-10  pb-40'>
            <h2 className='text-3xl text-orange-700  text-bold my-7'>My Awesome To-Do App</h2>
            <AddTodo onAddTodo={addNewTodo}></AddTodo>
            <Todos todos={todos}></Todos>
        </div>
    );
};

export default Home;