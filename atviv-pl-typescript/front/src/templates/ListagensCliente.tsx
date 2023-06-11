import React, { ReactElement } from 'react';
import Appbar from '../components/Appbar';
import { DataGrid, GridActionsCellItem, GridColDef, GridRowId } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import M from 'materialize-css';
import CSS from 'csstype'
import BuscadorClientes from '../buscadores/buscadorCliente';
import RemovedorCliente from '../removedores/removedorCliente';
import RemovedorClienteLocal from '../removedores/removedorClienteLocal';

import Endereco from "../components/models/endereco";
import Cliente from "../components/models/cliente";
import Telefone from "../components/models/telefone";

type State = {
  clientes: Cliente[]
}

const titulo: CSS.Properties = {
  marginTop: "70px",
  textAlign: "center"
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Nome',
    width: 150,
    editable: true,
  },
  { field: 'cpf', headerName: 'CPF', width: 90 },
  { field: 'telefone', headerName: 'Telefone', width: 90 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 90,
    type: "actions",
    getActions: (params) => [
      <GridActionsCellItem label='Editar' icon={<EditIcon color='success' />} />,
      <GridActionsCellItem label='Excluir' icon={<DeleteIcon color='error' />} onClick={(e) => excluirLocal(params.id, e)} />
    ]
  },
]

// back
const rows = [
  { id: 1, name: '---', cpf: '-----', telefone: '(--) -------' },
  { id: 2, name: '---', cpf: '-----', telefone: '(--) -------' },
  { id: 3, name: '---', cpf: '-----', telefone: '(--) -------' },
  { id: 4, name: '---', cpf: '-----', telefone: '(--) -------' },
  { id: 5, name: '---', cpf: '-----', telefone: '(--) -------' },
];

class ListagensCliente extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = { clientes: [] }
    this.excluirLocal = this.excluirLocal.bind(this)
  }

  public buscarClientes() {
    let buscadorClientes = new BuscadorClientes()
    const clientes = buscadorClientes.buscar()
    clientes.then(clientes => {
      this.setState({ clientes })
    })
  }

  public excluirRemoto(idCliente: string) {
    let removedor = new RemovedorCliente()
    let cliente: Cliente = {
      id: idCliente,
      nome: "",
      sobreNome: "",
      email: "",
      telefones: [],
      endereco: new Endereco('', '', '', '', '', '', '')
    };
    removedor.remover(cliente);
  }

  public excluirLocal(id: string, e: any) {
    e.preventDefault()
    let removedorLocal = new RemovedorClienteLocal()
    let clientes = removedorLocal.remover(this.state.clientes, id)
    this.setState({
      clientes: clientes
    })
    this.excluirRemoto(id)
  }

  componentDidMount() {
    this.buscarClientes();
    console.log(M);
    M.AutoInit();
  }

  render(): ReactElement {
    return (
      <div>
        <Appbar />
        <h1 style={titulo}>Cliente</h1>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "1000px" }}>
            <DataGrid
              columns={columns}
              rows={this.state.clientes}
            // sx={{ width: "600px" }}
            />
          </Box>
        </Box>
      </div>
    );
  }
}

export default ListagensCliente;
function excluirLocal(id: GridRowId, e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
  throw new Error('Function not implemented.');
}

