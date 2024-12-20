class ClienteEspecial extends Cliente {
    private _dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: Conta) {
        super(nome, cpf, conta);
        this._dependentes = new Array<Cliente>();
    }

    adicionarDependente(dependente: Cliente): void {
        this._dependentes.push(dependente);
    }

    listarDependentes(): Array<Cliente> {
        return this._dependentes;
    }

    toString(): string {
        let dependentesInfo = this._dependentes
            .map(dep => dep.toString())
            .join('\n');
        return `${super.toString()}
        \nDependentes:\n${dependentesInfo || 'Nenhum dependente'}`;
    }
}
