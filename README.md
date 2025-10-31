# 🚀 Multi-Tenant SaaS Platform# Shadcn Admin Dashboard



A production-ready multi-tenant SaaS platform for POS, retail management, and business operations.Admin Dashboard UI crafted with Shadcn and Vite. Built with responsiveness and accessibility in mind.



![Multi-Tenant SaaS Platform](public/images/shadcn-admin.png)![alt text](public/images/shadcn-admin.png)



---I've been creating dashboard UIs at work and for my personal projects. I always wanted to make a reusable collection of dashboard UI for future projects; and here it is now. While I've created a few custom components, some of the code is directly adapted from ShadcnUI examples.



## 🙏 Credits & Acknowledgments> This is not a starter project (template) though. I'll probably make one in the future.



### Frontend Template## Features

Built upon **[Shadcn Admin](https://github.com/satnaing/shadcn-admin)** by **[Sat Naing](https://github.com/satnaing)**

- Light/dark mode

**Original Creator:** Sat Naing ([@satnaing](https://github.com/satnaing))  - Responsive

**Repo:** https://github.com/satnaing/shadcn-admin | **License:** MIT- Accessible

- With built-in Sidebar component

**Please support the original creator:**- Global search command

- ⭐ https://github.com/satnaing/shadcn-admin- 10+ pages

- ☕ https://buymeacoffee.com/satnaing- Extra custom components

- RTL support

---

<details>

## 📋 Overview<summary>Customized Components (click to expand)</summary>



Full-stack multi-tenant SaaS similar to Majoo and Moka POS:This project uses Shadcn UI components, but some have been slightly modified for better RTL (Right-to-Left) support and other improvements. These customized components differ from the original Shadcn UI versions.

- 💰 Point of Sale (POS) System

- 📦 Inventory & Stock ManagementIf you want to update components using the Shadcn CLI (e.g., `npx shadcn@latest add <component>`), it's generally safe for non-customized components. For the listed customized ones, you may need to manually merge changes to preserve the project's modifications and avoid overwriting RTL support or other updates.

- 🏢 Multi-Outlet Operations

- 👥 Staff & RBAC Management> If you don't require RTL support, you can safely update the 'RTL Updated Components' via the Shadcn CLI, as these changes are primarily for RTL compatibility. The 'Modified Components' may have other customizations to consider.

- 📊 Reports & Analytics

- 💳 Subscription & Billing### Modified Components



---- scroll-area

- sonner

## 🛠️ Tech Stack- separator



**Frontend:** React 19 • TypeScript • Vite • TailwindCSS • ShadcnUI • TanStack Router • Zustand  ### RTL Updated Components

**Backend:** NestJS 11 • PostgreSQL 16 • Prisma • JWT • Swagger  

**Hosting:** Railway (Backend) • Vercel/Netlify (Frontend)- alert-dialog

- calendar

---- command

- dialog

## 🏗️ Project Structure- dropdown-menu

- select

```- table

multi-tenant/- sheet

├── backend/          # NestJS API + PostgreSQL- sidebar

│   ├── src/          # Source code- switch

│   ├── prisma/       # Database schema

│   └── docs/         # API documentation**Notes:**

├── src/              # React Frontend (currently in root)

├── public/           # Static assets- **Modified Components**: These have general updates, potentially including RTL adjustments.

└── docs/             # Project docs- **RTL Updated Components**: These have specific changes for RTL language support (e.g., layout, positioning).

```- For implementation details, check the source files in `src/components/ui/`.

- All other Shadcn UI components in the project are standard and can be safely updated via the CLI.

---

</details>

## 🚀 Quick Start

## Tech Stack

### Backend

```bash**UI:** [ShadcnUI](https://ui.shadcn.com) (TailwindCSS + RadixUI)

cd backend

pnpm install**Build Tool:** [Vite](https://vitejs.dev/)

cp .env.example .env

pnpm prisma generate**Routing:** [TanStack Router](https://tanstack.com/router/latest)

pnpm prisma migrate dev

pnpm run start:dev**Type Checking:** [TypeScript](https://www.typescriptlang.org/)

```

Backend: `http://localhost:3000` | Docs: `http://localhost:3000/api/docs`**Linting/Formatting:** [Eslint](https://eslint.org/) & [Prettier](https://prettier.io/)



### Frontend**Icons:** [Lucide Icons](https://lucide.dev/icons/), [Tabler Icons](https://tabler.io/icons) (Brand icons only)

```bash

pnpm install**Auth (partial):** [Clerk](https://go.clerk.com/GttUAaK)

cp .env.example .env

pnpm run dev## Run Locally

```

Frontend: `http://localhost:5174`Clone the project



---```bash

  git clone https://github.com/satnaing/shadcn-admin.git

## 📚 Documentation```



- **[Backend README](./backend/README.md)** - NestJS backend guideGo to the project directory

- **[Railway Deployment](./backend/RAILWAY_DEPLOYMENT.md)** - Production deployment

- **Backend Repo:** https://github.com/reyvanevan/nestjs-multi-tenant-saas```bash

  cd shadcn-admin

**Generated JWT Secrets:**```

```

JWT_SECRET=Kux3abH4VA7Evq9wkGzNrS6WiMYyRtcJ1nf5dXLDIlTpsg8hUmOZo20jeQFPBCInstall dependencies

JWT_REFRESH_SECRET=Hr1c9yTMgo8PmSI6XNLRKV7EuseFAfzYdBJtw4v0CQhiq2anWOZjbp5xDkGUl3

``````bash

*(Use these for Railway deployment)*  pnpm install

```

---

Start the server

## 🎯 Features

```bash

**🔐 Auth:** JWT + Refresh Tokens • RBAC • Multi-level Permissions    pnpm run dev

**🏢 Multi-Tenant:** Path-based routing • Tenant isolation • Multi-outlet  ```

**💰 POS:** Transactions • Payments • Shifts • Receipts • Refunds  

**📦 Inventory:** Stock tracking • Alerts • Adjustments • Suppliers  ## Sponsoring this project ❤️

**📊 Reports:** Sales • Analytics • EOD • Exports (Excel/PDF)  

**💳 Billing:** Subscription plans • Usage-based • Trials • InvoicesIf you find this project helpful or use this in your own work, consider [sponsoring me](https://github.com/sponsors/satnaing) to support development and maintenance. You can [buy me a coffee](https://buymeacoffee.com/satnaing) as well. Don’t worry, every penny helps. Thank you! 🙏



---For questions or sponsorship inquiries, feel free to reach out at [contact@satnaing.dev](mailto:contact@satnaing.dev).



## 🗺️ Roadmap### Current Sponsor



**Phase 1 - MVP:** Super Admin • Tenant Dashboard • POS • Products • Reports  - [Clerk](https://go.clerk.com/GttUAaK) - for backing the implementation of Clerk in this project

**Phase 2 - Growth:** Customers • Loyalty • Advanced Analytics • Multi-currency  

**Phase 3 - Enterprise:** Payment Gateways • E-commerce Sync • White-label## Author



---Crafted with 🤍 by [@satnaing](https://github.com/satnaing)



## 👥 Team## License



**Reyvan Evan** - Lead Developer  Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)

**Aegner** - Frontend Developer  
**GitHub Copilot** - AI Assistant

---

## 📧 Contact

- GitHub: [@reyvanevan](https://github.com/reyvanevan)
- Issues: https://github.com/reyvanevan/multi-tenant/issues
- Backend: https://github.com/reyvanevan/nestjs-multi-tenant-saas

---

## 📄 License

MIT License - Includes code from [Shadcn Admin](https://github.com/satnaing/shadcn-admin) (also MIT)

---

## Features (from Shadcn Admin template)

- Light/dark mode
- Responsive
- Accessible
- Built-in Sidebar component
- Global search command
- 10+ pages
- Extra custom components
- RTL support

<details>
<summary>Customized Shadcn Components</summary>

**Modified:** scroll-area, sonner, separator  
**RTL Updated:** alert-dialog, calendar, command, dialog, dropdown-menu, select, table, sheet, sidebar, switch

For details, check `src/components/ui/`

</details>

---

**Built with ❤️ by the Multi-Tenant Team | October 31, 2025**

⭐ Star this repo | 🍴 Fork & contribute | 📢 Share with others
