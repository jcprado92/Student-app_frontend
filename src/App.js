import './App.css';
import {useEffect, useState} from 'react';
import StudentCardList from './components/StudentCardList/StudentCardList';

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
    <StudentCardList students={students}/>
   </div>
  );
}

export default App;
