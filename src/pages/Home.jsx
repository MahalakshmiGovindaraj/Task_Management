import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ user, setUser }) => {

    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.trim() !== "") {
            navigator('/task');
        }
    };
    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow text-center">
            <h1 className="text-2xl font-bold mb-4">Task Management</h1>
            <form onSubmit={handleSubmit}>
                <section>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor='name'>Name</label></td>
                            <td></td>
                            <td>
                                <input type='text' id='name' name='name' required onChange={(e) => setUser(e.target.value)}
                                    placeholder='Enter Your Name here..' className='px-2'></input> </td></tr>
                        <br />
                        <tr>

                            <td>
                                <button type="submit" disabled={user.length === 0}
                                    className="bg-blue-500 text-white px-2 py-2 rounded w-full">Submit</button>
                            </td>
                        </tr>
                    </table>
                </section>
            </form>
        </div>
    )
}

export default Home