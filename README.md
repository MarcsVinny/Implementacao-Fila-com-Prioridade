# Atividade: Implementação de Fila com Prioridade

Projeto desenvolvido para a disciplina de Estrutura de Dados do curso de Análise e Desenvolvimento de Sistemas (ADS).

## 👥 Identificação dos Membros
* **Marcos Vinícius**
* **Gisele Dias**

## 📄 Descrição da Classe Principal (`FilaPrioridade`)
A classe `FilaPrioridade` foi implementada utilizando o conceito de **Matriz de Listas (Array de Arrays)**. Diferente de uma fila comum, esta estrutura organiza os elementos em 5 níveis de prioridade distintos:
* **Nível 5 (Muito Alta)** até **Nível 1 (Muito Baixa)**.

A lógica principal consiste em:
* **Enfileirar:** O elemento é inserido no final da sub-fila correspondente ao seu nível de prioridade.
* **Desenfileirar:** A estrutura busca o primeiro elemento disponível partindo sempre da maior prioridade (5) para a menor (1), garantindo que pacientes ou processos urgentes sejam atendidos primeiro.
* **Controle:** A classe gerencia sua própria capacidade máxima e total de elementos inseridos.

## 🚀 Como Executar o Código

### Pré-requisitos
* Ter o [Node.js](https://nodejs.org/) instalado.
* Ter o [TypeScript](https://www.typescript.org/) instalado.

### Passo a passo
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/MarcsVinny/Implementacao-Fila-com-Prioridade.git

2. **Acesse a pasta do projeto**
   ```bash
   cd Implementacao-Fila-com-Prioridade

3. **Instale as dependências do projeto**
   ```bash
   npm install

4. **Execute o programa**
   ```bash
   npx ts-node src/index.ts
