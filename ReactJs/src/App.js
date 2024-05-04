import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactAssingment from './ReactAssingment';
import SeartchTabledata from './SeartchTabledata';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import CreatePro from './CreatePro';
import View from './View';
import Edit from './Edit';
import Registrationform from './Registrationform';
import Log from './Log';


// Installation :- 

// => npm i bootstrap
// => npm i react-bootstrap
// => npm i react-router-dom
// => npm i @reduxjs/toolkit
// => npm i react-redux
// => npm i json-server --watch data.json --port 4012

function App() {



  return (
    <div>
      <ReactAssingment />

      <BrowserRouter>

      <Link to={"/r"}>
          <div>
            <ul>
              <li><h3> Click to  Login registration with CRUD Application using API?</h3></li>
            </ul>
          </div>

        </Link>
        <br/>
        <br/>

        <Link to={"/"}>
          <div>
            <ul>
              <li><h3> Cleack to a Table and Search data from table using React Js?</h3></li>
            </ul>
          </div>

        </Link>

        
        <Routes>

          <Route path='/' element={<SeartchTabledata />}></Route>
          <Route path='/cre' element={<CreatePro />}></Route>
          <Route path='/view/:vid' element={<View />}></Route>
          <Route path='/edit/:eid' element={<Edit />}></Route>


          <Route path='/r' element={<Registrationform />}></Route>
          <Route path='/log' element={<Log />}></Route>

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
