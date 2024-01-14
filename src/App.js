
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import Users from './Pages/Users';
import ErrorPage from './Pages/ErrorPage';
import ProfileDetails from './Pages/ProfileDetails';
import Profile from './Pages/Profile';

function App() {
  
  return (
    <div className="App">
     <Navigation />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/users' element={<Users/>} /> 
      <Route path='/user/:id'  element={ <ProfileDetails /> } />
      <Route path='/*' element={<ErrorPage/>} />
     </Routes>
    </div>
  );
}

export default App;
