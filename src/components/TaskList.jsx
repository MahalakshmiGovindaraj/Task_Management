import React from 'react';

export const TaskList = ({ tasks, handleEdit, handleDelete }) => (
    <div className="max-w-4xl mx-auto mt-5  mb-56 p-4 bg-white rounded shadow">

        <table className="w-full text-left border">
            <thead>
                <tr className="bg-blue-100 text-center">
                    <th className="border border-gray-300 p-1">Title</th>
                    <th className="border border-gray-300 p-1">Description</th>
                    <th className="border border-gray-300 p-1">Status</th>
                    <th className="border border-gray-300 p-1">Action</th>
                </tr>
            </thead>

            <tbody>
                {tasks.map((task, index) => (
                    <tr className=''
                    key={index}>
                        <td className='px-2 break-words whitespace-normal max-w-xs border border-gray-300'>{task.title.charAt(0).toUpperCase() + task.title.slice(1)}</td>
                        <td className='px-2 break-words whitespace-normal max-w-xs border border-gray-300'>{task.desc.charAt(0).toUpperCase() + task.desc.slice(1)}</td>
                        <td className='px-2 break-words whitespace-normal border border-gray-300'>{task.status}</td>
                        <td className='text-center'>
                            <button className="bg-blue-500 text-white px-3 py-1 m-2 rounded border border-gray-300" onClick={() => handleEdit(index)}>Edit</button>
                            <button className="bg-blue-500 text-white px-2 py-1 rounded border border-gray-300"  onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default TaskList;
