import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CRUD from "./components/crud";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  let isConnected = false;

  return (
    <Router>
      <div className="main">
        <header className="flex items-center justify-between bg-slate-600 text-white h-16 p-6">
          <a href="/"><h1 className="text-xl">FreeLibrary</h1></a>
          {isConnected ? 
          <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">Se déconnecter</button> 
          : 
          <div>
             <a href="/login"><button className="m-4 bg-blue-500 hover:bg-red-700 text-white py-1 px-2 rounded">Connexion</button></a>
             <a href="/signup"><button className="bg-blue-500 hover:bg-red-700 text-white py-1 px-2 rounded">Inscription</button></a>
          </div>}
        </header>
        <div className="bg-slate-400 h-full p-10">
          {isConnected ? (
            <Routes>
              <Route exact path="library" element={<CRUD action={"read"} />} />
              <Route exact path="search" element={<CRUD action={"search"} />} />
              <Route exact path="edit" element={<CRUD action={"edit"} />} />
              <Route exact path="/" element={<CRUD action={"read"} />} />
            </Routes>
          ) : (
            <Routes>
              <Route exact path="login" element={<Login/>}/>
              <Route exact path="signup"  element={<Signup/>}/>
              <Route exact path="/" element={<Home/>} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
