import React, { useState } from 'react';
import CreateTask from '../components/createTask';
import TaskList from '../components/taskList';

export const Task = ({ user }) => {        // ← remove (handleEdit) param

    /* ---------- state ---------- */
    const [tasks, setTasks] = useState([]);       // store ALL tasks
    const [showForm, setShowForm] = useState(false);    // show / hide form
    const [editIndex, setEditIndex] = useState(null);     // null = add‑mode
    const [formData, setFormData] = useState({          // values in form
        title: '', desc: '', status: ''
    });
    const [searchText, setSearchText] = useState('');

    /* ---------- Add OR Update ---------- */
    const handleCreateTask = (taskData) => {
        if (editIndex === null) {
            // add‑mode
            setTasks([...tasks, taskData]);
        } else {
            // edit‑mode
            const updated = [...tasks];
            updated[editIndex] = taskData;
            setTasks(updated);
        }
        setShowForm(false);
        setEditIndex(null);
        setFormData({ title: '', desc: '', status: '' }); // clear form
    };

    /* ---------- When user clicks “Edit” ---------- */
    const handleEdit = (index) => {
        setEditIndex(index);           // remember which row
        setFormData(tasks[index]);     // pre‑fill form
        setShowForm(true);
    };

    const handleDelete = (idx) => {
        const updated = [...tasks];  // make a shallow copy
        updated.splice(idx, 1);      // remove 1 item at index
        setTasks(updated);
    };

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchText.toLowerCase()) ||
        task.desc.toLowerCase().includes(searchText.toLowerCase()) ||
        task.status.toLowerCase().includes(searchText.toLowerCase())

    );

    return (
        <div className="mx-auto mt-20 p-6 bg-white rounded shadow text-center">
            <h1 className="text-2xl font-bold mb-4">To Do List</h1>
            <p>Hey <strong>{user.charAt(0).toUpperCase() + user.slice(1)}</strong>, create and manage your tasks here.</p>
            {/* “+Create” button (only if form hidden) */}
            {!showForm && (
                <button onClick={() => setShowForm(true)}
                    className="bg-blue-500 text-white px-2 py-2 rounded mt-4">+ Create your Task</button>

            )}<br />
            <input type='text' placeholder='Search here...' className='px-2 py-2 rounded mt-4 border border-black'
                value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
            {/* form (add or edit) */}
            {showForm && (
                <CreateTask
                    onSubmit={handleCreateTask}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}

            {/* always show the table */}
            <TaskList tasks={filteredTasks} 
            handleEdit={handleEdit} 
            handleDelete={handleDelete}
             />
        </div>
    );
};

export default Task;
