# Nacho Man

Site em Next.js (App Router), React, TypeScript e Tailwind CSS 4.

## Desenvolvimento

Requer Node.js 20.9 ou superior e npm.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000.

## Validação e produção

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Estrutura

- src/app: páginas, layout, metadados, estilos globais e telas de erro.
- src/components: página inicial, ícones da marca e componentes de interface.
- src/assets: imagens locais, incluindo logotipos e foto da franquia.
- public: favicon e robots.txt.
- docs-design.md: conceito visual original preservado.
- roadmap.md: planejamento do projeto.

As interações existentes foram preservadas. O formulário de novidades apenas confirma o cadastro na interface; ainda não há integração com um serviço de envio ou banco de dados.
