import logo from './logo.svg';
import './App.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";

//Components
import NavBar from './component/NavBar';

//Pages
import Home from './pages/Home';
import Content1 from './pages/Content1';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/content" element={<Content1/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default App;
