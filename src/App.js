import './App.css';
import {useEffect, useState} from 'react';
import StudentContainer from './components/StudentContainer/StudentContainer';
const API = process.env.REACT_APP_API_URL;

function App() {

const [ students, setStudents ] = useState([]);

useEffect(() => {

  fetch(`${API}/students`)
  .then(res => res.json())
  .then(data => setStudents(data))
}, [])

  return (
   <div>
    <StudentContainer students={students}/>
   </div>
  );
}

export default App;
