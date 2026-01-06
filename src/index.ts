import { FilaPrioridade } from "./classes/FilaPrioridade";

// Criamos uma fila com capacidade para 6 pessoas
const fila = new FilaPrioridade(6);

console.log(">>> INÍCIO DOS TESTES <<<");

// 1. Inserindo pessoas com prioridades variadas
fila.enfileirar("João (Gripe)", 2);        // Baixa
fila.enfileirar("Maria (Dor leve)", 1);    // Muito Baixa
fila.enfileirar("Sr. Pedro (Idoso)", 5);   // Muito Alta
fila.enfileirar("Ana (Gestante)", 4);      // Alta
fila.enfileirar("Carlos (Febre)", 3);      // Normal

fila.exibir();

// 2. Testando quem é o próximo
console.log(`Próximo a ser atendido (Espiar): ${fila.espiarProximo()}`); 
// Esperado: Sr. Pedro

// 3. Atendendo (Removendo) por ordem de prioridade
console.log("\n>>> INICIANDO ATENDIMENTO <<<");
fila.desenfileirar(); // Deve sair Sr. Pedro (5)
fila.desenfileirar(); // Deve sair Ana (4)

fila.exibir();

// 4. Testando lotação da fila
console.log(">>> TESTE DE LOTAÇÃO <<<");
// Temos 3 pessoas na fila. Capacidade é 6. Vamos tentar colocar mais 4.
fila.enfileirar("Paciente Extra 1", 3);
fila.enfileirar("Paciente Extra 2", 3);
fila.enfileirar("Paciente Extra 3", 3); // Aqui deve encher (6/6)
fila.enfileirar("Paciente QUE SOBROU", 3); // Esse deve dar erro!

console.log(`\nA fila está cheia? ${fila.estaCheia()}`);

// 5. Esvaziando
fila.limpar();
console.log(`A fila está vazia? ${fila.estaVazia()}`);