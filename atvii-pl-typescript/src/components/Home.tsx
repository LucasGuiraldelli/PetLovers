import React, { ReactElement } from 'react';
import CadastroCliente from './CadastroCliente';
import './designe.css';

function Home(): ReactElement {
  return (
    <div className="card">
      <div className="title">Cadastros</div>
      <div className="btns">
        <a className="btn" href="/CadastroCliente">
          Cadastro de Cliente
        </a>
        <a className="btn" href="">
          Cadastro de Produto
        </a>
        <a className="btn" href="">
          Cadastro de Serviço
        </a>
        <a className="btn" href="">
          Cadastro de Pet
        </a>
      </div>
    </div>
  );
}

export default Home;
