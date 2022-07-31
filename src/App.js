import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Context";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
