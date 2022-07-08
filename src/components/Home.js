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
            return [todo, ...prevTodo]
        }));
    };
    // console.log(todos);

    return (
        <div>
            <h2 className='text-3xl text-purple-700 text-bold my-7'>My Awesome To-Do App</h2>
            <AddTodo onAddTodo={addNewTodo}></AddTodo>
            <Todos todos={todos}></Todos>
        </div>
    );
};

export default Home;