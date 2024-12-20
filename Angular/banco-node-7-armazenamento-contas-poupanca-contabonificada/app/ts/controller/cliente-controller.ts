class ClienteController {
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: HTMLInputElement;
    private clientes: Clientes;

    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector("#nome");
        this.inputCpf = <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta = <HTMLInputElement>document.querySelector("#contaCliente");
        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();

        const conta = new Conta(this.inputConta.value, 0);
        const novoCliente = new Cliente(
            this.inputNome.value,
            this.inputCpf.value,
            conta
        );

        this.clientes.inserir(novoCliente);
        this.inserirClienteNaTabela(novoCliente);

        // Limpar os campos do formulário
        this.inputNome.value = '';
        this.inputCpf.value = '';
        this.inputConta.value = '';
    }

    listar() {
        const listaClientes = document.querySelector("#listaClientes");
        listaClientes.innerHTML = ''; // Limpa a tabela antes de listar
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNaTabela(cliente);
        });
    }

    inserirClienteNaTabela(cliente: Cliente) {
        const listaClientes = document.querySelector("#listaClientes");
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${cliente.nome}</td>
            <td>${cliente.cpf}</td>
            <td>${cliente.conta.numero}</td>
        `;

        const celulaAcoes = document.createElement("td");
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener("click", () => {
            this.clientes.remover(cliente.cpf);
            linha.remove();
        });

        celulaAcoes.appendChild(botaoRemover);
        linha.appendChild(celulaAcoes);
        listaClientes.appendChild(linha);
    }
}
