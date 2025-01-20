# Virtual Scheduling

O **Virtual Scheduling** é um sistema desenvolvido em **Angular 17** para gerenciar contatos e agendar horários para reuniões ou eventos. Com ele, você pode adicionar novos contatos e organizar compromissos de maneira simples e eficiente.

## Requisitos

Antes de começar, verifique se você tem os seguintes softwares instalados em sua máquina:

- **Node.js** versão 18.19.1
- **npm** (gerenciador de pacotes do Node)

## Como Instalar

### 1. Instalar o Node.js
Para instalar o Node.js, siga os passos abaixo:

#### **Windows / macOS**:
- Acesse a página oficial do Node.js: [https://nodejs.org/](https://nodejs.org/)
- Baixe a versão 18.19.1 (LTS) e siga as instruções do instalador.

#### **Linux (Ubuntu/Debian)**:
```bash
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Para outras distribuições Linux, acesse [NodeSource](https://github.com/nodesource/distributions/blob/master/README.md).

## 2. Instalar Dependências do Projeto
Com o Node.js e npm instalados, clone o repositório do projeto e instale as dependências:
```
npm install
```

### Como Executar o Projeto
## 1. Servir o Projeto
Para rodar a aplicação localmente, use o comando:
```
ng serve
```
Isso irá iniciar o servidor de desenvolvimento e você poderá acessar a aplicação em seu navegador no endereço: http://localhost:4200.

### Funcionalidades
 * Adicionar Contatos: Cadastre novos contatos com nome, e-mail e telefone.
 * Agendar Reuniões/Eventos: Escolha um horário disponível para criar reuniões ou eventos com seus contatos.
 * Visualização de Agenda: Consulte seus compromissos e veja a disponibilidade de horários.
 
### Tecnologias Utilizadas
 * Angular 17: Framework para o desenvolvimento da aplicação frontend.
 * Node.js: Ambiente de execução JavaScript no servidor.
 * npm: Gerenciador de pacotes utilizado para instalar as dependências do projeto.
