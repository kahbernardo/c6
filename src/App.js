import React from 'react';
import './App.css';

// ======================
import logo from './images/c6bank.png';
import menu from './images/menu_icon.png';
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import linkedin from './images/linkedin.png'
import google from './images/google.png'
import email from './images/email.png'
import carbon from './images/textura.jpg'

function App() {
  return (
    
    <div className="container">
      
      <div className="header">
        <div className='partecima'>
          <img src={logo}/>
          <input classname='pesquisa'/>
        </div>
        <ul classname='listamenu'>
              <li>
                <a>
                C6 Bank
                </a>
              </li>
              <li>
                <a>
                Transparência
                </a>
              </li>
              <li>
                <a>
                Assistência
                </a>
              </li>
              <li>
                <a>
                Personalização
                </a>
              </li>
              <li>
                <a>
                Facilidade
                </a>
              </li>
            </ul>
          
          <button>
            <img classname='botao' src={menu}/>
          </button>
      </div>

      <div className="corpo">
        <div className='degrade'>
          <div className='forma'>
            <div className='meio'>
              <span className="titulo">Por que C6 Bank?<br /></span>
              <span className="subtitulo">
                O C é de carbono, elemento base da vida, e 6 é o número atômico desse elemento. Os átomos do carbono se unem de várias formas e são capazes de criar diferentes substâncias, desde o grafite, em uma combinação simples, até a mais rara, como o diamante. A habilidade do carbono de fazer conexões nos inspira.
              </span>
              <button>
                Conheça nossos produtos
              </button>
            </div>
          </div>
        </div>
        {/* <span className="titulo">Por que C6 Bank?
          <br/> */}
            
        
      </div>

      <div className="footer">
        <ul>
          <li>
            <button><a><img src={facebook} /></a></button>
          </li>
          <li>
            <button><img src={twitter} /></button>
          </li>
          <li>
            <button><img src={linkedin} /></button>
          </li>
          <li>
            <button><img src={google} /></button>
          </li>
          <li>
            <button><img src={email} /></button>
          </li>
        </ul>
      </div>
      
    </div>
  );
  
}

export default App;
