import React  from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Rotas from './Rotas'
import './item.css';



function App() {
  return (
    <Router>
      <Rotas/>
     
    </Router>
    
  );
}

export default App;