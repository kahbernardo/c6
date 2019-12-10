import React from 'react';
import './App.css';

// ======================
import logo from './images/c6bank.png';
import menu from './images/menu_icon.png';
import facebook from './images/facebook.png'
import twitter from './images/twitter.jpg'
import linkedin from './images/linkedin.png'
import google from './images/google.png'
import email from './images/email.png'
import carbon from './images/textura.jpg'

function App() {
  return (
    
    <div className="container">
      <div className="header">
        <img src={logo}/>
          <button>
            <img src={menu}/>
          </button>
      </div>

      <div className="corpo">
        <div className='degrade'>
          <img src={carbon}/>
        </div>
        <span className="titulo">Por que C6 Bank?
          <br/>
            <span className="subtitulo">
              O C é de carbono, elemento base da vida, e 6 é o número atômico desse elemento. Os átomos do carbono se unem de várias formas e são capazes de criar diferentes substâncias, desde o grafite, em uma combinação simples, até a mais rara, como o diamante. A habilidade do carbono de fazer conexões nos inspira.
            </span>
          </span>
        <button>
          Conheça nossos produtos
        </button>
      </div>

      <div className="footer">
        <ul>
          <li>
            <a><img src={facebook}/></a>
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
