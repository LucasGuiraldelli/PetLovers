import { AppBar, Toolbar, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

export const Appbar = () => {

    const navigate = useNavigate()

    return (
        <AppBar position="static">
            <Toolbar>
                <Button sx={{ color: "white" }} onClick={() => {
                    navigate("/")
                }}>
                    Home
                </Button>

                <Button sx={{ color: "white" }} onClick={() => {
                    navigate("/cliente")
                }}>
                    Cadastro Cliente
                </Button>

                <Button sx={{ color: "white" }}>
                    Cadastro Pet
                </Button>

                <Button sx={{ color: "white" }}>
                    Cadastro Produto
                </Button>
                <Button sx={{ color: "white" }}>
                    Serviço
                </Button>
                <Button sx={{ color: "white" }}>
                    Listagens
                </Button>

            </Toolbar>

        </AppBar>
    )
}

export default Appbar;