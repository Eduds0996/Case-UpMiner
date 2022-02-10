import './detalhes.css'



function Texto() {
  return (
    <div className="Texto">
     <div className="texto-detalhes">
       <p>O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos  
os fatos e acontecimentos relevantes de uma empresa desde o seu ano
de fundação. Tenha acesso aos principais eventos corporativos de uma empresa, como:
marcos jurídicos, mudança no quadro societário, aumento de capital, reportagens
e muito mais</p>
        <br/>
        <p>
          Após realizar a consulta, o histórico é salvo automaticamente, tornando
          as informações acessíveis ao usuário. A linha do tempo poder também ser 
          exportada no formato PDF.
        </p>
     </div>
     <div className="preco-final">
          <div className="simbolo-final">R$ </div>
          <div className="valor-final"> 40,00</div>
      </div>
      <div className="habilitar">Habilitar</div>
      <div className="titulo-detalhes"></div>
      <br/>
      <br/>
    </div>
    );
}

export default Texto;