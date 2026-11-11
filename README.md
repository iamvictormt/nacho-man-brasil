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

Para publicar no Vercel, importe o repositório e mantenha as configurações automáticas do Next.js. O build usa a pasta `.next`, que é gerada automaticamente e não é versionada.

## Estrutura

- src/app: páginas, layout, metadados, estilos globais e telas de erro.
- src/components: página inicial, ícones da marca e componentes de interface.
- src/lib: dados e funções compartilhadas.
- public: imagens, vídeos e outros arquivos públicos.

O formulário de experiência em `/links` envia os dados para um Google Forms pela rota `/api/customer-leads`.
