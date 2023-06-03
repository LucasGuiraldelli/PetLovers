import React, { ReactElement } from 'react';
import CadastroCliente from './CadastroCliente';
import Appbar from '../components/Appbar';

import '../components/designe.css';
import { Box, Button } from '@mui/material';

function Home(): ReactElement {
  return (
    <div> <Appbar />
      <div className="card">
        {/* <Box sx={{ textAlign: "center" }}> Cadastros
        </Box> */}
        <div className="title">Cadastros</div>
        <div className="btns">
          <a className="btn" href="/cadastro-cliente">
            Cadastro de Cliente
          </a>
          <a className="btn" href="/cadastro-produto">
            Cadastro de Produto
          </a>
          <a className="btn" href="/cadastro-servico">
            Cadastro de Serviço
          </a>
          <a className="btn" href="/cadastro-pet">
            Cadastro de Pet
          </a>
        </div>
      </div>
    </div >
  );
}

export default Home;
