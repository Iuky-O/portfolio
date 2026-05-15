# 🌸 Iuky — Portfólio Full Stack

Portfólio pessoal desenvolvido com React + Vite + TailwindCSS + Framer Motion.

## ✨ Features

- Design premium com glassmorphism, glow effects e partículas animadas
- Totalmente responsivo (mobile, tablet, desktop)
- Multilíngue (PT-BR / EN) via i18next
- Animações suaves com Framer Motion
- Scroll progress bar
- Navbar inteligente com destaque de seção ativa
- Modal de projetos com detalhes técnicos
- Dark mode por padrão

---

## 🚀 Como rodar localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) v18 ou superior
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Iuky-O/portfolio.git
cd portfolio

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

---

## 📦 Build para produção

```bash
npm run build
```

Os arquivos gerados ficam na pasta `dist/`.

---

## 🌐 Deploy no GitHub Pages

### Opção 1 — Deploy manual

```bash
# 1. Faça o build
npm run build

# 2. Instale o gh-pages
npm install -D gh-pages

# 3. Adicione ao package.json:
# "deploy": "gh-pages -d dist"

# 4. Faça o deploy
npm run deploy
```

### Opção 2 — GitHub Actions (automático)

Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### ⚠️ Configuração importante para GitHub Pages

No `vite.config.js`, ajuste o `base` para o nome do seu repositório:

```js
export default defineConfig({
  plugins: [react()],
  base: '/nome-do-seu-repositorio/',
})
```

---

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── Hero/         # Hero section com partículas
│   ├── About/        # Sobre mim
│   ├── Skills/       # Habilidades técnicas
│   ├── Projects/     # Projetos com modal
│   ├── Education/    # Formação e certificações
│   ├── Experience/   # Diferenciais
│   ├── Contact/      # Formulário de contato
│   └── UI/           # Navbar, Footer, Stars, ScrollProgress
├── i18n/
│   ├── index.js      # Config do i18next
│   └── locales/
│       ├── pt.json   # Português
│       └── en.json   # Inglês
├── styles/
│   └── globals.css   # Estilos globais + Tailwind
├── App.jsx
└── main.jsx
```

---

## 🎨 Personalização

### Cores
Edite `tailwind.config.js` → `theme.extend.colors`

### Projetos
Edite `src/components/Projects/projects.data.js`

### Traduções
Edite `src/i18n/locales/pt.json` e `en.json`

### Links sociais
Busque por `github.com/Iuky-O` e `linkedin.com` nos componentes Hero, Contact e Footer.

---

## 🛠️ Tech Stack

| Tecnologia | Uso |
|---|---|
| React 18 | Framework UI |
| Vite 5 | Build tool |
| TailwindCSS 3 | Estilização |
| Framer Motion | Animações |
| React Icons | Ícones |
| i18next | Internacionalização |

---

Feito com 💜 por Iuky Oliveira
