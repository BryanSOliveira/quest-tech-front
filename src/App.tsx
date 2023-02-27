import React, { useState } from 'react'
import { RouterProvider } from "react-router-dom";
import { UserContext } from './contexts/context';
import router from './routes/routes.js';

import './index.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <React.StrictMode>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </React.StrictMode>
  )
}

export default App;