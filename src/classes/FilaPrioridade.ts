export class FilaPrioridade {
    // Matriz: Array de arrays.
    // Índice 0 = Prioridade 1 (Muito Baixa) ... Índice 4 = Prioridade 5 (Muito Alta)
    private elementos: any[][]; 
    private capacidade: number;
    private totalElementos: number;

    // Nomes para facilitar a leitura no console
    private nomesPrioridade = [
        "Muito Baixa", // índice 0
        "Baixa",       // índice 1
        "Normal",      // índice 2
        "Alta",        // índice 3
        "Muito Alta"   // índice 4
    ];

    constructor(capacidade: number){
        this.elementos = [[], [], [], [], []]; // 5 filas vazias
        this.capacidade = capacidade;
        this.totalElementos = 0;
    }

    // Método para inserir (prioridade de 1 a 5)
    enfileirar(el: any, prioridade: number){
        if(this.estaCheia()){
            console.log(`Erro ao inserir '${el}': A fila está cheia!`);
            return; 
        }

        if(prioridade < 1 || prioridade > 5){
            console.log(`Erro ao inserir '${el}': Prioridade ${prioridade} inválida (use 1 a 5).`);
            return;
        }

        // Lógica: prioridade 5 vira índice 4
        const indice = prioridade - 1;
        
        this.elementos[indice]!.push(el);
        this.totalElementos++;
        
        const nomePrio = this.nomesPrioridade[indice];
        console.log(`[Inserção] '${el}' entrou na fila. Prioridade: ${nomePrio} (${prioridade})`);
    }

    // Remove quem tem a maior prioridade
    desenfileirar(){
        if(this.estaVazia()){
            console.log("A fila está vazia! Ninguém para atender.");
            return null;
        }

        // Procura da Muito Alta (4) até a Muito Baixa (0)
        for(let i = 4; i >= 0; i--){
            if(this.elementos[i]!.length > 0){
                let el = this.elementos[i]!.shift(); // Remove o primeiro
                this.totalElementos--;
                
                console.log(`[Atendimento] '${el}' foi removido. Prioridade: ${this.nomesPrioridade[i]}`);
                return el;
            }
        }
    }

    // Espiar o próximo sem remover
    espiarProximo(){
        if(this.estaVazia()){
            return "Ninguém";
        }
        for(let i = 4; i >= 0; i--){
            if(this.elementos[i]!.length > 0){
                return this.elementos[i]![0];
            }
        }
    }

    estaCheia(): boolean {
        return this.totalElementos === this.capacidade;
    }

    estaVazia(): boolean {
        return this.totalElementos === 0;
    }

    tamanho(): number {
        return this.totalElementos;
    }

    // Exibe a fila bonitinha no terminal
    exibir(){
        console.log("\n====== ESTADO ATUAL DA FILA ======");
        for(let i = 4; i >= 0; i--){
            const nome = this.nomesPrioridade[i];
            const fila = this.elementos[i]!;
            
            if(fila.length > 0){
                console.log(`Prioridade ${nome} (${i+1}): [ ${fila.join(", ")} ]`);
            } else {
                console.log(`Prioridade ${nome} (${i+1}): [ Vazia ]`);
            }
        }
        console.log(`Ocupação: ${this.totalElementos}/${this.capacidade}`);
        console.log("==================================\n");
    }

    limpar(){
        this.elementos = [[], [], [], [], []];
        this.totalElementos = 0;
        console.log("--- A fila foi totalmente esvaziada! ---");
    }
}