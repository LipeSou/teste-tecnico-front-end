![CI Status](https://github.com/LipeSou/teste-tecnico-front-end/actions/workflows/ci.yml/badge.svg)

#  Seazone Aluguéis

Seja bem vindo a Seazone Aluguéis aplicação front-end desenvolvida como parte de um teste técnico para simular uma mini plataforma de aluguel por temporada.

https://teste-tecnico-front-end-qb5y.vercel.app/
---

## Tecnologias e Ferramentas

- **Next.js 15** com App Router
- **React 19**
- **TypeScript**
- **TailwindCSS 4**
- **Zustand** para gerenciamento de estado global
- **axe-core** para verificação de acessibilidade em tempo real
- **tabler icons** para ícones
- **ESLint + Prettier** para padronização de código
- **Jest e React Testing Library** para testes unitários
- **Radix** para um dialog e um popover com acessibilidade

---

## Deploy feito pela Vercel e CI CD no github pages

- A aplicação está configurada para deploy automático na **Vercel** sempre que houver push na branch main.
- **GitHub Actions** para Verificação de Código
  - **Eslint** para verificação de padrões de código e boas práticas
  - **Typescript** validação de tipagens
  - **Jest** verificação dos testes
  
![image](https://github.com/user-attachments/assets/78217efa-1b31-493f-a023-714e8ede48f8)


---

## Estrutura de pastas
Foi baseada nesse artigo a estrutura de pastas do site
https://dev.to/bajrayejoon/best-practices-for-organizing-your-nextjs-15-2025-53ji

![image](https://github.com/user-attachments/assets/be21a92a-b0e2-4f31-9496-d6a15eac9932)

- A pasta App fica responsável pelas rotas como é no next 15, com o layout para acessibilidade e coisas gerais.
- A pasta componentes foi separada por common e use-cases. A common ela vai ser para componentes mais comuns que podem ser utilizados em qualquer tela e a use-cases foi separados por componentes mais especícos e separado por pastas com o nome da página.
- A store fica o Zustand que é responsável pelo compartilhamnento de estado.
- A lib seria funções utilitárias

---

## Acessibilidade
No ambiente de desenvolvimento, esta aplicação utiliza o **axe-core** para detectar automaticamente problemas de acessibilidade diretamente no console do navegador.
- A verificação é executada apenas em ambiente de desenvolvimento (npm run dev)
- Nenhuma configuração adicional é necessária
- No console o axe-core exibirá avisos sobre contraste, landmarks, ARIA e outros pontos de acessibilidade.

![image](https://github.com/user-attachments/assets/c27ca8dc-1105-4968-b7e5-b0ac2f6d6326)

---

## API 
Os dados vem diretamente de uma api, durante o desenvolvimento em um dado momento o site que hospeda os dados ficou fora do ar o que me fez a tomar a decisão de caso der erro e cair no catch ele retorne um mock que eu mockei dos dados da API para não compometer o teste.

O endpoint original fornece imageUrl do Unsplash, mas o serviço está instável. Por isso, utilizei imagens locais mapeando o tipo do imóvel para arquivos.

---

## Testes
- Foram feito dois pequenos testes os arquivos foram property-card.test.tsx e property-button.test.tsx eles ficam dentro da pasta do componente em uma pasta __tests__ 
- Para rodar foi criado um script basta rodar npm run teste que ele vai rodar o jest

---
## Outras decisões técnicas
- Uso do Zustand para gerenciamento leve e eficiente do estado global.
- Axe-core para acessibilidade
- Configuração de CI/CD híbrida com Vercel e GitHub Actions o github para fazer o CI e se passar a vercel builda automaticamente.
- Radix componentes bem primitivos só que com acessibilidade
- O componente card por ser um componente mais detalhado foi utilizado o pattern compound component para ficar melhor de manipular, fazer manutenção e testar. O jeito que fica seu uso:
![image](https://github.com/user-attachments/assets/16f630a4-4d50-4a94-b31b-a5b77d307918)

---
## Funcionalidades
✅ Listagem de imóveis com imagem, localização, valor, avaliação e disponibilidade

✅ Filtros por cidade, estado, tipo de imóvel, faixa de preço, comodidades, etc.

✅ Página de detalhes do imóvel com galeria, descrição e lista de comodidades

✅ Simulação de reserva com modal de confirmação

✅ Feedback de carregamento e erro ao consumir a API

✅ Responsividade mobile-first

✅ Componentização reutilizável (cards, filtros, modais)

✅ Acessibilidade básica (landmarks, ARIA, contraste, navegação por teclado)

✅ < Head /> do Next.js

✅ Um carousel de imagens

---
## Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/seazone-rentals.git
cd seazone-rentals

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev
````

---

## Pontos que seriam melhorados tendo mais tempo
- Colocaria paginação
- Faria mais testes para englobar tudo
- Deixaria ainda mais reutilizável


---
## Imagens do site

Página principal versão web e versão mobile
![image](https://github.com/user-attachments/assets/c8d23218-cffb-4367-a1ac-11696bb4ad53)
![image](https://github.com/user-attachments/assets/8dc72ea2-0018-47e7-95eb-80c5ffe34b37)

Página de detalhes versão web e versão mobile
![image](https://github.com/user-attachments/assets/e037761e-cbdb-48fd-a008-1602d57d1b23)
![image](https://github.com/user-attachments/assets/4b455613-0dda-4b20-ab9a-17b2629847f8)


