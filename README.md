# Sistema de Usuários com Node.js, Express e MySQL

## 🎯 Objetivo
Aprender a criar uma aplicação web para gerenciar usuários e endereços de forma didática, usando Node.js, Express, MySQL e Sequelize.

---

## 🛠 Tecnologias Utilizadas
- Node.js
- Express
- MySQL
- Sequelize (ORM)

---

## 📋 Pré-requisitos
- Node.js instalado
- MySQL Server
- Editor de código (VSCode recomendado)
- Conhecimentos básicos em JavaScript e SQL

---

## 🚀 Passo 1: Criar o Projeto
1. Criar a pasta do projeto:
   - `mkdir meu-projeto-sequelize`
   - `cd meu-projeto-sequelize`
2. Inicializar o projeto Node.js:
   - `npm init -y`
3. Instalar as dependências:
   - `npm install express sequelize mysql2`
4. Instalar o Nodemon para desenvolvimento:
   - `npm install nodemon --save-dev`

---

## 🗂 Passo 2: Estrutura de Pastas
A estrutura básica deve ser:

- **index.md** (README)
- **db/**  
  - `conn.md` (configuração da conexão)
- **models/**  
  - `User.md`  
  - `Address.md`
- **routes/**  
  - `userRoutes.md`

---

## 🔌 Passo 3: Configuração do Banco de Dados
1. Criar o banco no MySQL:

| Comando SQL                        | Descrição                         |
|----------------------------------|----------------------------------|
| `CREATE DATABASE nodesequelize;`  | Cria o banco de dados            |
| `USE nodesequelize;`              | Seleciona o banco de dados       |

2. Configurar a conexão no Sequelize:
   - Informar o nome do banco, usuário e senha.
   - Testar se a conexão foi bem-sucedida.

---

## 🗂 Passo 4: Modelos de Dados
### Usuário
- Campos: `id`, `name`, `occupation`, `newsletter`
- `id` é chave primária e auto-incremento
- `name` obrigatório
- `newsletter` padrão `false`

### Endereço
- Campos: `id`, `street`, `number`, `city`, `state`, `userId`
- `id` é chave primária e auto-incremento
- `userId` é a chave estrangeira vinculada ao usuário
- Relacionamento: um usuário pode ter vários endereços

---

## ⚡ Passo 5: Rotas CRUD de Usuário
### Endpoints

| Método | URL                     | Função                           |
|--------|-------------------------|---------------------------------|
| GET    | `/users`                | Listar todos os usuários         |
| POST   | `/users/create`         | Criar um novo usuário           |
| GET    | `/users/:id`            | Buscar usuário por ID           |
| PUT    | `/users/edit/:id`       | Atualizar usuário existente     |
| DELETE | `/users/delete/:id`     | Deletar usuário                 |

### Estrutura das Requisições

**POST /users/create**  
- Body: `name`, `occupation`, `newsletter`  

**PUT /users/edit/:id**  
- Body: `name`, `occupation`, `newsletter`  

---

## 🏃 Passo 6: Inicializar o Servidor
1. Configurar o Express para usar JSON e rotas de usuário.
2. Sincronizar o banco com Sequelize.
3. Rodar o servidor em `http://localhost:3000`.

---

## 📌 Passo 7: Testando a API
- Usar **Postman**, **Insomnia** ou **curl** para testar as rotas.
- Exemplo de requisição:

| Método | URL                  | Descrição                 |
|--------|--------------------|---------------------------|
| GET    | `/users`            | Listar todos os usuários |
| POST   | `/users/create`     | Criar usuário            |
| PUT    | `/users/edit/1`     | Atualizar usuário        |
| DELETE | `/users/delete/1`   | Deletar usuário          |

---

## 📚 Recursos
- Express.js: https://expressjs.com/
- Sequelize: https://sequelize.org/
- MySQL: https://www.mysql.com/

---

## 📝 Licença
MIT License
