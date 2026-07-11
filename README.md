# Balaji Constructions
### Premium Luxury, Commercial, and Strategic Infrastructure Civil Engineering Portal

Balaji Constructions is a premium general contracting portal engineered for a multi-crore civil engineering firm handling luxury estates, state-of-the-art corporate landmark towers, and heavy strategic public infrastructure works. 

Inspired by high-end design aesthetics of **Apple**, **Stripe**, and **Foster + Partners**, the application is built to convey structural unyielding permanence, uncompromised safety, and technological superiority (BIM LOD 400).

---

## 🏗️ Architectural Vision & Problem Solved

Traditional general contractors operate on opaque metrics, fragmented communication, and outdated visualizations. Balaji Constructions bridges the gap between high-level capital investors, luxury homeowners, and physical engineering execution.

### Key Value Pillars
* **Engineering Accountability**: Incorporates strict BIM (Building Information Modeling) Level of Development 400 standards, meaning every pipe, beam, and conduit is modeled virtually before a physical concrete batch is poured.
* **Capital Risk Mitigation**: Provides fully-bonded construction pipelines backed by high-capacity material testing (NDT, Pile Integrity, M80 Grade polymer concrete).
* **Seamless Lead Capture**: Built around an interactive, high-fidelity project estimator and tender proposal system.

---

## 💎 Features & Interactive Visualizers

1. **Cinematic Hero Display**: Responsive full-bleed high-end background with visual metrics (e.g. ₹2,500Cr+ Asset Value, 100% BIM Compliance).
2. **Interactive Services Hub**: Switchable sectors detailing specialized civil capabilities, complete with real-time technical specifications and QA/QC certifications.
3. **Signature Portfolio Showcase**: Multi-category filterable project bento grid featuring rich popover modals with complete structural highlights, contract value, and client details.
4. **Before & After Restoration Slider**: Interactive click-and-drag slider showcasing retrofitting and seismic-stabilization transformation of a raw industrial structure into premium creative suites.
5. **Phase-Gate Construction Timeline**: Staged visual workflow showcasing construction phases (from pre-construction soil analysis to handovers) paired with compliance checklists.
6. **Robust Back-Office Estimation Hub (Admin Portal)**: Secure real-time client inquiry manager featuring state status selectors, custom Estimator notes, and portfolio potential valuation metrics.

---

## 🛠️ Tech Stack & Library Decoupling

The platform is designed with clean architecture and extreme performance metrics in mind:

* **Framework**: React 19 + TypeScript (type-safe schemas)
* **Build System**: Vite 6 (ultra-fast compilation and static asset delivery)
* **Styling**: Tailwind CSS v4 (with modern `@theme` design token definitions)
* **Animations**: Motion React (`framer-motion` lightweight transitions)
* **Icons**: Lucide React (vector-perfect display icons)
* **Persistence**: Sandbox browser LocalStorage with automatic mock database seeding (3 high-profile pre-populated tenders)

---

## 🚀 Local Installation & Developer Workflow

To boot the portal locally or deploy it to production container infrastructure, follow these instructions:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher is recommended).

### 1. Clone & Install Dependencies
```bash
# Navigate to the workspace directory
npm install
```

### 2. Launch Local Development Server
The server runs locally with full Hot Module Replacement support on the configured development port:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live portal.

### 3. Build & Compile for Production
Generates optimized, single-bundle chunks inside the `/dist` directory for static deployment or server rendering:
```bash
npm run build
```

---

## 📂 Project Directory Breakdown

```text
/
├── index.html            # Primary application entry point & font CDN links
├── metadata.json         # AI Studio Applet Configurations
├── package.json          # Node dependencies & automation scripts
├── src/
│   ├── App.tsx           # Primary layout state controller & local storage sync
│   ├── types.ts          # Strongly typed TypeScript interfaces (Project, Inquiry, etc.)
│   ├── data.ts           # Pre-seeded high-value portfolio projects & timelines
│   ├── index.css         # Global styles & custom Space Grotesk / Inter pairings
│   └── components/
│       ├── Navbar.tsx             # Interactive top banner & Admin Toggle
│       ├── Hero.tsx               # Big display headings and stats grids
│       ├── WhyChooseUs.tsx        # Core ISO certifications & material specs
│       ├── Services.tsx           # Tab-based interactive capabilities panel
│       ├── ProjectShowcase.tsx    # Filterable portfolio & modal detail views
│       ├── BeforeAfter.tsx        # Interactive transformation split-screen
│       ├── ConstructionProcess.tsx# Phase-gate workflow & compliance checklists
│       ├── QuoteRequest.tsx       # Secure RFP tender proposal form
│       ├── AdminDashboard.tsx     # Back-Office lead panel & estimator notes
│       └── Footer.tsx             # Regional offices & disclaimer layout
```

---

## 🌐 Netlify Deployment & Production Optimization

The project is fully pre-configured for **Netlify** continuous integration and deployment. It includes a custom `/netlify.toml` configuration to optimize performance and prevent routing issues.

### ⚙️ Production Settings (Auto-configured)
* **Build Command**: `npm run build`
* **Publish Directory**: `dist`
* **SPA Redirection**: Automatically translates wildcard client routes (`/*`) to `/index.html` (status `200`) so user reloads and custom deep links load flawlessly.
* **Performance Headers**: Enables custom `Cache-Control` headers:
  - Indefinite caching (`max-age=31536000, immutable`) for content-hashed assets generated by Vite in `/assets/*`.
  - Immediate revalidation (`max-age=0, must-revalidate`) for `index.html` to guarantee clients always load the latest build.

### 🚀 Deployment Instructions
To deploy this project to Netlify, choose one of the following methods:

#### Method 1: Continuous Deployment via GitHub (Recommended)
1. Push this codebase to a GitHub repository.
2. Log in to your [Netlify Dashboard](https://app.netlify.com/).
3. Click **Add new site** > **Import an existing project** > Choose **GitHub**.
4. Select your repository. Netlify will automatically detect the settings from `netlify.toml` (`npm run build` and `dist`).
5. Click **Deploy site**. Your site will build and be live in seconds! Any future pushes to your GitHub main branch will automatically trigger a new, optimized build.

#### Method 2: Manual Drag & Drop via Netlify CLI
If you prefer not to use a git provider, you can build and deploy manually using the Netlify CLI:
```bash
# 1. Install Netlify CLI globally (if not already installed)
npm install -g netlify-cli

# 2. Compile optimized production build
npm run build

# 3. Deploy manually (it will prompt you to select or create a site)
netlify deploy --dir=dist --prod
```

---

## 🔒 Security, Compliance & Disclaimers

* **No External Leaks**: No API keys are exposed to the client interface. 
* **Data Privacy**: Proposal data is isolated securely in the user's browser sandbox environment.
* **Standard Conformance**: All component styling conforms to standard accessibility color-contrast ratios, ensuring absolute visual readability on modern mobile and widescreen OLED monitors.
