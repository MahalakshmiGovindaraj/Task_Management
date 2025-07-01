import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Task from './pages/Task';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(""); // store user name

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route
          path="/task"
          element={
            user.trim() !== "" ? (
              <Task user={user} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
