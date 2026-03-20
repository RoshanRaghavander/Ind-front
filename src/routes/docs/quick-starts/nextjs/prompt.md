Goal: Add indobase auth to a new Next.js app (App Router), with a working login/register/logout page.

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

Respect user's package manager at all time. Don't use NPM if the user uses something else.

1. Create Next.js app
    - Run: npx create-next-app@latest my-app --use-npm --no-tailwind --eslint
    - Change dir: cd my-app
    - When prompted: TypeScript = No, ESLint = Yes, Tailwind = No, src dir = your choice, App Router = Yes, Import alias = No.

2. Install indobase SDK
    - Run: npm install indobase

3. Create indobase client module (ask user for details; never assume)
    - Ask the user for:
        - indobase Cloud Region (e.g. fra, nyc)
        - Project ID (from Console -> Settings)
          If the user doesn’t know, guide them to indobase Console to copy these. Do not attempt to infer or access their project.
    - Hardcode the endpoint and project ID in the file: app/indobase.js (or app/indobase.ts if TS) if provided, else leave placeholder and ask the user to provide them.
    - Create file: app/indobase.js (or app/indobase.ts if TS) with key snippet:
        ```js
        import { Client, Account } from 'appwrite';
        const endpoint = '';
        const projectId = '';
        if (!endpoint || !projectId) throw new Error('Missing indobase endpoint and project ID');
        export const client = new Client().setEndpoint(endpoint).setProject(projectId);
        export const account = new Account(client);
        export { ID } from 'appwrite';
        ```

4. Build the login page (client component)
    - Create/replace app/page.js with this component using "use client".
    - It must render:
        - Email/password inputs
        - Name input for registration
        - Buttons: Login, Register, Logout
        - Shows "Logged in as <name>" when a session exists
    - Implement functions:
        - login(email, password): account.createEmailPasswordSession({ email, password }) then set user via account.get()
        - register(): account.create({ userId: ID.unique(), email, password, name }) then call login
        - logout(): account.deleteSession({ sessionId: 'current' }) then clear user state

5. Verify environment (ask user to confirm)
    - Confirm with the user that the endpoint and project ID are hardcoded in the file: app/indobase.js (or app/indobase.ts if TS).
    - Ensure the Web app platform exists in indobase Console with Hostname = `localhost`. If missing, guide the user to add it.

6. Run and test
    - Run: npm run dev
    - Open: http://localhost:3000
    - Test flows:
        - Register a new user and auto login works
        - Logout then login again
    - Surface any indobase errors (invalid project, endpoint, CORS/hostname) and fix by guiding updates to indobase.js and Console settings.

7. Optional hardening
    - If the user wants TypeScript, create app/indobase.ts and app/page.tsx with proper types.
    - Add minimal styling if requested; functionality first.

Deliverables

- A running Next.js app with working indobase auth (register/login/logout)
- Files created/updated: package.json (deps), app/indobase.js, app/page.js
