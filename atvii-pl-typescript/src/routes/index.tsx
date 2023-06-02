import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../templates/Home";
import CadastroCliente from "../templates/CadastroCliente";
import CadastroPet from "../templates/CadastroPet";
import Listagens from "../templates/Listagens";
import Produto from "../templates/Produto";
import Servico from "../templates/Servico";

import Cliente from "../templates/Cliente"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "cadastro-cliente",
        element: <CadastroCliente />,
    },
    {
        path: "cadastro-pet",
        element: <CadastroPet />,
    },
    {
        path: "produto",
        element: <Produto />,
    },
    {
        path: "servico",
        element: <Servico />,
    },
    {
        path: "listagens",
        element: <Listagens />,
    },
    {
        path: "cliente",
        element: <Cliente />,
    }
]);
