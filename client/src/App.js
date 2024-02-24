import './App.css';
import AuthAdmin from "./Components/AuthAdmin"
import AddClient from "./Components/AddClient"
import GetClient from "./Components/GetClient"
import Contact from "./Components/Contact"
import Test from "./Components/Test"
import {Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<AuthAdmin/>}></Route>
        <Route path='/ajout' element={<AddClient/>}></Route>
        <Route path='/client' element={<GetClient/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/test' element={<Test/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
