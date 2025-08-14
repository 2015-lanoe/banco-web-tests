# Cypress Banco - Testes Automatizados

## 📌 Objetivo
Este projeto foi desenvolvido com o objetivo de **demonstrar aos alunos da Mentoria 2.0** como criar testes automatizados utilizando **Cypress** com **JavaScript**, aplicando boas práticas de organização de código e geração de relatórios.

Os testes validam funcionalidades da aplicação **Banco Web** consumindo a **Banco API**.  
Para execução, é necessário que **ambos os sistemas estejam em execução localmente**.

---

## 🛠️ Componentes do Projeto

- **[Cypress](https://www.cypress.io/)** → Framework de testes end-to-end.
- **Custom Commands** → Comandos reutilizáveis para otimizar e padronizar os testes.
- **[cypress-mochawesome-reporter](https://github.com/lukejagodzinski/cypress-mochawesome-reporter)** → Geração de relatórios HTML e JSON.
- **Banco API** → [Repositório da API](https://github.com/juliodelimas/banco-api) (necessário executar antes dos testes).
- **Banco Web** → [Repositório da aplicação Web](https://github.com/juliodelimas/banco-web) (necessário executar antes dos testes).

---

## 📂 Estrutura do Projeto

```
.
├── cypress
│   ├── e2e           # Cenários de testes
│   ├── fixtures      # Massa de dados para os testes
│   ├── support
│   │   ├── commands.js   # Custom Commands
│   │   └── e2e.js
├── package.json      # Dependências e scripts
└── README.md
```

---

## 📥 Instalação

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   ```

2. **Instalar dependências**
   ```bash
   npm install
   ```

3. **Certificar-se que a API e a aplicação Web estão rodando**
   - Banco API → [Instruções](https://github.com/juliodelimas/banco-api)
   - Banco Web → [Instruções](https://github.com/juliodelimas/banco-web)

---

## ▶️ Execução dos Testes

- **Abrir interface interativa do Cypress**
  ```bash
  npx cypress open
  ```

- **Executar testes no modo headless com relatório**
  ```bash
  npx cypress run
  ```

---

## 📊 Relatórios

Após rodar `npx cypress run`, os relatórios serão gerados automaticamente na pasta:
```
/cypress/reports
```
O arquivo HTML pode ser aberto diretamente no navegador.

---

## 🧪 Documentação dos Testes

Os cenários de teste estão localizados em:
```
cypress/e2e/
```
Cobrem funcionalidades como:
- Login
- Cadastro de clientes
- Transações bancárias
- Validações de campos obrigatórios
- Regras de negócio (ex: autenticação de transferências acima de R$5.000,00)

---

## ⚙️ Custom Commands

Os comandos personalizados estão no arquivo:
```
cypress/support/commands.js
```

Exemplos:
- `cy.login(usuario, senha)` → Realiza login automático na aplicação.
- `cy.criarCliente(dados)` → Cadastra um novo cliente via interface.
- `cy.realizarTransferencia(origem, destino, valor)` → Executa transferência simulada entre contas.

Esses comandos permitem reutilização e reduzem duplicação de código nos testes.

---

## 📄 Licença
Este projeto é apenas para fins educacionais na **Mentoria 2.0**.
