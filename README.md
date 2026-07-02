# Eduardo Bremer — Advocacia

Landing page institucional para o Dr. Eduardo Bremer (OAB/ES 37.747 · OAB/BA 83.916), com apresentação do escritório, áreas de atuação, como funciona o atendimento e contato via WhatsApp.

Desenvolvido em [Next.js](https://nextjs.org/) pela [LumaSites](https://lumasites.com.br).

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) para ícones

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando         | Descrição                          |
| --------------- | ----------------------------------- |
| `npm run dev`   | Ambiente de desenvolvimento         |
| `npm run build` | Build de produção                   |
| `npm run start` | Executa o build de produção         |
| `npm run lint`  | Lint do projeto                     |

## Estrutura

```
app/
  layout.tsx    # Layout raiz
  page.tsx      # Página única com todas as seções
  globals.css   # Estilos globais
public/         # Imagens e assets estáticos
```
