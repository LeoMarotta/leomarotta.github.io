# Portfólio Pessoal - Leonardo Marotta

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

Este é o repositório do meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos e experiência profissional de forma interativa e moderna. O site foi construído com Angular e hospedado gratuitamente no GitHub Pages.

**[➡️ Ver Site Online](https://leomarotta.github.io)**

*(Dica: Após finalizar o layout, tire um print da tela principal e substitua o nome do arquivo abaixo para ter uma imagem de preview no seu README!)*
`![Screenshot do Portfólio](./screenshot.png)`

## ✨ Funcionalidades

* **Design Responsivo:** Totalmente adaptável para visualização em desktops, tablets e celulares com layout mobile-first.
* **Seções Profissionais:** Inclui seções sobre mim, formação acadêmica, experiência profissional, habilidades técnicas, idiomas e contato.
* **Internacionalização (i18n):** Switch de idioma funcional entre Português e Inglês com traduções completas.
* **Timeline de Experiências:** Layout em cards verticais otimizado para mobile com informações detalhadas.
* **Habilidades Categorizadas:** Skills organizadas por Cloud & DevOps, Linguagens, Frameworks, Bancos de Dados, Ferramentas e Segurança.
* **Animações Suaves:** Efeitos de hover e transições para melhor experiência do usuário.

## 🛠️ Tecnologias Utilizadas

* **Angular 19:** Framework principal com standalone components e arquitetura moderna.
* **TypeScript:** Linguagem base com tipagem estática para maior robustez.
* **Angular Material:** Biblioteca de componentes UI para design consistente.
* **RxJS:** Gerenciamento de estado reativo para o sistema de tradução.
* **CSS3:** Estilização avançada com flexbox, grid e animações.
* **angular-cli-ghpages:** Deploy automatizado para GitHub Pages.

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

    * **Para publicar:**
        ```bash
        # Deploy da versão principal (português)
        npm run deploy
        ```

## 📜 Scripts Disponíveis

* `npm start`: Servidor de desenvolvimento em `http://localhost:4200/`
* `npm run build`: Build de produção
* `npm run deploy`: Build e deploy para GitHub Pages
* `npm test`: Executa testes unitários

## 🌐 Funcionalidades de Idioma

O site possui sistema de tradução completo:
* Switch de idioma no canto superior direito
* Tradução dinâmica de todos os textos
* Suporte para Português (padrão) e Inglês
* Estado de idioma mantido durante a navegação

## 📫 Contato

* **Leonardo Marotta**
* **LinkedIn:** [linkedin.com/in/leonardo-marotta](https://linkedin.com/in/leonardo-marotta)
* **GitHub:** [github.com/LeoMarotta](https://github.com/LeoMarotta)
* **Email:** [leogmarotta@gmail.com](mailto:leogmarotta@gmail.com)
