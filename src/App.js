import React from 'react';
import './App.css';

import PersonList from './PersonList'

const App =()=>{
  return (
    <div>
            <nav className="navbar navbar-toggleable-md">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className='container'>
                <h2 className="navbar-brand" to="/">Friend List</h2>
      
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <h5 className="nav-link" to="/">Home <span className="sr-only"></span></h5>
                            </li>
                            <li className="nav-item">
                                <h5 className="nav-link" to="/about">About</h5>
                            </li>
                            <li className="nav-item">
                                <h5 className="nav-link" to="/contact">Contact</h5>
                            </li>
                        </ul>
                    </div>
                </div>
          </nav>
          <PersonList/>
        </div>
        
  )
}

export default App;
