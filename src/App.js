
import { ToastContainer } from 'react-toastify';
import './App.css';
import UserLogin from './components/userLogin';
import UserListView from './components/userListView';
import UserRegistration from './components/userRegistration';
import { BrowserRouter,Route,Routes, } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import UserUpdate from './components/userUpdate';
import UserDelete from './components/userDelete';
import UserDetails from './components/userDetails';
import BookRegistration from './components/bookRegistration';
import BookListView from './components/bookListView';
import BookDetails from './components/bookDetails';
import BookDelete from './components/bookDelete';
import BookUpdate from './components/bookUpdate';
import Home from './components/Home';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>


          <Route path="/userDelete/:id" element={<UserDelete />}></Route>
          <Route path="/userUpdate/:id" element={<UserUpdate />}></Route>
          <Route path="/userDetails/:id" element={<UserDetails />}></Route>
          <Route path="/userListView" element={<UserListView />}></Route>
          <Route path="/userLogin" element={<UserLogin />}></Route>
          <Route path="/userRegistration" element={<UserRegistration />}></Route>

          <Route path="/bookRegistration" element={<BookRegistration />}></Route>
          <Route path="/bookListView" element={<BookListView />}></Route>
          <Route path="/bookDetails/:id" element={<BookDetails />}></Route>
          <Route path="/bookDelete/:id" element={<BookDelete />}></Route>
          <Route path="/bookUpdate/:id" element={<BookUpdate />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
