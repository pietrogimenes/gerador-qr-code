
# Gerador de QR Code - Node.js

## 📌 Sobre o Projeto

Este projeto tem como objetivo a criação de um gerador de **QR Codes** utilizando **Node.js**. Ele permite gerar códigos QR a partir de uma URL ou texto e pode ser facilmente integrado a outros sistemas. O projeto utiliza **Express.js** como framework para o servidor e outras bibliotecas para a geração dos QR Codes.

## 🚀 Tecnologias Utilizadas

- **Node.js** (runtime JavaScript)
- **Express.js** (framework web)
- **QRCode** (biblioteca para gerar QR Codes)
- **dotenv** (gerenciamento de variáveis de ambiente)

## 📂 Estrutura do Projeto

```
📁 gerador-qr-code
├── 📄 app.js                # Arquivo principal do servidor
├── 📄 qrCodeController.js   # Lógica para gerar QR Codes
├── 📄 .env                  # Configurações do ambiente
├── 📄 .gitignore            # Arquivos ignorados no Git
└── 📄 README.md             # Documentação do projeto
```

## 📦 Como Rodar o Projeto

### 1️⃣ **Clonar o Repositório**

```bash
git clone https://github.com/pietrogimenes/gerador-qr-code.git
cd gerador-qr-code
```

### 2️⃣ **Instalar Dependências**

```bash
npm install
```

### 3️⃣ **Configurar Variáveis de Ambiente**

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis (se necessário):

```env
PORT=3000
```

### 4️⃣ **Iniciar o Servidor**

```bash
npm start
```

> O servidor rodará na porta `3000` por padrão.

## 🔄 Endpoints da API

### 🔹 Gerar QR Code

**POST** `/generate-qr`

Exemplo de requisição:

```json
{
  "data": "https://www.example.com"
}
```

Resposta:

```json
{
  "qr_code": "data:image/png;base64,...."
}
```

## 📜 Licença

Este projeto está sob a licença **MIT**.

---

💻 **Desenvolvido por** [Pietro Gimenes](https://github.com/pietrogimenes) 🚀
