import logo from './logo.svg';
import './App.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";

import WaysOfStyling from './component/WaysOfStyling';
import ComponentTutorial from './component/ComponentTutorial';
import Content1 from './pages/Content1';
import NavBar from './component/NavBar';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route path="content1" element={<Content1/>}/>
            <Route path="component" element={<ComponentTutorial/>} />
            <Route path="waysofstyling" element={<WaysOfStyling/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
