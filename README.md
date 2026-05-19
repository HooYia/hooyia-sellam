# 🚀 Welcome to Hooyia Sellam: React Developer Workshop

Welcome to **Hooyia Sellam** (호이야 셀람), our company-wide hands-on learning project! This repository has been initialized with our core tech stack, build tools, and configuration baselines. 

The primary goal of this project is **not just to build an application, but to provide an absolute, code-driven learning environment for mastering modern React**. By working together on a practical, feature-rich e-commerce engine, every developer in the company will get direct experience handling state, component design patterns, client-side routing, and modern CSS architectures.

---

## 🎯 Our Learning Objectives

Through building *Hooyia Sellam*, you will actively learn and apply:
1. **Component Architecture & Composition:** Writing atomic, reusable UI blocks and layout wrappers.
2. **State Management Lifecycles:** Managing local state (`useState`), side-effects (`useEffect`), and global reactive data pipes (`useContext`).
3. **Dynamic Routing:** Designing single-page application (SPA) paths, route guards, and URL parameters with React Router.
4. **Performance & Clean Code:** Writing declarative JSX, managing standard hooks efficiently, and using styling utilities without bloat.

---

## 🛠️ The Tech Stack

We chose a lean, modern frontend stack designed for maximum developer speed, safety, and performance:

* **⚡ Vite:** Our lightning-fast frontend build tool and dev server. Bye-bye, sluggish compilation.
* **⚛️ React:** Our declarative, component-based UI powerhouse.
* **🎨 Tailwind CSS:** A utility-first CSS framework for rapid styling directly inside your markup.
* **🧭 React Router (v6+):** Declarative, client-side routing to manage application views smoothly.
* **🛡️ Lucide React:** Clean, consistent, and fully customizable open-source vector icon sets.

---

## 📂 Project Architecture Blueprint

To ensure a seamless parallel workflow without breaking each other's code or constantly running into painful git merge conflicts, we will be implementing a strict **feature-and-component-centric** directory layout. 

> ⚠️ **IMPORTANT:** The initial repository boilerplate has been generated, but the core directories inside `src/` are **not yet created**. Your first contribution or task branch will likely involve setting up or populating these directories as needed!

Please organize all future files according to the following layout plan:

```text
src/
├── assets/          # Static media assets: images, brand logos, custom global fonts
├── components/      # Reusable, atomic global UI elements (e.g., Buttons, Badges, Modals, Inputs)
├── context/         # Global state providers (e.g., CartContext, AuthContext)
├── data/            # Local static mock datasets (e.g., mock products JSON arrays)
├── hooks/           # Custom, reusable standalone React Hooks (e.g., useLocalStorage, useFetch)
├── layouts/         # Shared multi-page layout shells (e.g., MainLayout containing Navbar and Footer)
├── pages/           # High-level view components mapped directly to routes
│   ├── Home.jsx           # Landing page featuring hero spaces and featured shelves
│   ├── ProductDetails.jsx # Granular item pages with descriptions and add-to-cart controls
│   ├── Cart.jsx           # Line item summaries, quantity adjustment fields, and pricing matrices
│   └── Checkout.jsx       # Forms for shipping, billing, and transactional confirmation summaries
├── routes/          # Centralized route definition matrices and authentication guards
├── utils/           # Shared stateless helper functions (e.g., currency formatters, date parsers)
├── App.jsx          # Root application layout wrapping providers, global contexts, and routers
└── main.jsx         # Absolute application mount point attaching React to the DOM index target
```

## 🚀 Setting Up Locally
Follow these quick commands to spin up the codebase on your local machine:


1. **Clone & Install Dependencies**
First, clone the repository down to your working directory and execute a clean package install[cite:1]:

```
# Clone the repository (replace with your accurate SSH/HTTPS URI)
git clone <repository-url>
cd hooyia-sellam

# Install all locked package dependencies
npm install
```


2. **Run the Development Server**
Boot up Vite's lightning-fast local development engine:

```
npm run dev

```
Once executed, look at your terminal output and cmd-click/open the local loopback address (usually http://localhost:5173) to view the empty application shell.

3. **Maintain Code Quality & Style**
To prevent formatting discrepancies and ensure beautiful git diffs, we have bundled Prettier directly into our dependencies. Please make sure your code editor (e.g., VS Code) is configured to Format on Save utilizing the workspace's .prettierrc parameters.

## 🗺️ Developer Roadmap & Feature Assignments
To keep the collaborative process smooth, the Hooyia Sellam platform has been split into independent operational milestones. Teams and individuals can pick up tasks matching these distinct milestones[cite: 1]:

**🧱 Phase 1:** Foundations & Layout Shells
The Shared Layout: Building out the MainLayout shell incorporating a responsive Navbar (complete with a real-time reactive cart icon badge) and a global Footer[cite: 1].

Static Assets & Setup: Injecting brand materials into /assets and establishing basic theme layouts[cite: 1].

**🍱 Phase 2:** Product Catalogs & Component Assembly
The Product Card: Drafting a beautiful, accessible product showcase card utilizing Tailwind CSS and lucide-react status nodes[cite: 1].

The Grid Shelf: Building a dynamic product display grid on the Home page that reads and maps from a standard mock data configuration payload[cite: 1].

**🌊 Phase 3:** Global State (The Shopping Cart Engine)
Context Setup: Generating the global React Context layer within src/context/CartContext.jsx[cite: 1].

State Reducers/Hooks: Exposing reactive functions to standard elements globally: addToCart(), removeFromCart(), updateQuantity(), and a computed cartTotal[cite: 1].

The Dynamic Drawer/Page: Connecting the Cart page directly to this context to review, add, or clear item entries in real-time[cite: 1].

**🧭 Phase 4:** Dynamic Client-Side Routing
Route Binding: Constructing dynamic router paths inside App.jsx mapping custom routes (e.g., /product/:id)[cite: 1].

Navigation Triggers: Replacing static HTML anchor items with react-router-dom's <Link> and useNavigate controllers to ensure zero page-refresh performance[cite: 1].

## 🤝 Collaboration Guidelines

1. **Feature Branches**: Never commit anything directly to the main production branch[cite: 1]. Always cut a descriptive feature branch off of the latest upstream code[cite: 1]:

```
git checkout -b feature/your-name/feature-description
```

2. **Atomic Commits:** Keep your commits descriptive, small, and isolated to the specific UI block or hook logic you are tackling[cite: 1].
3. **Pull Request Peer Reviews:** When your feature is polished, open a Pull Request (PR) against the main branch[cite: 1]. Let's use this as an active arena to comment on clean code patterns, ask architectural questions, and learn from one another's solutions[cite: 1]!

***

Let's build something incredible together. Welcome aboard, ask lots of questions in our shared spaces, and let's master React together through **Hooyia Sellam**! 💻🚀# hooyia-sellam
