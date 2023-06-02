import React, { ReactElement } from 'react';
import Appbar from '../components/Appbar';
import { DataGrid, GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Nome',
        width: 150,
        editable: true,
    },
    {
        field: 'actions', headerName: 'Actions', width: 90, type: "actions", getActions: (params) => [
            <GridActionsCellItem label='Editar' icon={<EditIcon color='success' />} />,
            <GridActionsCellItem label='Excluir' icon={<DeleteIcon color='error' />} />
        ]
    },
]

// back
const rows = [
    { id: 1, name: 'Snow' },
];

function Cliente(): ReactElement {
    return <div> <Appbar />
        <h2>Cliente</h2>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "1000px" }}>
                <DataGrid
                    columns={columns}
                    rows={rows}
                // sx={{ width: "600px" }}
                />
            </Box>
        </Box>
    </div>
}

export default Cliente;
