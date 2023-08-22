import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {Button} from 'reactstrap'
import ContactList from './components/ContactList';
import {Route, Routes, Link} from 'react-router-dom'
import AddForm from './components/AddForm';

function App() {
  return (
    <div className="App">
      
      <NavBar />
     <Link to='/list'>
      <Button> Contact List</Button>
      </Link>

      <Link to='/add'>
      <Button> Add Contact</Button>
      </Link>
      <Routes>
        <Route path='/list' element={<ContactList />}/>
        <Route path='/add' element={<AddForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
