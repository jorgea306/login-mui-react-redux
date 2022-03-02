import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


import store from '../store';
import {Provider} from 'react-redux';
import Login from "../components/login";
import Register from "../components/register";


export const AppRouter = () => {
    return (
      <Router>
          <Provider store={store}>
            <div>

                <Routes>
                    <Route exact path="/" element={<Login />}/> 

                    <Route exact path="/register" element={<Register />}/>            
                </Routes>
            </div>
        </Provider>
      </Router>
    )
}