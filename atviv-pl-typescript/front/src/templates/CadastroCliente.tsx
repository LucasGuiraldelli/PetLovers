import React, { ReactElement, ChangeEvent } from 'react';
import Appbar from '../components/Appbar';
import { Box, Button, TextField } from '@mui/material';
import Endereco from '../components/models/endereco';
import Telefone from '../components/models/telefone';
import CadastradorCliente from '../cadastradores/cadastradorCliente';

class CadastroCliente extends React.Component {
  private nome: string | undefined;
  private sobreNome: string | undefined;
  private email: string | undefined;
  private endereco: Endereco;
  private telefone: Telefone;

  constructor(props: any) {
    super(props);
    this.telefone = new Telefone();
    this.endereco = new Endereco('', '', '', '', '', '', '');
    this.capturarNome = this.capturarNome.bind(this);
    this.capturarSobreNome = this.capturarSobreNome.bind(this);
    this.capturarEmail = this.capturarEmail.bind(this);
    this.capturarEnderecoRua = this.capturarEnderecoRua.bind(this);
    this.capturarNumeroTel = this.capturarNumeroTel.bind(this);
    this.submeterFormulario = this.submeterFormulario.bind(this);
    this.cadastrarCliente = this.cadastrarCliente.bind(this);
  }

  public cadastrarCliente(objeto: Object) {
    let cadastrador = new CadastradorCliente();
    cadastrador.cadastrar(objeto);
  }

  public capturarNome(evento: ChangeEvent<HTMLInputElement>) {
    this.nome = evento.target.value;
  }

  public capturarSobreNome(evento: ChangeEvent<HTMLInputElement>) {
    this.sobreNome = evento.target.value;
  }

  public capturarEmail(evento: ChangeEvent<HTMLInputElement>) {
    this.email = evento.target.value;
  }


  public capturarEnderecoRua(evento: ChangeEvent<HTMLInputElement>) {
    this.endereco.rua = evento.target.value;
  }


  public capturarNumeroTel(evento: ChangeEvent<HTMLInputElement>) {
    this.telefone.numero = evento.target.value;
  }

  public submeterFormulario(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    let cliente = {
      nome: this.nome,
      sobreNome: this.sobreNome,
      email: this.email,
      endereco: this.endereco,
      telefones: [this.telefone],
    };
    this.cadastrarCliente(cliente);
    evento.currentTarget.reset();
  }

  render(): ReactElement {
    return (
      <div>
        <Appbar />
        <h2>Cadastro de Cliente</h2>
        <form onSubmit={this.submeterFormulario}>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Box sx={{ margin: "100px", display: "flex" }}>
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Nome" id="nome" onChange={this.capturarNome} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Sobrenome" id="sobrenome" onChange={this.capturarSobreNome} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Email" id="email" onChange={this.capturarEmail} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Endereco" id="endereco" onChange={this.capturarEnderecoRua} />
              <TextField sx={{ marginRight: "50px" }} fullWidth label="Telefone" id="telefone" onChange={this.capturarNumeroTel} />
            </Box>
          </Box>
          <Button sx={{ justifyContent: "center", textAlign: "center" }} variant="contained" type="submit">Cadastrar Cliente</Button>
        </form>
      </div>
    );
  }
}

export default CadastroCliente;
