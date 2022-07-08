import React from 'react';
import { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    //get Value from Form
    const handleTitle = e => {
        setTitle(e.target.value);
    };
    const handleDesc = e => {
        setDesc(e.target.value);
    };

    const handleAddToDo = e => {
        e.preventDefault();
        const newTodo = {
            title,
            desc
        };
        onAddTodo(newTodo);

        e.target.reset();

    };


    return (
        <div>
            <form className='my-12' onSubmit={handleAddToDo}>
                <input
                    type="text"
                    class="input input-bordered input-primary w-96 mx-auto mb-4" placeholder='Title'
                    name='title'
                    onBlur={handleTitle}
                    id='title' required /> <br />

                <textarea
                    type="text"
                    class="textarea textarea-primary w-96 mx-auto mb-4" placeholder='Descriptions'
                    onBlur={handleDesc}
                    id='desc' required /> <br />

                <button type='submit' className='text-bold btn btn-primary w-96 mx-auto '>Add ToDo</button>
            </form>
        </div>
    );
};

export default AddTodo;