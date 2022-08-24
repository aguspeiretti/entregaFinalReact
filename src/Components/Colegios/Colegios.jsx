import React from 'react'
import "./Colegios.css"
import {Link} from 'react-router-dom'

export default function Colegios() {

  return (
    <div className='contenedorColegios'>
        <div className='colegios'>
            <div>
              <li><Link to="/Jockey/Jockey"><img src="/src/img/Jockey.png" alt="" /></Link></li>
              <li><Link to="/Ins/Ins"><img src="/src/img/ins.png" alt="" /></Link></li>
              <li><Link to="/Ninos/Na"><img src="/src/img/ninos.png" alt="" /></Link></li>
              <li><Link to="/Vida/Vida"><img src="/src/img/vida.png" alt="" /></Link></li>
            </div>
        </div>
    </div>
    
  )
}
