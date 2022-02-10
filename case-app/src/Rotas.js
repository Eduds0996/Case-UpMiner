import React from 'react';
import {Routes , Route} from 'react-router-dom'

import Index from './pagina_inicial/index'
import Detalhes from './pagina_detalhes/index'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/detalhes" element={<Detalhes/>}/>
      
     
    </Routes>
  )
}