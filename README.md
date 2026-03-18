# Next.js 15 Fullstack Data Architecture & Task Manager

A comprehensive demonstration of modern web development patterns using **Next.js 15**, **React 19**, and **TypeScript**. This project serves as a technical showcase of different data-fetching strategies, authentication flows, and clean architectural principles.

---

## 🛠 Tech Stack
* **Framework:** Next.js 15 (App Router)
* **Library:** React 19
* **Language:** TypeScript (Strict Mode)
* **Authentication:** NextAuth.js
* **Styling:** Tailwind CSS & SCSS (BEM Methodology)
* **State Management:** React Context & Hooks

---

## Key Technical Showcases

### 1. Advanced Data Fetching Strategies
The core of this project is a comparison of how data flows between the client and the server in an App Router environment. I have implemented three distinct routes to demonstrate this:

* **API from Client (`/api-from-client`):** Standard React approach using `useEffect` and `fetch`. It demonstrates how the browser automatically handles session cookies for authentication.
* **API from Server (`/api-from-server`):** A deep dive into server-side `node-fetch`. This route showcases the manual forwarding of `cookies` from the incoming request to internal API routes using `next/headers`.
* **Server Actions (`/server-action`):** Implementation of the latest React 19 pattern for direct RPC (Remote Procedure Call). This demonstrates a modern way to handle server-side logic without traditional REST endpoints.

### 2. Feature-Based Architecture (Colocation)
To ensure scalability and maintainability, the project follows the **Colocation** principle:
* **Global Components:** Shared UI elements like `NavMenu` and `AuthButtons` are located in the root `/components` directory.
* **Isolated Features:** The **Todo Application** is fully encapsulated within `/app/todos`, containing its own dedicated components, SCSS modules, and types. This prevents global namespace pollution and makes features modular.

### 3. Professional Todo Application (Deep Dive)
The Todo feature is designed to show attention to detail in both logic and styling:
* **Component Decomposition:** Broken down into `TodoHeader`, `TodoList`, `TodoItem`, and `TodoFooter` to adhere to the **Single Responsibility Principle**.
* **Advanced Styling:** Built with **SCSS** to handle complex visual effects (like the "paper stack" layers) using pseudo-elements, seamlessly integrated with **Tailwind CSS** for layout.
* **UX Optimization:** Utilizes `useTransition` for Server Actions to provide non-blocking UI updates and clear loading states.

---

## Project Structure Highlights

* `app/api/` — REST API Route Handlers and NextAuth configuration.
* `app/todos/` — Modular feature directory (Component-level colocation).
* `components/` — Global shared UI components (Navigation, Providers).
* `constants/` — Centralized configuration (e.g., `navigation.ts`) to avoid "magic strings".

---

## Authentication & Security

* Implemented **Protected Routes** with server-side session validation.
* Demonstrates secure handling of user data across both Client and Server components.
* Clean integration of `SessionProvider` for client-side auth state access.

---

## Getting Started

### 1. Clone the repository
```bash
git clone (https://github.com/dianakerekesha/your-repo-name.git)


