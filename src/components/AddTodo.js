import React from 'react';
import { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [status, setStatus] = useState('');

    //get Value from Form
    const handleTitle = e => {
        setTitle(e.target.value);
    };
    const handleDesc = e => {
        setDesc(e.target.value);
    };

    const handleStatus = e => {
        setStatus(e.target.value)
    };

    const handleAddToDo = e => {
        e.preventDefault();
        const newTodo = {
            title,
            desc,
            status
        };
        onAddTodo(newTodo);

        e.target.reset();

    };


    return (
        <div>
            <form className='my-12' onSubmit={handleAddToDo}>
                <input
                    type="text"
                    class="input input-bordered input-primary w-96 mx-auto mb-4 bg-black text-white"
                    placeholder='Title'
                    name='title'
                    onBlur={handleTitle}
                    id='title' required /> <br />

                <select
                    class="select select-primary  w-96 mx-auto mb-4 bg-black text-white" onChange={handleStatus}>
                    <option disabled selected>Choose Status</option>
                    <option>Open</option>
                    <option>Working</option>
                    <option>Done</option>
                    <option>Over Due</option>
                </select><br />

                <textarea
                    type="text"
                    class="textarea textarea-primary w-96 mx-auto mb-4 bg-black text-white" placeholder='Descriptions'
                    onBlur={handleDesc}
                    id='desc' required /> <br />

                <button type='submit' className='text-bold btn btn-outline text-white btn-primary w-96 mx-auto '>Add ToDo</button>
            </form>
        </div>
    );
};

export default AddTodo;