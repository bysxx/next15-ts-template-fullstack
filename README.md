# Next.js 15 Fullstack Template

A feature-rich, production-ready template for building full-stack applications with Next.js 15 and TypeScript.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Query](https://img.shields.io/badge/-React%20Query-FF4154?logo=react-query&logoColor=white)](https://tanstack.com/query/latest)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-black?logo=next.js&logoColor=white)](https://next-auth.js.org/)

> This template is designed to kickstart your next full-stack project, providing a solid foundation with modern technologies and best practices. It includes everything you need from authentication to data fetching and styling.

## ✨ Features

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Authentication**: [NextAuth.js](https://next-auth.js.org/) for robust and easy-to-implement authentication.
-   **Database**: Integrated with [MongoDB](https://www.mongodb.com/) using `@auth/mongodb-adapter`.
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) for a utility-first CSS framework.
-   **Data Fetching**: [TanStack Query (React Query) v5](https://tanstack.com/query/latest) for server-state management.
-   **State Management**: [Zustand](https://github.com/pmndrs/zustand) for minimal and boilerplate-free client-side state management.
-   **Linting & Formatting**: [Biome](https://biomejs.dev/) for fast and comprehensive code linting and formatting.
-   **Testing**: [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/) for unit and component testing.
-   **Package Manager**: Uses `pnpm` for efficient package management.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18.0.0 or higher)
-   [pnpm](https://pnpm.io/installation)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/bysxx/next13-ts-template-fullstack.git
    cd next13-ts-template-fullstack
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the necessary environment variables.
    ```env
    # Auth
    NEXTAUTH_SECRET= # openssl rand -hex 32
    NEXTAUTH_URL=http://localhost:3000

    # MongoDB
    MONGODB_URI= # Your MongoDB connection string

    # Kakao OAuth
    KAKAO_CLIENT_ID=
    KAKAO_CLIENT_SECRET=
    ```

4.  **Run the development server:**
    ```bash
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

In the project directory, you can run:

-   `pnpm dev`: Runs the app in development mode.
-   `pnpm build`: Builds the app for production.
-   `pnpm start`: Starts a production server.
-   `pnpm lint`: Lints the code using Biome.
-   `pnpm format`: Formats the code using Biome.
-   `pnpm check`: Runs Biome linter and formatter.
-   `pnpm check:fix`: Fixes linting and formatting errors automatically.
-   `pnpm type`: Runs the TypeScript compiler to check for type errors.
-   `pnpm test`: Runs the test suite using Jest.

## 🛠️ Tech Stack

-   **Frontend**: React 19, Next.js 15
-   **Backend**: Next.js API Routes
-   **Database**: MongoDB
-   **Authentication**: NextAuth.js
-   **Styling**: Tailwind CSS
-   **Data Fetching**: TanStack Query (React Query)
-   **State Management**: Zustand
-   **Tooling**: TypeScript, Biome, Jest, pnpm

## 📄 License

This project is licensed under the MIT License - see the [license.md](license.md) file for details.

## 🧑‍💻 Author

-   **bysxx** - [GitHub](https://github.com/bysxx)
