# 🎵 Spotify Clone (Projeto de Estudo)

Aplicação **full-stack** inspirada na interface do Spotify, desenvolvida com o objetivo de
praticar **React**, componentização, organização de dados e consumo de uma **API REST própria**.

O projeto conta com um **back-end em Node.js com Express e MongoDB Atlas** para persistência
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
- React
- Vite
- JavaScript
- CSS
- Axios
- Font Awesome

### 🧠 Back-end
- Node.js
- Express
- MongoDB
- CORS

---

## ▶️ Como rodar o projeto localmente

> ⚠️ Este é um projeto **full-stack**.  
> É necessário rodar **back-end e front-end separadamente**, cada um em um terminal.

---

## 📌 Pré-requisitos

- Node.js **v18 ou superior**
- npm
- Conta no **MongoDB Atlas**

---

### 🔧 Back-end

1. Acesse a pasta do back-end:

cd back-end


2. Instale as dependências:

npm install


3. Configure a conexão com o MongoDB:

A string de conexão está definida diretamente no arquivo:

back-end/api/connect.js


⚠️ Observação: atualmente, a URI do MongoDB está definida diretamente no código
apenas para fins de estudo.

4. Inicie o servidor:

npm start


5. O back-end estará disponível em:

http://localhost:3001

---

### 💻 Front-end

1. Em outro terminal, acesse a pasta do front-end:

cd front-end


2. Instale as dependências:

npm install


3. Inicie o projeto:

npm run dev


4. O front-end será iniciado pelo Vite e exibirá no terminal o endereço de acesso (geralmente):

http://localhost:5173
