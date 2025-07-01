import React from 'react';

const CreateTask = ({ onSubmit, formData, setFormData }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);  // send up
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-3 bg-white rounded shadow">
  <form onSubmit={handleFormSubmit} className="space-y-4">
    <div className="flex flex-col">
      <label htmlFor="title" className="mb-1 font-semibold">Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      </div>
      <div className="flex flex-col">
      <label htmlFor="desc" className="mb-1 font-semibold">Description</label>
      <input
        type="desc"
        name="desc"
        value={formData.desc}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      </div>
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        required
        className="mb-1 font-semibold">
        <option value="">Choose status</option>
        <option value="Pending">Pending</option>
        <option value="Progress">Progress</option>
        <option value="Completed">Completed</option>
      </select>

    <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Submit</button>
    </form>
    </div>
  );
};

export default CreateTask;
