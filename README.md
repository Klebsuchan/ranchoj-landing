# 🛒 RanchoJá – Comparador Inteligente de Supermercados & Economia Real

[![Platform](https://img.shields.io/badge/Platform-Web%20App%20%2F%20PWA-EA1D2C?style=for-the-badge&logo=react)](https://ranchoja.app/)
[![Passo Fundo](https://img.shields.io/badge/Location-Passo%20Fundo%20%26%20Regi%C3%A3o-10B981?style=for-the-badge&logo=google-maps)](https://ranchoja.app/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue?style=for-the-badge)](./LICENSE)
[![SEO Ready](https://img.shields.io/badge/SEO-Schema.org%20JSON--LD-amber?style=for-the-badge)](https://ranchoja.app/)

> **RanchoJá** é a plataforma comparadora de supermercados líder em Passo Fundo e região, projetada em arquitetura **Mobile-First** para devolver até **35% do orçamento mensal** para o bolso das famílias brasileiras.

🌐 **URL Oficial:** [https://ranchoja.app/](https://ranchoja.app/)  
⚡ **Mirror de Desenvolvimento:** [https://ranchoja.vercel.app/](https://ranchoja.vercel.app/)

---

## 🎯 Visão Geral & Proposta de Valor

Comprar supermercado virou um desafio diante da inflação e da alta dispersão de preços entre estabelecimentos da mesma cidade (que chega a **45% de variação no mesmo produto**). 

O **RanchoJá** resolve esse problema ao reunir e comparar em tempo real os preços dos principais atacarejos e supermercados da região — como **Stock Center**, **Atacadão**, **Supermercado Zaffari**, **Bourbon Hipermercado**, mercearias de bairro e feiras livres.

### 🌟 Destaques do Projeto:
- **0% de Custo para o Usuário:** 100% gratuito e sem necessidade de cadastro inicial para pesquisar.
- **100% Mobile & Leve (PWA):** Roda direto no navegador do smartphone sem ocupação de memória interna.
- **Inteligência Orçamentária:** Algoritmo que calcula o custo real por unidade de medida (**R$/kg**, **R$/L** e **R$/unidade**).
- **Modo "No Mercado" com Checklist Ao Vivo:** Evita surpresas e estouros no caixa do supermercado.

---

## 🚀 Principais Funcionalidades

| Recurso | Descrição |
| :--- | :--- |
| **📊 Comparador Multi-Mercados** | Tabela em tempo real com identificação automática da opção mais barata e cálculo de delta de economia. |
| **🧺 Rancho em 1 Toque** | Calibra a cesta completa de mantimentos com base no teto orçamentário estipulado pelo usuário. |
| **🛒 Modo "No Mercado"** | Checklist interativo na palma da mão com barra de progresso do subtotal e saldo restante em tempo real. |
| **🔔 Alertas de Ofertas** | Notificações automáticas quando itens favoritos atingem metas de preço em Passo Fundo. |
| **📄 Exportação em PDF** | Impressão e salvamento da lista categorizada para consulta offline em locais sem sinal de internet. |
| **📲 Compartilhamento WhatsApp** | Envio instantâneo da lista organizada por corredores para familiares e amigos. |

---

## 🛠️ Tecnologias & Arquitetura

O projeto foi construído com a stack web moderna focada em altíssima performance, responsividade e SEO avançado:

- **Frontend Core:** [React 19](https://react.dev/) + [TypeScript 5.7](https://www.typescriptlang.org/)
- **Build Tooling:** [Vite 8](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconografia:** [Lucide React](https://lucide.dev/)
- **Typography:** `Plus Jakarta Sans`
- **SEO & Social Share:** Schema.org JSON-LD (`WebApplication` + `FAQPage`), OpenGraph Meta, Twitter Cards, Canonical Links.

---

## 📊 Impacto Comprovado (Métricas de Mapeamento)

- **35% de Redução no Custo:** Economia média no valor total do rancho mensal em comparação a compras sem planejamento.
- **R$ 300+ por Ciclo:** Valor médio mensal economizado por famílias em Passo Fundo.
- **45% de Dispersão de Preço:** Diferença máxima encontrada no mesmo item e marca entre estabelecimentos locais.
- **10+ Redes Mapeadas:** Cobertura de atacarejos de volume, supermercados de rede, mercearias de bairro e feiras do produtor.

---

## 💻 Instalação & Execução Local

### Pré-requisitos
- Node.js 18+ instalado
- npm ou pnpm

### Passos de Instalação

1. **Clonar o repositório:**
```bash
git clone https://github.com/braiankleber/ranchoja.git
cd ranchoja
```

2. **Instalar dependências:**
```bash
npm install
```

3. **Iniciar servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Compilar para produção:**
```bash
npm run build
```

5. **Executar verificação de tipos (Linting):**
```bash
npm run lint
```

---

## 🌐 Estrutura de Arquivos

```
/
├── index.html                   # Entry point com SEO, OpenGraph e JSON-LD
├── metadata.json                 # Metadados do applet
├── package.json                 # Dependências e scripts
├── public/
│   └── favicon.svg              # Favicon SVG oficial vetorizado do RanchoJá
├── src/
│   ├── App.tsx                  # Componente raiz da landing page
│   ├── main.tsx                 # Entrada principal React DOM
│   ├── index.css                # CSS Global com Tailwind v4
│   ├── components/
│   │   ├── RanchoJaLogo.tsx     # Componente da logo oficial vetorizada
│   │   ├── Navbar.tsx           # Header corporativo sticky
│   │   ├── Hero.tsx             # Hero section com mockup interativo
│   │   ├── ImpactStats.tsx      # Métricas de economia
│   │   ├── ProblemSection.tsx   # Pain points da inflação
│   │   ├── SolutionSection.tsx  # Pilares da plataforma
│   │   ├── FeatureExplorer.tsx  # Playground interativo por abas
│   │   ├── CoverageSection.tsx # Diretório de supermercados locais
│   │   ├── SavingsCalculator.tsx# Calculadora financeira de ROI
│   │   ├── PracticalitySection.tsx# Funcionalidades de compartilhamento/PDF
│   │   ├── HowItWorks.tsx       # Passo a passo em 3 etapas
│   │   ├── Testimonials.tsx     # Depoimentos reais de Passo Fundo
│   │   ├── FaqSection.tsx       # Perguntas frequentes com acordeão
│   │   ├── FinalCta.tsx         # Banner de conversão final
│   │   ├── Footer.tsx           # Rodapé multi-colunas corporativo
│   │   └── MobileBottomBar.tsx  # Floating CTA fixo para mobile
│   └── data/
│       └── marketsData.ts       # Mapeamento de mercados e dados de teste
└── tsconfig.json                # Configuração do compilador TypeScript
```

---

## 📄 Licença

Este projeto é disponibilizado sob a licença **Apache 2.0**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

<p text-align="center">
  <strong>RanchoJá © 2026</strong> • Transformando a forma como Passo Fundo e o Brasil fazem supermercado.
</p>
