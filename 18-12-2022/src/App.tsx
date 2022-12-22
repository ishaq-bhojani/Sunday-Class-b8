import { useEffect, useState } from 'react';
import './App.css';
import AuthHandler from './components/authHandler/AuthHandler';
import AuthContext from './contexts/AuthContext';

function App() {
  useEffect(() => {
    console.log("USE EFFECT CALLED");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "1";
    setIsAuth(isLoggedIn);
  }, []);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const ctxValue = {
    isLoggedIn: isAuth,
    setAuthentication: (val: boolean) => {
      localStorage.setItem("isLoggedIn", val ? "1" : "0");
      setIsAuth(val);
    }
  }
 
  return (
    <div>
      <AuthContext.Provider value={ctxValue}>
        <AuthHandler />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
