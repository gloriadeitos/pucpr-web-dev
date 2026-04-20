# Atividade Somativa - Login em React

## Identificacao

- Nome completo: Gloria Maria Deitos Gomes da Silva
- Mes e ano: Abril/2026
- Universidade: PUC-PR
- Curso: Analise e Desenvolvimento de Sistemas

## Descricao do trabalho

Na semana 4, foi apresentado o conteudo de array em React, fechando assim o conteudo da criacao de um unico componente. Com esse conhecimento, esta atividade somativa reune os conteudos vistos ate o momento.

Com base no aprendizado das 4 primeiras semanas, a proposta e criar uma aplicacao em React com uma tela de login contendo:

- titulo "Login";
- 2 inputs: e-mail e senha;
- 1 botao "Acessar";
- 1 label para exibir a mensagem de retorno.

## Regras de validacao

Ao clicar no botao "Acessar", a aplicacao deve verificar:

- e-mail igual a `eduardo.lino@pucpr.br`;
- senha igual a `123456`.

Se os dois valores estiverem corretos, deve exibir:

`Acessado com sucesso!`

Se algum dos valores estiver incorreto, deve exibir:

`Usuario ou senha incorretos!`

## Tecnologias utilizadas

- React
- Vite
- React Router DOM
- Tailwind CSS
- Font Awesome (icones)
- JavaScript (ES Modules)
- ESLint

## Estrutura da pasta src

```text
src/
	App.css
	App.jsx
	index.css
	main.jsx
	assets/
		hero.png
		react.svg
		vite.svg
	components/
		FormLogin.jsx
	pages/
		Home.jsx
```

## Como executar

1. Instalar dependencias:

```bash
npm install
```

2. Rodar o projeto em desenvolvimento:

```bash
npm run dev
```

3. Gerar build de producao (opcional):

```bash
npm run build
```
