
import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Login from './components/user/login';
import Register from './components/user/register';
import './App.css'
import Header from './components/layout/header';
import Footer from './components/layout/footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> 
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
       <Footer /> */}
       <Login />
      </div>
    </Router>
  );
}

export default App;
