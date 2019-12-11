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
        <img src={logo}/>
          <ul className='listamenu'>
              <li>
                <button>C6 Bank</button>
              </li>
              <li>
                <button>Transparência</button>
              </li>
              <li>
                <button>Assistência</button>
              </li>
              <li>
                <button>Personalização</button>
              </li>
              <li>
               <button>Facilidade</button>
               </li>
          </ul>
          
          <button>
            <img classname='botao' src={menu}/>
          </button>
      </div>

      <div className="corpo">
        <div className='degrade'>
          <div className='forma'>
            <span className="titulo">Por que C6 Bank?<br /></span>
            <span className="subtitulo">
              O C é de carbono, elemento base da vida, e 6 é o número atômico desse elemento. Os átomos do carbono se unem de várias formas e são capazes de criar diferentes substâncias, desde o grafite, em uma combinação simples, até a mais rara, como o diamante. A habilidade do carbono de fazer conexões nos inspira.
            </span>
          <button>
              Conheça nossos produtos
          </button>
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
            <a><img src={twitter} /></a>
          </li>
          <li>
            <a><img src={linkedin} /></a>
          </li>
          <li>
            <a><img src={google} /></a>
          </li>
          <li>
            <a><img src={email} /></a>
          </li>
        </ul>
      </div>
      
    </div>
  );
  
}

export default App;
