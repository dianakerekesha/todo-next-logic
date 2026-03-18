# Next.js 15 Data Architecture & Todo

A technical showcase of **Next.js 15 (App Router)** and **React 19**, focusing on modular architecture, server-side data fetching, and modern UI patterns.
** [Live Demo](https://todo-next-logic.vercel.app/)**
---

## 🛠 Tech Stack
* **Framework:** Next.js 15 (App Router) | React 19
* **Auth:** NextAuth.js (Server/Client session handling)
* **Styling:** SCSS (BEM) + Tailwind CSS
* **Core:** TypeScript (Strict), Server Actions, Hooks

---

## Key Technical Features

### 1. Data Flow Patterns
The project demonstrates three distinct ways to handle data:
* **Client-side Fetching:** Standard `useEffect` + `fetch` for dynamic updates.
* **Server-side Fetching:** Secure `node-fetch` with manual cookie forwarding via `next/headers`.
* **Server Actions:** React 19 RPC pattern for direct server-side execution without API endpoints.

### 2. Modular Architecture (Colocation)
* **Encapsulation:** The Todo app is isolated in `/app/todos`, grouping components, styles (SCSS), and types together for better maintainability.
* **UI/UX:** Complex "paper-stack" effects via SCSS pseudo-elements and smooth updates using `useTransition`.

### 3. Security & Clean Code
* **Protected Routes:** Server-side session validation and middleware-ready structure.
* **Decomposition:** Adhering to **SOLID** by breaking features into small, single-responsibility components.
* **Constants:** Centralized configuration to eliminate "magic strings".

---

## Getting Started

### 1. Installation
```bash
git clone [https://github.com/dianakerekesha/todo-next-logic.git](https://github.com/dianakerekesha/todo-next-logic.git)
cd todo-next-logic
npm install

2. Setup Environment
Create a .env.local file in the root directory and add:

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=any_random_string_here

GITHUB_ID=your_id
GITHUB_SECRET=your_secret

3. Run Development Server
Bash
npm run dev

© 2026 Diana Kerekesha