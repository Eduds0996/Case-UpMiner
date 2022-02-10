import './detalhes.css'
import header from '../imagens/detalhes.png'
import logo from '../imagens/upminer.png'
import { IoIosArrowBack } from 'react-icons/io';



function Header_detalhes() {
  return (
    <div className="Header_detalhes">      
      <div className="header-detalhes">
        <div className="logo-detalhes">
          <img src={logo}/>
          <div className="historico-empresarial-detalhes">
            <p> | Histórico Empresarial</p>
          </div>
          <div className="descricao-header-detalhes">
            <p>O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos</p> 
            <p>os fatos e acontecimentos relevantes de uma empresa desde o seu ano</p>
            <p>de fundação</p>
          </div>
        </div>
        
        <div className="container-detalhes">
          <img src={header} />
        </div>
      </div>
      <div className="preco-header-detalhes">
          <div className="simbolo">R$ </div>
          <div className="valor"> 40,00</div>
      </div>
      <div className="sabia_mais_header-detalhes">Saiba mais</div>
      <div className="titulo-topo">
        <IoIosArrowBack />
        <h4>Histórico Empresarial</h4>
      </div>

    </div>
    
    );
}

export default Header_detalhes;