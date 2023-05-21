import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroConsumoCliente from "../negocio/CadastroConsumoCliente";
import CadastroProdutos from "../negocio/CadastroProdutos";
import CadastroServicos from "../negocio/CadastroServicos";
import ListagemConsumoMais from "../negocio/ListagemConsumoMais";
import ListagemComusumoValor from "../negocio/ListagemConsumoValor";
import ListagemProdutos from "../negocio/ListagemProdutos";
import ListagemServicos from "../negocio/ListagemServicos";
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarProdutos from "../negocio/atualizarProduto";
import AtualizarServicos from "../negocio/atualizarServicos";
import CadastroCliente from "../negocio/cadastroCliente";
import ExcluirCliente from "../negocio/deletarCliente";
import ExcluirProduto from "../negocio/deletarProduto";
import ExcluirServico from "../negocio/deletarServico";
import ListagemClientes from "../negocio/listagemClientes";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    // crud cliente
    console.log(`1  - Cadastrar cliente`);
    console.log(`2  - Listar todos os clientes`);
    console.log(`3  - Atualizar cliente existente`);
    console.log(`4  - Deletar cliente`);
    // crud produtos
    console.log(`5  - Cadastrar produto`);
    console.log(`6  - Listar todos os produtos`);
    console.log(`7  - Atualizar produto existente`);
    console.log(`8  - Deletar produto`);
    // crud servicos
    console.log(`9  - Cadastrar servico`);
    console.log(`10 - Listar todos os servicos`);
    console.log(`11 - Atualizar servico existente`);
    console.log(`12 - Deletar servico`);
    // listagens
    console.log(`13 - Registrar consumo por cliente`);
    console.log(`14 - Produtos ou serviços mais consumidos`);
    console.log(`15 - Clientes que mais consumiram em valor`);
   // out
    console.log(`0  - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizar = new AtualizarCliente(empresa.getClientes)
            atualizar.atualiza()
            break;
        case 4:
            let exclusao = new ExcluirCliente(empresa.getClientes)
            exclusao.Exclui()
            break;
        case 5:
            let cadastrarProd = new CadastroProdutos(empresa.getProdutos)
            cadastrarProd.cadastrar()
            break;
        case 6:
            let listagemProd = new ListagemProdutos(empresa.getProdutos)
            listagemProd.listar()
            break;
        case 7:
            let atualizarProdutos = new AtualizarProdutos(empresa.getProdutos)
            atualizarProdutos.atualiza()
            break;
        case 8:
            let exclusaoProduto = new ExcluirProduto(empresa.getProdutos)
            exclusaoProduto.Exclui()
            break;
        case 9:
            let cadastrarServico = new CadastroServicos(empresa.getServicos)
            cadastrarServico.cadastrar()
            break
        case 10:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break
        case 11:
            let atualizaServico = new AtualizarServicos(empresa.getServicos)
            atualizaServico.atualiza()
            break
        case 12:
            let excluirServico = new ExcluirServico(empresa.getServicos)
            excluirServico.Exclui()
            break
        case 13:
            let cadastroConsumoCliente = new CadastroConsumoCliente(empresa.getClientes, empresa)
            cadastroConsumoCliente.cadastrar()
            break
        case 14:
            let top10_consum = new ListagemConsumoMais(empresa.getClientes)
            top10_consum.listar()
            break
        case 15:
            let top5_consum_valor = new ListagemComusumoValor(empresa)
            top5_consum_valor.listar()
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}