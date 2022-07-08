import React from 'react';
import Todo from './Todo';

const Todos = ({ todos }) => {


    return (
        <div>
            <h2 className='text-3xl text-purple-700 text-semibold my-7'> All Todos</h2>

            <div class="overflow-x-auto">
                <table class="table w-2/3 mx-auto">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>titel</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((todo, index) => <Todo
                                key={todo.id}
                                todo={todo}
                                index={index}
                            ></Todo>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Todos;