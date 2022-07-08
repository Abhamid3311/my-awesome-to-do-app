import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const Todo = ({ todo, index }) => {
    const { title, desc } = todo;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{title}</td>
            <td>{desc}</td>
            <td><button className='btn btn-xs btn-ghost text-2xl text-red-500'><AiFillDelete></AiFillDelete></button></td>

        </tr>
    );
};

export default Todo;