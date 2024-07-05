import { Ifile } from "../interfaces";
import { v1 as uuid } from 'uuid';

export const fileTree: Ifile = {
  id: uuid(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: false,
          content: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
`,

        },
      ],
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [{
        id: uuid(),
        name: "index.html",
        isFolder: false,
        content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`

      }]
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),

              name: "Navbar.tsx",
              isFolder: false,
              content: `import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='bg-black max-w-full mx-12 px-7 py-5 rounded-md bg-third'>
            <ul className='flex justify-between'>
                <li className='font-semibold text-lg hover:text-forth duration-200'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="">
                    <div className='flex space-x-3'>
                        <button className='font-semibold text-lg '>
                            <NavLink className="hover:text-forth duration-200" to={"/register"}>Register</NavLink>
                        </button>
                        <button className='font-semibold text-lg'>
                            <NavLink className="hover:text-forth duration-200" to={"/login"}>Login</NavLink>
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;`,

            },
            {
              id: uuid(),

              name: "Footer.tsx",
              isFolder: false,
              content: `import React from 'react';

function Footer() {
    return (
        <footer className=" text-footer flex flex-col justify-center items-center">
            <p className='text-sm'>Talk is chat website</p>
            <p className='text-xs'>Devloped by <a className='underline' target="_blank" href="https://www.linkedin.com/in/mohamed-sayed-66a225240/">Muhammed</a></p>
        </footer>
    );
}

export default Footer;`,

            }
          ]
        },
        {
          id: uuid(),

          name: "styles",
          isFolder: true,
          children: [
            {
              id: uuid(),

              name: "Styles.css",
              isFolder: false,
              content: `@tailwind base;
@tailwind components;
@tailwind utilities;

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #0f0f0f;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`,
            }
          ]
        }
      ]
    }
  ]
}
