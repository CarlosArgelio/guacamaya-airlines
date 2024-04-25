import { Home } from "./pages";
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    < >
    <div className={darkMode ? 'dark' : ''}>
    <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    <Home />
    </div>
    </>
  )
}

export default App
