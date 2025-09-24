# Visuarte — Landing Page

Aplicação web em React para apresentação de serviços de edição e melhoria visual, com seções de hero, benefícios, processo, pricing, FAQ e contato, utilizando componentes acessíveis e estilização com Tailwind. O projeto é focado em performance, responsividade e facilidade de manutenção.

## Tecnologias principais

- **Vite** (build/dev server)
- **React 18** + **TypeScript**
- **React Router** (navegação)
- **Tailwind CSS** + **tailwind-merge** + **tailwindcss-animate**
- **shadcn/ui** (sobre Radix) e **Radix UI** (acessibilidade)
- **Lucide React** (ícones)
- **Zod** e **React Hook Form** (validação e formulários)
- **@tanstack/react-query** (estado de dados remoto, se necessário)

## Estrutura do projeto

Pastas principais (trecho simplificado):

```text
src/
  components/           # Componentes de UI e seções da página
    services/           # Componentes ligados aos serviços
    ui/                 # Primitivos (shadcn/ui)
  pages/                # Rotas (Index, NotFound)
  hooks/                # Hooks personalizados
  assets/               # Imagens e mídias
  lib/                  # Utilitários
```

Componentes de destaque:
- `components/Hero.tsx`, `Benefits.tsx`, `Process.tsx`, `Pricing.tsx`, `FAQ.tsx`, `Footer.tsx`, `Satisfaction.tsx`, `Services.tsx`
- `components/services/BeforeAfterViewer.tsx`, `ServiceModal.tsx`, `ProcessStep.tsx`
- Primitivos UI em `components/ui/*` (accordion, dialog, button, input etc.)

## Pré-requisitos

- Node.js LTS (18+ recomendado)
- npm (ou bun/pnpm, se preferir)

Verifique a versão:

```bash
node -v
npm -v
```

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd visuarte-oficial
   ```
2. Instale as dependências:
   ```bash
   npm i
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse a aplicação no navegador (geralmente `http://localhost:5173`).

## Scripts disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento Vite
- `npm run build`: gera build de produção em `dist/`
- `npm run build:dev`: build com modo desenvolvimento habilitado
- `npm run preview`: serve o build produzido para conferência
- `npm run lint`: roda o ESLint

## Build e preview

```bash
npm run build
npm run preview
```
O preview sobe um servidor estático local servindo o conteúdo de `dist/`.

## Estilo e UI

- Tailwind configurado em `tailwind.config.ts` e `postcss.config.js`.
- Primitivos do shadcn/ui em `src/components/ui/*` utilizando Radix UI.
- Ícones via `lucide-react`.

## Navegação

- Rotas definidas com `react-router-dom` em `src/pages/*` e integração em `src/main.tsx`.

## Convenções e boas práticas

- Componentes e funções com nomes explícitos e tipos do TypeScript.
- Evite comentários extensos; mantenha funções curtas e coesas.
- Prefira componentes puros e estados locais bem delimitados.

## Estrutura de imagens

- Imagens e exemplos before/after estão em `src/assets/` e subpastas.
- Para adicionar novas imagens, salve em `src/assets/` e importe no componente correspondente.

## Deploy

Como é um projeto Vite estático, você pode publicar o conteúdo de `dist/` em qualquer hosting estático (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

Passos gerais:
```bash
npm run build
# publique a pasta dist/ na sua plataforma
```

## Licença

Este projeto é de uso interno da Visuarte.

## Contato

- Site/Marca: Visuarte
- Responsável: Lucca Toni
