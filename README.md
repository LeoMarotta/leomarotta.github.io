# Portfólio Pessoal - Leonardo Marotta

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

Este é o repositório do meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos e experiência profissional de forma interativa e moderna. O site foi construído com Angular e hospedado gratuitamente no GitHub Pages.

**[➡️ Ver Site Online](https://leomarotta.github.io)**

*(Dica: Após finalizar o layout, tire um print da tela principal e substitua o nome do arquivo abaixo para ter uma imagem de preview no seu README!)*
`![Screenshot do Portfólio](./screenshot.png)`

## ✨ Funcionalidades

* **Design Responsivo:** Totalmente adaptável para visualização em desktops, tablets e celulares.
* **Seções Profissionais:** Inclui seções detalhadas sobre mim, minhas habilidades técnicas, experiência profissional e projetos.
* **Internacionalização (i18n):** Suporte para múltiplos idiomas (Português e Inglês) para alcançar uma audiência global.
* **Componentes Reutilizáveis:** Construído com a arquitetura baseada em componentes do Angular para fácil manutenção.

## 🛠️ Tecnologias Utilizadas

* **Angular:** Framework principal para a construção da interface.
* **TypeScript:** Linguagem base para o desenvolvimento com Angular.
* **Angular Material:** Biblioteca de componentes para um design limpo e moderno.
* **angular-cli-ghpages:** Ferramenta para automatizar o deploy para o GitHub Pages.
* **HTML5 & SCSS:** Estrutura e estilização do site.

## 🚀 Começando

Siga os passos abaixo para configurar o ambiente e rodar o projeto localmente.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão LTS recomendada)
* [Angular CLI](https://angular.dev/tools/cli) instalado globalmente (`npm install -g @angular/cli`)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/LeoMarotta/leomarotta.github.io.git](https://github.com/LeoMarotta/leomarotta.github.io.git)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd leomarotta.github.io
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

## 🔄 Fluxo de Desenvolvimento e Publicação

Este projeto utiliza duas branches com propósitos distintos. Entender essa separação é crucial.

### Entendendo as Branches

* **`main`**: A "receita do bolo". É a branch principal que contém todo o código-fonte que você edita (`.ts`, `.html`, `.scss`). **Todo o desenvolvimento acontece aqui.**
* **`gh-pages`**: O "bolo pronto". É uma branch de publicação que contém apenas o código compilado e otimizado (da pasta `dist/`). **Você nunca deve editar ou fazer merge desta branch diretamente.**

### Passo a Passo para Atualizar o Site

1.  **Desenvolva na `main`**: Certifique-se de estar na branch `main` (`git checkout main`) e faça todas as suas alterações de código.

2.  **Faça o Commit das Alterações**: Salve seu trabalho no histórico do Git.
    ```bash
    git add .
    git commit -m "feat: adiciona nova seção de contato"
    ```

3.  **Publique a Nova Versão**: Para atualizar o site online, use os comandos abaixo. Eles irão compilar o projeto e enviar o resultado para a branch `gh-pages` automaticamente.

    * **Para publicar a versão em Português (padrão):**
        ```bash
        # 1. Compila o projeto para produção
        ng build --configuration production --base-href "/leomarotta.github.io/"
        
        # 2. Envia o conteúdo da pasta de 'dist' para a branch gh-pages
        # (Lembre-se de confirmar o nome da pasta de saída com 'ls dist/')
        ngh --dir=dist/leomarotta.github.io 
        ```

    * **Para publicar a versão em Inglês:**
        ```bash
        # 1. Compila o projeto usando a configuração 'en'
        ng build --configuration=en
        
        # 2. Envia para uma subpasta no mesmo branch
        ngh --dir=dist/leomarotta.github.io/en --no-silent
        ```

## 📜 Scripts Disponíveis

No arquivo `package.json`, você pode encontrar (ou criar) scripts para facilitar as tarefas comuns:

* `npm start`: Roda o servidor de desenvolvimento em `http://localhost:4200/`.
* `npm run build`: Compila o projeto para produção.
* `npm test`: Executa os testes unitários com o Karma.

*(Dica: Você pode criar atalhos para os comandos de deploy no seu `package.json` para facilitar ainda mais!)*

## 📫 Contato

* **Leonardo Marotta**
* **LinkedIn:** [linkedin.com/in/leonardo-marotta](https://linkedin.com/in/leonardo-marotta)
* **GitHub:** [github.com/LeoMarotta](https://github.com/LeoMarotta)
* **Email:** [lgmarotta@inf.ufpel.edu.br](mailto:lgmarotta@inf.ufpel.edu.br)
