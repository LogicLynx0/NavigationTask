
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

import Home from "./components/Home";
import DummyAPI from './components/DummyAPI';
import ResultAPI from './components/ResultAPI';

function App(){
  const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setData(json))
    },[])
    
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<DummyAPI data={data}/>}></Route>
                    
                    <Route path ='/select-item-detail/:itemId' element={<ResultAPI data={data}/>} />
                </Routes>

            </Router>
        </>
    )
}
export default App;