# Primeiro tutorial do canal quero ser dev

Link da aplicação em produção: testing-react-quero-ser-dev.netlify.app

Neste projeto estamos estudando como dar os passos iniciais com react-testing-library.

Esta aplicação simples feita com create react-app deverá ter o comportamento abaixo:

![image](https://media.giphy.com/media/KMyt74nbfFpnTEIgLU/giphy.gif)

O mais legal é que vamos fazer com testes garantindo os cenários abaixo:

✅ Quando a tela carrega, o componente renderiza corretamente com todos os elementos?

✅ A imagem está acessível com o texto alternativo?

✅ O input funciona capturando o valor digitado?

✅ Após a usuária digitar o nome, o texto renderiza corretamente na tela?
## Conteúdo

Vamos aprender a testar em react? Na prática a gente vai imitar comportamento humano interagindo com a aplicação só que de forma automatizada. 

Sim, você vai poder dizer que começou a estudar testes unitários e automatizados com React Testing Library, que segundo a documentação é uma família completa de pacotes para criar testes utilizando boas práticas centradas no comportamento da pessoa usuária.

Vamos lá!

### Estrutura básica do teste

> Bloco de teste

* Renderizar o componente que queremos testar
* Encontrar os elementos que queremos interagir
* Interagir com esses elementos
* Afirmar o resultado esperado


> describe, it e expect

* describe serve para criarmos um conjunto de testes
* it ou test serve para criar um caso de teste
* expect serve para descrever o que esperamos com resultado ideal para aquele teste

> screen, render, fireEvent, queryBy.../findBy..., toBeInTheDocument/toHaveTextContent 

* screen é o que nos permite visualizar a tela e a partir daí encontrar os nós do DOM
* render é o metodo que renderiza nosso componente no ambiente de testes
* fireEvent simula alguns eventos e interações da pessoa usuária
* queryBy.../findBy... são as queries, alguns dos muitos metódos que nos ajuda a encontrar, buscar, trazer um ou mais elementos da tela 
* toBeInTheDocument/toHaveTextContent são os matchers, alguns dos muitos metodos que nos ajudam a comparar o resultado esperado com o resultado recebido. Eles nos ajudam também com o log de mensagens de erro. 

### Tecnologias

| Ferramenta | Descrição |
| --- | --- |
| `ReactJS` | Biblioteca de javascript |
| `React-Testing-library` | Bibliotecas para criação de testes em javascript|
| `yarn` | Gerenciador de pacotes|
|`Netlify` | Servidor para deploy automático da aplicação via github|
  
### Arquitetura

#### 📂public
>  Está o index.html nosso arquivo que recebe a div root manipulada pela virtualDOM
#### 📂src
> Estão os arquivos de imagem, css, testes e componentes
#### 📂node_modules
> Ficam salvos somente em nosso computador todos os pacotes e dependências para nosso projeto react funcionar

```
 📁 Testing
   |
   |  - 📁 src
   |       |- 📄 App.js
   |       |- 📄 index.js
   |       |- 📄 App.test.js
   |       |- 📄 ilustracao.svg
   |       |- 📄 App.css
   |       |- 📄 index.css
   |       |- 📄 setupTests.js
   |
   |  - 📁 public
   |       |- 📄 index.html
   |
   |- 📄 README.md
   |- 📄 .gitignore
   |- 📄 package.json
   |- 📄 yarn.lock

```
### Como rodar o projeto localmente
Siga os passos e inclua as informações abaixo:

| Passo | Comando/informação       |
| --------- | ----------- |
| Faça o fork  | `botão de forkar` |
| Faça o clone  | `git clone` |
| Instale as dependências   | `yarn` |
| Rode os testes     | `yarn test` |
| Rode o projeto no localhost   | `yarn start` |


### 😎 Próximos passos para estudar

- TDD (Programação orientada a testes)
- Documentação do React Testing Library
- Testar projetos que envolvam consumo de API 
- Melhores práticas e pensamento crítico para criação de testes 

---

_Foi incrível compartilhar essa jornada com você! Qualquer dúvida ou sugestão, chama no contatinho!_


### Saudações, Simara!

 <img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="Gif Yeah" width="200">

Professora na {reprograma}, desenvolvedora na ThoughtWorks e criadora do Canal e Podcast Quero Ser Dev.

Vamos nos conectar!

- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)

<br>
Feito com 💜 por Simara Conceição
