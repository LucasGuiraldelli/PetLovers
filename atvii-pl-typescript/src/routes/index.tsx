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
import Pet from "../templates/Pet";

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
        path: "cliente",
        element: <Cliente />,
    },
    {
        path: "pet",
        element: <Pet />,
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
]);
