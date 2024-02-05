import './App.css';
import AuthAdmin from "./Components/AuthAdmin"
import AddClient from "./Components/AddClient"
import GetClient from "./Components/GetClient"
import Test from "./Components/Test"
import {Routes, BrowserRouter, Route } from "react-router-dom";
// import Test from "./Components/Test";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<AuthAdmin/>}></Route>
        <Route path='/ajout' element={<AddClient/>}></Route>
        <Route path='/client' element={<GetClient/>}></Route>
        <Route path='/test' element={<Test/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
