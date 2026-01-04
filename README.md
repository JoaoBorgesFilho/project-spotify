# 🎵 Spotify Clone (Projeto de Estudo)

Aplicação **full-stack** inspirada na interface do Spotify, desenvolvida com o objetivo de
praticar **React**, componentização, organização de dados e consumo de uma **API REST própria**.

O projeto conta com um **back-end em Node.js com Express** e **MongoDB** para persistência
de dados de artistas e músicas, que são consumidos pelo front-end.

---

## 📌 Sobre o projeto

Esta aplicação é **inspirada visualmente** no Spotify e foi criada exclusivamente
para fins de **estudo e prática de desenvolvimento web**.

Os dados utilizados são **ilustrativos** e não possuem qualquer vínculo com a
plataforma oficial do Spotify.

---

## 🚀 Tecnologias utilizadas

### 🎨 Front-end

* React
* Vite
* JavaScript
* CSS
* Axios
* Font Awesome

### 🧠 Back-end

* Node.js
* Express
* MongoDB
* CORS

---

## ▶️ Como rodar o projeto localmente

> ⚠️ Este é um projeto **full-stack**.
> É necessário rodar **back-end e front-end separadamente**, cada um em um terminal.

---

## 📌 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

* Node.js **v18 ou superior**
* npm (geralmente já vem com o Node.js)
* MongoDB (local ou MongoDB Atlas)

---

## 🔧 Back-end

1. Acesse a pasta do back-end:

```bash
cd back-end
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz da pasta **back-end** com a seguinte variável:

```env
MONGO_URI=sua_string_de_conexao_do_mongodb
```

> 💡 Caso utilize o MongoDB Atlas, use a string de conexão fornecida pela plataforma.

4. Inicie o servidor:

```bash
npm start
```

5. O back-end estará disponível em:

```
http://localhost:3001
```

---

## 💻 Front-end

1. Em **outro terminal**, acesse a pasta do front-end:

```bash
cd front-end
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto:

```bash
npm run dev
```

4. O front-end será iniciado pelo Vite e exibirá no terminal o endereço de acesso (geralmente):

```
http://localhost:5173
```

---

## 📂 Estrutura do projeto (resumida)

```
spotify-clone/
│
├── back-end/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── front-end/
│   ├── src/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## ⚠️ Observações importantes

* O arquivo `.env` **não deve ser versionado**.
* Certifique-se de que o MongoDB esteja ativo antes de iniciar o back-end.
* Este projeto tem finalidade **educacional**.

---

## 👨‍💻 

Projeto criado para estudos em **desenvolvimento web full-stack**.
