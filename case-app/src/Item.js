import './item.css';
import { FaBriefcase } from 'react-icons/fa';
import React  from 'react'
import Data from "./data.json"


function Item() {
  return (
    <div className="Item">
      <section class="cards">
      { Data.map(post => {
        return (
            <>
            <div className="card">
              <div className="icon"><FaBriefcase/></div>
              <div className="titulo">{post.titulo}</div>
              <div className="descricao">{post.descricao}</div>
              <div className="line">
                  <div className="preco">{post.valor}</div>
                  <div className="saiba-mais">Saiba mais</div>
              </div>
            </div>
            </>
        )
      }) }
      </section>
    </div>
    
  );
}

export default Item;