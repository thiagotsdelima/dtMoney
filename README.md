# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Dt Money
is an application developed to facilitate the monitoring and management of transactions with cache and favorites.

## Object
The project involves creating an application using Vite and React with TypeScript. After configuring the environment, several dependencies are installed, including styled-components, eslint and axios. Styling is organized with global styles and font definition. Components start with the Header and are organized into specific folders. To ensure accessibility, libraries such as ariakit and RADIX-UI are recommended. Integration with a local API is done using JSON Server, and HTTP requests are made with fetch and axios. A global context is created to share information between components, such as transactions. Custom hooks are designed for shared logic, such as transaction summary calculation. Form management is done with react-hook-form and zod for data validation, including searching and creating transactions. Backend integration is configured to update the list of transactions after creating a new one. Finally, ESLint is configured to ensure good code practices, with automatic fixing of issues using lint:fix.

## Functionalities
Styling
Accessibility
API Integration
Global Context
Custom Hooks
Forms
Backend Integration
Linting

<img src="/src/assets/ReactDevTools1.png" alt="" width="40%">

## Technology

⚡️ React + Vite
⚡️ phosphor-react
⚡️ react-hook-form
⚡️ HTML/CSS
⚡️ axios
⚡️ use-context-selector
⚡️ react-dom
⚡️ react-icons
⚡️ scheduler
⚡️ zod
⚡️ eslint
⚡️ json-server
⚡️ typescript
⚡️ memo
⚡️ useMemo



## Installation

### Dependencies

To start working with the "DT Money" project, follow these installation steps:

1. **Project Creation with Vite:**

  To create a new project using Vite, run the following command in the terminal:

   ```bash
   npm create vite@latest
   

### Installing Project Dependencies

After the project is created, go to the newly created directory and install the necessary dependencies:

Install my-project with npm

```bash
  cd my-project
  * git clone https://github.com/thiagotsdelima/dtMoney.git

  * npm install
    npm install styled-components
    npm install react-icons --save
    npm install react-router-dom

   information:
  * git config --list
  * git status
  * git diff

    execução: 
  * npm run dev
  * npm run lint
  * npm run lint:fix
```
  
 [LinkedIn](https://www.linkedin.com/in/thiago-sombra-8a875b137/)
 [Twitter](https://twitter.com/thiagotsdelima)
 [GitHub](https://github.com/thiagotsdelima)


